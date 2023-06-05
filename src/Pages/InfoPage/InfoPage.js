import React from "react";
import "./InfoPage.scss";

import Chip from "@mui/material/Chip";
import Card from '../../Components/Card/Card'

let JsonData = require("../../fakeData.json").topics;

export default function ArticlePage({ data, typeOfData }) {
  data = {
    title: "Новина 1",
    tag: ["Стожари", "Забудова", "Відкриття"],
    photo: "../images/work.png",
    text: "Ми з радістю повідомляємо, що будівництво нашого престижного Житлового Комплексу Винковий переходить до етапу активної реалізації. З великим задоволенням повідомляємо, що проект досяг 50% свого завершення! Це величезний крок вперед, який свідчить про нашу відданість та професіоналізм у будівництві найсучасніших житлових комплексів. Зараз наша команда працює наполегливо, щоб завершити роботи у встановлені терміни та забезпечити вам ідеальне місце для життя. Наші інженери та робітники працюють в найкращих традиціях будівельної індустрії, забезпечуючи високу якість будівництва, використовуючи передові технології та матеріали. Зараз ми вже можемо похизуватися великими досягненнями Житлового Комплексу Винковий, включаючи встановлення фундаменту, зведення стін, встановлення вікон і роботи з внутрішнім оздобленням. На даний момент ми активно працюємо над завершенням зовнішнього оздоблення та ландшафтного дизайну. Продовжуйте слідкувати за нашими новинами, оскільки ми будемо постійно оновлювати вас про прогрес будівництва Житлового Комплексу Винковий. Наближається час, коли ви зможете стати гордим власником найкращого житла у нашому мальовничому",
    date: "27.06.2021",
  };
  typeOfData = "news";
  const firstLetter = data.text[0];
  const restOfText = data.text.substring(1);


  function getSimularResults() {
    const requiredData = (typeOfData === "news") ? JsonData.news : JsonData.articles;
    let result = [];
    if(typeOfData === "news") {
      requiredData.map((el, index)=>{
        el.tag.map((tag)=>{
          if (data.tag.includes(tag) && !result.includes(el)) {
            result.push(el)
          }
        })
      })
    }
    else {
      result.push(requiredData)
    }

    return result.slice(0, 3);
  }

  return (
    <div className="info">
      <h1 className="info__title">{data.title}</h1>

      <img src={data.photo} alt="infoPhoto" className="info__img" />

      <div className="info__textBlock">
        <div className="info__firstLetter">{firstLetter}</div>
        <div className="info__text">{restOfText}</div>
      </div>

      <div className="info__more">
        <h3>{typeOfData == "news"
          ? "Більше новин за тегами"
          : "Вас також може зацікавити"}</h3>
        {typeOfData == "news" ? (
          <div className="info__tags">
            {data.tag.map((el) => {
              return (
                <Chip
                  className="test"
                  label={el}
                  sx={{
                    backgroundColor: "#C8C8C8",
                    color: "white",
                    marginRight: "15px",
                  }}
                />
              );
            })}
          </div>
        ) : null}

        <div className="info__moreCards">
          {
            getSimularResults().map((el)=>{
              return <Card image={el.photo} title={el.title} description={el.text.slice(0, 50)+"..."}/>
            })
          }
        </div>
        

      </div>
    </div>
  );
}
