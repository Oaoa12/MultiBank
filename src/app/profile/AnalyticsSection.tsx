import { SimpleGrid } from '@mantine/core';
import AnalyticsCard from './AnalyticsCard';

interface AnalyticsCardData {
  value: number;
  label: string;
  percent: number;
  color: string;
  heights: number[];
}

const GRID_CONFIG = {
  cols: { base: 1, sm: 2, md: 3 },
  spacing: 'lg' as const,
} as const;

const ANALYTICS_DATA: readonly AnalyticsCardData[] = [
  {
    value: 5,
    label: 'Пополнения',
    percent: 33.67,
    color: '#E67E22',
    heights: [35, 28, 52, 45, 68],
  },
  {
    value: 12,
    label: 'Переводы',
    percent: 82.1,
    color: '#27AE60',
    heights: [45, 62, 38, 55, 72],
  },
  {
    value: 3,
    label: 'Траты',
    percent: 14.5,
    color: '#3498DB',
    heights: [28, 35, 42, 58, 48],
  },
];

export default function AnalyticsSection() {
  return (
    <SimpleGrid cols={GRID_CONFIG.cols} spacing={GRID_CONFIG.spacing}>
      {ANALYTICS_DATA.map((card) => (
        <AnalyticsCard key={card.label} {...card} />
      ))}
    </SimpleGrid>
  );
}
