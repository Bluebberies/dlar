import React from 'react'
import ReactDOM from 'react-dom/client'
import {Router} from "./router";
import "./assets/style/index.scss"
import "./assets/style/root.scss"
import "./assets/style/base.scss"
import "./assets/style/utility.scss"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
