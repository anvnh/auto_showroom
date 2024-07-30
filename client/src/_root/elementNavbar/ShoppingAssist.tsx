import React from "react";

import { BuilCar, offer, testdrive } from "../../assets";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
const ShoppingAssist = () => {
	return (
		<div>
			<div className="hidden md:block">
				<div>
					<div className="pt-20 lg:pt-2 h-auto relative justify-start flex">
						<img
							data-aos="slide-right"
							data-aos-delay="1200"
							className=" xl:w-[640px] lg:w-[400px] rounded-[25px]"
							src={BuilCar}
						/>
					</div>
					<div
						data-aos="slide-left"
						data-aos-delay="2000"
						className="pt-6 lg:pl-20 z-50 lg:text-2xl relative flex xl:pl-36 xl:text-3xl"
					>
				<Button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64 left-16">
							build your car
						</Button>
					</div>
				</div>
				<div>
					<div className="xl:bottom-72 lg:bottom-[10px] h-auto relative justify-center flex">
						<img
							data-aos="slide-up"
							data-aos-delay="1000"
							className="xl:w-[680px] lg:w-[400px] rounded-[25px]"
							src={offer}
						/>
					</div>
					<div
						data-aos="slide-left"
						data-aos-delay="1700"
						className="z-20 xl:pl-[750px] lg:bottom-[340px] lg:pl-[550px] xl:bottom-[840px] relative xl:text-3xl lg:text-2xl"
					>
						
						<Button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700 left-12 hover:before:-translate-x-64">
						Offer
						</Button>
					</div>
				</div>
				<div>
					<div className="xl:bottom-[1000px] lg:bottom-[600px] h-auto relative justify-end flex">
						<img
							data-aos="slide-left"
							data-aos-delay="1400"
							className="xl:w-[700px] lg:w-[400px] rounded-[25px]"
							src={testdrive}
						/>
					</div>
					<p
						data-aos="slide-right"
						data-aos-delay="1500"
						className="z-20 xl:pl-[1370px] lg:bottom-[580px] lg:pl-[900px] lg:text-2xl xl:bottom-[980px] relative xl:text-3xl"
					>
						<Button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700 left-16 hover:before:-translate-x-64">
							Test drive
						</Button>
						
					</p>
				</div>
			</div>

			<div className="block md:hidden">
				<div className="pt-2 pr-2 h-auto sm:space-y-12">
					<p
						data-aos="slide-left"
						data-aos-delay="300"
						className="pt-12 px-12  relative flex font-syncopate text-center text-md ss:text-3xl sm:text-3xl"
					>
						build your car
					</p>

					<p
						data-aos="slide-left"
						data-aos-delay="500"
						className="pt-12 px-12 relative flex font-syncopate text-center text-md ss:text-3xl sm:text-3xl"
					>
						Offer
					</p>
					<p
						data-aos="slide-left"
						data-aos-delay="700"
						className="pt-12 px-12 relative flex font-syncopate text-center text-md ss:text-3xl sm:text-3xl"
					>
						Test drive
					</p>
				</div>
			</div>
		</div>
	);
};

export default ShoppingAssist;
