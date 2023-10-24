import React, { useEffect, useState } from 'react';
import Personagem from '../Personagem';
import './CardContainer.css';
import BotaoRemoverCard from '../BotaoRemover';

const CardContainer = (props) => {
  const [personagemData, setPersonagemData] = useState([]);
  const [filtroClasse] = useState(props.classe);

  useEffect(() => {
    // Recupere os dados do localStorage
    const cardData = JSON.parse(localStorage.getItem('cardData')) || [];
    setPersonagemData(cardData);
  }, []);
 
  const removerPersonagem = (classe, index) => {
    const novosPersonagens = [...personagemData];
    const personagensDaClasse = novosPersonagens.filter((personagem) => personagem.classe === classe);

    if (index >= 0 && index < personagensDaClasse.length) {
      novosPersonagens.splice(index, 1); // Remova o card pelo índice
      setPersonagemData(novosPersonagens);
      localStorage.setItem('cardData', JSON.stringify(novosPersonagens));
    }
  };

  const atualizarClassePersonagem = (index, novaClasse) => {
    const novosPersonagens = [...personagemData];
    novosPersonagens[index].classe = novaClasse;
    setPersonagemData(novosPersonagens);
    localStorage.setItem('cardData', JSON.stringify(novosPersonagens));
  };

  const personagensFiltrados = filtroClasse
    ? personagemData.filter((personagem) => personagem.classe === filtroClasse)
    : personagemData;

    return (
      <div className="card-container">
        {personagensFiltrados.map((personagem, index) => (
          <div key={index} className="personagem-card">
            <Personagem
              nome={personagem.nome}
              rota={personagem.rota}
              imagem={personagem.imagem}
              classe={personagem.classe}
              onChangeClasse={(novaClasse) => atualizarClassePersonagem(index, novaClasse)}
            />
            <BotaoRemoverCard
              onClick={() => removerPersonagem(personagem.classe, index)}
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default CardContainer;