import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './sass/main.scss';
import { StoreProvider } from './services/store/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
);
