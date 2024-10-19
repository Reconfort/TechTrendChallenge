'use client'
import {configureStore} from '@reduxjs/toolkit'
import stepReducer from './slices/stepSlice';
import {apiSlice} from './slices/apiSlice';

export const store = configureStore({
    reducer: {
        step: stepReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;