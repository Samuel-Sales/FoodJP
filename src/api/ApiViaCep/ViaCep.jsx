import { useState } from "react";
import './ViaCep.module.css';

export default function ApiDeCep() {
    const [numero, setNumero] = useState('');
    const [data, setData] = useState(null);

    function mudanca(event) {
        setNumero(event.target.value);
    }

    const consultarCep = async () => {
        const response = await fetch(`https://viacep.com.br/ws/${numero}/json/`);
        const jsonData = await response.json();
        setData(jsonData);
    }

    return (
        <div>
            <input type="text" value={numero} onChange={mudanca} placeholder='Localização para entrega' />
            <button onClick={consultarCep}>Consultar Cep</button>
            {data && (
                <>
                    <p>CEP: {data.cep}</p>
                    <p>Logradouro: {data.logradouro}</p>
                    <p>Complemento: {data.complemento}</p>
                    <p>Bairro: {data.bairro}</p>
                    <p>Localidade: {data.localidade}</p>
                    <p>Estado: {data.uf}</p>
                    <p>IBGE: {data.ibge}</p>
                    <p>GIA: {data.gia}</p>
                    <p>DDD: {data.ddd}</p>
                    <p>SIAFI: {data.siafi}</p>
                </>
                
            )}
        </div>
    );
};