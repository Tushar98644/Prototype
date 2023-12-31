/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function App() {
  return (
    <div className="container">
      {/* <h1 className="heading"></h1> */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 2.5,
        }}
        // pagination={{ el: '.swiper-pagination' }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        //   clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container">
        <SwiperSlide>
          <img src='images/slider.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='images/slider.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='images/slider.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='images/slider.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='images/slider.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='images/slider.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='images/slider.png' alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;