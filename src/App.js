import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { Classe } from './componentes/Classe/Classe';
import { useState } from 'react';

function App() {
  const classes = [
    {
        nome: 'Assassino',
        corPrimaria: 'rgba(233, 23, 0, 0.20)',
        corSecundaria: 'rgba(183, 0, 0, 0.073)'
    },
    {
        nome: 'Mago',
        corPrimaria: '#0a15ec23',
        corSecundaria: 'rgba(14, 90, 255, 0.18)'
    },
    {
        nome: 'Lutador',
        corPrimaria: '#ca510042',
        corSecundaria: '#cd4f0039'
    },
    {
        nome: 'Atirador',
        corPrimaria: '#c6b60c79',
        corSecundaria: '#f1de0461'
    },
    {
        nome: 'Suporte',
        corPrimaria: '#c6b60c79',
        corSecundaria: '#f1dd0410'
    },
    {
        nome: 'Tanque',
        corPrimaria: 'rgba(139, 137, 132, 0.299)',
        corSecundaria: '#d1cfcc3c'
    },
    {
        nome: 'Especialista',
        corPrimaria: '#ffc74fc2',
        corSecundaria: '#FFEEDF'
    }
]



  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemCadastrado = (personagem) => {
    setPersonagens([...personagens, personagem]);
  }


  return (
    <div className="App">
      <Banner />
      <Formulario classes={classes.map(classe => classe.nome)} aoPersonagemCadastrado={personagem => aoNovoPersonagemCadastrado(personagem)} />
      {classes.map(classe => (
        <Classe 
          key={classe.nome} 
          nome={classe.nome} 
          corPrimaria={classe.corPrimaria} 
          corSecundaria={classe.corSecundaria}
        />
        
      ))}
    </div>
  );
}

export default App;
