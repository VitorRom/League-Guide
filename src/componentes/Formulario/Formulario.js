import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import React, { useState} from 'react';


const Formulario = (props) => {
  const rotas = ['Topo', 'Selva', 'Meio', 'Atirador', 'Suporte'];

  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [rota, setRota] = useState('');
  const [classe, setClasse] = useState('');

  const aoSalvar = () => {


    // Crie um novo card
    const newCard = {
      nome,
      imagem,
      rota,
      classe
    };

    // Chame a função aoPersonagemCadastrado e passe o novo card como argumento
    props.aoPersonagemCadastrado(newCard);

    // Recupere os dados existentes do localStorage ou inicialize um array vazio
    const existingData = JSON.parse(localStorage.getItem('cardData')) || [];

    // Adicione o novo card ao array de dados existentes
    existingData.push(newCard);

    // Salve o array atualizado no localStorage
    localStorage.setItem('cardData', JSON.stringify(existingData));

    // Limpe os estados
    setNome('');
    setImagem('');
    setRota('');
    setClasse('');
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do personagem</h2>
        <CampoTexto
          label="Nome"
          placeholder="Digite o nome do personagem"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite a URL da imagem do personagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label="Rota"
          itens={rotas}
          valor={rota}
          aoAlterado={(valor) => setRota(valor)}
        />
        <ListaSuspensa
          label="Classe"
          itens={props.classes}
          valor={classe}
          aoAlterado={(valor) => setClasse(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
