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
    <React.StrictMode>
        {/* Envolver a aplicação por inteira com o AuthProvider permite o acesso ao contexto de autenticação por toda a aplicação */}
        <AuthProvider>
            <RouterProvider router={routes} />
        </AuthProvider>
    </React.StrictMode>,
);
