import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface FinancialAdviceRequest {
  prompt: string;
}

export interface FinancialAdviceResponse {
  recommendation: {
    id: number;
    userId: number;
    title: string;
    content: string;
    type: string;
    priority: number;
    confidence: number;
    metadata: any;
    isRead: boolean;
    isAccepted: boolean | null;
    createdAt: string;
    updatedAt: string;
    readAt: string | null;
    userQuestion: string;
  };
  message: string;
  model: string;
  statistics: any;
  // Для обратной совместимости
  advice?: string;
  recommendationId?: number;
}

export interface Recommendation {
  id: number;
  title: string;
  content: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GetRecommendationsParams {
  isRead?: boolean;
}

export interface RelevantAdRequest {
  recommendationId: number;
}

export interface RelevantAdResponse {
  id: number;
  partner: string;
  ads: string;
  level: string;
  priority: number;
  image: string;
  url: string;
  viewCount: number;
}

// Получаем URL API из переменной окружения или используем значение по умолчанию
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://176.114.89.172:3000';

const baseQueryForAds = fetchBaseQuery({ 
  baseUrl: API_BASE_URL,
  credentials: 'include',
  prepareHeaders: async (headers, { getState }) => {
    // Передаем токен из localStorage в Authorization header
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

export const aiApi = createApi({
  reducerPath: 'aiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
    credentials: 'include',
  }),
  tagTypes: ['FinancialAdvice', 'Recommendations'],
  endpoints: (builder) => ({
    getFinancialAdvice: builder.mutation<FinancialAdviceResponse, FinancialAdviceRequest>({
      query: (data) => ({
        url: 'ai/financial-advice',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['FinancialAdvice', 'Recommendations'],
    }),
    
    getRecommendations: builder.query<Recommendation[], GetRecommendationsParams | void>({
      query: (params) => {
        const searchParams = new URLSearchParams();
        if (params?.isRead !== undefined) {
          searchParams.append('isRead', String(params.isRead));
        }
        const queryString = searchParams.toString();
        return `ai/recommendations${queryString ? `?${queryString}` : ''}`;
      },
      providesTags: ['Recommendations'],
    }),
    
    markRecommendationAsRead: builder.mutation<Recommendation, number>({
      query: (id) => ({
        url: `ai/recommendations/${id}/read`,
        method: 'POST',
      }),
      invalidatesTags: ['Recommendations'],
    }),
    
    deleteAllRecommendations: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: 'ai/recommendations',
        method: 'DELETE',
      }),
      invalidatesTags: ['Recommendations'],
    }),
    
    getRelevantAd: builder.mutation<RelevantAdResponse, RelevantAdRequest>({
      queryFn: async (data, api, extraOptions) => {
        // Используем отдельный baseQuery для внешнего API
        const result = await baseQueryForAds(
          {
            url: '/ads/relevant-by-advice',
            method: 'POST',
            body: data,
          },
          api,
          extraOptions
        );
        
        if (result.error) {
          return { error: result.error };
        }
        return { data: result.data as RelevantAdResponse };
      },
    }),
  }),
});

export const {
  useGetFinancialAdviceMutation,
  useGetRecommendationsQuery,
  useMarkRecommendationAsReadMutation,
  useDeleteAllRecommendationsMutation,
  useGetRelevantAdMutation,
} = aiApi;

