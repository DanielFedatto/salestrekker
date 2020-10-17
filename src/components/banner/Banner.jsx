import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import Banner from '../../images/1.jpg'

import 'swiper/swiper.scss';

function Banners() {
    return (
        <div className="banners">
            <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <figure>
                        <img src={Banner}/>
                        <figcaption>
                            <h1>Let your CRM do the work</h1>
                            <p>Automate your sales pipeline, ongoing work and projects</p>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Banner}/>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}

export default Banners;