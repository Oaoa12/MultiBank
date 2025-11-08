'use client';

import { Paper, Text, Stack, Divider, Group } from '@mantine/core';
import { LineChart } from '@mantine/charts';
import { useState, useEffect } from 'react';
import styles from './BalanceAnalytics.module.css';

interface ChartDataPoint {
  month: string;
  value: number;
}

interface BankData {
  balance: number;
  data: ChartDataPoint[];
}

type BankName = 'ВТБ' | 'Т-Банк' | 'Сбер';

const bankData: Record<BankName, BankData> = {
  'ВТБ': {
    balance: 1250000,
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

interface Transaction {
  id: number;
  name: string;
  amount: number;
  type: 'expense' | 'income';
}

interface BalanceAnalyticsProps {
  selectedBank: string;
}

const transactions: Transaction[] = [
  { id: 1, name: 'Магнит', amount: 1250, type: 'expense' },
  { id: 2, name: 'Пополнение счета', amount: 5000, type: 'income' },
  { id: 3, name: 'Кафе', amount: 450, type: 'expense' },
  { id: 4, name: 'Такси', amount: 320, type: 'expense' },
  { id: 5, name: 'Перевод', amount: 50000, type: 'income' },
  { id: 6, name: 'Аптека', amount: 890, type: 'expense' },
  { id: 7, name: 'Перевод', amount: 3000, type: 'income' },
  { id: 8, name: 'Кинотеатр', amount: 1200, type: 'expense' },
  { id: 9, name: 'Бензин', amount: 2500, type: 'expense' },
  { id: 10, name: 'Возврат покупки', amount: 3400, type: 'income' },
];

const TOOLTIP_STYLE: React.CSSProperties = {
  background: 'rgba(17, 24, 39, 0.9)',
  color: 'white',
  padding: '8px 12px',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'var(--font-mono), monospace',
  letterSpacing: '-0.01em',
  fontFeatureSettings: "'tnum', 'lnum'",
};


const CHART_COLOR = '#2563eb';
const ANIMATION_DELAY = 50;
const DEFAULT_BANK: BankName = 'ВТБ';

export default function BalanceAnalytics({ selectedBank }: BalanceAnalyticsProps) {
  const [isAnimated, setIsAnimated] = useState(false);
  const currentBank = bankData[selectedBank as BankName] || bankData[DEFAULT_BANK];

  useEffect(() => {
    setIsAnimated(false);
    const timeout = setTimeout(() => setIsAnimated(true), ANIMATION_DELAY);
    return () => clearTimeout(timeout);
  }, [selectedBank]);

  const tooltipContent = ({ payload }: { payload?: Array<{ value: number }> }) => {
    if (!payload?.length) return null;
    return (
      <div style={TOOLTIP_STYLE}>
        {payload[0].value.toLocaleString()} ₽
      </div>
    );
  };

  return (
    <div className={styles.analyticsWrapper}>
      <div className={styles.dividerContainer}>
        <Text className={styles.transactionsLabel}>Транзакции</Text>
        <Divider className={styles.dividerLine} />
      </div>
      <Paper shadow="lg" radius="lg" className={styles.balanceCard}>
        <Stack gap="xs" p="md">
          <Text className={styles.balanceAmount}>
            {currentBank.balance.toLocaleString()} ₽
          </Text>

          <div
            key={selectedBank}
            className={`${isAnimated ? styles.chartVisible : styles.chartHidden} ${styles.chartWrapper}`}
          >
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor={CHART_COLOR} stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.05} />
                </linearGradient>
              </defs>
            </svg>

            <div className={styles.lineChartContainer}>
              <LineChart
                className={styles.lineChart}
                h={100}
                data={currentBank.data}
                dataKey="month"
                series={[{ name: 'value', color: CHART_COLOR }]}
                fillOpacity={0.3}
                curveType="linear"
                withDots
                withTooltip
                tooltipProps={{ content: tooltipContent }}
                withXAxis
                withYAxis={false}
                gridAxis="none"
                strokeWidth={3}
                dotProps={{
                  r: 4,
                  fill: CHART_COLOR,
                  stroke: '#ffffff',
                  strokeWidth: 2
                }}
                xAxisProps={{
                  tick: { 
                    fill: '#111827', 
                    fontSize: 12,
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontWeight: 500,
                    letterSpacing: '-0.005em'
                  },
                  tickFormatter: (val: string) => val.slice(0, 3),
                  domain: ['dataMin', 'dataMax'],
                  padding: { left: 20, right: 20 }
                }}
              />
            </div>
          </div>
        </Stack>
      </Paper>
      <Stack gap="xs" className={styles.transactionsSection}>
        <Text 
          size="lg" 
          fw={600} 
          c="#000"
          className={styles.transactionsTitle}
        >
          Последние транзакции
        </Text>
        <Stack gap="xs" mt="md" className={styles.transactionsList}>
          {transactions.map((transaction) => (
            <Group key={transaction.id} justify="space-between" align="center" className={styles.transactionItem}>
              <Group gap="sm">
                <div className={styles.transactionIcon} />
                <Text 
                  size="sm" 
                  fw={500}
                  className={styles.transactionName}
                >
                  {transaction.name}
                </Text>
              </Group>
              <Text 
                size="sm" 
                fw={600}
                c={transaction.type === 'income' ? '#10b981' : '#000'}
                className={styles.transactionAmount}
              >
                {transaction.type === 'income' ? '+' : '-'}₽ {transaction.amount.toLocaleString()}
              </Text>
            </Group>
          ))}
        </Stack>
      </Stack>
    </div>
  );
}
