'use client';
import { Provider } from 'react-redux';
import { store } from '@/lib/store/Index';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

const theme = createTheme({
  fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  headings: {
    fontFamily: 'var(--font-inter), sans-serif',
    fontWeight: '700',
  },
  defaultRadius: 'md',
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <Provider store={store}>
          <Notifications position="top-center" />
          {children}
        </Provider>
      </ModalsProvider>
    </MantineProvider>
  );
}