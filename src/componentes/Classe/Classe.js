import React from 'react';
import './Classe.css';
import CardContainer from '../CardContainer/CardContainer';

export const Classe = (props) => {
  const classeCorDeFundo = { border: `5px solid ${props.corSecundaria}` };
  const CorBordaTitulo = { borderColor: props.corPrimaria };

  return (
    <section className='classe' style={classeCorDeFundo}>
      <h3 style={CorBordaTitulo}>{props.nome}</h3>

      {/* Renderize o CardContainer aqui e passe a prop "classe" */}
      <CardContainer classe={props.nome} />
    </section>
  );
};

export default Classe;
