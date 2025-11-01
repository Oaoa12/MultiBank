'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Grid,
  Card,
  Text,
  Avatar,
  Group,
  Stack,
  Badge,
  Button,
  SimpleGrid,
  Paper,
  Title,
  ActionIcon,
  Menu,
  Modal,
  TextInput,
  Select,
  Alert,
  Loader,
  Center,
} from '@mantine/core';
import {
  IconUser,
  IconSettings,
  IconChartBar,
  IconBell,
  IconDots,
  IconLogout,
  IconHistory,
  IconUpload,
  IconAlertCircle,
} from '@tabler/icons-react';
import { useProfile } from '@/lib/hooks/useProfile';
import { useLogoutMutation } from '@/lib/store/api/AuthApi';
import { userApi } from '@/lib/store/api/UserApi';
import { authApi } from '@/lib/store/api/AuthApi';
import { useDispatch } from 'react-redux';
import AnalyticsSection from './AnalyticsSection';

const PAGE_STYLES = {
  background: 'linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)',
  cardBackground: 'rgba(255, 255, 255, 0.8)',
  paperBackground: '#f5f6f7',
  buttonBlue: '#1E90FF',
  successGreen: '#28a745',
} as const;

const TRANSACTION_STATUS_COLORS = {
  Успешно: 'green',
  'В обработке': 'orange',
  Отменено: 'red',
} as const;

const TRANSACTIONS_DATA = [
  { day: 15, month: 'янв', name: 'Пополнение счета', category: 'Переводы', status: 'Успешно', amount: '+₽ 5,000' },
  { day: 12, month: 'янв', name: 'Магнит', category: 'Супермаркеты', status: 'Успешно', amount: '-₽ 1,250' },
  { day: 10, month: 'янв', name: 'Перевод между счетами', category: 'Переводы', status: 'В обработке', amount: '₽ 3,000' },
] as const;

const GENDER_OPTIONS = [
  { value: 'MALE', label: 'Мужской' },
  { value: 'FEMALE', label: 'Женский' },
] as const;

interface Transaction {
  day: number;
  month: string;
  name: string;
  category: string;
  status: keyof typeof TRANSACTION_STATUS_COLORS | string;
  amount: string;
}

const getStatusColor = (status: string): string => {
  return TRANSACTION_STATUS_COLORS[status as keyof typeof TRANSACTION_STATUS_COLORS] || 'gray';
};

export default function ProfilePage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: true,
    security: true,
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editError, setEditError] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    birthDate: '',
    gender: '' as 'MALE' | 'FEMALE' | '',
  });

  const {
    user,
    profile,
    isLoading,
    error,
    handleUpdateUser,
    handleUploadAvatar,
    getFullName,
    hasAvatar,
    formatBirthDate,
  } = useProfile();

  const [logout, { isLoading: logoutLoading }] = useLogoutMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  useEffect(() => {
    if (profile) {
      setEditFormData({
        firstName: profile.firstName || '',
        lastName: profile.lastName || '',
        phone: user?.phone || '',
        birthDate: profile.birthDate ? profile.birthDate.split('T')[0] : '',
        gender: (profile.gender === 'MALE' || profile.gender === 'FEMALE') ? profile.gender as 'MALE' | 'FEMALE' : '',
      });
    }
  }, [profile, user]);

  const toggleNotification = (type: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleSaveProfile = async () => {
    try {
      setEditError(null);
      
      await handleUpdateUser({
        phone: editFormData.phone,
        firstName: editFormData.firstName,
        lastName: editFormData.lastName,
        birthDate: editFormData.birthDate ? new Date(editFormData.birthDate).toISOString() : undefined,
        gender: editFormData.gender || undefined,
      });

      setIsEditModalOpen(false);
    } catch (error: any) {
      console.error('Ошибка при сохранении профиля:', error);
      console.error('Детали ошибки:', JSON.stringify(error, null, 2));
      
      const errorMessage = error?.data?.message || error?.message || 'Произошла ошибка при сохранении профиля';
      setEditError(errorMessage);
    }
  };

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        await handleUploadAvatar(file);
      } catch (error) {
        console.error('Ошибка при загрузке аватара:', error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      
      document.cookie = 'access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      
      dispatch(userApi.util.resetApiState());
      dispatch(authApi.util.resetApiState());
      
      window.location.href = '/login';
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    }
  };

  if (isLoading && !user && !profile) {
    return (
      <Container size="xl" py="xl">
        <Center h={400}>
          <Stack align="center" gap="md">
            <Loader size="lg" />
          </Stack>
        </Center>
      </Container>
    );
  }

  if (error) {
    return (
      <Container size="xl" py="xl">
        <Alert icon={<IconAlertCircle size={16} />} title="Ошибка" color="red">
          {typeof error === 'string' ? error : 'Произошла ошибка при загрузке данных'}
        </Alert>
      </Container>
    );
  }

  return (
    <div
      style={{
        background: PAGE_STYLES.background,
        minHeight: '100vh',
        width: '100%',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container size="xl" py="xl" style={{ maxWidth: '1900px', width: '100%', overflowX: 'hidden', paddingLeft: '7rem' }}>
      <Grid gutter={{ base: 'md', sm: 'lg', md: 'xl' }}>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card
            padding="xl"
            radius="lg"
            style={{
              background: PAGE_STYLES.cardBackground,
              backdropFilter: 'blur(10px)',
            }}
          >
            <Group justify="space-between" mb={0}>
              <div></div>
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <ActionIcon variant="subtle" size="lg">
                    <IconDots size={20} />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item leftSection={<IconSettings size={14} />}>Настройки</Menu.Item>
                  <Menu.Item leftSection={<IconBell size={14} />}>Уведомления</Menu.Item>
                  <Menu.Divider />
                  <Menu.Item 
                    leftSection={<IconLogout size={14} />} 
                    color="red"
                    onClick={handleLogout}
                    disabled={logoutLoading}
                  >
                    {logoutLoading ? 'Выход...' : 'Выйти'}
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
            <Stack align="center" gap="xs">
              <div
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector('.avatar-overlay') as HTMLElement;
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector('.avatar-overlay') as HTMLElement;
                  if (overlay) overlay.style.opacity = '0';
                }}
                onClick={() => {
                  fileInputRef.current?.click();
                }}
              >
                  <Avatar 
                    size={150} 
                    radius="50%" 
                    color="blue"
                    src={hasAvatar() ? profile?.avatar : undefined}
                  >
                  {hasAvatar() ? null : <IconUser size={80} />}
                </Avatar>
                  <div
                    className="avatar-overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.2s ease',
                      pointerEvents: 'none'
                    }}
                  >
                  <IconUpload size={30} color="white" />
                </div>
              </div>
              
              <Stack align="center" gap="xs">
                <Title order={2}>{getFullName()}</Title>
                <Badge color={user?.isActive ? "green" : "red"} variant="light">
                  {user?.isActive ? "Активный" : "Неактивный"}
                </Badge>
              </Stack>
               <Button 
                 style={{
                   marginTop: 'var(--mantine-spacing-lg)',
                   width: '63%',
                   backgroundColor: PAGE_STYLES.buttonBlue,
                   border: 'none',
                   borderRadius: '13px',
                   fontWeight: 600,
                 }} 
                 variant="filled" 
                 color="blue"
                 size="md"
                 onClick={() => {
                   setEditError(null);
                   setIsEditModalOpen(true);
                 }}
               >
                 Редактировать профиль
               </Button>

              <Stack gap="md" w="100%" mt="lg">
                <Paper 
                  p="lg" 
                  radius="xl"
                  style={{
                    backgroundColor: PAGE_STYLES.paperBackground,
                    borderRadius: '20px',
                  }}
                >
                  <Stack gap="sm">
                    <Text size="sm" fw={600} c="dimmed">Email</Text>
                    <Text size="md" fw={500}>{user?.email}</Text>
                  </Stack>
                </Paper>

                <Paper 
                  p="lg" 
                  radius="xl"
                  style={{
                    backgroundColor: PAGE_STYLES.paperBackground,
                    borderRadius: '20px',
                  }}
                >
                  <Stack gap="sm">
                    <Text size="sm" fw={600} c="dimmed">Телефон</Text>
                    <Text size="md" fw={500}>{user?.phone || 'Не указан'}</Text>
                  </Stack>
                </Paper>

                {profile?.birthDate && (
                  <Paper 
                    p="lg" 
                    radius="xl"
                    style={{
                      backgroundColor: '#f5f6f7',
                      borderRadius: '20px'
                    }}
                  >
                    <Stack gap="sm">
                      <Text size="sm" fw={600} c="dimmed">Дата рождения</Text>
                      <Text size="md" fw={500}>{formatBirthDate(profile.birthDate)}</Text>
                    </Stack>
                  </Paper>
                )}
              </Stack>
            </Stack>
          </Card>

          <Card 
            padding="xl" 
            radius="lg" 
            mt="md"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Title order={4} mb="md">Быстрые действия</Title>
            <Stack gap="sm">
              <Button 
                variant="subtle" 
                size="md"
                leftSection={<IconHistory size={18} />} 
                justify="start"
              >
                История операций
              </Button>
              <Button 
                variant="subtle" 
                size="md"
                leftSection={<IconChartBar size={18} />} 
                justify="start"
                onClick={() => router.push('/analytics')}
              >
                Аналитика
              </Button>
              <Button 
                variant="subtle" 
                size="md"
                leftSection={<IconBell size={18} />} 
                justify="start"
              >
                Уведомления
              </Button>
              <Button 
                variant="subtle" 
                size="md"
                leftSection={<IconUser size={18} />} 
                justify="start"
              >
                Поддержка
              </Button>
            </Stack>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7.5 }}>
          <div style={{ marginBottom: 'var(--mantine-spacing-xl)' }}>
            <AnalyticsSection />
          </div>

          <Card
            padding="xl"
            radius="lg"
            style={{
              background: PAGE_STYLES.cardBackground,
              backdropFilter: 'blur(10px)',
            }}
          >
            <Group justify="space-between" mb="md">
              <Title order={4}>Последние транзакции</Title>
              <Button 
                variant="subtle" 
                size="sm"
              >
                Все операции
              </Button>
            </Group>

            <Stack gap="sm">
              {TRANSACTIONS_DATA.map((transaction, index) => (
                <Group 
                  key={index}
                  justify="space-between" 
                  p="md" 
                  style={{ 
                    backgroundColor: index % 2 === 0 ? 'var(--mantine-color-gray-0)' : 'transparent', 
                    borderRadius: 'var(--mantine-radius-md)' 
                  }}
                  wrap="nowrap"
                >
                  <div style={{ minWidth: '50px', textAlign: 'center' }}>
                    <Text fw={700} size="xl" style={{ lineHeight: 1.2, color: '#000' }}>
                      {transaction.day}
                    </Text>
                    <Text size="xs" c="dimmed" style={{ lineHeight: 1, textTransform: 'lowercase' }}>
                      {transaction.month}
                    </Text>
                  </div>

                  <div style={{ flex: 1, marginLeft: '16px' }}>
                    <Text size="sm" fw={500} style={{ color: '#000' }}>
                      {transaction.name}
                    </Text>
                    <Text size="xs" c="dimmed" style={{ marginTop: '2px' }}>
                      {transaction.category}
                    </Text>
                  </div>

                  <Badge
                    variant="light"
                    color={getStatusColor(transaction.status)}
                    size="sm"
                    style={{ marginRight: '16px' }}
                    leftSection={
                      transaction.status === 'Успешно' ? (
                        <div
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: PAGE_STYLES.successGreen,
                            marginRight: '4px',
                          }}
                        />
                      ) : null
                    }
                  >
                    {transaction.status}
                  </Badge>

                  <Text fw={700} style={{ color: '#000', minWidth: '100px', textAlign: 'right' }}>
                    {transaction.amount}
                  </Text>
                </Group>
              ))}
            </Stack>
          </Card>

          <Card 
            padding="xl" 
            radius="lg" 
            mt="md"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Title order={4} mb="md">Настройки уведомлений</Title>

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
              <Group justify="space-between">
                <div>
                  <Text size="sm" fw={500}>Email уведомления</Text>
                  <Text size="xs" c="dimmed">Получать уведомления на email</Text>
                </div>
                <Button 
                  size="xs" 
                  variant={notifications.email ? "light" : "outline"}
                  color={notifications.email ? "blue" : "gray"}
                  onClick={() => toggleNotification('email')}
                >
                  {notifications.email ? 'Включено' : 'Выключено'}
                </Button>
              </Group>

              <Group justify="space-between">
                <div>
                  <Text size="sm" fw={500}>SMS уведомления</Text>
                  <Text size="xs" c="dimmed">Получать SMS о операциях</Text>
                </div>
                <Button 
                  size="xs" 
                  variant={notifications.sms ? "light" : "outline"}
                  color={notifications.sms ? "blue" : "gray"}
                  onClick={() => toggleNotification('sms')}
                >
                  {notifications.sms ? 'Включено' : 'Выключено'}
                </Button>
              </Group>

              <Group justify="space-between">
                <div>
                  <Text size="sm" fw={500}>Push уведомления</Text>
                  <Text size="xs" c="dimmed">Уведомления в приложении</Text>
                </div>
                <Button 
                  size="xs" 
                  variant={notifications.push ? "light" : "outline"}
                  color={notifications.push ? "blue" : "gray"}
                  onClick={() => toggleNotification('push')}
                >
                  {notifications.push ? 'Включено' : 'Выключено'}
                </Button>
              </Group>

              <Group justify="space-between">
                <div>
                  <Text size="sm" fw={500}>Безопасность</Text>
                  <Text size="xs" c="dimmed">Уведомления о входе в аккаунт</Text>
                </div>
                <Button 
                  size="xs" 
                  variant={notifications.security ? "light" : "outline"}
                  color={notifications.security ? "blue" : "gray"}
                  onClick={() => toggleNotification('security')}
                >
                  {notifications.security ? 'Включено' : 'Выключено'}
                </Button>
              </Group>
            </SimpleGrid>
          </Card>
        </Grid.Col>
      </Grid>

      <Modal
        opened={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Редактирование профиля"
        size="md"
      >
        <Stack gap="md">
          {editError && (
            <Alert icon={<IconAlertCircle size={16} />} title="Ошибка" color="red">
              {editError}
            </Alert>
          )}
          
          <TextInput
            label="Имя"
            value={editFormData.firstName}
            onChange={(e) => setEditFormData(prev => ({ ...prev, firstName: e.target.value }))}
            placeholder="Введите ваше имя"
          />

          <TextInput
            label="Фамилия"
            value={editFormData.lastName}
            onChange={(e) => setEditFormData(prev => ({ ...prev, lastName: e.target.value }))}
            placeholder="Введите вашу фамилию"
          />

          <TextInput
            label="Телефон"
            value={editFormData.phone}
            onChange={(e) => setEditFormData(prev => ({ ...prev, phone: e.target.value }))}
            placeholder="+7 (999) 123-45-67"
          />

          <TextInput
            label="Дата рождения"
            type="date"
            value={editFormData.birthDate}
            onChange={(e) => setEditFormData(prev => ({ ...prev, birthDate: e.target.value }))}
          />

          <Select
            label="Пол"
            placeholder="Выберите пол"
            value={editFormData.gender}
            onChange={(value) => setEditFormData(prev => ({ ...prev, gender: value as 'MALE' | 'FEMALE' | '' }))}
            data={GENDER_OPTIONS}
          />

          <Group justify="flex-end" gap="sm" mt="md">
            <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
              Отмена
            </Button>
            <Button onClick={handleSaveProfile} loading={isLoading}>
              Сохранить
            </Button>
          </Group>
        </Stack>
      </Modal>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleAvatarUpload}
      />
      </Container>
    </div>
  );
}

