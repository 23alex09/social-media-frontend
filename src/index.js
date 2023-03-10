import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

import { App } from './App';

import './index.css';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
    <GoogleOAuthProvider clientId={ process.env.REACT_APP_GOOGLE_API_TOKEN }>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </GoogleOAuthProvider>,
);