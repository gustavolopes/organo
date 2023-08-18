import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div>
                <div className='esquerda'>
                    <img src="/imagens/fb.png" alt="Logo"/>
                    <img src="/imagens/ig.png" alt="Logo"/>
                    <img src="/imagens/tw.png" alt="Logo"/>
                </div>
                <div className='centro'>
                    <img src="/imagens/logo.png" alt="Logo"/>
                </div>
                <div className='direita'>Desenvolvido por Alura</div>
            </div>            
        </footer>
    )
}

export default Rodape;