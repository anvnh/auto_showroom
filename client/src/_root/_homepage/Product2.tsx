import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { pos1, pos2, pos3, pos4, pos5, pos6 } from "../../assets";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { EffectCoverflow, Pagination, Navigation ,Autoplay} from "swiper/modules";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'; 

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
		<div className="w-screen">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				loop={false}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 0,
					stretch: 3290,
					depth: 1900,
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
				modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
				autoplay={{
					delay: 1500,
					disableOnInteraction: false,
				}}
				speed={500}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
			>
				{/* Slides */}
				{carData.map((car, index) => (
					<SwiperSlide
						key={index}
						className={index === activeIndex ? "swiper-slide-active" : ""}
					>
						<div
							data-aos="flip-up"
							className="slide-content object-cover bg-transparent group flex flex-col items-center w-screen pt-1 sm:pt-12 pb-12 text-white font-poppins justify-center text-2xl"
							style={{
								width: "100%", 
								boxSizing: "border-box", 
							}} >
							<img
								src={car.image}
								alt={car.brand}
								className="w-full max-w-xs scale-100 sm:scale-150 md:max-w-sm sm:group-hover:scale-[1.7] group-hover:scale-[1.25] transition-all ease-in-out duration-300 group-hover:rotate-2 translate-x-1 lg:max-w-md"
								style={{ top: "-10px" }} />
							<div className={`car-info px-6 py-1 rounded-3xl mt-4 ${index !== activeIndex ? 'hidden' : ''}`}>
								<h3 className="brand justify-center flex-col font-bold text-2xl md:text-4xl text-center font-syncopate lg:text-4xl flex">
									{car.brand}
								</h3>
								<p className="price pt-3 group-hover:scale-110 group-hover:text-gray-300 transition-all ease-in-out duration-300 justify-center text-white font-bold text-base md:text-lg lg:text-xl font-syncopate flex">
									{car.price}
								</p>
								<div className="pt-4 justify-center flex">
									<div className="detail-button bg-white text-primary px-4 py-2 md:px-6 md:py-3 lg:w-40 lg:h-[40px] justify-center flex group-hover:bg-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:scale-110 font-bold font-syncopate text-sm md:text-base rounded-3xl text-center">
                                        Details
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}

				{/* Controls */}
				<div className="slider_controler ">
					<div className="swiper-button-prev text-white pl-12">
						<FaChevronRight />
					</div>
					<div className="swiper-button-next text-white pr-12">
						<FaChevronLeft />
					</div>
					
				</div>
			</Swiper>
		</div>
	);
};

export default Product2;
