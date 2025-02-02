import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App';
import './index.css';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-out-cubic'
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster position="bottom-right" />
    </BrowserRouter>
  </StrictMode>
);