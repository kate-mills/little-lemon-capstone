import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { BookingProvider } from './context/book-a-table'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <BookingProvider>
        <App />
      </BookingProvider>
  </React.StrictMode>
)
reportWebVitals()
