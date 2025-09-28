import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux-tool/store.jsx'
import { Toaster } from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <div className='min-h-screen w-screen overflow-hidden'>
        <App />
        <Toaster position='top-right'/>
      </div>
    </Provider>,
  </StrictMode>
);
