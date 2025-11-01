import { useState } from 'react';
import {
  useGetCurrentUserQuery,
  useUpdateUserMutation,
  useUploadAvatarMutation,
  useDeleteAvatarMutation,
  useRefreshAvatarUrlMutation,
  UpdateUserData,
  UpdateProfileData,
} from '../store/api/UserApi';

export const useProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    data: user,
    isLoading: userLoading,
    error: userError,
    refetch: refetchUser,
  } = useGetCurrentUserQuery();

  const profile = user?.profile;

  const refetchProfile = async () => {
    return refetchUser();
  };

  const [updateUser, { isLoading: updateUserLoading }] = useUpdateUserMutation();
  const [uploadAvatar, { isLoading: uploadAvatarLoading }] = useUploadAvatarMutation();
  const [deleteAvatar, { isLoading: deleteAvatarLoading }] = useDeleteAvatarMutation();
  const [refreshAvatarUrl, { isLoading: refreshAvatarUrlLoading }] = useRefreshAvatarUrlMutation();

  const handleUpdateUser = async (userData: UpdateUserData) => {
    try {
      setIsLoading(true);
      setError(null);
      await updateUser(userData).unwrap();
      await refetchUser();
    } catch (err: any) {
      setError(err?.data?.message || 'Ошибка при обновлении пользователя');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateProfile = async (profileData: UpdateProfileData) => {
    try {
      setIsLoading(true);
      setError(null);
      await updateUser(profileData).unwrap();
      await refetchUser();
    } catch (err: any) {
      setError(err?.data?.message || 'Ошибка при обновлении профиля');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleUploadAvatar = async (file: File) => {
    try {
      setIsLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append('avatar', file);

      const result = await uploadAvatar(formData).unwrap();
      await refetchUser();
      return result;
    } catch (err: any) {
      setError(err?.data?.message || 'Ошибка при загрузке аватара');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAvatar = async (fileId: number) => {
    try {
      setIsLoading(true);
      setError(null);
      await deleteAvatar(fileId).unwrap();
      await refetchUser(); 
    } catch (err: any) {
      setError(err?.data?.message || 'Ошибка при удалении аватара');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefreshAvatarUrl = async (fileId: number, expiry?: number) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await refreshAvatarUrl({ fileId, expiry }).unwrap();
      await refetchUser(); 
      return result;
    } catch (err: any) {
      setError(err?.data?.message || 'Ошибка при обновлении URL аватара');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const getFullName = () => {
    if (!profile) return user?.username || 'Пользователь';

    const firstName = profile.firstName || '';
    const lastName = profile.lastName || '';

    if (firstName && lastName) {
      return `${firstName} ${lastName}`;
    } else if (firstName) {
      return firstName;
    } else if (lastName) {
      return lastName;
    }

    return user?.username || 'Пользователь';
  };

  const getInitials = () => {
    const fullName = getFullName();
    const names = fullName.split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return fullName[0]?.toUpperCase() || 'U';
  };

  const hasAvatar = () => {
    return profile?.avatar && profile.avatar.trim() !== '';
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('ru-RU');
  };

  const formatBirthDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('ru-RU');
  };

  return {
    user,
    profile,
    isLoading:
      isLoading ||
      userLoading ||
      updateUserLoading ||
      uploadAvatarLoading ||
      deleteAvatarLoading ||
      refreshAvatarUrlLoading,
    error: error || userError,
    handleUpdateUser,
    handleUpdateProfile,
    handleUploadAvatar,
    handleDeleteAvatar,
    handleRefreshAvatarUrl,
    getFullName,
    getInitials,
    hasAvatar,
    formatDate,
    formatBirthDate,
    refetchUser,
    refetchProfile,
  };
};
