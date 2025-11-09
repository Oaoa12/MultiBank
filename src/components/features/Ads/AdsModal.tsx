'use client';

import { useEffect, useState, useCallback } from 'react';
import { Paper, ActionIcon } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGetUserAdsQuery } from '@/lib/store/api/AdsApi';
import { useGetCurrentUserQuery } from '@/lib/store/api/UserApi';
import { Ads } from './Ads';
import type { Ad } from '@/lib/store/api/AdsApi';
import classes from './AdsModal.module.css';

const STORAGE_KEY = 'last-shown-ad-id';
const ADS_STORAGE_KEY = 'user-ads';

export function AdsModal() {
  // Проверяем авторизацию перед запросом рекламы
  const { isSuccess: isAuthenticated } = useGetCurrentUserQuery();
  const { data, isLoading, refetch } = useGetUserAdsQuery(
    undefined,
    { skip: !isAuthenticated }
  );
  const [isOpen, setIsOpen] = useState(false);
  const [currentAd, setCurrentAd] = useState<Ad | null>(null);

  // Функция для загрузки последней рекламы из localStorage
  const loadLastAdFromStorage = useCallback(() => {
    if (!isAuthenticated) return;
    
    try {
      const savedAds = localStorage.getItem(ADS_STORAGE_KEY);
      if (savedAds) {
        const adsArray: Ad[] = JSON.parse(savedAds);
        console.log('AdsModal: loaded ads from localStorage', { 
          count: adsArray.length,
          ads: adsArray 
        });
        
        if (adsArray.length > 0) {
          // Выбираем рекламу по lastViewedAt (самая новая или null)
          const selectedAd = adsArray
            .filter(ad => ad) // Фильтруем пустые значения
            .sort((a, b) => {
              // Сначала рекламы без lastViewedAt (null или undefined)
              if (!a.lastViewedAt && !b.lastViewedAt) return 0;
              if (!a.lastViewedAt) return -1; // a идет первым
              if (!b.lastViewedAt) return 1; // b идет первым
              
              // Затем сортируем по lastViewedAt (самая новая первая)
              const dateA = new Date(a.lastViewedAt).getTime();
              const dateB = new Date(b.lastViewedAt).getTime();
              return dateB - dateA; // Обратный порядок - самая новая первая
            })[0]; // Берем первую (самую новую или без lastViewedAt)
          
          console.log('AdsModal: checking localStorage ad', { 
            selectedAdId: selectedAd?.id, 
            selectedAd,
            adsArrayLength: adsArray.length,
            allAds: adsArray.map(ad => ({ id: ad.id, lastViewedAt: ad.lastViewedAt }))
          });
          
          // Обновляем рекламу на выбранную по lastViewedAt
          if (selectedAd) {
            console.log('AdsModal: updating ad from localStorage', { 
              newAd: selectedAd 
            });
            setCurrentAd((prevAd) => {
              // Обновляем только если реклама изменилась
              if (!prevAd || prevAd.id !== selectedAd.id) {
                return selectedAd;
              }
              return prevAd;
            });
            setIsOpen(true);
            // Сохраняем ID показанной рекламы
            localStorage.setItem(STORAGE_KEY, selectedAd.id.toString());
          }
        }
      } else {
        console.log('AdsModal: no ads in localStorage');
      }
    } catch (error) {
      console.error('Failed to load ads from localStorage:', error);
    }
  }, [isAuthenticated]);

  // Загружаем последнюю рекламу из localStorage при инициализации
  useEffect(() => {
    loadLastAdFromStorage();
  }, [isAuthenticated, loadLastAdFromStorage]);

  // Слушаем изменения localStorage для обновления рекламы
  useEffect(() => {
    if (!isAuthenticated) return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === ADS_STORAGE_KEY && e.newValue) {
        console.log('AdsModal: localStorage changed, reloading ad');
        loadLastAdFromStorage();
      }
    };

    // Слушаем изменения localStorage из других вкладок
    window.addEventListener('storage', handleStorageChange);
    
    // Также слушаем кастомное событие для изменений в этой же вкладке
    const handleCustomStorageChange = () => {
      console.log('AdsModal: custom storage change event, reloading ad');
      loadLastAdFromStorage();
    };
    
    window.addEventListener('localStorage-updated', handleCustomStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('localStorage-updated', handleCustomStorageChange);
    };
  }, [isAuthenticated, loadLastAdFromStorage]);

  // Обновляем рекламы при изменении авторизации
  useEffect(() => {
    if (isAuthenticated) {
      refetch();
    }
  }, [isAuthenticated, refetch]);

  // Периодически обновляем рекламы (каждые 30 секунд)
  useEffect(() => {
    if (!isAuthenticated) return;

    const interval = setInterval(() => {
      refetch();
    }, 30000); // 30 секунд

    return () => clearInterval(interval);
  }, [isAuthenticated, refetch]);

  // Слушаем событие новой рекламы из AiChat
  useEffect(() => {
    const handleNewAd = (event: CustomEvent<Ad>) => {
      const newAd = event.detail;
      console.log('AdsModal: received new ad event', newAd);
      
      // Обновляем localStorage с новой рекламой
      try {
        const savedAds = localStorage.getItem(ADS_STORAGE_KEY);
        let adsArray: Ad[] = savedAds ? JSON.parse(savedAds) : [];
        
        // Проверяем, нет ли уже этой рекламы в массиве
        const existingIndex = adsArray.findIndex(a => a.id === newAd.id);
        if (existingIndex >= 0) {
          // Обновляем существующую рекламу
          adsArray[existingIndex] = newAd;
        } else {
          // Добавляем новую рекламу в конец массива
          adsArray.push(newAd);
        }
        
        // Сохраняем обновленный массив в localStorage
        localStorage.setItem(ADS_STORAGE_KEY, JSON.stringify(adsArray));
        console.log('AdsModal: updated localStorage with new ad', { newAd, adsArray });
        
        // Выбираем рекламу по lastViewedAt (самая новая или null)
        const selectedAd = adsArray
          .filter(ad => ad) // Фильтруем пустые значения
          .sort((a, b) => {
            // Сначала рекламы без lastViewedAt (null или undefined)
            if (!a.lastViewedAt && !b.lastViewedAt) return 0;
            if (!a.lastViewedAt) return -1; // a идет первым
            if (!b.lastViewedAt) return 1; // b идет первым
            
            // Затем сортируем по lastViewedAt (самая новая первая)
            const dateA = new Date(a.lastViewedAt).getTime();
            const dateB = new Date(b.lastViewedAt).getTime();
            return dateB - dateA; // Обратный порядок - самая новая первая
          })[0]; // Берем первую (самую новую или без lastViewedAt)
        
        // Обновляем текущую рекламу на выбранную по lastViewedAt
        if (selectedAd) {
          console.log('AdsModal: showing selected ad from new ad event', { selectedAd });
          setCurrentAd(selectedAd);
          setIsOpen(true);
          // Сохраняем ID показанной рекламы
          localStorage.setItem(STORAGE_KEY, selectedAd.id.toString());
        }
        
        // Отправляем событие об обновлении localStorage
        window.dispatchEvent(new CustomEvent('localStorage-updated'));
      } catch (error) {
        console.error('Failed to update localStorage with new ad:', error);
      }
    };

    window.addEventListener('new-ad-received', handleNewAd as EventListener);

    return () => {
      window.removeEventListener('new-ad-received', handleNewAd as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!data || !isAuthenticated) return;

    // API возвращает массив реклам напрямую
    let adsArray: Ad[] = [];
    if (Array.isArray(data)) {
      adsArray = data;
    } else if (data.ads && Array.isArray(data.ads)) {
      adsArray = data.ads;
    }

    console.log('AdsModal: received ads data', { adsArray, length: adsArray.length, data });

    if (adsArray.length > 0) {
      // Сохраняем рекламы в localStorage
      try {
        localStorage.setItem(ADS_STORAGE_KEY, JSON.stringify(adsArray));
        console.log('AdsModal: saved ads to localStorage', adsArray.length);
        
        // Отправляем событие об обновлении localStorage
        window.dispatchEvent(new CustomEvent('localStorage-updated'));
      } catch (error) {
        console.error('Failed to save ads to localStorage:', error);
      }

      // Выбираем рекламу по lastViewedAt (самая новая или null)
      const selectedAd = adsArray
        .filter(ad => ad) // Фильтруем пустые значения
        .sort((a, b) => {
          // Сначала рекламы без lastViewedAt (null или undefined)
          if (!a.lastViewedAt && !b.lastViewedAt) return 0;
          if (!a.lastViewedAt) return -1; // a идет первым
          if (!b.lastViewedAt) return 1; // b идет первым
          
          // Затем сортируем по lastViewedAt (самая новая первая)
          const dateA = new Date(a.lastViewedAt).getTime();
          const dateB = new Date(b.lastViewedAt).getTime();
          return dateB - dateA; // Обратный порядок - самая новая первая
        })[0]; // Берем первую (самую новую или без lastViewedAt)

      console.log('AdsModal: checking ad', { 
        selectedAdId: selectedAd?.id, 
        selectedAd,
        adsArrayLength: adsArray.length,
        currentAdId: currentAd?.id,
        allAds: adsArray.map(ad => ({ id: ad.id, lastViewedAt: ad.lastViewedAt }))
      });

      // Показываем выбранную рекламу по lastViewedAt
      if (selectedAd && (!currentAd || currentAd.id !== selectedAd.id)) {
        console.log('AdsModal: showing selected ad (updated)', { oldAd: currentAd, newAd: selectedAd });
        setCurrentAd(selectedAd);
        setIsOpen(true);
        // Сохраняем ID показанной рекламы
        localStorage.setItem(STORAGE_KEY, selectedAd.id.toString());
      }
    } else {
      console.log('AdsModal: no ads in response');
    }
  }, [data, isAuthenticated]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    // Закрываем модальное окно при переходе по ссылке
    setIsOpen(false);
  };

  // Отладочная информация
  useEffect(() => {
    console.log('AdsModal render state:', {
      isLoading,
      hasCurrentAd: !!currentAd,
      currentAd,
      isOpen,
      isAuthenticated,
      hasData: !!data,
      data
    });
  }, [isLoading, currentAd, isOpen, isAuthenticated, data]);

  // Не скрываем компонент во время загрузки, если есть реклама из localStorage
  // if (isLoading && !currentAd) {
  //   return null;
  // }

  if (!currentAd || !isOpen) {
    console.log('AdsModal: not rendering - no ad or not open', { currentAd, isOpen });
    return null;
  }

  console.log('AdsModal: rendering ad', currentAd);

  return (
    <AnimatePresence>
      {isOpen && currentAd && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={classes.floatingAd}
        >
          <Paper
            shadow="xl"
            radius="md"
            p={0}
            className={classes.adCard}
            style={{ position: 'relative' }}
          >
            <ActionIcon
              variant="subtle"
              size="sm"
              onClick={handleClose}
              className={classes.closeButton}
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              <IconX size={16} />
            </ActionIcon>
            <Ads ad={currentAd} onClose={handleClose} onLinkClick={handleLinkClick} />
          </Paper>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

