import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = '/api/';

export interface User {
  id: number;
  username: string;
  email: string;
  phone?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  profile?: Profile;
  level?: number;
  progressToNextLevel?: number;
  totalLevels?: number;
}

export interface Profile {
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

export interface UpdateUserData {
  username?: string;
  phone?: string;
  isActive?: boolean;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
}

export interface UpdateProfileData {
  firstName?: string;
  lastName?: string;
  avatar?: string;
  birthDate?: string;
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
}

export interface AuthorizedPayload<T> {
  data: T;
  accessToken: string;
}

export interface AvatarUploadResponse {
  file: any;
  url: string;
  profile: Profile;
}

// We rely on secure HTTP-only cookies; no JS access to token

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['User', 'Profile'],
  endpoints: (builder) => ({
    getCurrentUser: builder.query<User, void>({
      query: () => 'user/me',
      providesTags: ['User'],
    }),
    
    updateUser: builder.mutation<User, UpdateUserData>({
      query: (userData) => ({
        url: 'user/me',
        method: 'PUT',
        body: userData,
      }),
      invalidatesTags: ['User', 'Profile'],
    }),

    // Same as updateUser, but explicitly sets Authorization header with a provided token
    updateUserAuthorized: builder.mutation<User, AuthorizedPayload<UpdateUserData>>({
      query: ({ data, accessToken }) => ({
        url: 'user/me',
        method: 'PUT',
        body: data,
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
      invalidatesTags: ['User', 'Profile'],
    }),
    
    getProfile: builder.query<Profile, void>({
      query: () => 'user/profile',
      providesTags: ['Profile'],
    }),
    
    updateProfile: builder.mutation<Profile, UpdateProfileData>({
      query: (profileData) => ({
        url: 'user/me',
        method: 'PUT',
        body: profileData,
      }),
      invalidatesTags: ['User', 'Profile'],
    }),

    updateProfileAuthorized: builder.mutation<Profile, AuthorizedPayload<UpdateProfileData>>({
      query: ({ data, accessToken }) => ({
        url: 'user/me',
        method: 'PUT',
        body: data,
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
      invalidatesTags: ['User', 'Profile'],
    }),

    deleteProfile: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: 'user/profile',
        method: 'DELETE',
      }),
      invalidatesTags: ['User', 'Profile'],
    }),

    restoreProfile: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: 'user/profile/restore',
        method: 'POST',
      }),
      invalidatesTags: ['User', 'Profile'],
    }),
    
    uploadAvatar: builder.mutation<AvatarUploadResponse, FormData>({
      query: (formData) => ({
        url: 'user/avatar',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Profile', 'User'],
    }),
    
    getAvatar: builder.query<Blob, number>({
      query: (fileId) => ({
        url: `user/avatar/${fileId}`,
        responseHandler: (response) => response.blob(),
      }),
    }),
    
    deleteAvatar: builder.mutation<{ message: string }, number>({
      query: (fileId) => ({
        url: `user/avatar/${fileId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Profile', 'User'],
    }),
    
    refreshAvatarUrl: builder.mutation<AvatarUploadResponse, { fileId: number; expiry?: number }>({
      query: ({ fileId, expiry }) => ({
        url: `user/avatar/${fileId}/refresh-url${expiry ? `?expiry=${expiry}` : ''}`,
        method: 'POST',
      }),
      invalidatesTags: ['Profile', 'User'],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useUpdateUserMutation,
  useUpdateUserAuthorizedMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUpdateProfileAuthorizedMutation,
  useDeleteProfileMutation,
  useRestoreProfileMutation,
  useUploadAvatarMutation,
  useGetAvatarQuery,
  useDeleteAvatarMutation,
  useRefreshAvatarUrlMutation,
} = userApi;
