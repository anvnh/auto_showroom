import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { baner51, car51, car52, car56, r3 } from "../../assets";
import { gsap } from "gsap";

const car5popular2 = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);
	return (
		<div className="bg-black">
			<div>
				<div
					data-aos="fade-right"
					style={{ backgroundImage: `url(${r3})` }}
					className=" bg-cover bg-center h-24 sm:h-48 relative object-cover"
				>
					<div className="flex justify-center pt-16 absolute inset-0">
						<h1 className="relative text-white font-extrabold md:text-6xl animate-pulse xs:text-4xl text-2xl animate-p bottom-9 sm:bottom-1 md:pb-0 transition-colors duration-500 font-syncopate uppercase text-center">
							Interiors & Technology
						</h1>
					</div>
				</div>

				<div className="relative flex w-screen h-screen">
					<div className="h-screen w-1/2">
						<img
							data-aos="slide-left"
							src={car52}
							className="h-screen w-screen object-cover"
						/>
					</div>
					<div className="h-screen w-1/2 flex justify-center items-center bg-slate-800	 text-white">
						<div className="w-[700px] h-[500px] flex justify-center items-center flex-col  border-purple-500 border-2">
							<h1
								data-aos="slide-right"
								className="font-syncopate text-center text-[55px] font-medium uppercase"
							>
								Interiors
							</h1>
							<p
								data-aos="slide-right"
								className="font-kanit text-center text-xl p-12"
							>
								Rolls-Royce has pulled out all the stops with
								the Ghost. The cabin is a study in pure luxury,
								handcrafted with the finest materials. You'll
								find the highest quality leather, majestic
								Canadel wood paneling, metal trim and thick
								carpeting. An available headrest simulates a
								starry sky overhead. Ghost's rear passengers
								enjoy spacious space, massage seats and a
								state-of-the-art entertainment system.
							</p>
						</div>
					</div>
				</div>

				<div className="relative flex w-screen h-screen">
					<div 
                    data-aos="fade-left"
                    className="h-screen w-1/2 flex justify-center items-center bg-gray-900 text-white">
						<div className="w-[700px] h-[500px] flex justify-center items-center flex-col  border-blue-500 border-2">
							<h1 className="font-syncopate text-center text-[55px] font-medium uppercase">
								Technology
							</h1>
							<p className="font-kanit text-center text-xl p-12">
								The Ghost has a large infotainment touchscreen
								and in-dash navigation that includes
								connectivity to both Apple CarPlay and Android
								Auto. There's a Wi-Fi hotspot and dual rear-seat
								screens that allow passengers to adjust the
								radio, interact with Sat Nav and fully enjoy the
								entertainment system. The 18-speaker sound
								system delivers 1,300 watts of power to this
								decadent ride.
							</p>
						</div>
					</div>
					<div
                    data-aos="fade-right"
                    className="h-screen w-1/2 bg-yellow-200">
						<img
							src={car51}
							className="h-screen w-screen object-cover"
						/>
					</div>
				</div>
				<div
					id="Model"
					data-aos="fade-right"
					className=" bg-cover bg-center h-24 sm:h-48 relative object-cover"
				>
					<div className="flex justify-center pt-16 absolute inset-0">
						<h1 className="relative text-white font-extrabold md:text-6xl animate-pulse xs:text-4xl text-2xl animate-p bottom-9 sm:bottom-1 md:pb-0 transition-colors duration-500 font-syncopate uppercase">
							3D model
						</h1>
					</div>
				</div>
				<div className="sketchfab-embed-wrapper w-[1000x] md:h-[900px] h-[500px] pt-12">
					{" "}
					<iframe
						className="w-full md:h-[550px] h-[300px] scale-125 "
						title="Rolls Royce Ghost 2021"
						frameborder="0"
						allowfullscreen
						mozallowfullscreen="true"
						webkitallowfullscreen="true"
						allow="autoplay; fullscreen; xr-spatial-tracking"
						xr-spatial-tracking
						execution-while-out-of-viewport
						execution-while-not-rendered
						web-share
						src="https://sketchfab.com/models/f417013fd6ff422a83dea9650d1f840b/embed?autospin=1&autostart=1&preload=1&ui_theme=dark&dnt=1"
					>
						{" "}
					</iframe>{" "}
				</div>
			</div>
		</div>
	);
};

export default car5popular2;
