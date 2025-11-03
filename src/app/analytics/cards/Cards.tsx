'use client';

import React, { useState, useRef } from 'react';
import { Paper, Text, Stack, Group, Button, Title, Divider, Badge, Avatar } from '@mantine/core';
import { IconCreditCard, IconEye, IconEyeOff, IconPlus, IconHistory, IconSettings, IconShoppingCart, IconCar, IconPlane, IconBuilding, IconPizza } from '@tabler/icons-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Cards.module.css';

const cardsData = [
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

const popularCategories = [
  {
    id: 1,
    name: 'Супермаркеты',
    icon: IconShoppingCart,
    color: '#2563eb',
    amount: '₽ 45,230'
  },
  {
    id: 2,
    name: 'Транспорт',
    icon: IconCar,
    color: '#10b981',
    amount: '₽ 12,500'
  },
  {
    id: 3,
    name: 'Путешествия',
    icon: IconPlane,
    color: '#f59e0b',
    amount: '₽ 89,000'
  },
  {
    id: 4,
    name: 'Кафе и рестораны',
    icon: IconPizza,
    color: '#ef4444',
    amount: '₽ 28,750'
  },
  {
    id: 5,
    name: 'Жильё',
    icon: IconBuilding,
    color: '#8b5cf6',
    amount: '₽ 35,000'
  }
];

export default function Cards() {

  const [isCardVisible, setIsCardVisible] = useState(true);
  const [activeCard, setActiveCard] = useState(0);
  const swiperRef = useRef<any>(null);

  const toggleCardVisibility = () => setIsCardVisible(v => !v);

  const currentCard = cardsData[activeCard] ?? cardsData[0];

  return (
    
    <div className={styles.cardsWrapper}>
      <Paper shadow="lg" radius="lg" className={styles.cardContainer}>
        <Group justify="space-between" align="center" p="md" pb="xs">
          <Title order={4} className={styles.cardTitle}>Банковские карты</Title>
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
              onSwiper={(sw) => (swiperRef.current = sw)}
              onSlideChange={(sw) => setActiveCard(sw.realIndex)}
              slidesPerView={1}
              spaceBetween={16}
              navigation
              // pagination={{ 
              //   clickable: true,
              //   dynamicBullets: false,
              //   el: '.swiper-pagination'
              // }}
              loop={false}
              keyboard={{ enabled: true }}
              a11y={{ enabled: true }}
              touchStartPreventDefault={false}
               style={{ height: '240px' }}
            >
              {cardsData.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className={styles.bankCard} style={{ background: card.color }}>
                    <div className={styles.cardPattern}></div>
                    <div className={styles.cardGeometricPattern}></div>
                    
                    <div className={styles.cardTop}>
                      <Group justify="space-between" align="flex-start">
                        <div>
                          <Text className={styles.cardBank}>{card.bank}</Text>
                          <Group gap="xs" mt="xs">
                            <Text className={styles.cardType}>{card.type}</Text>
                            <Badge size="xs" color="green" variant="light">{card.status}</Badge>
                          </Group>
                        </div>
                        <IconCreditCard size={36} color="#ffffff" />
                      </Group>
                    </div>

                    <div className={styles.cardMiddle}>
                      {/* <img src="/chip.png" className={styles.chip} alt="Chip" /> */}
                      <Text className={styles.cardNumber}>
                        {isCardVisible ? card.number : '•••• •••• •••• ••••'}
                      </Text>
                    </div>

                    <div className={styles.cardDecorativeLines}></div>

                    <div className={styles.cardBottom}>
                      <Group justify="space-between" align="flex-end">
                        <div>
                          <Text className={styles.cardLabel}>Владелец</Text>
                          <Text className={styles.cardValue}>
                            {isCardVisible ? card.owner : '•••• ••••••'}
                          </Text>
                        </div>
                        <div>
                          <Text className={styles.cardLabel}>Срок действия</Text>
                          <Text className={styles.cardValue}>
                            {isCardVisible ? card.expiry : '••/••'}
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
              style={{
                marginTop: '-50px',
                backgroundColor: 'transparent',
                borderColor: '#2563eb',
                color: '#2563eb'
              }}
            >
              История операций
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              style={{
                marginTop: '-50px',
                backgroundColor: 'transparent',
                borderColor: '#2563eb',
                color: '#2563eb'
              }}
            >
              Добавить карту
            </Button>
          </Group>

          <Divider mt="md" />

          <Stack gap="xs" mt="md">
            <Text size="lg" fw={600} c="#000">Популярные категории</Text>
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
                        border: `1px solid ${category.color}30`
                      }}
                    >
                      <IconComponent size={20} color={category.color} />
                    </Avatar>
                    <Text size="sm" fw={500}>{category.name}</Text>
                  </Group>
                  <Text size="sm" fw={600}>{category.amount}</Text>
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
