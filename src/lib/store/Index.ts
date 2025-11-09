import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/AuthApi';
import { userApi } from './api/UserApi';
import { aiApi } from './api/AiApi';
import { adsApi } from './api/AdsApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [aiApi.reducerPath]: aiApi.reducer,
    [adsApi.reducerPath]: adsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware, aiApi.middleware, adsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;