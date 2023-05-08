import { React, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Pagination, Navigation } from "swiper";
import $ from "jquery";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MobileSlides.scss";

export default function MobileSlide() {

//   if(window.innerWidth < 1200) {
//     new Swiper(".swiper-container",{
//         direction: "horizontal",
//         slidesPerView: 1,
//         nextButton: ".swiper-button-next",
//         prevButton: ".swiper-button-prev",
//         paginationClickable: !0,
//         spaceBetween: 0,
//         autoplay: 2500,
//         loop: !0
//     })
// } else {
//     new Swiper(".swiper-container",{
//         direction: "horizontal",
//         slidesPerView: 1,
//         parallax: !0,
//         nextButton: ".swiper-button-next",
//         prevButton: ".swiper-button-prev",
//         paginationClickable: !0,
//         spaceBetween: 0,
//         speed: 1500,
//         parallax: !0,
//         autoplay: 2500,
//         loop: !0
//     })
// }


  return (
    <section class="section__slider">
      <div class="container__center">
        <Swiper class="swiper-container"
          direction="horizontal"
          slidesPerView="1"
          paginationClickable="!0"
          spaceBetween={0}
          speed={1500}
          autoplay={2500}
          loop={true}
        >
          <div class="swiper-wrapper">
            <SwiperSlide class="swiper-slide">
              <div class="swiper-slide__block">
                <div
                  class="swiper-slide__block__img"
                  data-swiper-parallax-y="70%"
                >
                  <a target="_blank" href="#">
                    <img
                      src="https://images.unsplash.com/photo-1456518563096-0ff5ee08204e?auto=format&amp;fit=crop&amp;w=1351&amp;q=60&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                      alt=""
                    />
                  </a>
                </div>
                <div class="swiper-slide__block__text">
                  <h2 data-swiper-parallax-x="-60%" class="main__title">
                    Slider
                    <br />
                    One
                    <span>.</span>
                  </h2>
                  <h3 data-swiper-parallax-x="-50%" class="main__subtitle">
                    Tagline
                    <span> • 2017</span>
                  </h3>
                  <p data-swiper-parallax-x="-40%" class="paragraphe">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                  <a
                    data-swiper-parallax-x="-30%"
                    class="link"
                    target="_blank"
                    href="#"
                  >
                    Discover
                  </a>
                  <span data-swiper-parallax-y="60%" class="number">
                    1
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="swiper-slide__block">
                <div
                  class="swiper-slide__block__img"
                  data-swiper-parallax-y="70%"
                >
                  <a target="_blank" href="#">
                    <img
                      src="https://images.unsplash.com/photo-1510709657750-f5a80fc8da9c?auto=format&amp;fit=crop&amp;w=1950&amp;q=60&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                      alt=""
                    />
                  </a>
                </div>
                <div class="swiper-slide__block__text">
                  <h2 data-swiper-parallax-x="-60%" class="main__title">
                    Slider
                    <br />
                    Two
                    <span>.</span>
                  </h2>
                  <h3 data-swiper-parallax-x="-50%" class="main__subtitle">
                    Tagline
                    <span>• 2017</span>
                  </h3>
                  <p data-swiper-parallax-x="-40%" class="paragraphe">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                  <a
                    data-swiper-parallax-x="-30%"
                    style={{zIndex: 5}}
                    class="link"
                    target="_blank"
                    href="#"
                  >
                    Discover
                  </a>
                  <span data-swiper-parallax-y="60%" class="number">
                    2
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="swiper-slide__block">
                <div
                  class="swiper-slide__block__img"
                  data-swiper-parallax-y="70%"
                >
                  <a target="_blank" href="#">
                    <img
                      src="https://images.unsplash.com/photo-1505567745926-ba89000d255a?auto=format&amp;fit=crop&amp;w=1951&amp;q=60&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                      alt=""
                    />
                  </a>
                </div>
                <div class="swiper-slide__block__text">
                  <h2 data-swiper-parallax-x="-60%" class="main__title">
                    Slider
                    <br />
                    Three
                    <span>.</span>
                  </h2>
                  <h3 data-swiper-parallax-x="-50%" class="main__subtitle">
                    Tagline
                    <span>• 2017</span>
                  </h3>
                  <p data-swiper-parallax-x="-40%" class="paragraphe">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                  <a
                    data-swiper-parallax-x="-30%"
                    class="link"
                    target="_blank"
                    href="#"
                  >
                    Discover
                  </a>
                  <span data-swiper-parallax-y="60%" class="number">
                    3
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
