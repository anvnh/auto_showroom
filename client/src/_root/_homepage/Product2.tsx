
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { pos1, pos2, pos3, pos4, pos5, pos6 } from "../../assets";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useRef, useState } from 'react'; // Import both useEffect and useRef

const Product2 = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out', 
            once: false,  
            mirror: true,  
            anchorPlacement: 'top-bottom', 
        });
    }, []);
	const [activeIndex, setActiveIndex] = useState(0);

	const carData = [
		{
			brand: "718 Cayman S",
			price: "$187,353.20",
			detailUrl: "/cars/1",
			image: pos1,
		},
		{
			brand: "911 Carrera.",
			price: "$29.940.885,00",
			detailUrl: "/cars/2",
			image: pos2,
		},
		{
			brand: "911 Carrera S",
			price: "$335.165,02",
			detailUrl: "/cars/3",
			image: pos3,
		},
		{
			brand: "911 Dakar",
			price: "$600.782,33",
			detailUrl: "/cars/4",
			image: pos4,
		},
		{
			brand: "911 Sport Classic",
			price: "$755.201,85",
			detailUrl: "/cars/5",
			image: pos5,
		},
		{
			brand: "911 Targa 4",
			price: "$350.096,18",
			detailUrl: "/cars/6",
			image: pos6,
		},
	];

	return (
		<div className="container object-cover">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 200,
					modifier: 2.5,
				}}
				pagination={{
					el: ".swiper-pagination",
					clickable: true,
				}}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className="swiper_container"
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				speed={3000}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
			>
				{/* Slides */}
				{carData.map((car, index) => (
					<SwiperSlide
						key={index}
						className={
							index === activeIndex ? "swiper-slide-active" : ""
						}
					>
						<div
							data-aos="flip-up"
							className="slide-content object-cover bg-black/25 group flex flex-col items-center pt-1 pb-12 text-white font-poppins justify-center text-2xl"
							style={{
								width: "100%", 
								boxSizing: "border-box", 
							}}
						>
							<img
								src={car.image}
								alt={car.brand}
								className="w-full  max-w-xs md:max-w-sm group-hover:scale-125 transition-all ease-in-out duration-300 group-hover:rotate-2 translate-x-1 lg:max-w-md"
                                style={{ top: "-10px" }} />{" "}
							{/* Điều chỉnh kích thước ảnh */}
							<div className="car-info px-6 py-1 rounded-3xl mt-4">
								{" "}
								{/* Thêm margin-top */}
								<h3 className="brand justify-center flex-col font-bold text-2xl md:text-4xl lg:text-5xl flex">
									{car.brand}
								</h3>
								<p className="price pt-2 group-hover:scale-110 group-hover:text-red-600 transition-all ease-in-out duration-300 justify-center text-white font-bold text-base md:text-lg lg:text-xl flex">
									{car.price}
								</p>
								<div className="pt-4 justify-center flex">
									<div className="detail-button bg-white text-primary rounded-2xl px-4 py-2 md:px-6 md:py-3 lg:w-40 lg:h-9 justify-center flex group-hover:bg-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:scale-110 font-bold text-sm md:text-base">
										details show
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}

				{/* Controls */}
				<div className="slider_controler">
					<div className="swiper-button-next slider-arrow">
						<FaChevronRight />
					</div>
					<div className="swiper-button-prev slider-arrow">
						<FaChevronLeft />
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</Swiper>
		</div>
	);
};

export default Product2;
