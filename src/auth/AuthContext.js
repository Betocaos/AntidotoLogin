/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, createContext }from 'react';
import { authConfig} from './config';

export const AuthContext = createContext();

export const authProvider =(props) =>{
    const {children} = props;
    const [usuario, setUsuario] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [aguardando, setAguardando] = useState(true);

    useEffect(() => {
        authConfig.auth().onAuthStateChanged((user) =>{
            setUsuario(user);
            setAguardando(false);
        });
    },[]);

    if(aguardando){
        return <>Carregando...</>;
    }
    return(
        <AuthContext.Provider value={{usuario}} > {children}</AuthContext.Provider>
    );

};

