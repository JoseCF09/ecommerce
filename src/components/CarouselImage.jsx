import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const CarouselImage = () => {
  return (
    <Swiper slidesPerView={1} pagination>
      <SwiperSlide>Slide1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};

export default CarouselImage;
