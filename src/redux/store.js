import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: ''
};

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

const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer
});

// Конфігурація persist
const persistConfig = {
  key: "root",
  storage, // Зберігаємо в localStorage
  whitelist: ["contacts"], // Тільки contacts буде збережено
};

// Підключаємо persist до редюсера
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Створюємо store
const store = createStore(persistedReducer);
export const persistor = persistStore(store); // Persistor для PersistGate


export default store;