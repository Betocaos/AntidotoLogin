/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, createContext }from 'react';
import { authConfig} from './config';

export const AuthContext = createContext();

export const authProvider =({children}) =>{
    
    const [usuario, setUsuario] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Aguardando, setAguardando] = useState(true);

    useEffect(() => {
        authConfig.auth().onAuthStateChanged((user) =>{
            setUsuario(user);
            setAguardando(false);
        });
    },[]);

    if(Aguardando){
        return <React.Fragment>Carregando...</React.Fragment>;
    }
    return(
        <AuthContext.Provider value={{usuario}} > {children}</AuthContext.Provider>
    );

};

