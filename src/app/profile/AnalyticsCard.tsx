'use client';

import { useState, useRef, useMemo } from 'react';
import { Card, Text, Stack, Group, ThemeIcon } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

interface AnalyticsCardProps {
  value: number;
  label: string;
  percent: number;
  color?: string;
  heights?: number[];
}

const CHART_CONFIG = {
  BAR_COUNT: 5,
  BAR_WIDTH: 18,
  GAP: 6,
  HEIGHT: 70,
  GRAY_COLOR: '#D9D9D9',
} as const;

const ANIMATION_CONFIG = {
  MAX_ROTATION: 12,
  SHADOW_MULTIPLIER: 0.3,
  SHADOW_BLUR_BASE: 8,
  SHADOW_BLUR_HOVER: 15,
  SCALE_HOVER: 1.03,
  TRANSITION_FAST: '0.15s ease-out',
  TRANSITION_SLOW: '0.4s ease-out',
} as const;

export default function AnalyticsCard({
  value,
  label,
  percent,
  color = '#E67E22',
  heights = [35, 28, 52, 45, 68],
}: AnalyticsCardProps) {
  const router = useRouter();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const chartWidth = useMemo(
    () => CHART_CONFIG.BAR_COUNT * CHART_CONFIG.BAR_WIDTH + (CHART_CONFIG.BAR_COUNT - 1) * CHART_CONFIG.GAP,
    []
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateX(((y - centerY) / centerY) * -ANIMATION_CONFIG.MAX_ROTATION);
    setRotateY(((x - centerX) / centerX) * ANIMATION_CONFIG.MAX_ROTATION);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const boxShadow = useMemo(() => {
    const shadowX = rotateY * ANIMATION_CONFIG.SHADOW_MULTIPLIER;
    const shadowY = -rotateX * ANIMATION_CONFIG.SHADOW_MULTIPLIER;
    const shadowBlur =
      (Math.abs(rotateX) + Math.abs(rotateY)) * ANIMATION_CONFIG.SHADOW_MULTIPLIER +
      (isHovered ? ANIMATION_CONFIG.SHADOW_BLUR_HOVER : ANIMATION_CONFIG.SHADOW_BLUR_BASE);
    const shadowOpacity = isHovered ? 0.2 : 0.1;

    return isHovered
      ? `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowOpacity}), 0 8px 20px rgba(0, 0, 0, 0.12)`
      : '0 4px 6px rgba(0, 0, 0, 0.08)';
  }, [rotateX, rotateY, isHovered]);

  const transform = useMemo(
    () =>
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? ANIMATION_CONFIG.SCALE_HOVER : 1})`,
    [rotateX, rotateY, isHovered]
  );

  const transition = useMemo(
    () =>
      isHovered
        ? `transform ${ANIMATION_CONFIG.TRANSITION_FAST}, box-shadow ${ANIMATION_CONFIG.TRANSITION_FAST}`
        : `transform ${ANIMATION_CONFIG.TRANSITION_SLOW}, box-shadow ${ANIMATION_CONFIG.TRANSITION_SLOW}`,
    [isHovered]
  );

  const chartBars = useMemo(
    () =>
      heights.map((height, index) => {
        const x = index * (CHART_CONFIG.BAR_WIDTH + CHART_CONFIG.GAP);
        const barHeight = (CHART_CONFIG.HEIGHT * height) / 100;
        const y = CHART_CONFIG.HEIGHT - barHeight;
        const isLast = index === heights.length - 1;

        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={CHART_CONFIG.BAR_WIDTH}
            height={barHeight}
            fill={isLast ? color : CHART_CONFIG.GRAY_COLOR}
          />
        );
      }),
    [heights, color]
  );

  const handleClick = () => {
    router.push('/analytics');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      style={{
        transform,
        transition,
        cursor: 'pointer',
        transformStyle: 'preserve-3d',
        boxShadow,
        borderRadius: 16,
        overflow: 'hidden',
      }}
    >
      <Card
        radius="lg"
        padding="md"
        style={{
          borderRadius: 16,
          backgroundColor: '#fff',
          height: 140,
          boxShadow: 'none',
        }}
      >
        <Group justify="space-between" align="center" style={{ height: '100%' }}>
          <Stack gap={2} style={{ flex: 1 }}>
            <Text fw={700} color={color} style={{ fontSize: '2.25rem', lineHeight: 1.2 }}>
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
            <svg width={chartWidth} height={CHART_CONFIG.HEIGHT} viewBox={`0 0 ${chartWidth} ${CHART_CONFIG.HEIGHT}`}>
              {chartBars}
            </svg>
          </div>
        </Group>
      </Card>
    </div>
  );
}
