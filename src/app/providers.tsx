'use client';
import { Provider } from 'react-redux';
import { store } from '@/lib/store/Index';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import { useEffect } from 'react';

const theme = createTheme({
  fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  headings: {
    fontFamily: 'var(--font-inter), sans-serif',
    fontWeight: '700',
  },
  defaultRadius: 'md',
});

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Remove Next.js Dev Tools indicator
    const removeDevTools = () => {
      const indicator = document.getElementById('devtools-indicator');
      if (indicator) {
        indicator.remove();
      }
      
      const toast = document.querySelector('[data-nextjs-toast]');
      if (toast) {
        toast.remove();
      }
      
      const nextjsToast = document.querySelector('.nextjs-toast');
      if (nextjsToast) {
        nextjsToast.remove();
      }
    };

    // Remove immediately
    removeDevTools();

    // Also watch for it being added dynamically
    const observer = new MutationObserver(() => {
      removeDevTools();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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