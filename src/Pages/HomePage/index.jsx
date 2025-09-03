import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import bg1 from '../../assets/bg1.jpg'
import bg2 from '../../assets/bg2.jpg'
import bg3 from '../../assets/bg3.jpg'
import LatestNews from '../../Component/News/LatestNews';


function index() {
  return (
    <div className='w-full '>

      {/* hero secton  */}
      <div className='h-130'>
        <div className='swiper-wrapper'>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            autoHeight={false}
            loop={true}
          >
            <SwiperSlide><img src={bg1} alt="Slide 1" /></SwiperSlide>
            <SwiperSlide><img src={bg2} alt="Slide 2" /></SwiperSlide>
            <SwiperSlide><img src={bg3} alt="Slide 2" /></SwiperSlide>

          </Swiper>
        </div>
      </div>
      <br /><br />
      {/* latest news */}
      <LatestNews/>

    </div>
  )
}

export default index