import React, { useRef, useState } from "react";
import { useEffect } from 'react';

import {
	change1,
	change2,
	change3,
	change4,
	change5,
	change6,
	change10,
	change8,
	change9,

	Videohieuung,
	inside51,
	inside52,
	inside53,

	car53,
	car54,
	car55,

	car57,
	car58,
	car59,
	car592,
	car510,
} from "../../assets";
import Car5popular2 from "../productHomePage/car5popular2";
import Footer from "@/components/common/Footer";
import Navbar from "../../_root/_homepage/Navbar";

import AOS from "aos";

const car5reponsive: React.FC = () => {
	useEffect(() => {
		AOS.init({
			duration: 900,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);
	// sự kiện của navbar
	const [selectedSection, setSelectedSection] = useState("");
	const handleNavClick = (section) => {
		setSelectedSection((prevSection) =>
			prevSection === section ? "" : section
		);
	};
	// hiệu hiển thị sau
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 4000);
		return () => clearTimeout(timer);
	}, []);

	// hiệu ứng thay đổi ảnh trong new car color
	const [activeImage, setActiveImage] = useState(0);
	const [activeGroup, setActiveGroup] = useState(0);
	const imageGroups = [
		[change1, change2, change3],
		[change4, change5, change6],
		[change10, change8, change9],
	];
	const buttonColors = ["bg-gray-700", "bg-gray-700", "bg-gray-700"];
	const buttonColors2 = ["bg-blue-300", "bg-orange-500", "bg-purple-500"];

	const buttonsRef = useRef(null);
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveImage(
				(prev) => (prev + 1) % imageGroups[activeGroup].length
			);
		}, 7000);
		return () => clearInterval(interval);
	}, [activeGroup, activeImage]);

	useEffect(() => {
		if (buttonsRef.current) {
			const containerRect =
				buttonsRef.current.parentElement.getBoundingClientRect();
			const buttonsRect = buttonsRef.current.getBoundingClientRect();
			if (buttonsRect.bottom > containerRect.bottom) {
				buttonsRef.current.style.bottom = 0;
			}
		}
	}, [activeImage, activeGroup]);

	return (
		<div className="relative w-full bg-black">
			<div className="w-full relative">
				<Navbar onNavClick={handleNavClick} />
			</div>
			<div className="flex relative">
				<video
					autoPlay
					muted
					loop
					playsInline
					className="w-full h-auto object-cover z-20 pt-[75px]"
				>
					
				</video>
				{isVisible && (
				<div className="z-30 flex justify-start w-full h-full items-center bottom-64 sm:-left-[1100px] relative md:left-11 -left-96 ss:-left-52 ss:bottom-32 sm:bottom-40 xs:bottom-48">
					
					<div
						className="font-thin absolute text-white top-96 transform  text-center shadow-xl
                  ss:w-[1200px] xs:w-[300px] w-[300px] p-1 sm:p-12 md:p-5 
                  transition-opacity duration-1000 font-syncopate 
					"
					>
						<h1 className=" text-xs xs:text-xl sm:text-xl ss:text-3xl lg:text-6xl mb-1 tracking-widest font-bold">
							Rolls Royce Ghost 2021
						</h1>
						<h2 className="text-xs ss:text-2xl lg:text-4xl sm:text-2xl font-thin pt-1">
							<span className="font-bold text-red-100">
								1,65 million $
							</span>
						</h2>
					</div>
				</div>
				)}
			</div>

			<div>
				<div className="z-10 relative">
					<div
					data-aos="fade-out"
						id="Introduce"
						className="text-center relative pt-[200px] md:pt-[460px] ss:pt-[100px]"
					>
						<h2 className="font-thin text-md md:first-line:text-2xl sm:text-3xl text-white px-12">
							<span className="font-bold md:text-4xl font-syncopate">
								PURE EXPRESSION
							</span>{" "}
							<br /> <br />
							<br />
							Ghost presents a world of boundless potential. Its
							purity liberates the imagination, inviting you to
							craft a motor car that is a complete original. There
							are no limits to what Ghost can become — all one has
							to do is imagine.
						</h2>
					</div>
					<h2 className="font-thin text-sm sm:text-3xl md:text-2xl text-white grid grid-cols-2 gap-2 md:gap-4 text-center pt-[100px] md:pt-[500px] relative px-4 lg:pt-28">
						<div data-aos="fade-right">
							
							<span className="font-bold font-syncopate">
								NEDC * (combined):
							</span>
							<br />
							CO2 emission: 343 g/km;
							<br />
							<br />
							<span className="font-bold font-syncopate">
								Fuel consumption:
							</span>{" "}
							18.8 mpg / 15.0 l/100km
							<br />
							<br />
						</div>
						<div data-aos="fade-left">
							<span className="font-bold font-syncopate">
								WLTP # (combined):
							</span>
							<br />
							CO2 emission:359-347g/km;
							<br />
							<br />
							<span className="font-bold font-syncopate">
								Fuel consumption:
							</span>{" "}
							17.9–18.6 mpg / 15.8-15.2 l/100km
						</div>
					</h2>
					<div className="pt-36 relative justify-center items-center flex">
						<div
						data-aos="fade-right"
							style={{ backgroundImage: `url(${car53})` }}
							className="w-[300px] h-[200px] ss:w-[600px] ss:h-[400px] sm:w-[800px] sm:h-[600px] md:w-[1200px] md:h-[600px] bg-cover  animate-pulse bg-center rounded-3xl relative"
						></div>
					</div>
					<div className="text-3xl md:text-[200px] text-white ss:text-6xl sm:text-8xl ss:bottom-56 animate-pulse text-center pt-28 md:pt-[300px] sm:pt-0 relative font-syncopate lg:pt-1">
						IN THE CAR
					</div>
					<div className="justify-center items-center flex">
						<div
						data-aos="fade-left"
							style={{ backgroundImage: `url(${inside51})` }}
							className="w-[300px] h-[200px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1200px] md:h-[800px] bg-cover bg-center rounded-3xl relative -left-[20px] top-[280px] xs:top-[350px] ss:top-[270px] sm:top-[650px] md:top-[1600px] lg:top-[600px] lg:h-[600px] lg:w-[1000px]"
						></div>
					</div>
					<div className="justify-start items-start flex">
						<div
						data-aos="fade-right"
							style={{ backgroundImage: `url(${inside52})` }}
							className="w-[300px] h-[200px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px]  sm:w-[700px] sm:h-[600px] md:w-[1500px] bg-center md:h-[900px] bg-cover rounded-3xl relative -top-[150px] ss:-top-[500px] xs:-top-[200px] md:top-[500px] lg:-top-[500px] lg:h-[600px] lg:w-[1000px]"
						></div>
					</div>
					<div className="justify-end items-end flex z-40">
						<div
						data-aos="fade-right"
							style={{ backgroundImage: `url(${inside53})` }}
							className="w-[300px] h-[200px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[600px] sm:h-[500px] md:w-[1200px] bg-center md:h-[800px] bg-cover rounded-3xl relative top-[100px] ss:-top-[220px] xs:-top-[30px] sm:-top-[100px] md:top-[1200px] lg:-top-[80px] lg:h-[600px] lg:w-[1000px]"
						></div>
					</div>
				</div>
				<video
					autoPlay
					muted
					loop
					playsInline
					className="w-full h-[400vh] object-cover absolute top-[270px] left-0 right-0 bottom-0"
					style={{ zIndex: 1 }}
				>
					<source src={Videohieuung} />
				</video>
			</div>
			<div
			data-aos="fade-in"
			className="relative z-20 pt-72 lg:pt-12">
				<div>
					<div className="md:text-6xl pb-12 ss:text-6xl sm:text-7xl text-3xl text-center text-white animate-pulse font-syncopate ">
						NEW COLOR
					</div>
				</div>
				<div
				data-aos="fade-out"
				id="Color" className="z-20 w-full h-[200px] ">
					{/* Vùng chứa ảnh */}
					<div className="absolute w-full h-full">
						{imageGroups[activeGroup].map((image, index) => (
							<img
								key={index}
								src={image}
								alt={`Image ${index + 1}`}
								className={`absolute top-0 left-0 w-full h-auto object-cover transition-opacity duration-700 ${
									activeImage === index
										? "opacity-100"
										: "opacity-0"
								}`}
							/>
						))}
						<div
							className="overlay absolute inset-x-0 bottom-0 lg:-bottom-72 h-1/4"
							style={{
								backgroundImage:
									"linear-gradient(to top, black, transparent)",
							}}
						></div>
					</div>

					<div className="relative top-1">
						{/* Nút chuyển ảnh */}
						<div
							className="absolute md:top-1/2 md:right-4 top-[215px] ss:top-[430px] xs:top-[320px] sm:top-[560px] transform -translate-y-1/2 flex md:flex-col flex-row md:space-y-4 space-y-0 scale-125 gap-3 sm:gap-7 pl-60 sm:pl-[570px]"
							ref={buttonsRef}
						>
							{imageGroups[activeGroup].map((__, index) => (
								<button
									key={index}
									onClick={() => {
										setActiveImage(index);
									}}
									className={`md:w-5 md:h-5 ss:w-6 ss:h-6 sm:w-10 sm:h-10 w-4 h-4 rounded-full focus:outline-none hover:scale-150 transition-all duration-500 ease-in-out ${buttonColors2[index]}`}
								></button>
							))}
						</div>

						{/* Nút chuyển nhóm ảnh */}
						<div className="absolute flex justify-end md:pr-9 top-52 ss:top-[410px] xs:top-[300px] sm:top-[550px]  md:top-4 md:w-[1850px] sm:h-[60px] sm:text-4xl text-sm md:text-xl md:h-[40px] h-[40[x]] md:space-x-4 sm:gap-6 md:gap-0 gap-2 pl-3 sm:pl-16">
							<button
								onClick={() => {
									setActiveImage(0);
									setActiveGroup(0);
								}}
								className={`px-4 py-2 rounded-md focus:outline-none hover:scale-110 transition-all duration-300 ease-in-out ${
									activeGroup === 0
										? buttonColors[0]
										: "bg-gray-900 bg-opacity-50 text-white"
								}`}
							>
								Front
							</button>
							<button
								onClick={() => {
									setActiveImage(0);
									setActiveGroup(1);
								}}
								className={`px-4 py-2 rounded-md focus:outline-none hover:scale-110 transition-all duration-300 ease-in-out ${
									activeGroup === 1
										? buttonColors[1]
										: "bg-gray-900 bg-opacity-50 text-white"
								}`}
							>
								Side
							</button>
							<button
								onClick={() => {
									setActiveImage(0);
									setActiveGroup(2);
								}}
								className={`px-4 py-2 rounded-md focus:outline-none hover:scale-110 transition-all duration-300 ease-in-out ${
									activeGroup === 2
										? buttonColors[1]
										: "bg-gray-900 bg-opacity-50 text-white"
								}`}
							>
								Behind
							</button>
						</div>
					</div>
				</div>
			</div>
			<div  id="Interiors" className="flex justify-center relative ss:pt-72 pt-20 z-50 sm:pt-[500px]">
				<div className="w-full">
					<Car5popular2 />
				</div>
			</div>
			<div className="sketchfab-embed-wrapper w-[1000x] h-[500px] z-10 relative">
					{" "}
					
					
					
						<iframe
						className="z-20 w-full h-[300px] scale-150 "
						
							frameborder="0"
							allowfullscreen
							mozallowfullscreen="true"
							webkitallowfullscreen="true"
							allow="autoplay; fullscreen; xr-spatial-tracking"
							xr-spatial-tracking
							execution-while-out-of-viewport
							execution-while-not-rendered
							web-share
							src="https://sketchfab.com/models/1923bdcbc32f442e97dd49201aa2c928/embed?autospin=1&autostart=1&preload=1&ui_theme=dark"
						>
							{" "}
						</iframe>{" "}
						
					
		
				</div>
			<div className="bg-black pt-12">
				<div
				data-aos="fade-right"
				className="text-3xl md:text-6xl text-white animate-pulse text-center font-thin relative font-syncopate uppercase bottom-[0px] md:-bottom-[1100px] pb-12 lg:bottom-[100px] lg:text-5xl">
					Sophisticated, modern, classy
				</div>
				<div className="justify-start items-start flex">
					<div
					data-aos="fade-right"
						style={{ backgroundImage: `url(${car54})` }}
						className="w-[300px] h-[400px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1200px] md:h-[800px] bg-cover bg-center rounded-3xl relative  -top-[0px] ss:top-[150px] sm:top-[250px] md:top-[2600px] lg:h-[600px] lg:w-[1000px] lg:-top-[10px]"
					></div>
				</div>
				<div className="justify-end items-end flex">
					<div
					data-aos="fade-left"
						style={{ backgroundImage: `url(${car57})` }}
						className="w-[300px] h-[400px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[600px] sm:h-[500px] md:w-[1200px] bg-center md:h-[800px] bg-cover rounded-3xl relative -top-[100px] ss:-top-[300px] sm:top-[100px] md:top-[1700px] lg:h-[600px] lg:w-[1000px] lg:-top-[100px]"
					></div>
				</div>
				<div className="justify-start items-start flex">
				<div
				data-aos="fade-right"
					style={{ backgroundImage: `url(${car55})` }}
					className="w-[300px] h-[400px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1500px] bg-center md:h-[600px] bg-cover rounded-3xl sm:top-[10px] relative -top-[190px] ss:-top-[500px] xs:-top-[200px] md:top-[800px] lg:h-[600px] lg:w-[1000px] lg:-top-[150px]"
				></div>
				</div>
			</div>
			<div
			className="article-tiles-container bg-black text-white p-6 bottom-[0px] relative md:-bottom-[520px] lg:-bottom-[10px]">
				<div className="article-tiles-desc mb-6 text-center font-syncopate">
					<h3
					data-aos="fade-up"
					className="text-4xl ss:text-5xl mb-2">
						Continue your journey
					</h3>
					<p data-aos="fade-down">You may also like the following related articles</p>
				</div>

				<div className="article-tiles-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-10 sm:pt-20">
					<div className="article-tile">
						<figure className="hover01 overflow-hidden">
							<img
							data-aos="fade-up"
								src={car58}
								className="w-full object-cover transform transition-transform duration-300 hover:scale-110"
							/>
						</figure>
						<div
						data-aos="fade-right"
						className="block font-syncopate text-center">
							<h4 className="text-base ss:text-lg mb-2">
								GHOST PRISM
							</h4>
							<p className="text-sm ss:text-base">
								Ghost Prism draws inspiration from the world of
								contemporary designs.
							</p>
						</div>
					</div>

					<div className="article-tile">
						<figure
						data-aos="fade-up"
						className="hover01 overflow-hidden group relative">
							<img
								src={car592}
								alt="Image 1"
								className="w-full object-cover transform transition-opacity duration-300 group-hover:opacity-0"
							/>
							<img
								src={car59}
								alt="Image 2"
								className="absolute top-0 left-0 w-full h-full object-cover transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110"
							/>
						</figure>

						<div
						data-aos="fade-left"
						className="block font-syncopate text-center">
							<h4 className="text-base ss:text-lg mb-2">
								Ghost - In Detail
							</h4>
							<p className="text-sm ss:text-base">
								Pure and pristine. The ultimate foundation for
								infinite self-expression.
							</p>
						</div>
					</div>

					<div className="article-tile hidden md:block">
						<figure className="hover01 overflow-hidden">
							<img
								src={car510}
								className="w-full object-cover transform transition-transform duration-300 hover:scale-110"
							/>
						</figure>
						<div className="block font-syncopate text-center">
							<h4 className="text-base ss:text-lg mb-2">
								Commission Your Ghost
							</h4>
							<p className="text-sm ss:text-base">
								Envision an original with Bespoke services.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div data-aos="fade-up" className="z-10 w-full relative pt-20 bg-black">
				<Footer />
			</div>
		</div>
	);
};

export default car5reponsive;
