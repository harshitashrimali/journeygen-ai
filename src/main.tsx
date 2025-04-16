import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById("root")!).render(
    <GoogleOAuthProvider clientId='1025546063037-71v8pifu4vu94ehcossofhpn3qkourf0.apps.googleusercontent.com'>
         <App /> 
    </GoogleOAuthProvider>
    );
