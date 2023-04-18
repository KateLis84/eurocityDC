import React from "react";
import './Slides.scss'
import photo1 from '../../Assets/Images/building1.jpg'
import photo2 from '../../Assets/Images/building2.jpg'
import photo3 from '../../Assets/Images/building3.jpg'

function Slides() {

  return (
    <div className="slides mainPage__slides">
      <div className="slides__part">
        <img src={photo1} alt="building" className="slides__photo" />
        <div className="slides__overlay"> 
          <div className="slides__text">
            <h1 className="slides__title">Назва новобудови</h1>
            <div className="slides__description">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked 1.10.33 of
              "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
              Cicero, written in 45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first line of
              Lorem Ipsum,
            </div>
          </div>
        </div>
      </div>

      <div className="slides__part">
        <img src={photo2} alt="building" className="slides__photo" />
        <div className="slides__overlay">
          <div className="slides__text">
            <h1 className="slides__title">Назва новобудови</h1>
            <div className="slides__description">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked 1.10.33 of
              "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
              Cicero, written in 45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first line of
              Lorem Ipsum,
            </div>
          </div>
        </div>
      </div>

      <div className="slides__part">
        <img src={photo3} alt="building" className="slides__photo" />
        <div className="slides__overlay">
          <div className="slides__text">
            <h1 className="slides__title">Назва новобудови</h1>
            <div className="slides__description">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked 1.10.33 of
              "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
              Cicero, written in 45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first line of
              Lorem Ipsum,
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slides;