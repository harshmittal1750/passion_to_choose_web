import React from "react";

import Box from "./Box";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

const Slider = () => {
  const slides = [];

  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        {/* <img
          src={`https://picsum.photos/id/${i + 1}/540/320`}
          style={{ listStyle: "none", margin: "auto" }}
          alt={`slide ${i}`}
        /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem 0",
          }}
        >
          <Box />
        </div>
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      {/* lorem ipsum */}
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides}
      </Swiper>
    </React.Fragment>
  );
};

export default Slider;
