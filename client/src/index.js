import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "swiper/css/bundle";
import { SearchContextProvider } from './Context/SearchContext';
import { AuthContextProvider } from './Context/AuthContext';
import { CookiesProvider } from 'react-cookie';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><CookiesProvider>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </CookiesProvider>
  </>
);
