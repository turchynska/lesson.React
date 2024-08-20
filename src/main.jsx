import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './components/App/App'
// import App from './App.jsx'
import App from './components/module.3.task2/App/App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
