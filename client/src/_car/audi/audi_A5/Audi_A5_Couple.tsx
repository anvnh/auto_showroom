import { Navbar } from "../../../_root/_homepage"
import { banner, a5_1, a5_2, a5_3, a5_4, a5_5, a5_6, a5_7, a5_8, a5_9, a5_10, a5_11, a5_12, a5_13, a5_14 ,
  mam1,backLight,light,noiThat1,
} from "@/assets/audiA5/couple"
import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
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
      <div className="flex items-start justify-center">
        <div className="w-screen">
          <Navbar />
        </div>
      </div>
      <div className="">
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
      <div className="   mt-[50px] flex flex-col sm:flex-row items-center justify-center text-center w-screen gap-y-[20px]" >
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
      <div className="font-bold text-slate-600 text-center text-[30px]">
        <div className="mb-[50px]">Cunning Wheels</div>
        <img className="mb-[50px] "  src={mam1}/>
        <div className="mb-[50px]">Pretty Light</div>
        <img className="mb-[50px]" src={light}/>
        <div className="mb-[50px]">Inside</div>
        <img className="mb-[50px]" src={noiThat1}/>
      </div>
    </div>
  )
}

export default audi_A5_Couple