import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storageSession from 'redux-persist/lib/storage/session';
import persistReducer from 'redux-persist/es/persistReducer';
import { useDispatch, useSelector } from 'react-redux';
import todoReducer from './features/todo/todoSlice';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['customization'],
};

const rootReducer = combineReducers({
  customization: todoReducer,
  // user: userReducer,
  // [appointmentApi.reducerPath]: appointmentApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === 'production') {
      return getDefaultMiddleware({ serializableCheck: false }).concat([
        // thunk,
        // authApi.middleware,
        // userApi.middleware,
        // codeApi.middleware,
        // projectApi.middleware,
        // appointmentApi.middleware,
      ]);
    } else {
      return getDefaultMiddleware({ serializableCheck: false }).concat([
        // thunk,
        logger,
        // authApi.middleware,
        // userApi.middleware,
        // codeApi.middleware,
        // projectApi.middleware,
        // appointmentApi.middleware,
      ]);
    }
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
