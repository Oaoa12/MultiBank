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
  Badge,
} from '@mantine/core';
import {
  IconWallet,
  IconChartLine,
  IconShield,
  IconCreditCard,
  IconTrendingUp,
  IconLock,
  IconSparkles,
  IconArrowRight,
} from '@tabler/icons-react';
import Link from 'next/link';
import classes from './page.module.css';

const features = [
  {
    icon: IconWallet,
    title: 'Единый кошелек',
    description: 'Управляйте всеми своими банковскими счетами из одного места',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    icon: IconChartLine,
    title: 'Аналитика',
    description: 'Детальная аналитика ваших финансов и расходов',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    icon: IconShield,
    title: 'Безопасность',
    description: 'Ваши данные защищены современными технологиями шифрования',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    icon: IconCreditCard,
    title: 'Все карты',
    description: 'Отслеживайте балансы и операции по всем вашим картам',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    icon: IconTrendingUp,
    title: 'Инвестиции',
    description: 'Следите за своими инвестициями и портфелем',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    icon: IconLock,
    title: 'Конфиденциальность',
    description: 'Полный контроль над вашими персональными данными',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  },
];

const stats = [
  { value: '3+', label: 'Банка в одном месте' },
  { value: '100%', label: 'Безопасность' },
  { value: '24/7', label: 'Доступ' },
  { value: '0₽', label: 'Бесплатно' },
];

export default function Home() {
  return (
    <Box className={classes.wrapper}>
      <div className={classes.heroBackground} />
      
      <Container size="lg" className={classes.hero}>
        <Stack gap="xl" align="center" ta="center" py={10}>
          <Badge
            size="lg"
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            className={classes.heroBadge}
          >
            <Group gap={4}>
              <IconSparkles size={16} />
              <Text fw={600}>Новое поколение банкинга</Text>
            </Group>
          </Badge>
          
          <Title
            order={1}
            className={classes.heroTitle}
          >
            Единый интерфейс для
            <br />
            <span className={classes.heroTitleAccent}>всех ваших банков</span>
          </Title>
          
          <Text size="xl" className={classes.heroDescription} maw={700}>
            Мультибанк — это современная платформа для управления всеми вашими
            банковскими счетами, картами и финансами в одном удобном месте
          </Text>
          
          <Group gap="md" mt="xl" className={classes.heroButtons} style={{ marginTop: '-20px' }}>
            <Button
              component={Link}
              href="/registration"
              size="xl"
              radius="xl"
              variant="gradient"
              gradient={{ from: '#1e3a8a', to: '#3b82f6', deg: 135 }}
              className={classes.ctaButton}
              rightSection={<IconArrowRight size={20} />}
            >
              Начать бесплатно
            </Button>
            <Button
              component={Link}
              href="/login"
              size="xl"
              radius="xl"
              variant="light"
              className={classes.secondaryButton}
            >
              Войти
            </Button>
          </Group>
        </Stack>
      </Container>

      <Container size="lg" className={classes.statsSection}>
        <Grid gutter="xl">
          {stats.map((stat, index) => (
            <Grid.Col key={index} span={{ base: 6, sm: 3 }}>
              <Card
                padding="xl"
                radius="xl"
                className={classes.statCard}
              >
                <Stack gap="xs" align="center" ta="center">
                  <Text className={classes.statValue}>{stat.value}</Text>
                  <Text size="sm" c="dimmed" fw={500}>
                    {stat.label}
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      <Container size="lg" py={60} className={classes.featuresSection}>
        <Stack gap={60}>
          <Stack gap="lg" ta="center">
            
            <Title order={2} className={classes.sectionTitle}>
              Почему выбирают Мультибанк?
            </Title>
            <Text size="lg" className={classes.sectionDescription} maw={700} mx="auto">
              Мы объединяем все ваши банковские счета в единую платформу для
              удобного управления финансами
            </Text>
          </Stack>

          <Grid gutter="xl">
            {features.map((feature, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                <Card
                  padding="xl"
                  radius="xl"
                  h="100%"
                  className={classes.featureCard}
                  style={{
                    '--feature-gradient': feature.gradient,
                  } as React.CSSProperties}
                >
                  <Stack gap="md">
                    <div className={classes.featureIconWrapper}>
                      <ThemeIcon
                        size={64}
                        radius="xl"
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan', deg: 135 }}
                        className={classes.featureIcon}
                      >
                        <feature.icon size={32} stroke={2} />
                      </ThemeIcon>
                    </div>
                    <Title order={3} size="h4" fw={700} className={classes.featureTitle}>
                      {feature.title}
                    </Title>
                    <Text size="sm" c="dimmed" lh={1.7} className={classes.featureDescription}>
                      {feature.description}
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>

      <Container size="lg" py={80} className={classes.ctaSection}>
        <Stack gap="xl" align="center" ta="center">
          <Title order={2} className={classes.ctaTitle}>
            Начните управлять финансами уже сегодня
          </Title>
          <Text size="lg" c="dimmed" maw={500}>
            Присоединяйтесь к пользователям, которые уже управляют своими финансами с Мультибанком
          </Text>
          <Button
            component={Link}
            href="/registration"
            size="xl"
            radius="xl"
            variant="gradient"
            gradient={{ from: '#1e3a8a', to: '#3b82f6', deg: 135 }}
            className={classes.ctaButtonFinal}
            rightSection={<IconArrowRight size={20} />}
          >
            Создать аккаунт бесплатно
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}