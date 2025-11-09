'use client';

import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { Text, Loader, Center } from '@mantine/core';
import { TransactionsStatisticsResponse } from '@/lib/store/api/AuthApi';
import styles from './DonutChart.module.css';

interface DonutChartProps {
  selectedBankId: string | null;
  statisticsData?: TransactionsStatisticsResponse;
}

const EXPENSES_COLOR = '#d1d5db';
const INCOME_COLOR = '#2563eb';

export default function DonutChart({ selectedBankId, statisticsData }: DonutChartProps) {
  const [chartSize, setChartSize] = useState(200);
  const [chartCenter, setChartCenter] = useState(100);
  const [innerRadius, setInnerRadius] = useState(65);
  const [outerRadius, setOuterRadius] = useState(95);

  useEffect(() => {
    const updateChartSize = () => {
      if (window.innerWidth <= 480) {
        setChartSize(140);
        setChartCenter(70);
        setInnerRadius(45);
        setOuterRadius(66);
      } else if (window.innerWidth <= 768) {
        setChartSize(160);
        setChartCenter(80);
        setInnerRadius(52);
        setOuterRadius(76);
      } else if (window.innerWidth <= 1024) {
        setChartSize(180);
        setChartCenter(90);
        setInnerRadius(58);
        setOuterRadius(85);
      } else {
        setChartSize(200);
        setChartCenter(100);
        setInnerRadius(65);
        setOuterRadius(95);
      }
    };

    updateChartSize();
    window.addEventListener('resize', updateChartSize);
    return () => window.removeEventListener('resize', updateChartSize);
  }, []);

  const getBankData = () => {
    if (!statisticsData) {
      return { income: 0, expenses: 0 };
    }

    if (selectedBankId) {
      const income = statisticsData.bankIncomes?.[selectedBankId] || 0;
      const expenses = statisticsData.bankExpenses?.[selectedBankId] || 0;
      return { income, expenses };
    }

    const income = statisticsData.totalIncome || 0;
    const expenses = statisticsData.totalExpenses || 0;
    return { income, expenses };
  };

  const { income, expenses } = getBankData();

  // Скрываем компонент, если нет данных
  if (!statisticsData || (income === 0 && expenses === 0)) {
    return null;
  }

  const chartData = [
    { name: 'Траты', value: expenses, color: EXPENSES_COLOR },
    { name: 'Поступления', value: income, color: INCOME_COLOR },
  ];

  return (
    <div 
      className={styles.chartContainer}
      style={{ 
        width: `${chartSize}px`, 
        height: `${chartSize}px`,
        minWidth: `${chartSize}px`,
        minHeight: `${chartSize}px`
      }}
    >
      <PieChart width={chartSize} height={chartSize} className={styles.pieChart}>
        <Pie
          data={chartData}
          cx={chartCenter}
          cy={chartCenter}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          dataKey="value"
          stroke="none"
        >
          {chartData.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>

      <div className={styles.centerText}>
        <Text size="md" fw={700} className={styles.amountText}>
          {Math.round(expenses).toLocaleString()} ₽
        </Text>
        <Text size="xs" className={styles.labelText}>
          Траты {selectedBankId ? 'по банку' : 'за все время'}
        </Text>
      </div>
    </div>
  );
}
