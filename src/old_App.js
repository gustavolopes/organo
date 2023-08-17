import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <h1>Olá Mundo</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
		  {/* Edite <code>src/App.js</code> e salve para recarregar.*/}
		  Bem vindo ao React!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React
        </a>
      </header>
    </div>
  );
}

export default App;
