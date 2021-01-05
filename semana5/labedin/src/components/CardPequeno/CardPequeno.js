import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
  return (
    <div className='_CardPequeno'>
        <img src={props.imagem} />
      <p>{props.email}</p>
    </div>
  )
}

export default CardPequeno;
