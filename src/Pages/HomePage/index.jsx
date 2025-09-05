import React, { useState } from 'react'
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
  const [category, setcategory] = useState("general");
  console.log(category)
  return (
    <div className='w-full '>
      <br /><br />
      {/* <h2 className='mt-5 text-4xl'>Choose your Category</h2> */}
      <div className='flex gap-5 justify-center mt-10 flex-wrap'>
        <button className='bg-blue-500 text-sm p-2 w-35 cursor-pointer text-white' onClick={() => setcategory("business")}>Business</button>
        <button className='bg-blue-500 text-sm p-2 w-35 cursor-pointer text-white' onClick={() => setcategory("entertainment")}>Entertainment</button>
        <button className='bg-blue-500 text-sm p-2 w-35 cursor-pointer text-white' onClick={() => setcategory("general")}>General</button>
        <button className='bg-blue-500 text-sm p-2 w-35 cursor-pointer text-white' onClick={() => setcategory("health")}>Health</button>
        <button className='bg-blue-500 text-sm p-2 w-35 cursor-pointer text-white' onClick={() => setcategory("science")}>Science</button>
        <button className='bg-blue-500 text-sm p-2 w-35 cursor-pointer text-white' onClick={() => setcategory("sports")}>Sports</button>
        <button className='bg-blue-500 text-sm p-2 w-35 cursor-pointer text-white' onClick={() => setcategory("technology")}>Technology</button>
      </div>
      <br />
      {/* latest news */}
      <LatestNews category={category} />

    </div>
  )
}

export default index