import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import {Inicio} from './components/Inicio';
import {Cadastrar} from './components/Cadastrar';
import {Logar} from './components/Logar';
import {authProvider} from './auth/AuthContext';
import {RotaPrivada} from './auth/RotaPrivada';

function App(){
  return(
    <authProvider>
      <BrowserRouter>

        <RotaPrivada exact path="/" component={Inicio} />
        <Route exact path="/logar" component={Logar} />
        <Route exact path="/cadastrar" component={Cadastrar} />
        
      </BrowserRouter>
    </authProvider>
  );
}
export default App;


 




