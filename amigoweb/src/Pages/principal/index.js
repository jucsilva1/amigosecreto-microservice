import React, { useState , useEffect } from 'react'; 
//import {useHistory, withRouter} from 'react-router-dom';
import { FiEdit , FiUsers, FiUserPlus} from 'react-icons/fi';
import { Badge } from '@material-ui/core';
import api from '../../Services/api';
import './styles.css';
import Cabecalho from '../../componentes/cabecalho';

export default function Principal(){
    const [grupos, setGrupos] = useState([]);
    const pIdParticipante = localStorage.getItem('pIdParticipante');

    useEffect(() => {
        loadingGrupos(pIdParticipante);
        }, []);
        
        function loadingGrupos(idParticipante){
            api.get(`/grupo/byParticipante/${idParticipante}`).then(response => {
                console.log(response.data);
                setGrupos(response.data.Grupos)
            });
        }

    return (
        <div className="principal-container">
            <Cabecalho />
            <h1>Grupos Amigo Secreto</h1>
            <ul>

            {grupos.map(grupo => (
                <li key={grupo._id} >

                    <h2>{grupo.nome}</h2>
                    <div className="teste-container">
                    <div>
                        <strong>RESPONSÁVEL</strong>
                            <p>{grupo.responsavel.nomeResponsavel}</p>
                    </div>
                    <div>
                    <strong>DATA SORTEIO</strong>
                        <p>{new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'})
                        .format(Date.parse(grupo.dataSorteio))}
                        </p>
                    </div>
                    </div>
                    <div className="teste-container">
                        <div>
                            <strong>VALOR MÍNIMO</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style : 'currency', currency : 'BRL'})
                            .format(grupo.valorMinimo)}
                            </p>    
                        </div>
                        <div>
                            <strong>VALOR MÁXIMO</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style : 'currency', currency : 'BRL'})
                            .format(grupo.valorMaximo)}
                            </p>    
                        </div>
                    </div>
                        <button> <FiUserPlus className="addUsers" size={22} color="#a8a8b3" /> </button>
                        <button>
                            <Badge className="showUsers"
                                    color="secondary" badgeContent={grupo.participantes.length}>
                            </Badge>
                        <FiUsers className="showUsers" size={22} color="#a8a8b3" /> </button>
                    <button> <FiEdit className="editGroup" size={22} color="#a8a8b3" /> </button>
                </li>
                )

                )}
            </ul>
        </div>
    );
}