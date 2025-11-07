"use client";
import { Container, Group, Text, Anchor, ActionIcon } from '@mantine/core';
import Link from 'next/link';

export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--mantine-color-gray-3)',
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
    }}>
      <Container size="md" style={{ paddingTop: 16, paddingBottom: 16 }}>
        <Group justify="space-between" wrap="nowrap">
          <Text size="sm" c="dimmed">© {new Date().getFullYear()} Multibank</Text>
          <Group gap="md">
            <Anchor component={Link} href="/" c="dimmed" size="sm">Главная</Anchor>
            <Anchor component={Link} href="/dashboard" c="dimmed" size="sm">Дашборд</Anchor>
            <Anchor component={Link} href="/analytics" c="dimmed" size="sm">Аналитика</Anchor>
            <Anchor component={Link} href="/profile" c="dimmed" size="sm">Профиль</Anchor>
          </Group>
        </Group>
      </Container>
    </footer>
  );
}
