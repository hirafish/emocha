import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IconsCatalogProvider } from './components/providers/IconsCatalogProvider';
import { LanguagesCatalogProvider } from './components/providers/LanguagesCatalogProvider';
import { UserSettingsProvider } from './components/providers/UserSettingsProvider';
import { RoomDataListProvider } from './components/providers/RoomDataListProvider';

import reportWebVitals from './reportWebVitals';
import { DarkModeProvider } from './components/providers/DarkModeProviders';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <IconsCatalogProvider>
        <LanguagesCatalogProvider>
          <UserSettingsProvider>
            <RoomDataListProvider>
              <App />
            </RoomDataListProvider>
          </UserSettingsProvider>
        </LanguagesCatalogProvider>
      </IconsCatalogProvider>
    </DarkModeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();