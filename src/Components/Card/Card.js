import React from 'react';
import './Card.scss'
import pic from '../../Assets/Images/work.png'

function Card(props) {

  return (
    <div className="card">
      <div className="card__pic"></div>
      <div className="card__text">
        <div className="card__date">
          27.02.2022
        </div>
        <div className="card__title">Головна назва</div>
        <div className="card__description">
          Місце для тексту новин Новобудови та інші актуальні новини якими ви
          можете зацікавитись
        </div>
      </div>
    </div>
  );
}

export default Card;