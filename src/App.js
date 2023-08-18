import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape/rodape';

function App() {
  
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#d86ebf',
      corSecundaria: '#fae5f5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //console.log(colaborador);
    //debugger
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario times={times.map(oTime => oTime.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}></Formulario>     
      {times.map(oTime => 
        <Time 
          key={oTime.nome} 
          nome={oTime.nome} 
          corPrimaria={oTime.corPrimaria} 
          corSecundaria={oTime.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === oTime.nome)}
        >
        </Time>
      )}
      {/*<Time nome="Programação"></Time>
      <Time nome="Front End"></Time>
      <Time nome="Data Science"></Time>
      <Time nome="Devops"></Time>
      <Time nome="UX e Design"></Time>
      <Time nome="Mobile"></Time>
      <Time nome="Inovação e Gestão"></Time>*/}
      <Rodape></Rodape>
    </div>
  );
}

export default App;
