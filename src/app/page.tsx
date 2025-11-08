'use client';

import {
  Container,
  Title,
  Text,
  Button,
  Card,
  Grid,
  Stack,
  Group,
  ThemeIcon,
  Box,
} from '@mantine/core';
import {
  IconWallet,
  IconChartLine,
  IconShield,
  IconCreditCard,
  IconTrendingUp,
  IconLock,
} from '@tabler/icons-react';
import Link from 'next/link';
import classes from './page.module.css';

const features = [
  {
    icon: IconWallet,
    title: 'Единый кошелек',
    description: 'Управляйте всеми своими банковскими счетами из одного места',
  },
  {
    icon: IconChartLine,
    title: 'Аналитика',
    description: 'Детальная аналитика ваших финансов и расходов',
  },
  {
    icon: IconShield,
    title: 'Безопасность',
    description: 'Ваши данные защищены современными технологиями шифрования',
  },
  {
    icon: IconCreditCard,
    title: 'Все карты',
    description: 'Отслеживайте балансы и операции по всем вашим картам',
  },
  {
    icon: IconTrendingUp,
    title: 'Инвестиции',
    description: 'Следите за своими инвестициями и портфелем',
  },
  {
    icon: IconLock,
    title: 'Конфиденциальность',
    description: 'Полный контроль над вашими персональными данными',
  },
];

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Container size="lg" className={classes.hero}>
        <Stack gap="xl" align="center" ta="center" py={80}>
          <Title
            order={1}
            size={64}
            fw={800}
            className={classes.heroTitle}
            c="var(--mantine-color-dark-9)"
          >
            Единый интерфейс для
            <br />
            всех ваших банков
          </Title>
          <Text size="xl" c="dimmed" maw={600}>
            Мультибанк — это современная платформа для управления всеми вашими
            банковскими счетами, картами и финансами в одном удобном месте
          </Text>
          <Group gap="md" mt="xl">
            <Button
              component={Link}
              href="/registration"
              size="lg"
              radius="md"
              variant="filled"
            >
              Начать бесплатно
            </Button>
            <Button
              component={Link}
              href="/login"
              size="lg"
              radius="md"
              variant="outline"
            >
              Войти
            </Button>
          </Group>
        </Stack>
      </Container>

      {/* Features Section */}
      <Container size="lg" py={80}>
        <Stack gap={60}>
          <Stack gap="md" ta="center">
            <Title order={2} size={48} fw={700}>
              Почему выбирают Мультибанк?
            </Title>
            <Text size="lg" c="dimmed" maw={700} mx="auto">
              Мы объединяем все ваши банковские счета в единую платформу для
              удобного управления финансами
            </Text>
          </Stack>

          <Grid gutter="xl">
            {features.map((feature, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                <Card
                  padding="xl"
                  radius="md"
                  h="100%"
                  className={classes.featureCard}
                >
                  <Stack gap="md">
                    <ThemeIcon
                      size={56}
                      radius="md"
                      variant="light"
                      color="blue"
                    >
                      <feature.icon size={28} stroke={1.5} />
                    </ThemeIcon>
                    <Title order={3} size="h4" fw={600}>
                      {feature.title}
                    </Title>
                    <Text size="sm" c="dimmed" lh={1.6}>
                      {feature.description}
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}