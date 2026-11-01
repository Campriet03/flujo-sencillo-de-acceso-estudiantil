import React, {createContext, useState, useContext}  from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null);

    const iniciarSesion = (nombre) => {
        setUsuario({nombre, institucion:"Uniagustiniana"});
    }

    const cerrarSesion = () => setUsuario(null);
    return (
        <AuthContext.Provider value={{usuario, iniciarSesion, cerrarSesion}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);