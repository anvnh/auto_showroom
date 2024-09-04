import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { MdDateRange } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { IoIosSpeedometer } from "react-icons/io";
import {
	EffectCoverflow,
	Pagination,
	Navigation,
	Autoplay,
} from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";
import { pos1, pos2, pos3, pos4, pos5, pos6 } from "../../assets";
import { IoIosClose } from "react-icons/io";
const Product2 = () => {
	const swiperRef = useRef(null);

	useEffect(() => {
		AOS.init({
			duration: 800,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);

	const [activeIndex, setActiveIndex] = useState(0);
	const [selectedCar, setSelectedCar] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [modalSize, setModalSize] = useState("w-96"); // Default size, can adjust as needed
	const [autoplayEnabled, setAutoplayEnabled] = useState(true); // State to control autoplay

	const carData = [
		{
			brand: "718 Cayman S",
			price: "$ 187.353.20",
			year: 2021,
			image: pos1,
			introduction:
				"The Porsche 718 Cayman S is a two-door sports car developed by Porsche.",
			seat: 2,
			speed: "285 km/h",
			yearOfManufacture: 2021,
			model: (
				<div>
					{" "}
					<iframe
						className="xl:w-[900px] xl:h-[400px] lg:w-[800px] lg:h-[270px] h-[180px] ss:w-[500px] ss:h-[300px] sm:w-[680px] sm:h-[340px] rounded-xl"
						title="Porsche 911 Sport Classic 2023"
						frameborder="0"
						allowfullscreen
						mozallowfullscreen="true"
						webkitallowfullscreen="true"
						allow="autoplay; fullscreen; xr-spatial-tracking"
						xr-spatial-tracking
						execution-while-out-of-viewport
						execution-while-not-rendered
						web-share
						src="https://sketchfab.com/models/a181f13df5c84f4399ace8fc87756b39/embed?autospin=1&autostart=1&preload=1&ui_theme=dark"
					>
						{" "}
					</iframe>{" "}
				</div>
			),
		},

		{
			brand: "911 Carrera S",
			price: "$ 335.165.02",
			year: 2023,
			image: pos3,
			introduction:
				"The Porsche 911 Carrera S is an upgraded version of the 911 Carrera, offering enhanced performance and technology.",
			seat: 4,
			speed: "308 km/h",
			model: (
				<div>
					{" "}
					<iframe
						className="xl:w-[900px] xl:h-[400px] lg:w-[800px] lg:h-[270px] h-[180px] ss:w-[500px] ss:h-[400px] sm:w-[680px] sm:h-[340px] rounded-xl"
						title="Porsche 911 Sport Classic 2023"
						frameborder="0"
						allowfullscreen
						mozallowfullscreen="true"
						webkitallowfullscreen="true"
						allow="autoplay; fullscreen; xr-spatial-tracking"
						xr-spatial-tracking
						execution-while-out-of-viewport
						execution-while-not-rendered
						web-share
						src="https://sketchfab.com/models/5e4f079a351e4be5bd8ffd5e5adbbcea/embed?autospin=1&autostart=1&preload=1&ui_theme=dark"
					>
						{" "}
					</iframe>{" "}
				</div>
			),
		},
		{
			brand: "911 Dakar",
			price: "$ 600.782.33",
			year: 2024,
			image: pos4,
			introduction:
				"The Porsche 911 Dakar is a special edition of the 911, designed and equipped for off-road racing purposes.",
			seat: 2,
			speed: "300 km/h",
			model: (
				<div >
					{" "}
					<iframe
						className="xl:w-[900px] xl:h-[400px] lg:w-[800px] lg:h-[270px] h-[180px] ss:w-[500px] ss:h-[400px] sm:w-[680px] sm:h-[340px] rounded-xl"
						title="Porsche 911 Sport Classic 2023"
						frameborder="0"
						allowfullscreen
						mozallowfullscreen="true"
						webkitallowfullscreen="true"
						allow="autoplay; fullscreen; xr-spatial-tracking"
						xr-spatial-tracking
						execution-while-out-of-viewport
						execution-while-not-rendered
						web-share
						src="https://sketchfab.com/models/47f74ddf8f964f79a94f5b87c7630b0a/embed?autospin=1&autostart=1&preload=1&ui_theme=dark"
					>
						{" "}
					</iframe>{" "}
				</div>
			),
		},
		{
			brand: "911 Sport Classic",
			price: "$ 755.201.85",
			year: 2023,
			image: pos5,
			introduction:
				"The Porsche 911 Sport Classic is a limited special edition of the 911, featuring high-end design and equipment.",
			seat: 4,
			speed: "310 km/h",
			model: (
				<div>
					{" "}
					<iframe
						className="xl:w-[900px] xl:h-[400px] lg:w-[800px] lg:h-[270px] h-[180px] ss:w-[500px] ss:h-[400px] sm:w-[680px] sm:h-[340px] rounded-xl"
						title="Porsche 911 Sport Classic 2023"
						frameborder="0"
						allowfullscreen
						mozallowfullscreen="true"
						webkitallowfullscreen="true"
						allow="autoplay; fullscreen; xr-spatial-tracking"
						xr-spatial-tracking
						execution-while-out-of-viewport
						execution-while-not-rendered
						web-share
						src="https://sketchfab.com/models/5bc785c9a69d4ee2b8b24a86cf90dde1/embed?autospin=1&autostart=1&preload=1&ui_theme=dark"
					>
						{" "}
					</iframe>
				</div>
			),
		},
		{
			brand: "911 Targa 4",
			price: "$ 350.096.18",
			year: 2022,
			image: pos6,
			introduction:
				"The Porsche 911 Targa 4 is a sports car with a distinctive Targa design, combining convertible style with sporty driving.",
			seat: 4,
			speed: "289 km/h",
			model: (
				<div>
					{" "}
					<iframe
						className="xl:w-[900px] xl:h-[400px] lg:w-[800px] lg:h-[270px] h-[180px] ss:w-[500px] ss:h-[400px] sm:w-[680px] sm:h-[340px] rounded-xl"
						title="Porsche 911 Sport Classic 2023"
						frameborder="0"
						allowfullscreen
						mozallowfullscreen="true"
						webkitallowfullscreen="true"
						allow="autoplay; fullscreen; xr-spatial-tracking"
						xr-spatial-tracking
						execution-while-out-of-viewport
						execution-while-not-rendered
						web-share
						src="https://sketchfab.com/models/634a76146a154e8dba08d43a46a63b67/embed?autospin=1&autostart=1&preload=1&ui_theme=dark"
					>
						{" "}
					</iframe>{" "}
				</div>
			),
		},
	];

	const showDetails = (index) => {
		setSelectedCar(carData[index]);
		setShowModal(true);
		setAutoplayEnabled(false); // Disable autoplay when showing detailsa
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.autoplay.stop(); // Stop autoplay explicitly
		}
		// Example of setting modal size based on index
		if (index % 2 === 0) {
			setModalSize("w-96"); // Default size
		} else {
			setModalSize("w-80"); // Adjust size conditionally
		}
	};

	const closeModal = () => {
		setShowModal(false);
		setSelectedCar(null);
		setAutoplayEnabled(true); // Enable autoplay when closing modal
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.autoplay.start(); // Start autoplay explicitly
		}
	};

	return (
		<div className="w-screen bg-neutral-900">
			<Swiper
				ref={swiperRef}
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 0,
					stretch: 210,
					depth: 1800,

					modifier: -1, // Đảo ngược chiều
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
						className={
							index === activeIndex ? "swiper-slide-active" : ""
						}
					>
						<div
								 data-aos="fade-right" 
							className="slide-content object-cover bg-transparent group flex flex-col items-center w-screen pt-1 sm:pt-12 pb-12 text-white font-poppins justify-center text-2xl"
							style={{
								width: "100%",
								boxSizing: "border-box",
							}}
						>
							<img

								src={car.image}
								alt={car.brand}
								className="w-full max-w-xs scale-100 sm:scale-150 md:max-w-sm sm:group-hover:scale-[1.7] group-hover:scale-[1.25] transition-all ease-in-out duration-300 group-hover:rotate-2 translate-x-1 lg:max-w-md"
								style={{ top: "-10px" }}
							/>
							<div
								className={`car-info px-6 py-1 rounded-3xl mt-4 ${index !== activeIndex ? "hidden" : ""
									}`}
							>
								<h3 className="brand justify-center flex-col font-bold text-2xl md:text-4xl text-center font-syncopate lg:text-4xl flex">
									{car.brand}
								</h3>
								<p className="price pt-3 group-hover:scale-110 group-hover:text-gray-300 transition-all ease-in-out duration-300 justify-center text-white text-base md:text-lg lg:text-xl font-kanit flex">
									{car.price}
								</p>
								<div className="pt-4 justify-center flex" >
									<div
										className="detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-40 lg:h-[40px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-kanit text-xl rounded-3xl text-center
										before:ease relative h-12 w-40 overflow-hidden border-gray-600 border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40
										items-center "
										onClick={() => showDetails(index)}
									>
										Details
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}

				{/* Controls */}
				{/* <div className="slider_controler ">
					<div className="swiper-button-next scale-90 hover:scale-110 text-white pr-24 duration-300 transition-all hover:pr-26 font-bold">
					</div>
					<div className="swiper-button-prev scale-90 hover:scale-110 duration-300 transition-all text-white pl-24 hover:pl-26 font-bold">

					</div>
				</div> */}
			</Swiper>


			{/* Selected Car Details Modal */}
			{selectedCar && showModal && (

				<div className="selected-car-info fixed top-12 left-0 w-full h-full flex justify-center items-center z-50 text-white ">

					<div
						className="p-4 w-[340px] h-[550px] ss:w-[600px] ss:h-[700px] sm:w-[750px] sm:h-[700px] lg:w-[1100px] lg:h-[600px] xl:w-[1200px] xl:h-[800px] bg-gray-900 backdrop-blur-3xl bg-opacity-20 rounded-2xl shadow-lg "
					>
						<div className="justify-end items-end flex">
							<button onClick={closeModal}>
								<IoIosClose className="w-[30px] h-[30px]" />
							</button>
						</div>
						<div className="justify-center items-center text-center flex pb-12">
							<div>
								<h2 className="md:text-3xl font-syncopate font-bold">
									{selectedCar.brand}
								</h2>
								<p className="md:text-lg font-syncopate">
									{selectedCar.price}
								</p>
								<div className="justify-center items-center flex">
									<hr className="pb-12 top-4 w-[20%] md:w-1/2 relative" />
								</div>
								<div className="px-4 md:px-0">{selectedCar.introduction}</div>
								<div className=" pt-5 gap-4 md:gap-8 text-md flex justify-center items-center">
									<div className="flex">
										<MdDateRange className="w-7 h-auto" />
										<p className="pl-5 relative">
											{" "}
											{selectedCar.year}
										</p>
									</div>
									<div className="flex ">
										<IoIosSpeedometer className="w-7 h-auto" />
										<p className="pl-5 relative">
											{selectedCar.speed}
										</p>
									</div>

									<div className="flex ">
										<FaCarAlt className="w-7 h-auto" />
										<p className="pl-5 relative">
											{" "}
											{selectedCar.seat}
										</p>
									</div>
								</div>
								<div className=" justify-center items-center flex pt-12">
									{selectedCar.model}
								</div>
							</div>
						</div>
					</div>

				</div>

			)}
		</div>
	);
};

export default Product2;
