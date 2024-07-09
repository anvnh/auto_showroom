import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { car41, car42, car43 } from "../../assets";

const SomeProduct = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Thiết lập slide thứ 2 là slide ban đầu

  const carData = [
    {
      brand: "718 Cayman S",
      price: "$187,353.20",
      detailUrl: "/cars/1",
      image: car41,
    },
    {
      brand: "911 Carrera.",
      price: "$29.940.885,00",
      detailUrl: "/cars/2",
      image: car42,
    },
    {
      brand: "911 Carrera S",
      price: "$335.165,02",
      detailUrl: "/cars/3",
      image: car43,
    },
  ];

  return (
    <div className="pt-48 px-10 pb-60">
      <h1 className="text-black text-center font-syncopate text-4xl font-bold">
        SOME OTHERS PRODUCT
      </h1>
      <p className="text-black text-center font-syncopate text-xl pt-2">
        Maybe you like
      </p>

      <div className="mt-10 relative justify-center items-center flex">
        <Swiper
          effect={"slide"}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={2} // Hiển thị 2 slide cùng lúc
          spaceBetween={1} // Khoảng cách giữa các slide
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="swiper_container"
          modules={[EffectCoverflow, Pagination, Navigation]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={500}
          initialSlide={1} // Thiết lập slide thứ 2 là slide ban đầu
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {/* Slides */}
          {carData.map((car, index) => (
            <SwiperSlide
              key={index}
              className={index === activeIndex ? "swiper-slide-active" : ""}
            >
              <div
                className="slide-content object-cover bg-transparent group flex flex-col items-center w-screen pt-1 sm:pt-12 pb-12 text-white font-poppins justify-center text-2xl"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div className="w-[700px] h-[550px] bg-white rounded-md p-3">
                <figure className="hover01 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.brand}
                    className="rounded-md w-[900px] h-auto transform transition-transform duration-300 hover:scale-110"
                  />
                  </figure>
                  <div className="text-black p-3 ">
                    <h1 className="text-black text-3xl text-center font-syncopate font-bold">
                      {car.brand}
                    </h1>
                    <p className="text-black text-xl text-center font-syncopate font-bold">
                      {car.price}
                    </p>
                    <div className="justify-center items-center flex pt-5">
                      <button className="bg-gray-900 w-[150px] h-[40px] rounded-md hover:bg-slate-300 hover:text-black transition-all duration-300 ease-in-out text-white">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Controls */}
          <div className="slider_controler">
            <div className="swiper-button-prev text-white pl-12">
              <FaChevronRight />
            </div>
            <div className="swiper-button-next text-white pr-12">
              <FaChevronLeft />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default SomeProduct;
