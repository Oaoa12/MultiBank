"use client"
import { Anchor, Button, Center, Container, Group, Paper, PasswordInput, Select, Stack, Stepper, Text, TextInput, Title } from "@mantine/core";
import { notifications } from '@mantine/notifications';
import { IconAt, IconCalendar, IconPhone, IconUser, IconUserCheck } from '@tabler/icons-react';
import { useLoginMutation, useRegisterMutation } from '@/lib/store/api/AuthApi';
import { useUpdateProfileAuthorizedMutation, useUpdateProfileMutation, useUpdateUserAuthorizedMutation, useUpdateUserMutation } from '@/lib/store/api/UserApi';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGetCurrentUserQuery } from '@/lib/store/api/UserApi';

export default function Registration() {
  const router = useRouter();
  const [active, setActive] = useState(0);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [gender, setGender] = useState<'MALE' | 'FEMALE' | ''>('');

  const [tempToken, setTempToken] = useState<string | null>(null);
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();
  const [login] = useLoginMutation();
  const [updateUser, { isLoading: isUpdateUserLoading }] = useUpdateUserMutation();
  const [updateUserAuthorized] = useUpdateUserAuthorizedMutation();
  const [updateProfile, { isLoading: isUpdateProfileLoading }] = useUpdateProfileMutation();
  const [updateProfileAuthorized] = useUpdateProfileAuthorizedMutation();
  const { isSuccess } = useGetCurrentUserQuery();
  const checkedMountRedirect = useRef(false);

  useEffect(() => {
    if (!checkedMountRedirect.current) {
      checkedMountRedirect.current = true;
      if (isSuccess) {
        router.replace('/dashboard');
      }
    }
  }, [router]);

  const handleStep1 = async () => {
    if (!email || !password) {
      notifications.show({ color: 'red', title: 'Заполните поля', message: 'Почта и пароль обязательны' });
      return;
    }
    try {
      const reg = await register({ email, password }).unwrap();
      const token = reg?.access_token;
      if (token) setTempToken(token);
      try {
        await login({ email, password }).unwrap();
      } catch {}
      if (username || phone) {
        if (token) {
          await updateUserAuthorized({ data: { username: username || undefined, phone: phone || undefined }, accessToken: token }).unwrap();
        } else {
          await updateUser({ username: username || undefined, phone: phone || undefined }).unwrap();
        }
      }
      setActive(1);
      notifications.show({ color: 'green', title: 'Шаг 1 выполнен', message: 'Аккаунт создан' });
    } catch (error: any) {
      notifications.show({ color: 'red', title: 'Ошибка регистрации', message: error?.data?.message || 'Попробуйте ещё раз' });
    }
  };

  const handleFinish = async () => {
    try {
      const body = {
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        gender: (gender as any) || undefined,
        birthDate: birthDate ? new Date(birthDate).toISOString() : undefined,
      };
      if (tempToken) {
        await updateProfileAuthorized({ data: body, accessToken: tempToken }).unwrap();
      } else {
        await updateProfile(body).unwrap();
      }
      notifications.show({ color: 'green', title: 'Готово', message: 'Профиль заполнен' });
      router.replace('/dashboard');
    } catch (error: any) {
      notifications.show({ color: 'red', title: 'Ошибка профиля', message: error?.data?.message || 'Попробуйте ещё раз' });
    }
  };

  return (
    <Center h={"100dvh"} style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}>
      <Container size={520}>
        <Paper shadow="lg" radius="md" p="xl" withBorder bg="white">
          <Stack>
            <Title order={2} c="#1e3a8a" ta="center">Регистрация Multibank</Title>
            <Text size="sm" c="dimmed" ta="center">2 шага: пользователь → профиль</Text>

            <Stepper active={active} allowNextStepsSelect={false}
              color="#1e3a8a"
            >
              <Stepper.Step icon={<IconUser size={18} />} label="Пользователь" description="Данные аккаунта">
                <Stack>
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
                    placeholder="Придумайте надёжный пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <TextInput
                    label="Имя пользователя (ник)"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    leftSection={<IconUserCheck size={18} />}
                  />
                  <TextInput
                    label="Телефон"
                    placeholder="+7-999-123-45-67"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    leftSection={<IconPhone size={18} />}
                  />
                  <Group justify="space-between">
                    <Anchor component={Link} href="/login" size="sm" c="#1e3a8a">У меня уже есть аккаунт</Anchor>
                    <Button onClick={handleStep1} loading={isRegisterLoading || isUpdateUserLoading}
                      variant="gradient" gradient={{ from: '#1e3a8a', to: '#3b82f6' }} radius="md"
                    >Далее</Button>
                  </Group>
                </Stack>
              </Stepper.Step>
              <Stepper.Step icon={<IconCalendar size={18} />} label="Профиль" description="О себе">
                <Stack>
                  <TextInput
                    label="Имя"
                    placeholder="Иван"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <TextInput
                    label="Фамилия"
                    placeholder="Иванов"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <TextInput
                    label="Дата рождения"
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                  <Select
                    label="Пол"
                    placeholder="Выберите"
                    data={[
                      { value: 'MALE', label: 'Мужской' },
                      { value: 'FEMALE', label: 'Женский' },
                    ]}
                    value={gender}
                    onChange={(v) => setGender((v as any) || '')}
                  />
                  <Group justify="space-between">
                    <Button variant="default" onClick={() => setActive(0)}>Назад</Button>
                    <Button onClick={handleFinish} loading={isUpdateProfileLoading}
                      variant="gradient" gradient={{ from: '#1e3a8a', to: '#3b82f6' }} radius="md"
                    >Завершить</Button>
                  </Group>
                </Stack>
              </Stepper.Step>
              <Stepper.Completed>
                <Text ta="center">Готово!</Text>
              </Stepper.Completed>
            </Stepper>

          </Stack>
        </Paper>
      </Container>
    </Center>
  )
}