import React from 'react';
import './Botao.css';

export const Botao = (props) => {
  const handleClick = (event) => {
    window.location.reload(event); // Isso evita a recarga da página
    // Coloque aqui o código que você deseja executar ao clicar no botão
  };

  return (
    <button type='submit' className='botao' onSubmit={handleClick}>
      {props.children}
    </button>
  );
};
