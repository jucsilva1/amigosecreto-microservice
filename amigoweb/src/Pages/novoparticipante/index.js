import React, { useState } from 'react'; 
import { useHistory, Link } from 'react-router-dom';
import api  from "../../Services/api";
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Novoparticipante() {
    const [ nome, setNome ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [email, setEmail ] = useState('');
    const [senha, setSenha ] = useState('');
    const [senhaConfirm, setSenhaConfirm ] = useState('');
    const history = useHistory();
    async function handleNew(e) {
        e.preventDefault();
        const dataLogin = {
            email,
            senha
        }
        const dataParticipante = {
            nome,
            cpf,
            email,
            senha
        }
        if(senha !== senhaConfirm){
            toast.error("Senha e confirmar senha não conferem!");
            return;
        }
        try {
            const responseParticipante = await api.post('/participante', dataParticipante);
            const responseLogin = await api.post('/login/create', dataLogin);
            toast.success('Cadastro realizado com sucesso');
            setTimeout(() => {history.push('/')}, 5000);
        }
        catch (err) {
            toast.error("Campos obrigatórios não preenchidos!")
        }
    }
    
    return (
    <div className="register-container">
        <div className="content">
            <section>
                <h1>Novo participante</h1>
                <p>Faça seu cadastro, entre na plataforma e crie seus grupos de amigo secreto, divirta-se!</p>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar
                </Link>
            </section>
            <form onSubmit={handleNew}>
                <input type="text" placeholder="Digite seu nome"
                value={nome}
                onChange={e => setNome(e.target.value)}
                />
                <input type="cpf" placeholder="Digite seu CPF"
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                />
                <input type="email" placeholder="Digite seu email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <input type="password" placeholder="Digite sua senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                />
                <input type="password" placeholder="Confirme sua senha"
                value={senhaConfirm}
                onChange={e => setSenhaConfirm(e.target.value)}
                />
                <button type="submit" className="button">Salvar</button>
            </form>
            <ToastContainer />
        </div>    
    </div>    
    );
}

