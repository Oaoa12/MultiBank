"use client";
import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ActionIcon, 
  Textarea, 
  Button, 
  Paper, 
  Text, 
  ScrollArea, 
  Group, 
  Stack,
  Loader,
  Box,
  Badge
} from '@mantine/core';
import { 
  IconMessageCircle, 
  IconX, 
  IconMinus, 
  IconMaximize,
  IconSend,
  IconRobot,
  IconUser
} from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  useGetFinancialAdviceMutation,
  useGetRecommendationsQuery,
  useMarkRecommendationAsReadMutation,
  useDeleteAllRecommendationsMutation,
  type Recommendation
} from '@/lib/store/api/AiApi';
import { notifications } from '@mantine/notifications';
import classes from './AiChat.module.css';
import { useGetCurrentUserQuery } from '@/lib/store/api/UserApi';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  recommendationId?: number;
  isRead?: boolean;
}

const STORAGE_KEY = 'ai-chat-history';

export function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [getFinancialAdvice] = useGetFinancialAdviceMutation();
  const [markAsRead] = useMarkRecommendationAsReadMutation();
  const [deleteAllRecommendations] = useDeleteAllRecommendationsMutation();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollViewportRef = useRef<HTMLDivElement>(null);
  const readMessagesRef = useRef<Set<number>>(new Set());
  const [isClearing, setIsClearing] = useState(false);
  
  // Check if user is authenticated
  const { isSuccess: isAuthenticated } = useGetCurrentUserQuery();
  
  // Load recommendations from API (always when authenticated, to show unread count)
  const { data: recommendations, refetch: refetchRecommendations } = useGetRecommendationsQuery(
    undefined,
    { skip: !isAuthenticated }
  );

  // Convert recommendations to chat messages
  const convertRecommendationsToMessages = useCallback((recs: Recommendation[]): ChatMessage[] => {
    return recs
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
      .map((rec) => ({
        id: `rec-${rec.id}`,
        role: 'assistant' as const,
        content: rec.content,
        timestamp: new Date(rec.createdAt),
        recommendationId: rec.id,
        isRead: rec.isRead,
      }));
  }, []);

  // Load user questions from localStorage (only user messages, not AI responses)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const userMessages = parsed
          .filter((msg: any) => msg.role === 'user')
          .map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }));
        setMessages((prev) => {
          // Merge with recommendations, but keep user messages from localStorage
          const existingIds = new Set(prev.map(m => m.id));
          return [...prev, ...userMessages.filter((m: ChatMessage) => !existingIds.has(m.id))];
        });
      }
    } catch (error) {
      console.error('Failed to load chat history:', error);
    }
  }, []);

  // Load recommendations when authenticated (for unread count and chat history)
  useEffect(() => {
    if (isAuthenticated && recommendations) {
      const recMessages = convertRecommendationsToMessages(recommendations);
      setMessages((prev) => {
        // Create a map of existing messages by recommendationId (for assistant messages)
        // and by id (for all messages)
        const existingById = new Map(prev.map(m => [m.id, m]));
        const existingByRecId = new Map<number, ChatMessage>();
        prev.forEach(m => {
          if (m.recommendationId) {
            existingByRecId.set(m.recommendationId, m);
          }
        });

        // Filter out recommendations that already exist
        const newRecMessages = recMessages.filter(m => 
          !existingById.has(m.id) && 
          (!m.recommendationId || !existingByRecId.has(m.recommendationId))
        );
        
        // Update existing recommendations with latest data (e.g., isRead status)
        const updated = prev.map(m => {
          if (m.recommendationId) {
            const rec = recommendations.find(r => r.id === m.recommendationId);
            if (rec) {
              return { ...m, isRead: rec.isRead, content: rec.content };
            }
          }
          return m;
        });
        
        // Combine and sort by timestamp
        const combined = [...updated, ...newRecMessages];
        return combined.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
      });
    }
  }, [isAuthenticated, recommendations, convertRecommendationsToMessages]);

  // Calculate unread count
  const unreadCount = messages.filter(
    msg => msg.role === 'assistant' && !msg.isRead && msg.recommendationId
  ).length;

  // Save only user messages to localStorage
  useEffect(() => {
    const userMessages = messages.filter(msg => msg.role === 'user');
    if (userMessages.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userMessages));
      } catch (error) {
        console.error('Failed to save chat history:', error);
      }
    }
  }, [messages]);

  // Handle scroll to mark messages as read
  useEffect(() => {
    if (!scrollViewportRef.current || !isAuthenticated || !isOpen) return;

    const viewport = scrollViewportRef.current;
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Debounce scroll events
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollTop = viewport.scrollTop;
        const clientHeight = viewport.clientHeight;
        const scrollHeight = viewport.scrollHeight;

        // Check if scrolled to bottom (with 50px threshold)
        if (scrollHeight - scrollTop - clientHeight < 50) {
          // Find unread messages with recommendationId
          const unreadMessages = messages.filter(
            msg => msg.role === 'assistant' && 
            msg.recommendationId && 
            !msg.isRead &&
            !readMessagesRef.current.has(msg.recommendationId)
          );

          // Mark all visible unread messages as read
          if (unreadMessages.length > 0) {
            Promise.all(
              unreadMessages.map(async (msg) => {
                if (msg.recommendationId && !readMessagesRef.current.has(msg.recommendationId)) {
                  readMessagesRef.current.add(msg.recommendationId);
                  try {
                    await markAsRead(msg.recommendationId).unwrap();
                    return msg.id;
                  } catch (error) {
                    console.error('Failed to mark message as read:', error);
                    readMessagesRef.current.delete(msg.recommendationId);
                    return null;
                  }
                }
                return null;
              })
            ).then((markedIds) => {
              // Update messages that were successfully marked as read
              const successIds = markedIds.filter(id => id !== null) as string[];
              if (successIds.length > 0) {
                setMessages((prev) =>
                  prev.map((m) =>
                    successIds.includes(m.id) ? { ...m, isRead: true } : m
                  )
                );
                // Refetch recommendations to update the list
                refetchRecommendations();
              }
            });
          }
        }
      }, 300); // 300ms debounce
    };

    viewport.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(scrollTimeout);
      viewport.removeEventListener('scroll', handleScroll);
    };
  }, [messages, isAuthenticated, isOpen, markAsRead, refetchRecommendations]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || !isAuthenticated) {
      if (!isAuthenticated) {
        notifications.show({
          color: 'yellow',
          title: 'Требуется авторизация',
          message: 'Пожалуйста, войдите в систему для использования Ивана Банкова',
        });
      }
      return;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const prompt = input.trim();
    setInput('');
    setIsLoading(true);

    try {
      const response = await getFinancialAdvice({ prompt }).unwrap();
      
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: response.advice || 'Извините, не удалось получить ответ.',
        timestamp: new Date(),
        recommendationId: response.recommendationId,
        isRead: false, // New messages are unread by default
      };

      setMessages((prev) => [...prev, assistantMessage]);
      
      // Refetch recommendations to get updated list
      refetchRecommendations();
    } catch (error: any) {
      console.error('Error getting financial advice:', error);
      
      let errorMessage = 'Не удалось получить финансовый совет';
      let showInChat = false;
      
      // Если есть сообщение от сервера, используем его
      if (error?.data?.message) {
        errorMessage = error.data.message;
        // Показываем сообщение в чате, если это бизнес-логика (например, нет транзакций)
        showInChat = true;
      } else if (error?.status === 401) {
        errorMessage = 'Требуется авторизация. Пожалуйста, войдите в систему.';
      } else if (error?.status === 404 && !error?.data?.message) {
        // Только если это настоящая 404 без сообщения
        errorMessage = 'Эндпоинт не найден. Убедитесь, что сервер запущен и перезапустите dev сервер.';
      } else if (error?.status === 500) {
        errorMessage = 'Ошибка сервера. Попробуйте позже.';
        showInChat = true;
      }

      // Показываем уведомление
      notifications.show({
        color: error?.status === 404 && error?.data?.message ? 'yellow' : 'red',
        title: error?.status === 404 && error?.data?.message ? 'Информация' : 'Ошибка',
        message: errorMessage,
      });
      
      // Показываем сообщение в чате, если это бизнес-логика или ошибка сервера
      if (showInChat || (error?.status !== 401 && error?.status !== 404)) {
        const errorMsg: ChatMessage = {
          id: `error-${Date.now()}`,
          role: 'assistant',
          content: errorMessage,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, errorMsg]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = async () => {
    if (isClearing) return;
    if (!isAuthenticated) {
      setMessages([]);
      localStorage.removeItem(STORAGE_KEY);
      notifications.show({
        color: 'blue',
        title: 'История очищена',
        message: 'Локальная история чата была удалена',
      });
      return;
    }

    try {
      setIsClearing(true);
      // Optimistic UI: clear assistant messages immediately
      setMessages((prev) => prev.filter(msg => msg.role === 'user'));
      await deleteAllRecommendations().unwrap();
      localStorage.removeItem(STORAGE_KEY);
      notifications.show({
        color: 'blue',
        title: 'История очищена',
        message: 'Все советы были удалены',
      });
      refetchRecommendations();
    } catch (error: any) {
      notifications.show({
        color: 'red',
        title: 'Ошибка',
        message: error?.data?.message || 'Не удалось удалить рекомендации',
      });
      // Подтянем актуальное состояние с сервера
      refetchRecommendations();
    } finally {
      setIsClearing(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Bubble Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={classes.bubbleContainer}
          >
            <ActionIcon
              size={60}
              radius="xl"
              variant="gradient"
              gradient={{ from: '#1e3a8a', to: '#3b82f6' }}
              onClick={() => setIsOpen(true)}
              className={classes.bubble}
              style={{ position: 'relative' }}
            >
              <IconMessageCircle size={28} />
              {unreadCount > 0 && isAuthenticated && (
                <Badge
                  size="lg"
                  circle
                  color="red"
                  variant="filled"
                  style={{
                    position: 'absolute',
                    top: -4,
                    right: -4,
                    minWidth: 24,
                    height: 24,
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {unreadCount > 9 ? '9+' : unreadCount}
                </Badge>
              )}
            </ActionIcon>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classes.modalOverlay}
            onClick={() => !isMinimized && setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20, opacity: 0 }}
              animate={{ 
                scale: isMinimized ? 0.95 : 1,
                y: isMinimized ? 40 : 0,
                opacity: 1,
              }}
              exit={{ scale: 0.8, y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className={classes.modalContent}
            >
              <Paper
                shadow="xl"
                radius="md"
                className={classes.chatPaper}
                style={{ height: isMinimized ? 'auto' : '600px', minHeight: isMinimized ? 'auto' : '600px' }}
              >
                {/* Header */}
                <Group justify="space-between" p="md" className={classes.chatHeader}>
                  <Group gap="xs">
                    <IconRobot size={24} color="#1e3a8a" />
                    <div>
                      <Text fw={600} size="lg">Иван Банков</Text>
                      <Text size="xs" c="dimmed">Ai agent</Text>
                    </div>
                  </Group>
                  <Group gap="xs">
                    {!isMinimized && messages.length > 0 && (
                      <Button
                        size="xs"
                        variant="subtle"
                        onClick={handleClearHistory}
                        disabled={isClearing}
                      >
                        Очистить
                      </Button>
                    )}
                    <ActionIcon
                      variant="subtle"
                      onClick={() => setIsMinimized(!isMinimized)}
                      title={isMinimized ? 'Развернуть' : 'Свернуть'}
                    >
                      {isMinimized ? <IconMaximize size={18} /> : <IconMinus size={18} />}
                    </ActionIcon>
                    <ActionIcon
                      variant="subtle"
                      onClick={() => setIsOpen(false)}
                    >
                      <IconX size={18} />
                    </ActionIcon>
                  </Group>
                </Group>

                {!isMinimized && (
                  <>
                    {/* Messages Area */}
                    <ScrollArea 
                      h={400} 
                      p="md" 
                      ref={scrollAreaRef}
                      viewportRef={scrollViewportRef}
                      className={classes.messagesArea}
                    >
                      <Stack gap="md">
                        {messages.length === 0 ? (
                          <Box ta="center" py="xl">
                            <IconRobot size={48} color="#1e3a8a" style={{ opacity: 0.3 }} />
                            <Text c="dimmed" mt="md">
                              {isAuthenticated 
                                ? 'Задайте вопрос о финансах, и я помогу вам!'
                                : 'Войдите в систему, чтобы использовать Ивана Банкова'}
                            </Text>
                          </Box>
                        ) : (
                          messages.map((message) => (
                            <motion.div
                              key={message.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Group
                                align="flex-start"
                                gap="sm"
                                style={{
                                  flexDirection: message.role === 'user' ? 'row-reverse' : 'row',
                                }}
                              >
                                <Paper
                                  p="md"
                                  radius="md"
                                  style={{
                                    maxWidth: '80%',
                                    background:
                                      message.role === 'user'
                                        ? 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'
                                        : undefined,
                                    color: message.role === 'user' ? 'white' : 'inherit',
                                    border: message.role === 'assistant' && !message.isRead ? '2px solid #3b82f6' : undefined,
                                  }}
                                  bg={message.role === 'user' ? undefined : 'gray.1'}
                                >
                                  <Group gap="xs" mb="xs" justify="space-between">
                                    <Group gap="xs">
                                      {message.role === 'user' ? (
                                        <IconUser size={16} />
                                      ) : (
                                        <IconRobot size={16} />
                                      )}
                                      <Text size="xs" fw={500}>
                                        {message.role === 'user' ? 'Вы' : 'Иван Банков'}
                                      </Text>
                                    </Group>
                                    {message.role === 'assistant' && !message.isRead && (
                                      <Badge size="xs" color="blue" variant="light">
                                        Новое
                                      </Badge>
                                    )}
                                  </Group>
                                  <Text size="sm" style={{ whiteSpace: 'pre-wrap' }}>
                                    {message.content}
                                  </Text>
                                </Paper>
                              </Group>
                            </motion.div>
                          ))
                        )}
                        {isLoading && (
                          <Group align="flex-start" gap="sm">
                            <Paper p="md" radius="md" bg="gray.1">
                              <Group gap="xs">
                                <Loader size="sm" />
                                <Text size="sm" c="dimmed">Думаю...</Text>
                              </Group>
                            </Paper>
                          </Group>
                        )}
                        <div ref={messagesEndRef} />
                      </Stack>
                    </ScrollArea>

                    {/* Input Area */}
                    <Box p="md" className={classes.inputArea}>
                      <Group gap="sm" align="flex-end">
                        <Textarea
                          placeholder={isAuthenticated ? "Задайте вопрос о финансах..." : "Войдите в систему для использования"}
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onKeyDown={handleKeyPress}
                          minRows={1}
                          maxRows={4}
                          autosize
                          style={{ flex: 1 }}
                          disabled={isLoading || !isAuthenticated}
                        />
                        <Button
                          onClick={handleSend}
                          disabled={!input.trim() || isLoading || !isAuthenticated}
                          variant="gradient"
                          gradient={{ from: '#1e3a8a', to: '#3b82f6' }}
                          leftSection={<IconSend size={18} />}
                        >
                          Отправить
                        </Button>
                      </Group>
                    </Box>
                  </>
                )}
              </Paper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

