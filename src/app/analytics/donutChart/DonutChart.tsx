'use client';

import { PieChart, Pie, Cell } from 'recharts';
import { Text } from '@mantine/core';

interface BankDonutData {
  income: number;
  expenses: number;
}

type BankName = 'ВТБ' | 'Т-Банк' | 'Сбер';

interface DonutChartProps {
  selectedBank: string;
}

interface ChartDataPoint {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number;
}

const bankDonutData: Record<BankName, BankDonutData> = {
  'ВТБ': {
    income: 1250000,
    expenses: 320000,
  },
  'Т-Банк': {
    income: 850000,
    expenses: 280000,
  },
  'Сбер': {
    income: 2100000,
    expenses: 450000,
  }
};

const CHART_SIZE = 200;
const CHART_CENTER = 100;
const INNER_RADIUS = 65;
const OUTER_RADIUS = 95;

const EXPENSES_COLOR = '#d1d5db';
const INCOME_COLOR = '#2563eb';
const TEXT_COLOR = '#111827';
const LABEL_COLOR = '#9ca3af';

const CONTAINER_STYLE: React.CSSProperties = {
  position: 'relative',
  width: CHART_SIZE,
  height: CHART_SIZE,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const CENTER_TEXT_STYLE: React.CSSProperties = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const AMOUNT_TEXT_STYLE: React.CSSProperties = {
  textAlign: 'center',
  color: TEXT_COLOR,
};

const LABEL_TEXT_STYLE: React.CSSProperties = {
  textAlign: 'center',
  color: LABEL_COLOR,
  marginTop: '4px',
};

export default function DonutChart({ selectedBank }: DonutChartProps) {
  const bankData = bankDonutData[selectedBank as BankName] || bankDonutData['ВТБ'];
  const { income, expenses } = bankData;

  const chartData: ChartDataPoint[] = [
    { name: 'Траты', value: expenses, color: EXPENSES_COLOR },
    { name: 'Поступления', value: income, color: INCOME_COLOR }, 
  ];

  return (
    <div style={CONTAINER_STYLE}>
      <PieChart width={CHART_SIZE} height={CHART_SIZE}>
        <Pie
          data={chartData}
          cx={CHART_CENTER}
          cy={CHART_CENTER}
          innerRadius={INNER_RADIUS}
          outerRadius={OUTER_RADIUS}
          dataKey="value"
          stroke="none"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>

      <div style={CENTER_TEXT_STYLE}>
        <Text
          size="md"
          fw={700}
          style={AMOUNT_TEXT_STYLE}
        >
          {expenses.toLocaleString()} ₽
        </Text>
        <Text
          size="xs"
          style={LABEL_TEXT_STYLE}
        >
          Траты за месяц
        </Text>
      </div>
    </div>
  );
}
