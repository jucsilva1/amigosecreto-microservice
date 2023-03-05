import React from 'react'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import loginform from './Pages/Loginform';
import Principal from './Pages/principal';
import Novoparticipante from './Pages/novoparticipante';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Login" exact component={loginform} />
                <Route path="/principal" component={Principal} />
                <Route path="/Novoparticipante" exact component={Novoparticipante} />
            </Switch>      
        </BrowserRouter>
    );
}