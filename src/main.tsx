import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import { PersistGate } from 'redux-persist/integration/react';
import {Router} from "./router";
import "./assets/style/index.scss"
import "./assets/style/root.scss"
import "./assets/style/base.scss"
import "./assets/style/utility.scss"
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <Router />
          </PersistGate>
      </Provider>
  </React.StrictMode>,
)
