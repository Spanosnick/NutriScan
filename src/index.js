import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthProvider} from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => {
    root.render(
        <AuthProvider>
            <App/>
        </AuthProvider>
    )
};
render();

