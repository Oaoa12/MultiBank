'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { Paper, Text, Stack, Group, Button, Title, Divider, Badge, Avatar, Loader, Center } from '@mantine/core';
import { IconCreditCard, IconEye, IconEyeOff, IconShoppingCart, IconCar, IconPlane, IconBuilding, IconPizza, IconWallet, IconCoins } from '@tabler/icons-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import { BankOverviewResponse, useGetTransactionsStatisticsQuery, useGetCategoriesQuery } from '@/lib/store/api/AuthApi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Cards.module.css';

interface CardsProps {
  accountsData?: BankOverviewResponse;
  onCardChange?: (bankId: string) => void;
  selectedBankId?: string | null;
}

const SWIPER_HEIGHT = '240px';
const HIDDEN_CARD_NUMBER = '•••• •••• •••• ••••';
const HIDDEN_OWNER = '•••• ••••••';
const HIDDEN_EXPIRY = '••/••';
const FIRST_CARD_INDEX = 0;

// Маппинг категорий на иконки
const getCategoryIcon = (category: string) => {
  const lowerCategory = category.toLowerCase();
  if (lowerCategory.includes('продукт') || lowerCategory.includes('магазин') || lowerCategory.includes('супермаркет')) {
    return IconShoppingCart;
  }
  if (lowerCategory.includes('транспорт') || lowerCategory.includes('🚌')) {
    return IconCar;
  }
  if (lowerCategory.includes('путешеств') || lowerCategory.includes('самолет')) {
    return IconPlane;
  }
  if (lowerCategory.includes('кафе') || lowerCategory.includes('ресторан') || lowerCategory.includes('развлечен')) {
    return IconPizza;
  }
  if (lowerCategory.includes('жиль') || lowerCategory.includes('жкх') || lowerCategory.includes('аренд') || lowerCategory.includes('🏠')) {
    return IconBuilding;
  }
  if (lowerCategory.includes('кредит')) {
    return IconCoins;
  }
  if (lowerCategory.includes('зарплат')) {
    return IconWallet;
  }
  return IconShoppingCart; 
};

const getCategoryColor = (category: string, index: number) => {
  const lowerCategory = category.toLowerCase();
  if (lowerCategory.includes('продукт') || lowerCategory.includes('магазин') || lowerCategory.includes('супермаркет')) {
    return '#2563eb';
  }
  if (lowerCategory.includes('транспорт') || lowerCategory.includes('🚌')) {
    return '#10b981';
  }
  if (lowerCategory.includes('путешеств') || lowerCategory.includes('самолет')) {
    return '#f59e0b';
  }
  if (lowerCategory.includes('кафе') || lowerCategory.includes('ресторан') || lowerCategory.includes('развлечен')) {
    return '#ef4444';
  }
  if (lowerCategory.includes('жиль') || lowerCategory.includes('жкх') || lowerCategory.includes('аренд') || lowerCategory.includes('🏠')) {
    return '#8b5cf6';
  }
  if (lowerCategory.includes('кредит')) {
    return '#f97316';
  }
  if (lowerCategory.includes('зарплат')) {
    return '#06b6d4';
  }
  
  const defaultColors = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
  return defaultColors[index % defaultColors.length];
};

const getBankName = (bankId: string): string => {
  const bankNames: Record<string, string> = {
    'vbank': 'ВТБ',
    'sbank': 'Сбер',
    'abank': 'А-Банк',
    'tbank': 'Т-Банк',
  };
  return bankNames[bankId] || bankId.toUpperCase();
};

const getBankCardColor = (bankId: string): string => {
  const colors: Record<string, string> = {
    'vbank': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'sbank': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'abank': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'tbank': 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  };
  return colors[bankId] || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
};

export default function Cards({ accountsData, onCardChange, selectedBankId }: CardsProps) {
  const router = useRouter();
  const [isCardVisible, setIsCardVisible] = useState(true);
  const swiperRef = useRef<SwiperType | null>(null);
  
  const { data: statisticsData } = useGetTransactionsStatisticsQuery();
  const { data: categoriesData } = useGetCategoriesQuery();

  const cardsData = useMemo(() => {
    if (!accountsData?.banks) {
      if (process.env.NODE_ENV === 'development') {
        console.log('Cards: Нет данных о банках');
      }
      return [];
    }
    
    const allCards = accountsData.banks.flatMap(bank => {
      if (!bank.accounts || bank.accounts.length === 0) {
        if (process.env.NODE_ENV === 'development') {
          console.log(`Cards: Банк ${bank.bankId} не имеет счетов`);
        }
        return [];
      }
      
      return bank.accounts.map((account, accountIndex) => {
        const balanceValue = account.balance 
          ? parseFloat(String(account.balance))
          : (account.balances && account.balances.length > 0)
            ? parseFloat(String(account.balances[0].amount))
            : 0;
        
        const uniqueId = account.id 
          ? `card-${bank.bankId}-${account.id}` 
          : `card-${bank.bankId}-${account.accountId || accountIndex}`;
        
        return {
          id: uniqueId,
          accountId: account.id, 
          bankId: bank.bankId,
          bankName: account.bankName || getBankName(bank.bankId),
          accountNumber: account.accountNumber || account.accountId || '',
          balance: isNaN(balanceValue) ? 0 : balanceValue,
          currency: account.currency || 'RUB',
          accountName: account.accountName || account.nickname || account.accountId || 'Счет',
          accountType: account.accountType || account.accountSubType || 'Дебетовый счет',
        };
      });
    });
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`Cards: Сформировано ${allCards.length} карт из ${accountsData.totalAccounts || 'неизвестного'} счетов`);
      console.log('Cards: Данные счетов:', accountsData.banks.map(b => ({ 
        bankId: b.bankId, 
        accountsCount: b.accounts?.length || 0 
      })));
    }
    
    return allCards;
  }, [accountsData]);

  const popularCategories = useMemo(() => {
    if (!statisticsData?.categoryStats || statisticsData.categoryStats.length === 0) {
      return [];
    }
    
    return statisticsData.categoryStats
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 5)
      .map((cat, index) => ({
        id: index + 1,
        name: cat.category,
        icon: getCategoryIcon(cat.category),
        color: getCategoryColor(cat.category, index),
        amount: `₽ ${Math.round(cat.amount).toLocaleString()}`,
      }));
  }, [statisticsData]);

  const toggleCardVisibility = () => setIsCardVisible(prev => !prev);

  const handleSlideChange = (swiper: SwiperType) => {
    const newIndex = swiper.realIndex;
    const selectedCard = cardsData[newIndex];
    if (onCardChange && selectedCard) {
      onCardChange(selectedCard.bankId);
    }
  };

  useEffect(() => {
    const firstCard = cardsData[FIRST_CARD_INDEX];
    if (onCardChange && firstCard && !selectedBankId) {
      onCardChange(firstCard.bankId);
    }
  }, [cardsData, onCardChange, selectedBankId]);

  const formatCardNumber = (number: string) => {
    if (!isCardVisible) return HIDDEN_CARD_NUMBER;
    const last4 = number.slice(-4);
    return `•••• •••• •••• ${last4}`;
  };

  const formatBalance = (balance: number, currency: string) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: currency || 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(balance);
  };

  
  return (
    <div className={styles.cardsWrapper}>
      <Paper shadow="lg" radius="lg" className={styles.cardContainer}>
        <Group justify="space-between" align="center" p="md" pb="xs">
          <Group gap="sm" align="center">
            <Title order={4} className={styles.cardTitle}>Банковские карты</Title>
            <Badge
              size="lg"
              radius="xl"
              variant="light"
              color="blue"
              style={{
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
                fontSize: '14px',
                padding: 0,
                borderRadius: '50%',
              }}
            >
              {cardsData.length || accountsData?.totalAccounts || 0}
            </Badge>
          </Group>
          <Group gap="xs">
            <Button
              size="xs"
              variant="subtle"
              color="gray"
              leftSection={isCardVisible ? <IconEyeOff size={14} /> : <IconEye size={14} />}
              onClick={toggleCardVisibility}
            >
              {isCardVisible ? 'Скрыть' : 'Показать'}
            </Button>
          </Group>
        </Group>

        <Divider mx="md" />

        <Stack gap="md" p="md">
          {cardsData.length === 0 ? (
            <Center p="xl">
              <Text c="dimmed" size="sm">Нет доступных счетов</Text>
            </Center>
          ) : (
            <div className={styles.carouselContainer}>
              <Swiper
              modules={[Navigation, Pagination, Keyboard, A11y]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              slidesPerView={1}
              spaceBetween={16}
              navigation
              loop={false}
              keyboard={{ enabled: true }}
              a11y={{ enabled: true }}
              touchStartPreventDefault={false}
              style={{ height: SWIPER_HEIGHT }}
            >
              {cardsData.map((card, index) => (
                <SwiperSlide key={`${card.id}-${index}`}>
                  <div className={styles.bankCard} style={{ background: getBankCardColor(card.bankId) }}>
                    <div className={styles.cardPattern} />
                    <div className={styles.cardGeometricPattern} />
                    
                    <div className={styles.cardTop}>
                      <Group justify="space-between" align="flex-start">
                        <div>
                          <Text className={styles.cardBank}>{card.bankName}</Text>
                          <Group gap="xs" mt="xs">
                            <Text className={styles.cardType}>{card.accountType}</Text>
                            <Badge size="xs" color="green" variant="light">
                              Активна
                            </Badge>
                          </Group>
                        </div>
                        <IconCreditCard size={36} color="#ffffff" />
                      </Group>
                    </div>

                    <div className={styles.cardMiddle}>
                      <Text className={styles.cardNumber}>
                        {formatCardNumber(card.accountNumber)}
                      </Text>
                    </div>

                    <div className={styles.cardDecorativeLines} />

                    <div className={styles.cardBottom}>
                      <Group justify="space-between" align="flex-end">
                        <div>
                          <Text className={styles.cardLabel}>Баланс</Text>
                          <Text className={styles.cardValue}>
                            {formatBalance(card.balance, card.currency)}
                          </Text>
                        </div>
                        <div>
                          <Text className={styles.cardLabel}>Счет</Text>
                          <Text className={styles.cardValue}>
                            {card.accountName}
                          </Text>
                        </div>
                      </Group>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              </Swiper>
              <div className="swiper-pagination"></div>
            </div>
          )}

          <Group gap="xs" grow className={styles.actionsGroup}>
            <Button 
              variant="outline" 
              size="sm"
              className={styles.actionButton}
              onClick={() => router.push('/dashboard')}
            >
              История операций
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className={styles.actionButton}
              onClick={() => router.push('/dashboard')}
            >
              Добавить карту
            </Button>
          </Group>

          <Stack gap="xs" mt="md">
            <Text 
              size="lg" 
              fw={600} 
              c="#000"
              style={{ 
                fontFamily: 'var(--font-inter), sans-serif',
                letterSpacing: '-0.01em'
              }}
            >
              Популярные категории
            </Text>
            {popularCategories.length === 0 ? (
              <Center p="md">
                <Text size="sm" c="dimmed">Нет данных о категориях</Text>
              </Center>
            ) : (
              <Stack gap="xs" mt="md">
                {popularCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Group key={category.id} justify="space-between" align="center">
                      <Group gap="sm">
                        <Avatar 
                          size={40} 
                          radius="xl" 
                          style={{ 
                            backgroundColor: `${category.color}15`,
                            border: `1px solid ${category.color}30`,
                          }}
                        >
                          <IconComponent size={20} color={category.color} />
                        </Avatar>
                        <Text 
                          size="sm" 
                          fw={500}
                          style={{ 
                            fontFamily: 'var(--font-inter), sans-serif',
                            letterSpacing: '-0.005em',
                          }}
                        >
                          {category.name}
                        </Text>
                      </Group>
                      <Text 
                        size="sm" 
                        fw={600}
                        style={{ 
                          fontFamily: 'var(--font-mono), monospace',
                          letterSpacing: '-0.01em',
                          fontFeatureSettings: "'tnum', 'lnum'",
                        }}
                      >
                        {category.amount}
                      </Text>
                    </Group>
                  );
                })}
              </Stack>
            )}
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
}
