import './CampoTexto.css';
//import { useState } from 'react';

// Usando Arrow Function
const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`;

    //let valor = 'José das Couves';

    // USE são Hooks no React, para fazer algo
    //const [valor, setValor] = useState('');

    const aoDigitado = (evento) => {
        //valor = evento.target.value;
        //setValor(evento.target.value)
        //console.log(valor);
        props.aoAlterado(evento.target.value);
    }

    //console.log(props.label)
    return(
        <div className="campo-texto">
            {/* <label>Nome:</label> */}
            <label>{props.label}</label>
            {/* <input placeholder='Digite seu nome' /> */}
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto;