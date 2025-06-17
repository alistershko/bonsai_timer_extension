// Main Entry Point for React Application
//
// Purpose:
// - Initializes the React application
// - Renders the root App component into the DOM
//
// Features:
// - Creates React root
// - Renders App component
// - Sets up StrictMode for development error checking


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
