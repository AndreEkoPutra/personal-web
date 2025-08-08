import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="bg-teal-950 text-white">
      <App />
    </main>
    
  </StrictMode>,
)
