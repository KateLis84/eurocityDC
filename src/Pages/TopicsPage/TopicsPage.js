import {React, useState, useEffect} from 'react';
import './TopicsPage.scss';
import Tabs from './Tabs.js';
import Chip from "@mui/material/Chip";
import { HashLink as Link } from 'react-router-hash-link';

let topics = require("../../fakeData.json").topics;

export default function TopicsPage({filters = 'none'}) {
  const [topic, setTopic] = useState('Новини');
  const [info, setInfo] = useState(topics.news);
  const [chips, setChips] = useState([]);

  const [news, setNews] = useState(topics.news)

  function HandleChip(event) {
    if(topic == 'Статті') return;
    let element = event.currentTarget
    if(element.classList.contains('chipGroup__chip_active')) element.classList.remove('chipGroup__chip_active')
    else element.classList.add('chipGroup__chip_active');
    
    if(chips.includes(element.id)){
      setChips(chips.filter(el => el != element.id))
    } else {
      setChips([...chips, element.id])
    }
  }

  useEffect(()=>{
    if(topic == 'Новини') setInfo(news)
    else if(topic == 'Статті') setInfo(topics.articles)
  }, [topic])

  useEffect(()=>{
    FilterByChip();
  }, [chips])

  useEffect(()=>{
    setInfo(news);
  }, [news])

  function changeTopic(value) {
    if(value != topic) setTopic(value)
  }

  function FilterByChip() {
    let res = [];

    news.map((el)=>{
      chips.map((chip)=>{
        if(el.tag.includes(chip) && !res.includes(el)) res.push(el)
      })
    })

    if(chips.length == 0) res = topics.news;
    setNews(res);
  }

  function setChipArray() {
    let res = [];
    topics.news.map((el)=>{
      el.tag.map((tag)=>{
        if(!res.includes(tag)) res.push(tag)
      })
    })
    return res;
  }

  return (
    <div className="topics">
      <div className="topics__mainGrid">
        <div
          className="topics__gridElement"
          style={{ backgroundImage: `url(${topics.news[0].photo})` }}
        >
          <div className="topics__gridElement_text">
            <h1>{topics.news[0].title}</h1>
          </div>
        </div>

        <div className="topics__secondGridContainer">
          {
            topics.news.slice(1, 5).map((el, index)=>{
              return (
                <div
                  className={index == 0 ? "topics__gridElement topics__gridElement_second" : "topics__gridElement"}
                  style={{ backgroundImage: `url(${el.photo})` }}
                >
                  <div className="topics__gridElement_text">
                    <h1>{el.title}</h1>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>

      <div className="topics__container">
        <div className="topics__list">
          <Tabs info={["Новини", "Статті"]} handleChange={changeTopic}/>
          <div className="topics__list_container">
            {info.map((el)=>{
              return(
                <Link style={{ all: "unset" }} to={"/info/" + (topic=="Новини"?"news":"articles") + "/" + el.id}>
                  <div className="topics__list_element news">
                    <div
                      className="news__image"
                      style={{ backgroundImage: `url(${el.photo})` }}
                    ></div>
                    <div className="news__text">
                      <div className="news__title">{el.title}</div>
                      <div className="news__text">
                        {el.text.slice(0, 75) + "..."}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="topics__chipGroup chipGroup">
          <div className="chipGroup__title">Теги</div>
          <div className="chipGroup__chips">
            {
              setChipArray().map((el)=>{
                return(
                  <Chip
                    className="chipGroup__chip"
                    label={el}
                    id={el}
                    onClick={HandleChip}
                    sx={{ marginRight: "5px", marginBottom: "5px" }}
                  />
                )
                
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}