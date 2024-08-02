import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useQuery } from "@tanstack/react-query";

const SomeProduct = () => {
	const [activeIndex, setActiveIndex] = useState(1); 

	const { data: otherProducts, isLoading, refetch, isRefetching } = useQuery({
		queryKey: ["other"],
		queryFn: async () => {
			try {
				const response = await fetch(`/api/car/other/suggested`);
				const data = await response.json();

				console.log(data);

				if (!response.ok) {
					throw new Error(data.message || "Something went wrong!");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

	return (
		<div className="pt-48 px-10 pb-60">
			<h1 className="text-white text-center font-syncopate text-4xl font-bold">
				SOME OTHERS PRODUCT
			</h1>

			<div className="mt-10 relative justify-center items-center flex">
				{otherProducts && (
					<Swiper
						effect={"slide"}
						grabCursor={true}
						centeredSlides={true}
						loop={false}
						slidesPerView={2} // Hiển thị 2 slide cùng lúc
						spaceBetween={15} // Khoảng cách giữa các slide
						coverflowEffect={{
							rotate: 0,
							stretch: 0,
							depth: 0,
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
							delay: 0,
							disableOnInteraction: true,
						}}
						speed={1500}
						initialSlide={1} 
						onSlideChange={(swiper) =>
							setActiveIndex(swiper.realIndex)
						}
					>
						{/* Slides */}
						{otherProducts.map((car, index) => (
							<SwiperSlide
								key={index}
								className={
									index === activeIndex
										? "swiper-slide-active"
										: ""
								}
							>
								<div
									className="slide-content object-cover bg-transparent group flex flex-col items-center w-screen pt-1 sm:pt-12 pb-12 text-white font-poppins justify-center text-2xl"
									style={{
										width: "100%",
										boxSizing: "border-box",
									}}
								>
									<div className="w-[680px] h-[520px] bg-white rounded-md p-3">
										<figure className="hover01 overflow-hidden">
											<img
												src={car.images[0]}
												alt={car.brand}
												className="rounded-xl w-[900px] h-[400px] transform transition-transform duration-300 hover:scale-110"
											/>
										</figure>
										<div className="text-black p-3 ">
											<h1 className="text-black text-3xl text-center font-syncopate font-bold">
												{car.brand}&nbsp;{car.car_model}
											</h1>
											<p className="text-black text-xl text-center font-syncopate font-bold">
												${car.price}
											</p>
											<div className="justify-center items-center flex pt-5">
												<button className="bg-gray-700 w-[150px] h-[40px] rounded-md hover:bg-gray-400 hover:text-black transition-all duration-300 ease-in-out text-white">
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
				)}
			</div>
		</div>
	);
};

export default SomeProduct;
