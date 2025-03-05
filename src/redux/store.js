import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';


// Об'єднання редюсерів
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});

// Конфігурація redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'], // Зберігаємо лише контакти
};

// Обгортка редюсера для збереження в локальному сховищі
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Створення store без thunk
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), // Прибираємо thunk
});

// Persistor для збереження стану
export const persistor = persistStore(store);

export default store;
