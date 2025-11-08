'use client';

import { Container, SimpleGrid } from '@mantine/core';
import { useState } from 'react';
import BalanceAnalytics from "./balanceAnalytics/BalanceAnalytics";
import DonutChart from './donutChart/DonutChart';
import Cards from "./cards/Cards";
import styles from './page.module.css';

type BankName = 'ВТБ' | 'Т-Банк' | 'Сбер';

const DEFAULT_BANK: BankName = 'ВТБ';

const isValidBankName = (bank: string): bank is BankName => {
  return bank === 'ВТБ' || bank === 'Т-Банк' || bank === 'Сбер';
};

export default function AnalyticsPage() {
  const [selectedBank, setSelectedBank] = useState<BankName>(DEFAULT_BANK);

  const handleCardChange = (bank: string) => {
    if (isValidBankName(bank)) {
      setSelectedBank(bank);
    }
  };

  return (
    <Container className={styles.container} size="xl" py="xl">
      <SimpleGrid cols={{ base: 1, lg: 3 }} spacing="md">
        <div className={styles.cardsSection}>
          <Cards onCardChange={handleCardChange} />
        </div>
        <div className={styles.chartSection}>
          <div className={styles.donutChartWrapper}>
            <DonutChart selectedBank={selectedBank} />
          </div>
          <BalanceAnalytics selectedBank={selectedBank} />
        </div>
      </SimpleGrid>
    </Container>
  );
}
