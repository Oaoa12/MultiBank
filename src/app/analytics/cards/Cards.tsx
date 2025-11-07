'use client';

import { useState, useRef, useEffect } from 'react';
import { Paper, Text, Stack, Group, Button, Title, Divider, Badge, Avatar, ThemeIcon } from '@mantine/core';
import { IconCreditCard, IconEye, IconEyeOff, IconShoppingCart, IconCar, IconPlane, IconBuilding, IconPizza } from '@tabler/icons-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Cards.module.css';

interface CardData {
  id: number;
  bank: string;
  type: string;
  number: string;
  owner: string;
  expiry: string;
  status: string;
  color: string;
  operations: number;
  spent: string;
  cashback: string;
}

interface CategoryData {
  id: number;
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  color: string;
  amount: string;
}

const cardsData: CardData[] = [
  {
    id: 1,
    bank: 'ВТБ',
    type: 'Дебетовая карта',
    number: '4635 1869 6438 6548',
    owner: 'ILIA RAXAT',
    expiry: '12/28',
    status: 'Активна',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    operations: 24,
    spent: '₽ 45,230',
    cashback: '₽ 1,356'
  },
  {
    id: 2,
    bank: 'Сбер',
    type: 'Кредитная карта',
    number: '4753 9680 5745 4738',
    owner: 'ILIA RAXAT',
    expiry: '08/29',
    status: 'Активна',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    operations: 18,
    spent: '₽ 32,150',
    cashback: '₽ 965'
  },
  {
    id: 3,
    bank: 'Т-Банк',
    type: 'Дебетовая карта',
    number: '7648 5368 8563 5864',
    owner: 'ILIA RAXAT',
    expiry: '03/30',
    status: 'Активна',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    operations: 31,
    spent: '₽ 67,890',
    cashback: '₽ 2,036'
  }
];

const popularCategories: CategoryData[] = [
  {
    id: 1,
    name: 'Супермаркеты',
    icon: IconShoppingCart,
    color: '#2563eb',
    amount: '₽ 45 230'
  },
  {
    id: 2,
    name: 'Транспорт',
    icon: IconCar,
    color: '#10b981',
    amount: '₽ 12 500'
  },
  {
    id: 3,
    name: 'Путешествия',
    icon: IconPlane,
    color: '#f59e0b',
    amount: '₽ 89 000'
  },
  {
    id: 4,
    name: 'Кафе и рестораны',
    icon: IconPizza,
    color: '#ef4444',
    amount: '₽ 28 750'
  },
  {
    id: 5,
    name: 'Жильё',
    icon: IconBuilding,
    color: '#8b5cf6',
    amount: '₽ 35 000'
  }
];

interface CardsProps {
  onCardChange?: (bank: string) => void;
}

const BUTTON_STYLE: React.CSSProperties = {
  marginTop: '-50px',
  backgroundColor: 'transparent',
  borderColor: '#2563eb',
  color: '#2563eb',
};

const SWIPER_HEIGHT = '240px';
const HIDDEN_CARD_NUMBER = '•••• •••• •••• ••••';
const HIDDEN_OWNER = '•••• ••••••';
const HIDDEN_EXPIRY = '••/••';
const FIRST_CARD_INDEX = 0;

export default function Cards({ onCardChange }: CardsProps) {
  const router = useRouter();
  const [isCardVisible, setIsCardVisible] = useState(true);
  const swiperRef = useRef<SwiperType | null>(null);

  const toggleCardVisibility = () => setIsCardVisible(prev => !prev);

  const handleSlideChange = (swiper: SwiperType) => {
    const newIndex = swiper.realIndex;
    const selectedCard = cardsData[newIndex];
    if (onCardChange && selectedCard) {
      onCardChange(selectedCard.bank);
    }
  };

  useEffect(() => {
    const firstCard = cardsData[FIRST_CARD_INDEX];
    if (onCardChange && firstCard) {
      onCardChange(firstCard.bank);
    }
  }, []);

  const getCardNumber = (card: CardData) => isCardVisible ? card.number : HIDDEN_CARD_NUMBER;
  const getCardOwner = (card: CardData) => isCardVisible ? card.owner : HIDDEN_OWNER;
  const getCardExpiry = (card: CardData) => isCardVisible ? card.expiry : HIDDEN_EXPIRY;

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
              {cardsData.length}
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
              {cardsData.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className={styles.bankCard} style={{ background: card.color }}>
                    <div className={styles.cardPattern} />
                    <div className={styles.cardGeometricPattern} />
                    
                    <div className={styles.cardTop}>
                      <Group justify="space-between" align="flex-start">
                        <div>
                          <Text className={styles.cardBank}>{card.bank}</Text>
                          <Group gap="xs" mt="xs">
                            <Text className={styles.cardType}>{card.type}</Text>
                            <Badge size="xs" color="green" variant="light">
                              {card.status}
                            </Badge>
                          </Group>
                        </div>
                        <IconCreditCard size={36} color="#ffffff" />
                      </Group>
                    </div>

                    <div className={styles.cardMiddle}>
                      <Text className={styles.cardNumber}>
                        {getCardNumber(card)}
                      </Text>
                    </div>

                    <div className={styles.cardDecorativeLines} />

                    <div className={styles.cardBottom}>
                      <Group justify="space-between" align="flex-end">
                        <div>
                          <Text className={styles.cardLabel}>Владелец</Text>
                          <Text className={styles.cardValue}>
                            {getCardOwner(card)}
                          </Text>
                        </div>
                        <div>
                          <Text className={styles.cardLabel}>Срок действия</Text>
                          <Text className={styles.cardValue}>
                            {getCardExpiry(card)}
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

          <Group gap="xs" grow style={{ width: '400px', marginLeft: '105px' }}>
            <Button 
              variant="outline" 
              size="sm"
              style={BUTTON_STYLE}
            >
              История операций
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              style={BUTTON_STYLE}
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
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
}
