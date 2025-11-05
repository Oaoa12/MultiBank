"use client"
import { Anchor, Button, Center, Container, Group, Paper, PasswordInput, Stack, Text, TextInput, Title } from "@mantine/core";
import { notifications } from '@mantine/notifications';
import { IconAt, IconLock } from '@tabler/icons-react';
import { useLoginMutation } from '@/lib/store/api/AuthApi';
import { userApi } from '@/lib/store/api/UserApi';
import { authApi } from '@/lib/store/api/AuthApi';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGetCurrentUserQuery } from '@/lib/store/api/UserApi';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const { isSuccess } = useGetCurrentUserQuery();

  useEffect(() => {
    if (isSuccess) {
      router.replace('/dashboard');
    }
  }, [isSuccess, router]);

  const handleSubmit = async () => {
    try {
      dispatch(userApi.util.resetApiState());
      dispatch(authApi.util.resetApiState());

      await login({ email, password }).unwrap();
      router.replace('/dashboard');
    } catch (error: any) {
      notifications.show({
        color: 'red',
        title: 'Не удалось войти',
        message: error?.data?.message || 'Проверьте почту и пароль',
      });
    }
  };

  return (
    <Center h={"100dvh"} style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}>
      <Container size={420}>
        <Paper shadow="lg" radius="md" p="xl" withBorder bg="white">
          <Stack>
            <Title order={2} c="#1e3a8a" ta="center">Вход в Multibank</Title>
            <Text size="sm" c="dimmed" ta="center">Синий и белый — наш стиль</Text>

            <TextInput
              label="Почта"
              placeholder="ivanov@mail.ru"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftSection={<IconAt size={18} />}
              required
            />
            <PasswordInput
              label="Пароль"
              placeholder="Ваш пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftSection={<IconLock size={18} />}
              required
            />
            <Button
              onClick={handleSubmit}
              loading={isLoading}
              radius="md"
              size="md"
              variant="gradient"
              gradient={{ from: '#1e3a8a', to: '#3b82f6' }}
            >
              Войти
            </Button>
            <Group justify="center">
              <Text size="sm" c="dimmed">Нет аккаунта?</Text>
              <Anchor component={Link} href="/registration" size="sm" c="#1e3a8a">Зарегистрироваться</Anchor>
            </Group>
          </Stack>
        </Paper>
      </Container>
    </Center>
  )
}