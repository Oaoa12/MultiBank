'use client';

import { Paper, Text, Stack, Group, Button } from '@mantine/core';
import { LineChart } from '@mantine/charts';
import { IconTrendingUp } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

const bankData = {
  'ВТБ': {
    balance: 1250000,
    growth: '+5.6%',
    data: [
      { month: 'Июн', value: 1200000 },
      { month: 'Июл', value: 1350000 },
      { month: 'Авг', value: 1280000 },
      { month: 'Сен', value: 1420000 },
      { month: 'Окт', value: 1380000 },
      { month: 'Ноя', value: 1250000 },
    ]
  },
  'Т-Банк': {
    balance: 850000,
    growth: '+2.1%',
    data: [
      { month: 'Июн', value: 800000 },
      { month: 'Июл', value: 820000 },
      { month: 'Авг', value: 790000 },
      { month: 'Сен', value: 860000 },
      { month: 'Окт', value: 840000 },
      { month: 'Ноя', value: 850000 },
    ]
  },
  'Сбер': {
    balance: 2100000,
    growth: '+8.3%',
    data: [
      { month: 'Июн', value: 1900000 },
      { month: 'Июл', value: 2050000 },
      { month: 'Авг', value: 1980000 },
      { month: 'Сен', value: 2150000 },
      { month: 'Окт', value: 2080000 },
      { month: 'Ноя', value: 2100000 },
    ]
  }
};

export default function Analytics() {
  const [selectedBank, setSelectedBank] = useState('ВТБ');
  const [animate, setAnimate] = useState(false);
  const currentBank = bankData[selectedBank as keyof typeof bankData];

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, [selectedBank]);

  return (

    <div className={styles.analyticsWrapper}>
      <Paper shadow="lg" radius="lg" className={styles.balanceCard}>
        <div className={styles.balanceHeader}>
          <Group justify="space-between" align="center" w="100%">
            <Text className={styles.balanceLabel}>Баланс</Text>
            <Group gap="md" align="center">
          <Group gap="xs">
                {['ВТБ', 'Т-Банк', 'Сбер'].map(bank => (
                  <div key={bank} style={{ position: 'relative' }}>
                    <Button
                     size="xs"
                      variant="subtle"
                      color="gray"
                      c="#111827"
                   radius="sm"
                      onClick={() => setSelectedBank(bank)}
                      style={{
                        borderBottom: selectedBank === bank ? '2px solid #2563eb' : '2px solid transparent',
                        transition: 'border-bottom 0.3s ease',
                      }}
                    >
                      {bank}
                    </Button>
                  </div>
                ))}
              </Group>

              <Group gap={6}>
                <IconTrendingUp size={16} color="#2563eb" />
                <Text className={styles.growth}>{currentBank.growth} за месяц</Text>
              </Group>
            </Group>
          </Group>
        </div>

        <Stack gap="xs" p="md">
          <Text className={styles.balanceAmount}>{currentBank.balance.toLocaleString()} ₽</Text>

          <div
            key={selectedBank}
            className={animate ? styles.chartVisible : styles.chartHidden}
          >
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.05" />
                </linearGradient>
              </defs>
            </svg>

            <LineChart
              h={180}
              data={currentBank.data}
              dataKey="month"
              series={[{ name: 'value', color: '#2563eb' }]}
              fillOpacity={0.3}
              curveType="linear"
              withDots
              withTooltip
              tooltipProps={{
                content: ({ payload }) => payload?.length ? (
                  <div style={{
                    background: 'rgba(17, 24, 39, 0.9)',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                  }}>{payload[0].value.toLocaleString()} ₽</div>
                ) : null
              }}
              withXAxis
              withYAxis={false}
              gridAxis="none"
              strokeWidth={3}
              dotProps={{ r: 4, fill: '#2563eb', stroke: '#ffffff', strokeWidth: 2 }}
              xAxisProps={{ tick: { fill: '#111827', fontSize: 12 }, tickFormatter: val => val.slice(0, 3), domain: ['dataMin', 'dataMax'], padding: { left: 20, right: 20 } }}
            />
          </div>
        </Stack>
      </Paper>
    </div>
  );
}
