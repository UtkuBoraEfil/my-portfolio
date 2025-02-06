import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import "swiper/css/navigation";

//images
import Image from "next/image";
import featured1 from "@/public/images/featured/WeAreDevelopers-logo.svg";
import featured2 from "@/public/images/featured/careerfoundry-logo.svg";
import featured3 from "@/public/images/featured/colorlib-logo.svg";
import featured4 from "@/public/images/featured/featured.com-logo.svg";
import featured5 from "@/public/images/featured/frontend-mentor-logo.svg";
import featured6 from "@/public/images/featured/masai-logo.svg";
import featured7 from "@/public/images/featured/hostinger-logo.svg";
import featured8 from "@/public/images/featured/logo-bdwd.png";
import featured9 from "@/public/images/featured/upwork-logo.svg";

//arrows
import { Navigate_left } from "./custom navigations/nav-left";
import { Navigate_right } from "./custom navigations/nav-right";
import { Navigation } from "swiper/modules";

const featured = [
  featured1,
  featured2,
  featured3,
  featured4,
  featured5,
  featured6,
  featured7,
  featured8,
  featured9,
];

// Import Swiper featured
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

export function MySwiper() {
  return (
    <div className="w-full max-w-[850px] pt-5 flex items-center justify-center">
      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}  
        modules={[Autoplay, Navigation]}
        className=" "
      >
          {/* <Navigate_left />
          <Navigate_right /> */}
        <>
          {featured.map((referance, idx) => (
            <SwiperSlide
              className=" h-[50px] grid justify-items-center self-center  "
              key={idx}
            >
              <Image
                src={referance}
                className="object-contain  w-auto max-h-[50px] max-w-[98px]"
                alt="references"
              />
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
}
