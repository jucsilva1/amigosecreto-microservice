import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import api from "../../Services/api";
import{ FiLogin} from 'react-icons/fi';
import './styles.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastfy.css';

export default function Loginform() {
    const [ login, setLogin ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [erroLogin, setErroLogin ] = useState(false);
    const history = useHistory();

    async function handleLogon(e) {
        e.preventDefault();
        const data = {
            email:login,
            senha
        };
        try{
            if(data.email === ""){
                setErroLogin(true);
                toast.error("Campos obrigatórios não preenchidos!");
                return
            }
            else{
                const response = await api.post(`/login`, data);
                if(response.data.auth){
                    history.push('/principal');
                }else{
                    toast.error("login e/ou senha inválidos!");
                }
            }
        }
        catch(err){
            toast.error("Erro ao tentar logar no sistema!");
        } 
    }
   
    return(
    <div className="logon-container" >
            <section className="form">
            <form onSubmit={handleLogon}>
                <h1>Faça seu login</h1>
                <input className={erroLogin ? "error" :""}
                    placeholder= "Seu login"
                    value={login}
                    onchange={e => setLogin(e.target.value)}
                    onBlur={e => e.target.value === "" ? setErroLogin(true) : setErroLogin(false)}
                />
                <input type="password"
                placeholder="Sua senha"
                value={senha}
                onchange={e => setSenha(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>
            </form>
            <Link className="back-link" to="/novoparticipante" >
                    <FiLogin size={16} color="#E02041" />
                    Não tenho cadastro
            </Link>   
            </section>
            <ToastContainer />
    </div>    
    );
}