import React from 'react';
import { authConfig } from '../auth/config';

export const Inicio = () => {
    return(
        <div>
            <h1>Início</h1>
            <button onclick={()=> authConfig.auth().signOut()}>Deslogar</button>
        </div>
    );
}