import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import App from "./App";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
