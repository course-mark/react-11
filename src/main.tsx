import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Singers from './pages/Singers.tsx'

createRoot(document.getElementById('rooti')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
