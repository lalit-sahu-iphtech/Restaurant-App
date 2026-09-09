import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Import BrowserRouter
import App from './App'

import "./index.css"
import { CartProvider } from './pages/Cart/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CartProvider>

  </React.StrictMode>,
)