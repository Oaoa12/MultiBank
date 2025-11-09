import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface RegisterData {
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  user: {
    id: number;
    username: string;
    email: string;
    phone?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ProfileResponse {
  id: number;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  birthDate?: string;
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
  deletedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Bank {
  id: string;
  name: string;
}

export interface BanksResponse {
  banks: string[]; // Массив идентификаторов банков: ['vbank', 'sbank', 'abank']
}

export interface BankConsentRequest {
  client_id?: string;
}

export interface BankConsentResponse {
  message: string;
  requestId: string;
}

export interface BankConsentStatus {
  status: string;
  requestId: string;
  consentId?: string;
}

export interface BankConsentInfo {
  id: number;
  userId: number;
  bankId: string;
  requestId: string;
  consentId: string;
  status: string;
  message: string;
  permissions: string[];
  reason: string;
  requestingBank: string;
  requestingBankName: string;
  autoApproved: boolean;
  createdAt: string;
  approvedAt: string;
  expiredAt: string;
  updatedAt: string;
}

export interface AccountIdentification {
  id: number;
  bankAccountId: number;
  schemeName: string;
  identification: string;
  name: string;
  createdAt: string;
}

export interface AccountBalance {
  type: string;
  creditDebitIndicator: string;
  amount: string;
  currency: string;
  reportedAt: string;
}

export interface BankAccount {
  id: number;
  userId: number;
  bankId: string;
  bankName: string;
  accountId: string;
  accountNumber: string;
  accountName: string;
  nickname: string;
  currency: string;
  balance: string;
  availableBalance: string;
  isActive: boolean;
  accountType: string;
  accountSubType: string;
  status: string;
  openingDate: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  balanceType: string;
  balanceCreditDebitIndicator: string;
  balanceReportedAt: string;
  availableBalanceCurrency: string;
  availableBalanceCreditDebitIndicator: string;
  availableBalanceReportedAt: string;
  bankConsentId: number;
  bankConsent: BankConsentInfo;
  accountIdentifications: AccountIdentification[];
  balances: AccountBalance[];
  transactions: any[];
  categories: any[];
}

export interface BankWithAccounts {
  bankId: string;
  accounts: BankAccount[];
}

export interface BankOverviewResponse {
  banks: BankWithAccounts[];
  totalBanks: number;
  totalAccounts: number;
}

export interface BankSyncResponse {
  started: boolean;
  message: string;
}

export interface BankAccountSimple {
  accountId: string;
  accountName: string;
  accountType: string;
  currency: string;
  balance: number;
  availableBalance: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface BankAccountsResponse {
  accounts: BankAccountSimple[];
  totalCount: number;
}

export interface TransactionAmount {
  amount: string;
  currency: string;
}

export interface BankTransactionCode {
  code: string;
}

export interface Transaction {
  accountId: string;
  transactionId: string;
  amount: TransactionAmount;
  creditDebitIndicator: 'Credit' | 'Debit';
  status: string;
  bookingDateTime: string;
  valueDateTime: string;
  transactionInformation: string;
  bankTransactionCode: BankTransactionCode;
}

export interface TransactionsResponse {
  data: {
    transaction: Transaction[];
  };
}

// Новые интерфейсы для API транзакций из туториала
export interface TransactionAccount {
  id: number;
  bankName: string;
  accountNumber: string;
  currency: string;
  balance: number;
}

export interface TransactionFromAPI {
  id: number;
  userId: number;
  accountId: number;
  currency: string;
  description: string | null;
  type: 'EXPENSE' | 'INCOME';
  amount: number;
  category: string;
  merchant?: string | null;
  location?: string | null;
  tags?: string[];
  isRecurring: boolean;
  recurringId?: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  bookingDateTime?: string; // Реальная дата транзакции
  valueDateTime?: string; // Реальная дата транзакции
  account?: TransactionAccount;
}

export interface TransactionsAPIResponse {
  transactions: TransactionFromAPI[];
  total: number;
  page: number;
  limit: number;
}

export interface TransactionsFilters {
  page?: number;
  limit?: number;
  type?: 'EXPENSE' | 'INCOME';
  category?: string;
  accountId?: number;
  merchant?: string;
  startDate?: string; // YYYY-MM-DD
  endDate?: string; // YYYY-MM-DD
  search?: string;
}

// Интерфейсы для статистики
export interface CategoryStatistic {
  category: string;
  amount: number;
}

export interface MonthlyStatistic {
  month: string;
  income: number;
  expenses: number;
  categories: CategoryStatistic[];
}

export interface TransactionsStatisticsResponse {
  monthlyStats?: MonthlyStatistic[]; // Реальное поле из API
  monthly?: MonthlyStatistic[]; // Альтернативное поле
  totalIncome?: number;
  totalExpenses?: number;
  transactionsCount?: number;
  bankIncomes?: Record<string, number>;
  bankExpenses?: Record<string, number>;
  categoryStats?: CategoryStatistic[]; // Статистика по категориям
  // Также может быть массив напрямую
  [key: string]: any;
}

export interface CategoriesResponse {
  categories: string[];
}

// Интерфейсы для API целей
export type GoalPriority = 'LOW' | 'MEDIUM' | 'HIGH';
export type GoalStatus = 'ACTIVE' | 'COMPLETED' | 'PAUSED' | 'CANCELLED';

export interface FinancialGoal {
  id: number;
  userId: number;
  title: string;
  description?: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  category?: string;
  priority: GoalPriority;
  status: GoalStatus;
  autoSave: boolean;
  saveAmount?: number;
  saveFrequency?: string;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
  deletedAt?: string;
}

export interface GoalsResponse {
  goals: FinancialGoal[];
  total: number;
  page: number;
  limit: number;
}

export interface GoalsFilters {
  status?: GoalStatus;
  priority?: GoalPriority;
  category?: string;
  page?: number;
  limit?: number;
}

export interface CreateGoalData {
  title: string;
  description?: string;
  targetAmount: number;
  deadline: string;
  category?: string;
  priority?: GoalPriority;
  autoSave?: boolean;
  saveAmount?: number;
  saveFrequency?: string;
}

export interface UpdateGoalData {
  title?: string;
  description?: string;
  targetAmount?: number;
  currentAmount?: number;
  deadline?: string;
  category?: string;
  priority?: GoalPriority;
  status?: GoalStatus;
  autoSave?: boolean;
  saveAmount?: number;
  saveFrequency?: string;
}

// We rely on secure HTTP-only cookies; no JS access to token

const baseQuery = fetchBaseQuery({ 
  baseUrl: '/api/',
  credentials: 'include',
  prepareHeaders: async (headers, { getState }) => {
    // Передаем токен из localStorage в Authorization header
    // Это необходимо, так как cookies не работают между разными доменами
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access_token') || 
                    localStorage.getItem('token') || 
                    sessionStorage.getItem('access_token') || 
                    sessionStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return headers;
  },
});

// Получаем URL API из переменной окружения или используем значение по умолчанию
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://176.114.89.172:3000';

const baseQueryWithoutApi = fetchBaseQuery({ 
  baseUrl: API_BASE_URL,
  credentials: 'include',
  prepareHeaders: async (headers, { getState }) => {
    // Передаем токен из localStorage в Authorization header
    // Это необходимо, так как cookies не работают между разными доменами
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access_token') || 
                    localStorage.getItem('token') || 
                    sessionStorage.getItem('access_token') || 
                    sessionStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return headers;
  },
});

// Base query для транзакций API с HTTP-only cookies
// We rely on secure HTTP-only cookies; no JS access to token
const baseQueryTransactions = fetchBaseQuery({ 
  baseUrl: API_BASE_URL,
  credentials: 'include',
  prepareHeaders: async (headers, { getState }) => {
    // Если токен есть в localStorage (для обратной совместимости), используем его
    // Но в основном полагаемся на HTTP-only cookies через credentials: 'include'
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access_token') || 
                    localStorage.getItem('token') || 
                    sessionStorage.getItem('access_token') || 
                    sessionStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      // Если токена нет в localStorage, полагаемся на cookies
      // Бэкенд должен читать токен из cookies автоматически
    }
    return headers;
  },
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    register: builder.mutation<AuthResponse, RegisterData>({
      query: (userData) => ({
        url: 'auth/register',
        method: 'POST',
        body: userData,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // Сохраняем токен в localStorage для использования в Authorization header
          // Это необходимо, так как cookies не работают между разными доменами
          if (data?.access_token && typeof window !== 'undefined') {
            localStorage.setItem('access_token', data.access_token);
          }
        } catch (error) {
          // Ошибка регистрации обрабатывается в компоненте
        }
      },
      invalidatesTags: ['Auth'],
    }),
    login: builder.mutation<AuthResponse, LoginData>({
      query: (credentials) => ({
        url: 'auth/login', 
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // Сохраняем токен в localStorage для использования в Authorization header
          // Это необходимо, так как cookies не работают между разными доменами
          if (data?.access_token && typeof window !== 'undefined') {
            localStorage.setItem('access_token', data.access_token);
          }
        } catch (error) {
          // Ошибка логина обрабатывается в компоненте
        }
      },
      invalidatesTags: ['Auth'],
    }),
    getAuthProfile: builder.query<ProfileResponse, void>({
      query: () => 'auth/profile',
      providesTags: ['Auth'],
    }),
    logout: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
    getBanks: builder.query<BanksResponse, void>({
      queryFn: async (arg, api, extraOptions) => {
        // Используем отдельный baseQuery без префикса /api/
        const result = await baseQueryWithoutApi('/bank/supported/list', api, extraOptions);
        if (result.error) {
          return { error: result.error };
        }
        return { data: result.data as BanksResponse };
      },
      providesTags: ['Auth'],
    }),
    bankConsent: builder.mutation<BankConsentResponse, { bankId: string; data?: BankConsentRequest }>({
      queryFn: async ({ bankId, data }, api, extraOptions) => {
        // Используем отдельный baseQuery без префикса /api/
        const result = await baseQueryWithoutApi(
          {
            url: `/connection/connect/${bankId}`,
            method: 'POST',
            body: data || {},
          },
          api,
          extraOptions
        );
        if (result.error) {
          return { error: result.error };
        }
        return { data: result.data as BankConsentResponse };
      },
      invalidatesTags: ['Auth'],
    }),
    getBankConsentStatus: builder.query<BankConsentStatus, { bankId: string; requestId: string }>({
      queryFn: async ({ bankId, requestId }, api, extraOptions) => {
        // Используем отдельный baseQuery без префикса /api/
        // Пробуем разные варианты эндпоинтов в порядке приоритета
        const endpoints = [
          `/connection/status/${bankId}/${requestId}`,
          `/auth/bank-consent/${bankId}/${requestId}`,
          `/bank/consent/${bankId}/${requestId}`,
        ];
        
        let lastError: any = null;
        
        for (const endpoint of endpoints) {
          const result = await baseQueryWithoutApi(
            {
              url: endpoint,
            },
            api,
            extraOptions
          );
          
          // Если успешно, возвращаем результат
          if (!result.error) {
            return { data: result.data as BankConsentStatus };
          }
          
          // Если не 404, возвращаем ошибку сразу (не пробуем другие эндпоинты)
          if (result.error.status !== 404) {
            return { error: result.error };
          }
          
          lastError = result.error;
        }
        
        // Если все эндпоинты вернули 404, возвращаем последнюю ошибку
        return { error: lastError };
      },
      providesTags: ['Auth'],
    }),
    getBankOverview: builder.query<BankOverviewResponse, { refresh?: boolean }>({
      queryFn: async ({ refresh }, api, extraOptions) => {
        // Используем отдельный baseQuery без префикса /api/
        // Добавляем параметр refresh только если он явно указан как true
        const url = refresh === true 
          ? `/bank/overview?refresh=true`
          : `/bank/overview`;
        const result = await baseQueryWithoutApi(
          {
            url,
          },
          api,
          extraOptions
        );
        if (result.error) {
          return { error: result.error };
        }
        return { data: result.data as BankOverviewResponse };
      },
      providesTags: ['Auth'],
    }),
    syncBanks: builder.mutation<BankSyncResponse, void>({
      queryFn: async (arg, api, extraOptions) => {
        // Используем отдельный baseQuery без префикса /api/
        const result = await baseQueryWithoutApi(
          {
            url: '/bank/sync',
            method: 'GET',
          },
          api,
          extraOptions
        );
        if (result.error) {
          return { error: result.error };
        }
        return { data: result.data as BankSyncResponse };
      },
      invalidatesTags: ['Auth'],
    }),
    getBankAccounts: builder.query<BankAccountsResponse, string>({
      queryFn: async (bankId, api, extraOptions) => {
        // Используем отдельный baseQuery без префикса /api/
        const result = await baseQueryWithoutApi(
          {
            url: `/bank/accounts/${bankId}`,
          },
          api,
          extraOptions
        );
        if (result.error) {
          return { error: result.error };
        }
        return { data: result.data as BankAccountsResponse };
      },
      providesTags: ['Auth'],
    }),
    getAccountTransactions: builder.query<TransactionsResponse, { bankId: string; accountId: string }>({
      queryFn: async ({ bankId, accountId }, api, extraOptions) => {
        // Используем отдельный baseQuery без префикса /api/
        const result = await baseQueryWithoutApi(
          {
            url: `/transactions/${bankId}/accId/${accountId}`,
          },
          api,
          extraOptions
        );
        if (result.error) {
          return { error: result.error };
        }
        return { data: result.data as TransactionsResponse };
      },
      providesTags: ['Auth'],
    }),
    // Новый эндпоинт для получения транзакций по туториалу
    getTransactions: builder.query<TransactionsAPIResponse, TransactionsFilters | void>({
      queryFn: async (filters, api, extraOptions) => {
        const params = new URLSearchParams();
        const filterParams = filters || {};
        
        // Добавляем параметры фильтрации
        if (filterParams.page) params.append('page', filterParams.page.toString());
        if (filterParams.limit) params.append('limit', filterParams.limit.toString());
        if (filterParams.type) params.append('type', filterParams.type);
        if (filterParams.category) params.append('category', filterParams.category);
        if (filterParams.accountId) params.append('accountId', filterParams.accountId.toString());
        if (filterParams.merchant) params.append('merchant', filterParams.merchant);
        if (filterParams.startDate) params.append('startDate', filterParams.startDate);
        if (filterParams.endDate) params.append('endDate', filterParams.endDate);
        if (filterParams.search) params.append('search', filterParams.search);
        
        const url = `/transactions${params.toString() ? `?${params.toString()}` : ''}`;
        
        if (process.env.NODE_ENV === 'development') {
          console.log('getTransactions - Request URL:', `${API_BASE_URL}${url}`);
          console.log('getTransactions - Filters:', filterParams);
        }
        
        const result = await baseQueryTransactions(
          {
            url,
          },
          api,
          extraOptions
        );
        
        if (process.env.NODE_ENV === 'development') {
          if (result.error) {
            console.error('getTransactions - Error:', result.error);
            console.error('getTransactions - Error status:', result.error?.status);
            console.error('getTransactions - Error data:', result.error?.data);
          } else {
            console.log('getTransactions - Success:', result.data);
            console.log('getTransactions - Transactions count:', (result.data as TransactionsAPIResponse)?.transactions?.length || 0);
          }
        }
        
        if (result.error) {
          return { error: result.error };
        }
        return { data: result.data as TransactionsAPIResponse };
      },
      providesTags: ['Auth'],
    }),
    // API для статистики транзакций
    getTransactionsStatistics: builder.query<TransactionsStatisticsResponse, void>({
      queryFn: async (arg, api, extraOptions) => {
        // Пробуем разные варианты эндпоинтов
        const endpoints = [
          '/transactions/statistics/monthly',
          '/transactions/statistics',
          '/statistics/monthly',
        ];
        
        let lastError: any = null;
        
        for (const endpoint of endpoints) {
          const result = await baseQueryTransactions(
            {
              url: endpoint,
            },
            api,
            extraOptions
          );
          
          // Если успешно, возвращаем результат
          if (!result.error) {
            return { data: result.data as TransactionsStatisticsResponse };
          }
          
          // Если не 404, возвращаем ошибку сразу (не пробуем другие эндпоинты)
          if (result.error.status !== 404) {
            return { error: result.error };
          }
          
          lastError = result.error;
        }
        
        // Если все эндпоинты вернули 404, возвращаем пустые данные вместо ошибки
        // Это позволяет компонентам работать без статистики
        return { 
          data: {
            monthlyStats: [],
            totalIncome: 0,
            totalExpenses: 0,
            transactionsCount: 0,
            bankIncomes: {},
            bankExpenses: {},
            categoryStats: [],
          } as TransactionsStatisticsResponse 
        };
      },
      providesTags: ['Auth'],
    }),
    // API для получения категорий
    getCategories: builder.query<CategoriesResponse, void>({
      queryFn: async (arg, api, extraOptions) => {
        const result = await baseQueryTransactions(
          {
            url: '/transactions/categories',
          },
          api,
          extraOptions
        );
        
        if (result.error) {
          return { error: result.error };
        }
        return { data: result.data as CategoriesResponse };
      },
      providesTags: ['Auth'],
    }),
    // API для целей
    getGoals: builder.query<GoalsResponse, GoalsFilters | void>({
      queryFn: async (filters, api, extraOptions) => {
        const params = new URLSearchParams();
        const filterParams = filters || {};
        
        if (filterParams.status) params.append('status', filterParams.status);
        if (filterParams.priority) params.append('priority', filterParams.priority);
        if (filterParams.category) params.append('category', filterParams.category);
        if (filterParams.page) params.append('page', filterParams.page.toString());
        if (filterParams.limit) params.append('limit', filterParams.limit.toString());
        
        const url = `/goals${params.toString() ? `?${params.toString()}` : ''}`;
        
        const result = await baseQueryTransactions(
          {
            url,
          },
          api,
          extraOptions
        );
        
        if (result.error) {
          return { error: result.error };
        }
        return { data: result.data as GoalsResponse };
      },
      providesTags: ['Auth'],
    }),
    getGoalById: builder.query<FinancialGoal, number>({
      queryFn: async (id, api, extraOptions) => {
        const result = await baseQueryTransactions(
          {
            url: `/goals/${id}`,
          },
          api,
          extraOptions
        );
        
        if (result.error) {
          return { error: result.error };
        }
        return { data: result.data as FinancialGoal };
      },
      providesTags: ['Auth'],
    }),
    createGoal: builder.mutation<FinancialGoal, CreateGoalData>({
      queryFn: async (goalData, api, extraOptions) => {
        const result = await baseQueryTransactions(
          {
            url: '/goals',
            method: 'POST',
            body: goalData,
          },
          api,
          extraOptions
        );
        
        if (result.error) {
          return { error: result.error };
        }
        return { data: result.data as FinancialGoal };
      },
      invalidatesTags: ['Auth'],
    }),
    updateGoal: builder.mutation<FinancialGoal, { id: number; data: UpdateGoalData }>({
      queryFn: async ({ id, data }, api, extraOptions) => {
        const result = await baseQueryTransactions(
          {
            url: `/goals/${id}`,
            method: 'PATCH',
            body: data,
          },
          api,
          extraOptions
        );
        
        if (result.error) {
          return { error: result.error };
        }
        return { data: result.data as FinancialGoal };
      },
      invalidatesTags: ['Auth'],
    }),
    deleteGoal: builder.mutation<{ message: string; id: number }, number>({
      queryFn: async (id, api, extraOptions) => {
        const result = await baseQueryTransactions(
          {
            url: `/goals/${id}`,
            method: 'DELETE',
          },
          api,
          extraOptions
        );
        
        if (result.error) {
          return { error: result.error };
        }
        return { data: result.data as { message: string; id: number } };
      },
      invalidatesTags: ['Auth'],
    }),
    addToGoal: builder.mutation<FinancialGoal, { id: number; amount: number }>({
      queryFn: async ({ id, amount }, api, extraOptions) => {
        const result = await baseQueryTransactions(
          {
            url: `/goals/${id}/add`,
            method: 'POST',
            body: { amount },
          },
          api,
          extraOptions
        );
        
        if (result.error) {
          return { error: result.error };
        }
        return { data: result.data as FinancialGoal };
      },
      invalidatesTags: ['Auth'],
    }),
    updateGoalStatus: builder.mutation<FinancialGoal, { id: number; status: GoalStatus }>({
      queryFn: async ({ id, status }, api, extraOptions) => {
        const result = await baseQueryTransactions(
          {
            url: `/goals/${id}/status`,
            method: 'PATCH',
            body: { status },
          },
          api,
          extraOptions
        );
        
        if (result.error) {
          return { error: result.error };
        }
        return { data: result.data as FinancialGoal };
      },
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const { 
  useRegisterMutation, 
  useLoginMutation, 
  useGetAuthProfileQuery, 
  useLogoutMutation,
  useGetBanksQuery,
  useBankConsentMutation,
  useGetBankConsentStatusQuery,
  useLazyGetBankConsentStatusQuery,
  useGetBankOverviewQuery,
  useLazyGetBankOverviewQuery,
  useSyncBanksMutation,
  useGetBankAccountsQuery,
  useLazyGetBankAccountsQuery,
  useGetAccountTransactionsQuery,
  useLazyGetAccountTransactionsQuery,
  useGetTransactionsQuery,
  useLazyGetTransactionsQuery,
  useGetTransactionsStatisticsQuery,
  useGetCategoriesQuery,
  useGetGoalsQuery,
  useLazyGetGoalsQuery,
  useGetGoalByIdQuery,
  useLazyGetGoalByIdQuery,
  useCreateGoalMutation,
  useUpdateGoalMutation,
  useDeleteGoalMutation,
  useAddToGoalMutation,
  useUpdateGoalStatusMutation
} = authApi;