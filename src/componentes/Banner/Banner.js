import './Banner.css'

//function Banner() {
export const Banner = () => {
    // JSX - React usa isto - HTML + JavaScript
    return (
        // "class" palavra reservada do JS, logo no react usa-se className.
        <header className='banner'>
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo."/>
        </header>
    )
}

//export default Banner