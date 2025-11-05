'use client';

import { Container, SimpleGrid } from '@mantine/core';
import { useState } from 'react';
import BalanceAnalytics from "./balanceAnalytics/BalanceAnalytics";
import DonutChart from './donutChart/DonutChart';
import Cards from "./cards/Cards";

type BankName = 'ВТБ' | 'Т-Банк' | 'Сбер';

const DEFAULT_BANK: BankName = 'ВТБ';
const CONTAINER_MARGIN_RIGHT = 150;

const CHART_CONTAINER_STYLE: React.CSSProperties = {
  gridColumn: 'span 2',
  marginLeft: '200px',
  borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
  paddingLeft: '20px',
  display: 'flex',
  gap: '20px',
  alignItems: 'flex-start',
};

const DONUT_CHART_WRAPPER_STYLE: React.CSSProperties = {
  marginTop: '80px',
};

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
    <Container mr={CONTAINER_MARGIN_RIGHT} size="xl" py="xl">
      <SimpleGrid cols={{ base: 1, lg: 3 }} spacing="md">
        <div>
          <Cards onCardChange={handleCardChange} />
        </div>
        <div style={CHART_CONTAINER_STYLE}>
          <div style={DONUT_CHART_WRAPPER_STYLE}>
            <DonutChart selectedBank={selectedBank} />
          </div>
          <BalanceAnalytics selectedBank={selectedBank} />
        </div>
      </SimpleGrid>
    </Container>
  );
}
