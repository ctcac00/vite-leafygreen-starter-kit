import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LeafyGreenProvider darkMode={true}>
      <App />
    </LeafyGreenProvider>
  </React.StrictMode>
);
