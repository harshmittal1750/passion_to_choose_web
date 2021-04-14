import React from "react";
import Box1 from "./Box1";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

import datas from "./data";

import Button1 from "./Button1";

SwiperCore.use([Navigation, Pagination]);

const Slider = () => {
  const slides = [];

  // for (let i = 0; i < 10; i++) {
  //   slides.push(
  //     <SwiperSlide key={`slide-${i}`}>
  //       <Box1 />
  //     </SwiperSlide>
  //   );
  // }

  datas.map((data) => {
    return slides.push(
      <SwiperSlide key={data.id}>
        <Box1 id={data.id} ques={data.ques} ans={data.ans} />
      </SwiperSlide>
    );
  });

  return (
    <React.Fragment>
      <div className="container">
        <Swiper
          id="main"
          navigation
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
