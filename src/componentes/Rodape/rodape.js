import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div>
                <div className='esquerda'>
                    <img src="/imagens/fb.png" alt="Logo"/>
                    <img src="/imagens/tw.png" alt="Logo"/>
                    <img src="/imagens/ig.png" alt="Logo"/>
                </div>
                <div className='centro'>
                    <img src="/imagens/logo.png" alt="Logo"/>
                </div>
                <div className='direita'>
                    <p>Desenvolvido por Alura e Gustavo Lopes.</p>
                </div>
            </div>            
        </footer>
    )
}

export default Rodape;