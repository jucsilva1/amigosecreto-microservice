import React from 'react'; 
import api from "../../Services/api";

export default function Testeapi(){
    async function handleGetAPI(){
        const response = await api.get('/users');
        console.log(response.data);
    }

    return (
        <>
        <h1>Teste primeira API</h1>
        <button onClick={handleGetAPI}>Clique Aqui</button>
        </>
    );
}