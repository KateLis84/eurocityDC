import {React} from 'react';
import './Card.scss'
import lock from '../../Assets/Images/lock.png';

function Card({image, title, description, date}) {

  return (
    <div className="card">
      <div className="card__pic" style={{backgroundImage: `url('${image}')`}}></div>
      <div className="card__text">
        <div className="card__date">
          {date}
        </div>
        <div className="card__title">{title}</div>
        <div className="card__description">
          {description}
        </div>
      </div>
    </div>
  );
}
export default Card;