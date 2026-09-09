import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { useLocaleStore } from './i18n/store'
import { localizePath } from './hooks/localizePath'

if (new URLSearchParams(window.location.search).has('lang')) {
  const path = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  window.history.replaceState({}, '', localizePath(path, useLocaleStore.getState().locale));
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
