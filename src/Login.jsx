import React, { useState } from 'react';
import { useAuth } from './Auth-Context';

const Login = () => {
  const [nombre, setNombre] = useState('');
  const { iniciarSesion } = useAuth();

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (nombre.trim()) iniciarSesion(nombre);
  };

  return (
    <div style={estilos.tarjeta}>
      <h2 style={{ color: '#900' }}>Acceso Estudiantil</h2>
      <form onSubmit={manejarEnvio}>
        <input 
          type="text" 
          placeholder="Nombre de usuario" 
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={estilos.input}
        />
        <br />
        <button type="submit" style={estilos.boton}>Ingresar al Portal</button>
      </form>
    </div>
  );
};

const estilos = {
  tarjeta: {
    padding: '30px',
    border: '2px solid #900',
    borderRadius: '12px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9'
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    width: '80%',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  boton: {
    backgroundColor: '#900',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Login;