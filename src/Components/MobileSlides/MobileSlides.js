import {React, useEffect} from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { EffectCoverflow, Mousewheel, Pagination, Navigation } from 'swiper';
import $ from 'jquery';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './MobileSlides.scss';




export default function MobileSlide() {

  var bg = document.querySelector('.item-bg');
  var items = document.querySelectorAll('.news__item');
  var item = document.querySelector('.news__item');

  function cLog(content) {
      console.log(content)
  }

function smallScreen(){
    $(document).on("mouseover", ".news__item", function (_event, _element) {

        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;

                $('.item-bg').addClass('active');
                $('.news__item').removeClass('active');
                // $('.news__item').removeClass('active');

                bg = document.querySelector('.item-bg');
                bg.style.width = width + 'px';
                bg.style.height = height + 'px';
                bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            });

            element.addEventListener('mouseleave', function () {
                $('.item-bg').removeClass('active');
                $('.news__item').removeClass('active');
            });

        });

    });
}

useEffect(()=>{
  bg=document.querySelector('.item-bg');
  if($(window).width() > 800) smallScreen();
}, [])


function touchEnd () {
    $('.news__item').removeClass('active');
    $('.swiper-slide-active .news__item').addClass('active');
};

function onSlideChange () {
    $('.news__item').removeClass('active');
};

function slideChangeTransitionEnd () {
    $('.news__item').removeClass('active');
    var activeItem = document.querySelector('.swiper-slide-active');

    var sliderItem = activeItem.querySelector('.news__item');

    $('.swiper-slide-active .news__item').addClass('active');

    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;


    $('.item-bg').addClass('active');
    bg=document.querySelector('.item-bg');
    bg.style.width = width + 'px';
    bg.style.height = height + 'px';
    bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
};


  return (
    <>
    <div class="item-bg"></div>

      <Swiper className="news-slider"
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        spaceBetween= "0"
        slidesPerView= 'auto'
        speed="300"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 3,
          slideShadows: false
        }}
        breakpoints={{
          480: {
              spaceBetween: 0,
              centeredSlides: true
          }
        }}
        simulateTouch={true}
        navigation={{
            nextEl: '.news-slider-next',
            prevEl: '.news-slider-prev'
        }}
        pagination={{
            el: '.news-slider__pagination',
            clickable: true
        }}
        onSlideChange={()=>onSlideChange()}
        onSlideChangeTransitionEnd={()=>slideChangeTransitionEnd()}
        onTouchEnd={()=>{touchEnd()}}
      >
          <div className="news-slider__wrp swiper-wrapper">
            <SwiperSlide className="news-slider__item swiper-slide">
              <a href="#" className="news__item">
                <div className="news-date">
                  <span className="news-date__title">24</span>
                  <span className="news-date__txt">May</span>
                </div>
                <div className="news__title">Lorem Ipsum Dolor Sit Amed</div>

                <p className="news__txt">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s...
                </p>

                <div className="news__img">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-2.webp"
                    alt="news"
                  />
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className="news-slider__item swiper-slide">
              <a href="#" className="news__item">
                <div className="news-date">
                  <span className="news-date__title">25</span>
                  <span className="news-date__txt">May</span>
                </div>
                <div className="news__title">Lorem Ipsum Dolor Sit Amed</div>

                <p className="news__txt">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s...
                </p>

                <div className="news__img">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-3.webp"
                    alt="news"
                  />
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className="news-slider__item swiper-slide">
              <a href="#" className="news__item">
                <div className="news-date">
                  <span className="news-date__title">26</span>
                  <span className="news-date__txt">May</span>
                </div>
                <div className="news__title">Lorem Ipsum Dolor Sit Amed</div>

                <p className="news__txt">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s...
                </p>

                <div className="news__img">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-4.webp"
                    alt="news"
                  />
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className="news-slider__item swiper-slide">
              <a href="#" className="news__item">
                <div className="news-date">
                  <span className="news-date__title">27</span>
                  <span className="news-date__txt">May</span>
                </div>
                <div className="news__title">Lorem Ipsum Dolor Sit Amed</div>

                <p className="news__txt">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s...
                </p>

                <div className="news__img">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-2.webp"
                    alt="news"
                  />
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className="news-slider__item swiper-slide">
              <a href="#" className="news__item">
                <div className="news-date">
                  <span className="news-date__title">28</span>
                  <span className="news-date__txt">May</span>
                </div>
                <div className="news__title">Lorem Ipsum Dolor Sit Amed</div>

                <p className="news__txt">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s...
                </p>

                <div className="news__img">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-5.webp"
                    alt="news"
                  />
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className="news-slider__item swiper-slide">
              <a href="#" className="news__item">
                <div className="news-date">
                  <span className="news-date__title">29</span>
                  <span className="news-date__txt">May</span>
                </div>
                <div className="news__title">Lorem Ipsum Dolor Sit Amed</div>

                <p className="news__txt">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s...
                </p>

                <div className="news__img">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-4.webp"
                    alt="news"
                  />
                </div>
              </a>
            </SwiperSlide>
          </div>
      </Swiper>
    </>
  );
};