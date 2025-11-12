'use client';

import { Container, SimpleGrid, Loader, Center, Alert } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useGetBankOverviewQuery, useGetTransactionsStatisticsQuery } from '@/lib/store/api/AuthApi';
import { useGetCurrentUserQuery } from '@/lib/store/api/UserApi';
import BalanceAnalytics from "./balanceAnalytics/BalanceAnalytics";
import DonutChart from './donutChart/DonutChart';
import Cards from "./cards/Cards";
import styles from './page.module.css';

export default function AnalyticsPage() {
  const router = useRouter();
  const { isSuccess, isLoading: authLoading } = useGetCurrentUserQuery();
  const [selectedBankId, setSelectedBankId] = useState<string | null>(null);
  
  useEffect(() => {
    if (!authLoading && !isSuccess) {
      router.replace('/login');
    }
  }, [authLoading, isSuccess, router]);

  const { data: accountsData, isLoading: accountsLoading, error: accountsError } = useGetBankOverviewQuery({});
  const { data: statisticsData, isLoading: statisticsLoading, error: statisticsError } = useGetTransactionsStatisticsQuery();

  if (authLoading || !isSuccess) {
    return (
      <Container className={styles.container} size="xl" py="xl">
        <Center h={400}>
          <Loader size="lg" />
        </Center>
      </Container>
    );
  }

  const selectedBank = selectedBankId || (accountsData?.banks && accountsData.banks.length > 0 ? accountsData.banks[0].bankId : null);

  const handleCardChange = (bankId: string) => {
    setSelectedBankId(bankId);
  };

  return (
    <Container className={styles.container} size="xl" py="xl">
      <SimpleGrid cols={{ base: 1, lg: 3 }} spacing="md">
        <div className={styles.cardsSection}>
          <Cards 
            accountsData={accountsData} 
            onCardChange={handleCardChange}
            selectedBankId={selectedBank}
          />
        </div>
        <div className={styles.chartSection}>
          <div className={styles.donutChartWrapper}>
            <DonutChart 
              selectedBankId={selectedBank}
              statisticsData={statisticsData}
            />
          </div>
          <BalanceAnalytics 
            selectedBankId={selectedBank}
            accountsData={accountsData}
            statisticsData={statisticsData}
          />
        </div>
      </SimpleGrid>
    </Container>
  );
}
