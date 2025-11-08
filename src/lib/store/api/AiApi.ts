import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface FinancialAdviceRequest {
  prompt: string;
}

export interface FinancialAdviceResponse {
  advice: string;
  recommendationId: number;
  timestamp?: string;
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
  }),
});

export const {
  useGetFinancialAdviceMutation,
  useGetRecommendationsQuery,
  useMarkRecommendationAsReadMutation,
  useDeleteAllRecommendationsMutation,
} = aiApi;

