import React from "react";
import './JKPage.scss';
import '../../Constants/GeneralStyles/animations.scss'
import {useParams} from 'react-router-dom'

let data = require("../../fakeData.json").complexes;

export default function JKpage() {

  const params = useParams();
  const JK = data[params.jkId-1];

  return (
    <div className="jkPage">

      <div className="jkPage__block jkPage__block_info">
        <div className="jkPage__btn buttonAnim">Переглянути квартири → </div>
        <div className="jkPage__txt">
          <div className="jkPage__txt_title">{JK.name}</div>
          <div className="jkPage__txt_description">{JK.description}</div>
        </div>
        <img src={"../" + JK.photo} className="jkPage__image" alt="building" />
      </div>

      <div className="jkPage__block">
        <iframe
          className="jkPage__block_map"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.491758264307!2d24.021774976466723!3d49.85200657148402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add0a2aabbcb9%3A0xed7e50b5ae62c05!2sParking!5e0!3m2!1suk!2sua!4v1683634374243!5m2!1suk!2sua"
          style={{border: 0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="jkPage__block jkPage__block_gallery">
        {JK.gallery.map((img) => {
          return (
            <div className="jkPage__block jkPage__block_gallery_wrapper">
            <img
              src={"../" + img}
              alt="building"
              className="jkPage__block_gallery_image"
            /></div>
          );
        })}
      </div>

    </div>
  );
}