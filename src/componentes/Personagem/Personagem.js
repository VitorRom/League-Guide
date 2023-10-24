import './Personagem.css'
import React, { useState } from 'react';

 const Personagem = (props) => {

    const [novaClasse, setNovaClasse] = useState(props.classe);

    const handleChangeClasse = (event) => {
      const novaClasseSelecionada = event.target.value;
      setNovaClasse(novaClasseSelecionada);
      props.onChangeClasse(novaClasseSelecionada); // Chame a função no componente pai
      window.location.reload();
    };

    return (
        <div className='personagem'>
            <div className='cabecalho'>
                <img src={props.imagem} alt={props.nome}></img>
                </div>
                <div className='rodape'>
                    <h4>{props.nome}</h4>
                    <h5>{props.rota}</h5>  
                    <legend>Alterar Classe</legend>
                    <select value={novaClasse} onChange={handleChangeClasse}>
                <option value="Assassino">Assassino</option>
                <option value="Mago">Mago</option>
                <option value="Lutador">Lutador</option>
                <option value="Atirador">Atirador</option>
                <option value="Suporte">Suporte</option>
                <option value="Tanque">Tanque</option>
                <option value="Especialista">Especialista</option>
            </select>
                </div>
        </div>
    )
}

export default Personagem

