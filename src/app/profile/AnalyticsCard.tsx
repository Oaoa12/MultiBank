'use client';

import { Card, Text, Stack, Group, ThemeIcon } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';

interface AnalyticsCardProps {
  value: number;
  label: string;
  percent: number;
  color?: string;
  heights?: number[];
}

export default function AnalyticsCard({
  value,
  label,
  percent,
  color = '#E67E22',
  heights = [35, 28, 52, 45, 68],
}: AnalyticsCardProps) {
  const BAR_COUNT = 5;
  const GRAY_COLOR = '#D9D9D9';
  const BAR_WIDTH = 18;
  const GAP = 6;
  const CHART_HEIGHT = 70;

  const chartWidth = BAR_COUNT * BAR_WIDTH + (BAR_COUNT - 1) * GAP;

  return (
    <Card
      shadow="sm"
      radius="lg"
      padding="md"
      style={{
        borderRadius: 16,
        backgroundColor: '#fff',
        height: 140,
      }}
    >
      <Group justify="space-between" align="center" style={{ height: '100%' }}>
        <Stack gap={2} style={{ flex: 1 }}>
          <Text 
            fw={700} 
            color={color}
            style={{ fontSize: '2.25rem', lineHeight: 1.2 }}
          >
            {value}
          </Text>
          <Text size="md" fw={500} c="dimmed">
            {label}
          </Text>
          <Group gap={4}>
            <ThemeIcon color="gray" variant="light" size="xs" radius="xl">
              <IconArrowUpRight size={12} />
            </ThemeIcon>
            <Text size="sm" fw={600} c="dimmed">
              {percent}%
            </Text>
          </Group>
        </Stack>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <svg
            width={chartWidth}
            height={CHART_HEIGHT}
            viewBox={`0 0 ${chartWidth} ${CHART_HEIGHT}`}
          >
          {heights.map((h, i) => {
            const x = i * (BAR_WIDTH + GAP);
            const y = CHART_HEIGHT - (CHART_HEIGHT * h) / 100;
            const height = (CHART_HEIGHT * h) / 100;
            const fill = i === heights.length - 1 ? color : GRAY_COLOR;
            return (
              <rect
                key={i}
                x={x}
                y={y}
                width={BAR_WIDTH}
                height={height}
                fill={fill}
              />
            );
          })}
          </svg>
        </div>
      </Group>
    </Card>
  );
}
