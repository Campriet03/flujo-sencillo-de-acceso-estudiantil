import React from 'react';
import { AuthProvider, useAuth } from './Auth-Context';
import Login from './Login';

// Componente para cuando ya están logueados
const PanelEstudiante = () => {
  const { usuario, cerrarSesion } = useAuth();
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>¡Hola, {usuario.nombre}!</h1>
      <p>Bienvenido al Campus Virtual de la <strong>{usuario.institucion}</strong></p>
      <button onClick={cerrarSesion} style={{ color: 'red', cursor: 'pointer' }}>
        Cerrar Sesión Segura
      </button>
    </div>
  );
};

// Componente que decide qué ver
const ContenidoCambiante = () => {
  const { usuario } = useAuth();
  return usuario ? <PanelEstudiante /> : <Login />;
};

export default function App() {
  return (
    <AuthProvider>
      <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '40px' }}>
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#900', borderBottom: '3px solid #d4af37' }}>
            UNIAGUSTINIANA DIGITAL
          </h1>
        </header>
        <ContenidoCambiante />
      </div>
    </AuthProvider>
  );
}