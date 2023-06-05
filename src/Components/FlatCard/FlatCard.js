import React from "react";
import './FlatCard.scss'

export default function FlatCard({data}) {
  let ComplexData = require("../../fakeData.json").complexes;

  console.log(data.jkID)
  // 
  return (
    <div className="flatCard">
      <img src={data.img} alt="flat" className="flatCard__image" />
      <div className="flatCard__info">
        <div className="flatCard__info_above">
          {ComplexData[data.jkID - 1].name} • {data.level} ПОВЕРХ
        </div>
        <div className="flatCard__info_main">Квартира № {data.flat}</div>
        {data.status ? (
          <>
            <span className="flatCard__info_tag flatCard__info_tag_green">
              Вільно
            </span>
            <div className="flatCard__info_warning">Ціна за запитом</div>
          </>
        ) : (
          <span className="flatCard__info_tag flatCard__info_tag_red">
            Зайнято
          </span>
        )}
      </div>
      <div className="flatCard__icons">
        <div className="flatCard__icons_rooms">
          <span className="flatCard__outlined flatCard__outlined_big">
            {data.rooms}
          </span>
          <span>кімнати</span>
        </div>
        <div className="flatCard__icons_area">
          <span className="flatCard__outlined flatCard__outlined_big">
            {data.area}
          </span>
          <span>метри&sup2;</span>
        </div>
      </div>
    </div>
  );
}
