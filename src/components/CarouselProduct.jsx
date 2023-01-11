import React from "react";
import { FreeMode, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "./Product";

import "swiper/css";
import "swiper/css/free-mode";

const CarouselProduct = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto py-10 w-full">
      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        navigation
        modules={[FreeMode, Navigation]}
      >
        {data.map((item) => (
          <SwiperSlide className="w-[50%] md:w-[25%]">
            <Product item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;
