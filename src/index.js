import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Provider } from "react-redux";
import {persistStore, persistReducer} from 'redux-persist';
import { PersistGate } from "redux-persist/lib/integration/react";
import store from "./redux/store.js";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
