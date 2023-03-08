import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import cup from "../Home/../assest/cup.jpg";
import frames from "../Home/../assest/frames.jpg";
import fsize from "../Home/../assest/Fsize.jpg";
import pillow from "../Home/../assest/pillow.jpg";
import { Autoplay } from "swiper";

const Content = () => {
    return ( 
        <div className="flex flex-col md:h-auto justify-evenly md:flex-row items-center ">
        <div className="flex flex-col justify-center">
          <p className="p-2 md:text-6xl font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl">Digital</p>
          <p className="p-2 md:text-6xl font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl">Dream</p>
          <p className="p-2 md:text-6xl font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl">Creations</p>
        
        <div className="">
          <p  className="px-2 my-3 text-3xl "> Frame every moment.</p>
          </div> 
          
        </div>
        <div
          className=" h-auto w-4/6 md:h-2/3 md:w-1/3 m-0 md:-ml-32">
        <Swiper className="swiper-slide" data-swiper-autoplay="2000" 
          effect={"cards"}
          grabCursor={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCards]}
          
        >
          <SwiperSlide>
            <img className="h-full w-full" src={cup} alt="kec" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full w-full" src={frames} alt="kec" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full w-full" src={fsize} alt="kec" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full w-full" src={pillow} alt="kec" />
          </SwiperSlide>
        </Swiper>
        </div>
      </div>

     );
}
 
export default Content;