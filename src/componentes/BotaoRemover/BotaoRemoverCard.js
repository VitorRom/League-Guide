import React from 'react';
import './BotaoRemoverCard.css';

export const BotaoRemoverCard = (props) => {
  return (
    <button className='btnRemoverCard' onClick={props.onClick}>
      Remover
    </button>
  );
};
