import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Получаем URL API из переменной окружения или используем значение по умолчанию
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://176.114.89.172:3000';

export interface Ad {
  id: number;
  partner: string;
  ads: string;
  level: string;
  priority: number;
  image: string;
  url: string;
  viewCount: number;
  lastViewedAt?: string | null;
}

export interface AdsResponse {
  ads?: Ad[];
}

// API может вернуть массив напрямую или объект с полем ads
export type AdsApiResponse = Ad[] | AdsResponse;

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
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

export const adsApi = createApi({
  reducerPath: 'adsApi',
  baseQuery,
  tagTypes: ['Ads'],
  endpoints: (builder) => ({
    getUserAds: builder.query<AdsApiResponse, void>({
      query: () => '/ads/user',
      providesTags: ['Ads'],
    }),
  }),
});

export const { useGetUserAdsQuery } = adsApi;

