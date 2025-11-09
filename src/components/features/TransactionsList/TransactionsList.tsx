'use client';

import { useState, useMemo, useEffect } from 'react';
import {
  Card,
  Text,
  Group,
  Stack,
  Badge,
  Loader,
  Center,
  Title,
  Button,
  Select,
  Alert,
} from '@mantine/core';
import {
  IconArrowUpRight,
  IconArrowDownRight,
  IconClock,
  IconCheck,
  IconAlertCircle,
  IconHistory,
} from '@tabler/icons-react';
import { useGetAccountTransactionsQuery, useGetBankOverviewQuery } from '@/lib/store/api/AuthApi';

const PAGE_STYLES = {
  background: '#F5F7FA',
  cardBackground: '#FFFFFF',
  paperBackground: '#F8F9FA',
  buttonBlue: '#1E90FF',
  successGreen: '#28a745',
  accentPurple: '#9C27B0',
  accentOrange: '#FF6B35',
  textPrimary: '#1A1A1A',
  textSecondary: '#6C757D',
  borderColor: '#E0E0E0',
} as const;

const formatBalance = (balance: string | number | undefined | null, currency: string = 'RUB'): string => {
  if (balance === undefined || balance === null || balance === '') {
    return '0.00';
  }
  const num = typeof balance === 'string' ? parseFloat(balance) : balance;
  if (isNaN(num)) {
    return '0.00';
  }
  return num.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ' + currency;
};

interface TransactionsListProps {
  bankId?: string;
  accountId?: string;
  showBankSelector?: boolean;
  showAccountSelector?: boolean;
}

export default function TransactionsList({ 
  bankId: initialBankId, 
  accountId: initialAccountId,
  showBankSelector = false,
  showAccountSelector = false,
}: TransactionsListProps) {
  const [selectedBankId, setSelectedBankId] = useState<string | null>(initialBankId || null);
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(initialAccountId || null);

  const { data: accountsData, isLoading: accountsLoading } = useGetBankOverviewQuery({});
  
  const { data: transactionsData, isLoading: transactionsLoading, error: transactionsError } = 
    useGetAccountTransactionsQuery(
      { bankId: selectedBankId || '', accountId: selectedAccountId || '' },
      { skip: !selectedBankId || !selectedAccountId }
    );

  const banksOptions = useMemo(() => {
    if (!accountsData?.banks) return [];
    return accountsData.banks.map(bank => ({
      value: bank.bankId,
      label: bank.bankId.toUpperCase(),
    }));
  }, [accountsData]);

  const accountsOptions = useMemo(() => {
    if (!accountsData?.banks || !selectedBankId) return [];
    const bank = accountsData.banks.find(b => b.bankId === selectedBankId);
    if (!bank?.accounts) return [];
    return bank.accounts.map(account => ({
      value: account.accountId,
      label: `${account.accountName || account.nickname || 'Счет'} (${account.accountNumber?.slice(-4) || ''})`,
    }));
  }, [accountsData, selectedBankId]);

  useEffect(() => {
    if (!selectedBankId && accountsData?.banks && accountsData.banks.length > 0) {
      const firstBank = accountsData.banks[0];
      setSelectedBankId(firstBank.bankId);
      if (firstBank.accounts && firstBank.accounts.length > 0) {
        setSelectedAccountId(firstBank.accounts[0].accountId);
      }
    }
  }, [accountsData, selectedBankId]);

  const transactions = useMemo(() => {
    if (!transactionsData?.data?.transaction) return [];
    return [...transactionsData.data.transaction].sort((a, b) => {
      const dateA = new Date(a.bookingDateTime || a.valueDateTime || 0).getTime();
      const dateB = new Date(b.bookingDateTime || b.valueDateTime || 0).getTime();
      return dateB - dateA;
    });
  }, [transactionsData]);

  if (accountsLoading) {
    return (
      <Center py="xl">
        <Loader size="md" />
      </Center>
    );
  }

  if (!accountsData?.banks || accountsData.banks.length === 0) {
    return (
      <Alert icon={<IconAlertCircle size={16} />} title="Нет подключенных банков" color="blue">
        Подключите банк на странице дашборда для просмотра транзакций.
      </Alert>
    );
  }

  return (
    <Card
      padding="xl"
      radius="xl"
      style={{
        background: PAGE_STYLES.cardBackground,
        border: `1px solid ${PAGE_STYLES.borderColor}`,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Stack gap="md">
        <Group justify="space-between" align="center">
          <Title order={3} size="h4" fw={600} c={PAGE_STYLES.textPrimary}>
            Транзакции
          </Title>
        </Group>

        {(showBankSelector || showAccountSelector) && (
          <Group gap="md">
            {showBankSelector && (
              <Select
                label="Банк"
                placeholder="Выберите банк"
                value={selectedBankId}
                onChange={(value) => {
                  setSelectedBankId(value);
                  setSelectedAccountId(null);
                  if (value && accountsData?.banks) {
                    const bank = accountsData.banks.find(b => b.bankId === value);
                    if (bank?.accounts && bank.accounts.length > 0) {
                      setSelectedAccountId(bank.accounts[0].accountId);
                    }
                  }
                }}
                data={banksOptions}
                style={{ flex: 1 }}
              />
            )}
            {showAccountSelector && selectedBankId && (
              <Select
                label="Счет"
                placeholder="Выберите счет"
                value={selectedAccountId}
                onChange={(value) => setSelectedAccountId(value)}
                data={accountsOptions}
                style={{ flex: 1 }}
              />
            )}
          </Group>
        )}

        {transactionsError && (
          <Alert icon={<IconAlertCircle size={16} />} title="Ошибка загрузки транзакций" color="red">
            {transactionsError && 'data' in transactionsError 
              ? String(transactionsError.data) 
              : 'Не удалось загрузить транзакции'}
          </Alert>
        )}

        {transactionsLoading ? (
          <Center py="xl">
            <Loader size="md" />
          </Center>
        ) : !selectedBankId || !selectedAccountId ? (
          <Center py="xl">
            <Stack align="center" gap="xs">
              <IconHistory size={48} color={PAGE_STYLES.textSecondary} />
              <Text size="sm" c={PAGE_STYLES.textSecondary} ta="center">
                Выберите банк и счет для просмотра транзакций
              </Text>
            </Stack>
          </Center>
        ) : transactions.length === 0 ? (
          <Center py="xl">
            <Stack align="center" gap="xs">
              <IconHistory size={48} color={PAGE_STYLES.textSecondary} />
              <Text size="sm" c={PAGE_STYLES.textSecondary} ta="center">
                Нет транзакций для выбранного счета
              </Text>
            </Stack>
          </Center>
        ) : (
          <Stack gap={0}>
            {transactions.map((transaction, index) => {
              const transactionDate = transaction.bookingDateTime || transaction.valueDateTime;
              const date = transactionDate ? new Date(transactionDate) : new Date();
              const day = date.getDate();
              const monthNames = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
              const month = monthNames[date.getMonth()] || '';
              const hours = date.getHours().toString().padStart(2, '0');
              const minutes = date.getMinutes().toString().padStart(2, '0');
              const timeStr = `${hours}:${minutes}`;

              const amount = parseFloat(transaction.amount?.amount || '0');
              const currency = transaction.amount?.currency || 'RUB';
              const isCredit = transaction.creditDebitIndicator === 'Credit';
              const amountStr = isCredit
                ? `+${formatBalance(Math.abs(amount).toString(), currency)}`
                : `-${formatBalance(Math.abs(amount).toString(), currency)}`;

              const name = transaction.transactionInformation || 'Транзакция';
              const status = transaction.status || 'Booked';
              const transactionCode = transaction.bankTransactionCode?.code || '';

              return (
                <Card
                  key={transaction.transactionId || index}
                  p="md"
                  style={{
                    backgroundColor: index % 2 === 0 ? 'transparent' : PAGE_STYLES.paperBackground,
                    borderRadius: '12px',
                    border: `1px solid ${PAGE_STYLES.borderColor}`,
                    marginBottom: '8px',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F8F9FA';
                    e.currentTarget.style.borderColor = PAGE_STYLES.buttonBlue;
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = index % 2 === 0 ? 'transparent' : PAGE_STYLES.paperBackground;
                    e.currentTarget.style.borderColor = PAGE_STYLES.borderColor;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Group justify="space-between" wrap="nowrap" gap="md" align="flex-start">
                    <Group gap="md" style={{ flex: 1, minWidth: 0 }} align="flex-start">
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '10px',
                          background: isCredit
                            ? `${PAGE_STYLES.successGreen}12`
                            : `${PAGE_STYLES.accentOrange}12`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {isCredit ? (
                          <IconArrowUpRight size={20} color={PAGE_STYLES.successGreen} strokeWidth={2.5} />
                        ) : (
                          <IconArrowDownRight size={20} color={PAGE_STYLES.accentOrange} strokeWidth={2.5} />
                        )}
                      </div>

                      <Stack gap={6} style={{ flex: 1, minWidth: 0, maxWidth: '100%' }}>
                        <Text 
                          size="sm" 
                          fw={600} 
                          style={{ 
                            color: PAGE_STYLES.textPrimary, 
                            lineHeight: 1.4,
                            fontSize: '14px',
                            letterSpacing: '-0.01em',
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word'
                          }}
                          lineClamp={2}
                        >
                          {name}
                        </Text>
                        
                        <Group gap={8} wrap="wrap" align="center" style={{ width: '100%' }}>
                          <Group gap={4} wrap="nowrap" style={{ flexShrink: 0 }}>
                            <IconClock size={13} color={PAGE_STYLES.textSecondary} strokeWidth={2} />
                            <Text 
                              size="xs" 
                              c={PAGE_STYLES.textSecondary}
                              style={{
                                fontSize: '12px',
                                lineHeight: 1.4,
                                fontWeight: 400,
                                whiteSpace: 'nowrap'
                              }}
                            >
                              {day} {month} {date.getFullYear() !== new Date().getFullYear() ? date.getFullYear() : ''} в {timeStr}
                            </Text>
                          </Group>
                        </Group>
                        
                        {transactionCode && (
                          <Text 
                            size="xs" 
                            c={PAGE_STYLES.textSecondary}
                            style={{ 
                              fontSize: '11px',
                              lineHeight: 1.4,
                              fontWeight: 400,
                              opacity: 0.7,
                              wordBreak: 'break-word',
                              overflowWrap: 'break-word'
                            }}
                            lineClamp={1}
                          >
                            {transactionCode}
                          </Text>
                        )}
                      </Stack>
                    </Group>

                    <Stack gap={4} align="flex-end" style={{ flexShrink: 0 }}>
                      <Text
                        fw={700}
                        size="sm"
                        style={{
                          color: isCredit ? PAGE_STYLES.successGreen : PAGE_STYLES.textPrimary,
                          whiteSpace: 'nowrap',
                          fontSize: '15px',
                          lineHeight: 1.3,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {amountStr}
                      </Text>
                      {status === 'Booked' && (
                        <Badge
                          size="xs"
                          variant="light"
                          color="green"
                          leftSection={<IconCheck size={9} />}
                          style={{ 
                            flexShrink: 0,
                            fontSize: '10px',
                            height: '18px',
                            padding: '0 6px'
                          }}
                        >
                          Подтверждено
                        </Badge>
                      )}
                    </Stack>
                  </Group>
                </Card>
              );
            })}
          </Stack>
        )}
      </Stack>
    </Card>
  );
}

