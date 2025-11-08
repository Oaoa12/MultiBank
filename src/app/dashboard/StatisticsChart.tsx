'use client';

import { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Loader, Center } from '@mantine/core';
import { useGetTransactionsStatisticsQuery } from '@/lib/store/api/AuthApi';

const PAGE_STYLES = {
  buttonBlue: '#1E90FF',
  textPrimary: '#1A1A1A',
  textSecondary: '#6C757D',
  successGreen: '#28a745',
  accentOrange: '#FF6B35',
} as const;

interface StatisticsChartProps {
  // Оставляем для обратной совместимости, но не используем
  transactions?: any[];
}

// Кастомный тултип
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid #E0E0E0',
          borderRadius: '8px',
          padding: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      >
        <p style={{ margin: '0 0 8px 0', fontWeight: 600, fontSize: '14px', color: '#1A1A1A' }}>
          {label}
        </p>
        {payload.map((entry: any, index: number) => (
          <p
            key={index}
            style={{
              margin: '4px 0',
              fontSize: '13px',
              color: entry.color,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '12px',
                height: '12px',
                borderRadius: '2px',
                backgroundColor: entry.color,
              }}
            />
            <span style={{ fontWeight: 500 }}>{entry.name}:</span>
            <span style={{ fontWeight: 600 }}>
              {entry.value.toLocaleString('ru-RU', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{' '}
              ₽
            </span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function StatisticsChart({ transactions }: StatisticsChartProps) {
  // Загружаем статистику из API
  const { data: statisticsData, isLoading, error } = useGetTransactionsStatisticsQuery();

  // Преобразуем данные из API для графика
  const chartData = useMemo(() => {
    // Логируем для отладки
    console.log('StatisticsChart - API response:', statisticsData);
    console.log('StatisticsChart - Error:', error);
    
    if (!statisticsData) {
      return [];
    }

    // Проверяем разные возможные структуры ответа
    let monthlyData: any[] = [];
    
    // Если это массив напрямую
    if (Array.isArray(statisticsData)) {
      monthlyData = statisticsData;
    }
    // Если это объект с полем monthlyStats (реальная структура API)
    else if (statisticsData.monthlyStats && Array.isArray(statisticsData.monthlyStats)) {
      monthlyData = statisticsData.monthlyStats;
    }
    // Если это объект с полем monthly
    else if (statisticsData.monthly && Array.isArray(statisticsData.monthly)) {
      monthlyData = statisticsData.monthly;
    }
    // Если это один объект (старая структура)
    else if (statisticsData.month && statisticsData.income !== undefined) {
      monthlyData = [statisticsData];
    }

    if (monthlyData.length === 0) {
      console.log('StatisticsChart - No monthly data found');
      return [];
    }

    // Сортируем месяцы в хронологическом порядке
    const sortedData = [...monthlyData].sort((a, b) => {
      // Парсим название месяца для сортировки
      const parseMonth = (monthStr: string): Date => {
        // Формат: "октябрь 2025 г." или "сентябрь 2025 г."
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

      const dateA = parseMonth(a.month || '');
      const dateB = parseMonth(b.month || '');
      
      return dateA.getTime() - dateB.getTime();
    });

    // Берем последние 6 месяцев для отображения
    const dataToShow = sortedData.slice(-6);

    return dataToShow.map((month: any) => ({
      month: month.month || 'Неизвестно',
      Доходы: Math.round((month.income || 0) * 100) / 100,
      Расходы: Math.round((month.expenses || 0) * 100) / 100,
    }));
  }, [statisticsData, error]);

  if (isLoading) {
    return (
      <div
        style={{
          height: '280px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Loader size="sm" />
      </div>
    );
  }

  if (error) {
    console.error('StatisticsChart - API Error:', error);
    return (
      <div
        style={{
          height: '280px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '8px',
          color: PAGE_STYLES.textSecondary,
        }}
      >
        <div style={{ fontSize: '14px', fontWeight: 500 }}>Ошибка загрузки статистики</div>
        <div style={{ fontSize: '12px' }}>
          {error && 'data' in error ? String(error.data) : 'Попробуйте обновить страницу'}
        </div>
      </div>
    );
  }

  if (!statisticsData || chartData.length === 0) {
    return (
      <div
        style={{
          height: '280px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '8px',
          color: PAGE_STYLES.textSecondary,
        }}
      >
        <div style={{ fontSize: '14px', fontWeight: 500 }}>Нет данных для отображения</div>
        <div style={{ fontSize: '12px' }}>Транзакции появятся после синхронизации</div>
        {process.env.NODE_ENV === 'development' && (
          <div style={{ fontSize: '10px', marginTop: '10px', color: '#999' }}>
            Data: {JSON.stringify(statisticsData)}
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ width: '100%' }}>
      {/* График */}
      <div style={{ width: '100%', height: '280px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 60 }}
          >
            <defs>
              {/* Градиент для доходов */}
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={PAGE_STYLES.buttonBlue} stopOpacity={0.8} />
                <stop offset="95%" stopColor={PAGE_STYLES.buttonBlue} stopOpacity={0.1} />
              </linearGradient>
              {/* Градиент для расходов */}
              <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={PAGE_STYLES.accentOrange} stopOpacity={0.8} />
                <stop offset="95%" stopColor={PAGE_STYLES.accentOrange} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" vertical={false} />
            <XAxis
              dataKey="month"
              stroke={PAGE_STYLES.textSecondary}
              fontSize={11}
              tickLine={false}
              axisLine={false}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              stroke={PAGE_STYLES.textSecondary}
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => {
                if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
                if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
                return value.toString();
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="rect"
              formatter={(value) => (
                <span style={{ color: PAGE_STYLES.textPrimary, fontSize: '13px' }}>{value}</span>
              )}
            />
            <Area
              type="monotone"
              dataKey="Доходы"
              stackId="1"
              stroke={PAGE_STYLES.buttonBlue}
              fill="url(#colorIncome)"
              strokeWidth={2}
              animationDuration={800}
            />
            <Area
              type="monotone"
              dataKey="Расходы"
              stackId="1"
              stroke={PAGE_STYLES.accentOrange}
              fill="url(#colorExpense)"
              strokeWidth={2}
              animationDuration={800}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
