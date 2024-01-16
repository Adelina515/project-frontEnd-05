import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import  {store } from './redux/store';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
