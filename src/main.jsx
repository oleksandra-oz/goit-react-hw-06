import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import App from "./App";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

// Отримуємо кореневий елемент
const root = ReactDOM.createRoot(document.getElementById("root"));

// Використовуємо createRoot() замість render()
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
