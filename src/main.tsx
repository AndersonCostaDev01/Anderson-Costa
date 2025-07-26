import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- importe o BrowserRouter

import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* Envolva aqui */}
      <div className="h-screen w-screen">
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>
);
