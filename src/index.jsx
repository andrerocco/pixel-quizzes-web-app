import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
// Contexto de autenticação
import { AuthProvider } from './contexts/auth';
// Rotas
import { routes } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <RouterProvider router={routes} />
    </AuthProvider>,
);
