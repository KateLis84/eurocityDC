import { React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
              return (
                <SwiperSlide class="swiper-slide"
                style={{minHeight: '100%'}}
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
                        {el.description}
                      </p>
                      <a
                        data-swiper-parallax-x="-30%"
                        class="link"
                        target="_blank"
                        href="#"
                      >
                        Дізнатись більше
                      </a>
                      <span data-swiper-parallax-y="60%" class="number">
                        {index+1}
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
