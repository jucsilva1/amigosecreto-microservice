import React, { useState } from 'react'; 
import { useHistory, Link} from 'react-router-dom'
import { FiPower} from ' react-icons/fi';
import './styles.css';

export default function Cabecalho() {
    const loginName = localStorage.getItem('pLogin');
    const history = useHistory();
    function handleLogout() {
        localStorage.clearItem();
        history.push('/');
    }
    return (
        <div className="header-container">
            <header>
                <span>Seja Bem Vindo, {loginName}</span>
                <Link className="button" to="/novogrupo">Novo Grupo</Link>
                <button onClick={handleLogout}>
                    <FiPower size = {13} color= "#E02041" />
                </button>
            </header>
        </div>
    );
}
