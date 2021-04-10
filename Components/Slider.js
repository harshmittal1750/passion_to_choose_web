import React from "react";
import Box1 from "./Box1";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCube } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/components/effect-cube/effect-cube.min.css";

SwiperCore.use([Navigation, Pagination, EffectCube]);

const Slider = () => {
  const slides = [];

  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <Box1 />
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <div className="container bg-danger">
        <Swiper
          id="main"
          controller
          effect="cube"
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
        >
          {slides}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default Slider;
