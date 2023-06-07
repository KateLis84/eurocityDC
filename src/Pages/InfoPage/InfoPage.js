import {React, useEffect} from "react";
import "./InfoPage.scss";
import '../../Constants/GeneralStyles/scrollAnimations.scss';
import { HashLink as Link } from 'react-router-hash-link';
import {useParams} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Chip from "@mui/material/Chip";
import Card from '../../Components/Card/Card'

let JsonData = require("../../fakeData.json").topics;

export default function ArticlePage() {

  window.scrollTo(0, 0)

  const typeOfData = useParams().infoType;
  const infoId =useParams().infoId;
  const data = getData();
  const firstLetter = data.text[0];
  const restOfText = data.text.substring(1);

  useEffect(() => {
    document.getElementById("heroEffectHeader").style.display = "none";
    document.getElementById("customHeader").className = 'header header-scroll';
  }, []);

  function getData() {
    if(typeOfData === "news") return JsonData.news[infoId-1];
    else return JsonData.articles[infoId-1];
  }

  function getSimularResults() {
    const requiredData = (typeOfData === "news") ? JsonData.news : JsonData.articles;
    let result = [];
    if(typeOfData === "news") {
      requiredData.map((el, index)=>{
        el.tag.map((tag)=>{
          if (data.tag.includes(tag) && !result.includes(el) && el!= data) {
            result.push(el)
          }
        })
      })
    }
    else result = requiredData

    return result.slice(0, 3);
  }

  return (
    <div className="info">
      <h1 className="info__title">{data.title}</h1>

      <img src={"../" + data.photo} alt="info_photo" className="info__img" />

      <div className="info__textBlock">
        <div className="info__firstLetter">{firstLetter}</div>
        <div className="info__text">{restOfText}</div>
        
      </div>

      <Link to="/topics" className="info__btn buttonAnim">Переглянути інші новини →</Link>

      <div className="info__more">
        <h3>
          {typeOfData == "news"
            ? "Більше новин за тегами"
            : "Вас також може зацікавити"}
        </h3>
        {typeOfData == "news" ? (
          <div className="info__tags">
            {data.tag.map((el) => {
              return (
                <Chip
                  className="info__tags_tag"
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
          {getSimularResults().map((el, index) => {
            return (
              <ScrollAnimation animateIn="TopBottom" delay={index+"00"} key={index} animateOnce={true}>
                <Link style={{ all: "unset" }} to={"/info/"+ typeOfData + "/" + el.id}>
                  <Card
                    image={"../" + el.photo}
                    title={el.title}
                    description={el.text.slice(0, 50) + "..."}
                  />
                </Link>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </div>
  );
}
