import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from 'components/atoms/ScrollToTop'
import { Analytics } from '@vercel/analytics/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Analytics />
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
)
