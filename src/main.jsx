import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "@/assets/scss/global.scss";
import './index.css'
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
