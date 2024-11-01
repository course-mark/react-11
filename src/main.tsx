import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Users from './pages/Users.tsx'

createRoot(document.getElementById('rooti')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
