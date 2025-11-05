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

// We rely on secure HTTP-only cookies; no JS access to token

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '/api/',
    credentials: 'include',
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    register: builder.mutation<AuthResponse, RegisterData>({
      query: (userData) => ({
        url: 'auth/register',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Auth'],
    }),
    login: builder.mutation<AuthResponse, LoginData>({
      query: (credentials) => ({
        url: 'auth/login', 
        method: 'POST',
        body: credentials,
      }),
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
  }),
});

export const { 
  useRegisterMutation, 
  useLoginMutation, 
  useGetAuthProfileQuery, 
  useLogoutMutation 
} = authApi;