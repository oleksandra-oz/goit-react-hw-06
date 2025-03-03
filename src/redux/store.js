import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Початковий стан
const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

// Редюсер контактів
const contactsReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.payload];
    case 'DELETE_CONTACT':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

// Редюсер фільтра
const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload;
    default:
      return state;
  }
};

// Об'єднання редюсерів
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
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
