import { React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HashLink as Link } from 'react-router-hash-link';
import "swiper/css";
import "./MobileSlides.scss";

let data = require("../../fakeData.json").complexes;

export default function MobileSlide() {

  return (
    <>
        <Swiper class="swiper-container"
          direction="horizontal"
          slidesPerView="1"
          paginationClickable="!0"
          spaceBetween={30}
          speed={1500}
          autoplay={2500}
          loop={true}
        >

          {data.map((el, index)=>{
            let desc = ''
            if(el.description.length>80) desc = el.description.slice(0, 90) + "..."
            else desc = el.description;
              return (
                
                  <SwiperSlide
                    class="swiper-slide"
                    style={{ minHeight: "100%" }}
                  >
                    <div class="swiper-slide__block">
                      <div
                        class="swiper-slide__block__img"
                        data-swiper-parallax-y="70%"
                      >
                        <img src={el.photo} alt="" />
                      </div>
                      <div class="swiper-slide__block__text">
                        <h2 data-swiper-parallax-x="-60%" class="main__title">
                          {el.name}
                          <span>.</span>
                        </h2>
                        <p data-swiper-parallax-x="-40%" class="paragraphe">
                          {desc}
                        </p>
                        <Link
                          to={`/jkpage/${index + 1}`}
                          data-swiper-parallax-x="-30%"
                          class="link sliderFont"
                        >
                        <div> Дізнатись більше</div></Link>
                        <span data-swiper-parallax-y="60%" class="number" >
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                
              );
            })
          }
        </Swiper>
    </>
  );
}
