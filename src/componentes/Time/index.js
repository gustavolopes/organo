import './Time.css';
import Colaborador from '../Colaborador';

const Time = (props) => {
    const cssSection = { backgroundColor: props.corSecundaria };

    return (
        (props.colaboradores.length > 0) 
        ? 
        <section className='time' style={cssSection}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            {/*<Colaborador nome={props.nome} cargo={props.cargo} imagem={props.imagem}></Colaborador>*/}
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}></Colaborador> )}
            </div>
        </section>
        :
        ''
    )
}

export default Time;