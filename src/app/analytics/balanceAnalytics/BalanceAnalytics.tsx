'use client';

import { Paper, Text, Stack, Divider, Group, Loader, Center } from '@mantine/core';
import { LineChart } from '@mantine/charts';
import { useState, useEffect, useMemo } from 'react';
import { BankOverviewResponse, TransactionsStatisticsResponse, useGetTransactionsQuery } from '@/lib/store/api/AuthApi';
import styles from './BalanceAnalytics.module.css';

interface BalanceAnalyticsProps {
  selectedBankId: string | null;
  accountsData?: BankOverviewResponse;
  statisticsData?: TransactionsStatisticsResponse;
}

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

export default function BalanceAnalytics({ selectedBankId, accountsData, statisticsData }: BalanceAnalyticsProps) {
  const [isAnimated, setIsAnimated] = useState(false);
  
  const { data: transactionsData, isLoading: transactionsLoading, error: transactionsError } = useGetTransactionsQuery({
    limit: 10,
    page: 1,
  });

  useEffect(() => {
    setIsAnimated(false);
    const timeout = setTimeout(() => setIsAnimated(true), ANIMATION_DELAY);
    return () => clearTimeout(timeout);
  }, [selectedBankId]);

  const currentBalance = useMemo(() => {
    if (!accountsData?.banks) return 0;
    
    if (!selectedBankId) {
      return accountsData.banks.reduce((total, bank) => {
        return total + (bank.accounts?.reduce((bankTotal, account) => {
          const balance = parseFloat(account.balance || '0');
          return bankTotal + (isNaN(balance) ? 0 : balance);
        }, 0) || 0);
      }, 0);
    }

    const bank = accountsData.banks.find(b => b.bankId === selectedBankId);
    if (!bank) return 0;

    return bank.accounts?.reduce((total, account) => {
      const balance = parseFloat(account.balance || '0');
      return total + (isNaN(balance) ? 0 : balance);
    }, 0) || 0;
  }, [accountsData, selectedBankId]);

  const chartData = useMemo(() => {
    if (!statisticsData?.monthlyStats) return [];

    const monthlyStats = [...statisticsData.monthlyStats]
      .sort((a, b) => {
        const parseMonth = (monthStr: string): Date => {
          const monthNames: Record<string, number> = {
            'январь': 0, 'февраль': 1, 'март': 2, 'апрель': 3, 'май': 4, 'июнь': 5,
            'июль': 6, 'август': 7, 'сентябрь': 8, 'октябрь': 9, 'ноябрь': 10, 'декабрь': 11
          };
          
          const parts = monthStr.toLowerCase().split(' ');
          const monthName = parts[0].replace('г.', '').trim();
          const year = parseInt(parts[1]) || new Date().getFullYear();
          const monthIndex = monthNames[monthName] ?? 0;
          
          return new Date(year, monthIndex, 1);
        };

        return parseMonth(a.month).getTime() - parseMonth(b.month).getTime();
      })
      .slice(-6)
      .map(stat => ({
        month: stat.month.split(' ')[0].slice(0, 3), 
        value: currentBalance, 
      }));

    return monthlyStats.length > 0 ? monthlyStats : [
      { month: 'Ноя', value: currentBalance }
    ];
  }, [statisticsData, currentBalance]);

  const recentTransactions = useMemo(() => {
    if (!transactionsData?.transactions) {
      if (process.env.NODE_ENV === 'development' && transactionsError) {
        console.log('BalanceAnalytics - Transactions error:', transactionsError);
      }
      return [];
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('BalanceAnalytics - Loaded transactions:', transactionsData.transactions.length);
    }

    return transactionsData.transactions
      .slice(0, 10)
      .map(tx => ({
        id: tx.id,
        name: tx.merchant || tx.description || tx.category || 'Транзакция',
        amount: tx.amount,
        type: tx.type === 'INCOME' ? 'income' as const : 'expense' as const,
      }));
  }, [transactionsData, transactionsError]);

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
            {Math.round(currentBalance).toLocaleString()} ₽
          </Text>

          <div
            key={selectedBankId || 'all'}
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

            <div className={styles.lineChartContainer} style={{ width: '100%', height: '100px', minHeight: '100px', minWidth: '200px' }}>
              {chartData.length > 0 ? (
                <LineChart
                  className={styles.lineChart}
                  h={100}
                  w="100%"
                  data={chartData}
                  style={{ width: '100%', height: '100px' }}
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
              ) : (
                <Center h={100}>
                  <Text size="sm" c="dimmed">Нет данных для графика</Text>
                </Center>
              )}
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
        {transactionsLoading ? (
          <Center p="md">
            <Loader size="sm" />
          </Center>
        ) : transactionsError ? (
          <Center p="md">
            <Text size="sm" c="red">
              {process.env.NODE_ENV === 'development' 
                ? `Ошибка загрузки: ${transactionsError && 'status' in transactionsError ? transactionsError.status : 'Unknown'}`
                : 'Ошибка загрузки транзакций'}
            </Text>
          </Center>
        ) : recentTransactions.length === 0 ? (
          <Center p="md">
            <Stack gap="xs" align="center">
              <Text size="sm" c="dimmed">Нет транзакций</Text>
              <Text size="xs" c="dimmed" ta="center">
                Транзакции появятся после синхронизации с банками
              </Text>
            </Stack>
          </Center>
        ) : (
          <Stack gap="xs" mt="md" className={styles.transactionsList}>
            {recentTransactions.map((transaction) => (
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
        )}
      </Stack>
    </div>
  );
}
