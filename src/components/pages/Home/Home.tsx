import React, { useEffect, useRef } from "react";
import styled from "./Home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "../../../../node_modules/swiper/swiper.css";


export const Home: React.FC = () => {

  const swiperRef = useRef<SwiperCore | null>(null);
  const num = 0
  useEffect(() => {
    // Перематываем на пятый слайд (индекс 4)
    if (swiperRef.current) {
      swiperRef.current.slideTo(num);

    }else{
      console.log('not swiper')
    }
  }, []);
  return (
    <div className={styled.home}>
      <div>
        <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          className={styled.swiper}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
        </Swiper>
      </div>
      <img src="https://static.tildacdn.com/tild3064-3933-4665-b933-633336306563/photo.jpg" />
    </div>
  );
};
