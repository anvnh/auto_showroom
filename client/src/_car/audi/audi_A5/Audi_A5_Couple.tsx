import { Navbar } from "../../../_root/_homepage"
import { bg_1 } from "@/assets/hplat_asset/img/background";
import {
  banner, a5_1, a5_2, a5_3, a5_4, a5_5, a5_6, a5_7, a5_8, a5_9, a5_10, a5_11, a5_12, a5_13, a5_14,
  mam1, backLight, light, noiThat1, power,
  inside2,
} from "@/assets/audiA5/couple"
import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {motion} from "framer-motion"
import Aos from "aos";
import audiA5 from "@/assets/hplat_asset/video"
const audi_A5_Couple = () => {
  const slides = [
    { url: a5_1, },
    { url: a5_2, },
    { url: a5_3, },
    { url: a5_4, },
    { url: a5_5, },
    { url: a5_6, },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000); // Change slide every 12 seconds

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div>
      <Parallax pages={8}>
        <ParallaxLayer offset={0} speed={1}>
          <img className="h-[7000px]" src={bg_1}/>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1} factor={5}>
          <img className="h-[10000px]" src={bg_1}/>
        </ParallaxLayer>
       
        <ParallaxLayer>
          <div className="flex items-start justify-center">
            <div className="w-screen bg-primary">
              <Navbar />
            </div>
          </div>
          <div className="hero">
            <div className="relative">
              <img className="object-cover w-screen h-screen" src={banner} />
              <div className="absolute z-10 top-0 text-slate-200 mx-[20px] my-[20px] sm:my-[50px] sm:mx-[50px]">
                <div className="font-bold text-[40px] lg:text-[60px]">
                  2024 A5 Coupe
                </div>
                <div className="font-semibold lg:text-[27px]">
                  Starting at $48,000
                </div>
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-800 "></div>
              <div className="absolute z-10  bottom-[150px] text-center w-screen flex flex-col gap-y-[20px] items-center font-bold ">
                <div className="w-[380px] ss:w-[450px] sm:w-[600px]  px-[50px] py-[10px] bg-slate-100 
            hover:bg-green-900 hover:text-slate-200 transition ease-linear
          ">
                  Build & price
                </div>
                <div className="w-[380px] ss:w-[450px] sm:w-[600px]  border px-[50px] py-[10px] border-white text-white
            hover:bg-white hover:text-black  transition ease-linear
          ">
                  Search inventory
                </div>
              </div>
            </div>
          </div>
          <div className="   mt-[50px] h-[500px] flex flex-col sm:flex-row items-center justify-center text-center w-screen gap-y-[20px] text-white " >
            <div className=" w-[300px] pb-[20px]  border-b sm:border-b-0 border-slate-600 sm:border-r">
              <div className="lg:text-[18px]">EPA-estimated fuel economy</div>
              <div className="text-[30px] lg:text-[35px]">27 MPG</div>
              <div className="lg:text-[18px]">View key MPG info</div>
            </div>
            <div className=" w-[300px] pb-[20px] border-b sm:border-b-0 border-slate-600 sm:border-r">
              <div className="lg:text-[18px]">Transmission</div>
              <div className="text-[30px] lg:text-[35px] ">7-speed</div>
              <div className="lg:text-[18px]">S tronic</div>
            </div>
            <div className=" w-[300px]   ">
              <div className="lg:text-[18px]">Matrix-design</div>
              <div className="text-[30px] lg:text-[35px]">LED headlights</div>
              <div className="lg:text-[18px]">Full LED</div>
            </div>
          </div>
          <div className='h-[650] w-full pb-10 relative group'>
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className='w-full h-[800px] bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer duration-150'>
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer duration-150'>
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex justify-center py-2 top-4'>
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className='text-2xl cursor-pointer'
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>

          </div>
          <div className="text-[30px] font-bold flex justify-center mb-[100px]    text-white h-[200px] w-screen ">
             <div className="w-[500px] h-[200px] flex justify-center items-center backdrop-blur-xl text-center border-t rounded-[40px] ">Sharp Taillights</div>
          </div>
          <div className="font-bold text-slate-600 text-center text-[30px] flex justify-center ">
            <img className="w-[700px] object-cover" src={a5_14}/>
            <img className="w-[700px] object-cover" src={a5_13}/>
          </div>
          <div className="mt-[200px] w-screen h-screen flex justify-center items-center gap-x-[30px] border-t rounded-[40px]">
            <div>
              <img  className="w-[800px] h-[500px] rounded-[40px] object-cover" src={a5_12}              />
            </div>
            <div className="w-[700px]">
              <p className="text-white text-[35px] font-bold">Aggressive design</p>
              <p  className="text-white text-[25px] font-semibold">High performance, bringing valuable experience to the driver. No matter the road, defeating Mercedes and BMW</p>
            </div>
          </div>
          <div className="flex mt-[200px] border-t justify-center items-center rounded-[40px] w-screen h-screen gap-x-[100px]">
            <div className="w-[600px]">
                <p className=" text-[40px] font-bold text-white">TFSI Power</p>
              <p className="text-white font-semibold text-[25px]">Make your passion, master the game, don't be afraid of your opponents</p>
            </div>
            <div className="w-[800px]  rounded-[40px]">
              <img  className="object-cover w-[900px] h-[700px] rounded-[40px]" src={power}/>
            </div>
          </div>
          <div className="mt-[100px] rounded-[40px] border-t">
            <div className="w-screen flex justify-center ">
                <div className="text-[30px] font-bold flex items-center justify-center text-white mt-[100px] text-center w-[400px] h-[200px] backdrop-blur-xl border-b rounded-[40px]">Airplane Cockpit</div>
            </div>
              <div className="w-screen flex justify-center ">
                  <img className="w-[1500px] object-cover h-[650px] rounded-[40px] mt-[40px]" src={noiThat1}/>
              </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default audi_A5_Couple