'use client';

import { SimpleGrid } from '@mantine/core';
import AnalyticsCard from './AnalyticsCard';
import { useMemo } from 'react';
import { TransactionsStatisticsResponse } from '@/lib/store/api/AuthApi';

interface AnalyticsSectionProps {
  statisticsData?: TransactionsStatisticsResponse;
}

const GRID_CONFIG = {
  cols: { base: 1, sm: 2, md: 3 },
  spacing: 'lg' as const,
} as const;

export default function AnalyticsSection({ statisticsData }: AnalyticsSectionProps) {
  const analyticsData = useMemo(() => {
    if (!statisticsData) {
      return [
        { value: 0, label: 'Пополнения', percent: 0, color: '#E67E22', heights: [0, 0, 0, 0, 0] },
        { value: 0, label: 'Переводы', percent: 0, color: '#27AE60', heights: [0, 0, 0, 0, 0] },
        { value: 0, label: 'Траты', percent: 0, color: '#3498DB', heights: [0, 0, 0, 0, 0] },
      ];
    }

    const monthlyStats = statisticsData.monthlyStats || [];
    const sortedStats = [...monthlyStats].sort((a, b) => {
      const parseMonth = (monthStr: string): Date => {
        const monthNames: Record<string, number> = {
          'январь': 0, 'февраль': 1, 'март': 2, 'апрель': 3, 'май': 4, 'июнь': 5,
          'июль': 6, 'август': 7, 'сентябрь': 8, 'октябрь': 9, 'ноябрь': 10, 'декабрь': 11
        };
        const parts = monthStr.toLowerCase().split(' ');
        const monthName = parts[0];
        const year = parseInt(parts[1]) || new Date().getFullYear();
        const monthIndex = monthNames[monthName] ?? 0;
        return new Date(year, monthIndex, 1);
      };
      return parseMonth(b.month || '').getTime() - parseMonth(a.month || '').getTime();
    });

    const last5Months = sortedStats.slice(0, 5);
    
    const totalIncome = monthlyStats.reduce((sum, stat) => sum + (stat.income || 0), 0);
    const totalExpenses = monthlyStats.reduce((sum, stat) => sum + (stat.expenses || 0), 0);
    
    const transactionsCountByMonth = last5Months.map(m => {
      return m.categories?.length || 0;
    });
    
    const totalTransactions = transactionsCountByMonth.reduce((sum, count) => sum + count, 0);
    const avgTransactionsPerMonth = totalTransactions / (last5Months.length || 1);

    const lastMonth = last5Months[0];
    const prevMonth = last5Months[1];
    
    const incomePercent = prevMonth && prevMonth.income 
      ? ((lastMonth?.income || 0) - prevMonth.income) / prevMonth.income * 100 
      : 0;
    const expensesPercent = prevMonth && prevMonth.expenses 
      ? ((lastMonth?.expenses || 0) - prevMonth.expenses) / prevMonth.expenses * 100 
      : 0;
    
    const lastMonthTransactions = lastMonth?.categories?.length || 0;
    const prevMonthTransactions = prevMonth?.categories?.length || 0;
    const transactionsPercent = prevMonthTransactions 
      ? ((lastMonthTransactions - prevMonthTransactions) / prevMonthTransactions * 100)
      : 0;

    const maxIncome = Math.max(...last5Months.map(m => m.income || 0), 1);
    const maxExpenses = Math.max(...last5Months.map(m => m.expenses || 0), 1);
    
    const incomeHeights = last5Months.map(m => Math.round(((m.income || 0) / maxIncome * 100)));
    const expensesHeights = last5Months.map(m => Math.round(((m.expenses || 0) / maxExpenses * 100)));
    
    const maxTransactions = Math.max(...transactionsCountByMonth, 1);
    const normalizedTransactionsHeights = transactionsCountByMonth.map(t => Math.round((t / maxTransactions) * 100));

    return [
      {
        value: Math.round(totalIncome / 1000), 
        label: 'Пополнения',
        percent: Math.round(incomePercent * 10) / 10,
        color: '#E67E22',
        heights: incomeHeights.length === 5 ? incomeHeights : [...incomeHeights, ...Array(5 - incomeHeights.length).fill(0)],
      },
      {
        value: totalTransactions,
        label: 'Операций',
        percent: Math.round(transactionsPercent * 10) / 10,
        color: '#27AE60',
        heights: normalizedTransactionsHeights.length === 5 ? normalizedTransactionsHeights : [...normalizedTransactionsHeights, ...Array(5 - normalizedTransactionsHeights.length).fill(0)],
      },
      {
        value: Math.round(totalExpenses / 1000), 
        label: 'Траты',
        percent: Math.round(expensesPercent * 10) / 10,
        color: '#3498DB',
        heights: expensesHeights.length === 5 ? expensesHeights : [...expensesHeights, ...Array(5 - expensesHeights.length).fill(0)],
      },
    ];
  }, [statisticsData]);

  return (
    <SimpleGrid cols={GRID_CONFIG.cols} spacing={GRID_CONFIG.spacing}>
      {analyticsData.map((card) => (
        <AnalyticsCard key={card.label} {...card} />
      ))}
    </SimpleGrid>
  );
}
