import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Import BrowserRouter
import App from './App'

import "./index.css"
import { CartProvider } from './pages/Cart/CartContext'
import { AuthProvider } from './pages/Auth/AuthContext'
import { ToastProvider } from './context/ToastContext'
import ToastContainer from './component/Toast/ToastContainer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

   
    <CartProvider>
      {/* wrap */}
      <ToastProvider>


    <BrowserRouter>
      <App />
      {/* Render Globally */}
      <ToastContainer/>
    </BrowserRouter>
    </ToastProvider>

    
    </CartProvider>
    </AuthProvider>

  </React.StrictMode>,
)