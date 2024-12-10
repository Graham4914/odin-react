import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cta from './Greeting.jsx'
import TestTitle from './TestTitle.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    
  </StrictMode>,
)
