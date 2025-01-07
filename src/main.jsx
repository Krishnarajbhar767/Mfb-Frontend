import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import Parent_Context from './Utils/Context/Parent_Context';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Parent_Context>
      <App />
    </Parent_Context>
  </BrowserRouter>

  // </StrictMode>,
)