'use client';

import { Paper, Text, Stack, Divider } from '@mantine/core';
import { LineChart } from '@mantine/charts';
import { useState, useEffect } from 'react';
import styles from './BalanceAnalytics.module.css';

interface ChartDataPoint {
  month: string;
  value: number;
}

interface BankData {
  balance: number;
  growth: string;
  data: ChartDataPoint[];
}

type BankName = 'ВТБ' | 'Т-Банк' | 'Сбер';

const bankData: Record<BankName, BankData> = {
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

interface BalanceAnalyticsProps {
  selectedBank: string;
}

const TOOLTIP_STYLE = {
  background: 'rgba(17, 24, 39, 0.9)',
  color: 'white',
  padding: '8px 12px',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: 'bold' as const,
};

const CHART_COLOR = '#2563eb';
const ANIMATION_DELAY = 50;

export default function BalanceAnalytics({ selectedBank }: BalanceAnalyticsProps) {
  const [isAnimated, setIsAnimated] = useState(false);
  const currentBank = bankData[selectedBank as BankName] || bankData['ВТБ'];

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
      <Divider mx="md" />
      <Paper shadow="lg" radius="lg" className={styles.balanceCard}>
        <Stack gap="xs" p="md">
          <Text className={styles.balanceAmount}>
            {currentBank.balance.toLocaleString()} ₽
          </Text>

          <div
            key={selectedBank}
            className={isAnimated ? styles.chartVisible : styles.chartHidden}
            style={{ marginTop: '16px' }}
          >
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor={CHART_COLOR} stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.05} />
                </linearGradient>
              </defs>
            </svg>

            <LineChart
              h={140}
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
                tick: { fill: '#111827', fontSize: 12 },
                tickFormatter: (val: string) => val.slice(0, 3),
                domain: ['dataMin', 'dataMax'],
                padding: { left: 20, right: 20 }
              }}
            />
          </div>
        </Stack>
      </Paper>
    </div>
  );
}
