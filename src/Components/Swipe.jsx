import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Screen2 from './Screen2';
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";

const Swipe = () => {
    return (
        <div>
            <Swiper className="mySwiper">
                <SwiperSlide><Screen2 /></SwiperSlide>
                <SwiperSlide><Screen3 /></SwiperSlide>
                <SwiperSlide><Screen4 /></SwiperSlide>
            </Swiper>
        </div>
    );
}
export default Swipe;

