import React, { useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
	r1,
	r2,
	r3,
	r4,
	r5,
	r6,
	r7,
	r8,
	change1,
	change2,
	change3,
	change4,
	change5,
	change6,
	change10,
	change8,
	change9,
	VideoCar3Popular,
	Videohieuung,
	b4,
	b5,
	b6,
	toi,
	b7,
	b8,
	b9,
} from "../../assets";
import Car3popular2 from "../productHomePage/car3popular2";
import { Footer } from "@/_root/_homepage";
import Navbar from "../../_root/_homepage/Navbar";
import NavbarSmall3 from "../navbarsmall/NavbarSmall3";

const car3reponsive = () => {
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
	const buttonColors = ["bg-white", "bg-white", "bg-white"];
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
		<div>
			<div className="w-full">
				<Navbar onNavClick={handleNavClick} />
			</div>
			<div className="flex relative">
				<video
					autoPlay
					muted
					loop
					playsInline
					className="w-full h-auto object-cover top-16 relative"
				>
					<source src={VideoCar3Popular} />
				</video>
				<div className="z-20 flex justify-start w-full h-full items-center bottom-64 sm:-left-20 relative md:left-11 -left-96 ss:-left-52 ss:bottom-32 sm:bottom-24 xs:bottom-48">
					<div
						className="font-thin absolute text-white top-96 transform text-center shadow-xl
                  ss:w-[1200px] xs:w-[300px] w-[200px] p-2 md:p-5 
                  transition-opacity duration-1000 font-syncopate 
					"
					>
						<h1 className="z-10 text-xs xs:text-xl ss:text-3xl sm:text-4xl lg:text-6xl mb-1 tracking-widest font-bold">
							Rolls Royce Ghost 2021
						</h1>
						<h2 className="text-xs ss:text-2xl lg:text-4xl sm:text-3xl font-thin pt-1">
							<span className="font-bold text-red-100">
								1,65 million $
							</span>
						</h2>
					</div>
				</div>
			</div>

			<div>
				<div className="z-10 absolute">
				<div
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
						purity liberates the imagination, inviting you to craft
						a motor car that is a complete original. There are no
						limits to what Ghost can become — all one has to do is
						imagine.
					</h2>
				</div>
				<h2 className="font-thin text-sm sm:text-3xl md:text-2xl text-white grid grid-cols-2 gap-2 md:gap-4 text-center pt-[100px] md:pt-[500px] relative px-4">
					<div>
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
					<div>
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
						style={{ backgroundImage: `url(${r8})` }}
						className="w-[300px] h-[200px] ss:w-[600px] ss:h-[400px] sm:w-[800px] sm:h-[600px] md:w-[1200px] md:h-[600px] bg-cover  animate-pulse bg-center rounded-3xl relative"
					></div>
				</div>
				<div className="text-3xl md:text-[200px] text-white ss:text-6xl sm:text-8xl ss:bottom-56 animate-pulse text-center pt-28 md:pt-[300px] relative font-syncopate">
					IN THE CAR
				</div>
				<div className="justify-center items-center flex">
				<div
					style={{ backgroundImage: `url(${r1})` }}
					className="w-[300px] h-[200px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1200px] md:h-[800px] bg-cover bg-center rounded-3xl relative -left-[20px] top-[250px] ss:top-[150px] sm:top-[350px] md:top-[1600px]"
				></div>
				</div>
				<div className="justify-start items-start flex">
				<div
					style={{ backgroundImage: `url(${r3})` }}
					className="w-[300px] h-[200px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1500px] bg-center md:h-[900px] bg-cover rounded-3xl relative -top-[100px] ss:-top-[500px] xs:-top-[200px] md:top-[500px]"
				></div>
				</div>
				<div className="justify-end items-end flex">
					<div
						style={{ backgroundImage: `url(${r2})` }}
						className="w-[300px] h-[200px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[600px] sm:h-[500px] md:w-[1200px] bg-center md:h-[800px] bg-cover rounded-3xl relative -top-[1px] ss:-top-[300px] sm:-top-[200px] md:top-[1200px]"
					></div>
				</div>
				</div>
				<video
					autoPlay
					muted
					loop
					playsInline
					className="w-full h-[300vh] object-cover absolute top-[270px] left-0 right-0 bottom-0"
					style={{ zIndex: 1 }}
				>
					<source src={Videohieuung} />
				</video>
			</div>
			<div className="bottom-[400px] ss:-top-[600px] md:top-[1400px] relative">
				<div className="md:text-6xl ss:text-6xl sm:text-7xl text-3xl text-center text-white animate-pulse font-syncopate ">
					NEW COLOR
				</div>
			</div>
			<div
				id="Color"
				className=" relative overflow-hidden w-full h-[900px] top-[1000px] ss:-top-[600px] md:top-[1500px]"
			>
				{/* Vùng chứa ảnh */}
				<div className="absolute top-0 left-0 w-full h-full">
					{imageGroups[activeGroup].map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Image ${index + 1}`}
							className={`absolute top-0 left-0 w-full h-auto object-cover transition-opacity duration-5000 ${
								activeImage === index
									? "opacity-100"
									: "opacity-0"
							}`}
						/>
					))}
					<div
						className="overlay absolute inset-x-0 bottom-0 h-1/4"
						style={{
							backgroundImage:
								"linear-gradient(to top, black, transparent)",
						}}
					></div>
				</div>

				{/* Nút chuyển ảnh */}
				<div
					className="absolute md:top-1/2 md:right-4 top-[230px] ss:top-[430px] xs:top-[320px] sm:top-[580px] left-[290px] ss:left-[500px] xs:left-[370px] sm:left-[650px] md:left-[1820px] transform -translate-y-1/2 flex md:flex-col flex-row md:space-y-4 space-y-0 scale-125 gap-3"
					ref={buttonsRef}
				>
					{imageGroups[activeGroup].map((__, index) => (
						<button
							key={index}
							onClick={() => {
								setActiveImage(index);
							}}
							className={`md:w-5 md:h-5 ss:w-6 ss:h-6 sm:w-8 sm:h-8 w-4 h-4 rounded-full focus:outline-none hover:scale-150 transition-all duration-500 ease-in-out ${buttonColors2[index]}`}
						></button>
					))}
				</div>

				{/* Nút chuyển nhóm ảnh */}
				<div className="absolute flex justify-end md:pr-9 top-52 ss:top-[410px] xs:top-[300px] sm:top-[550px]  md:top-4 md:w-[1850px] ss:right-[400px] xs:right-[230px] md:right-0 sm:right-[370px] right-40 sm:h-[60px] sm:text-4xl text-sm md:text-xl md:h-[40px] h-[40[x]] md:space-x-4 md:gap-0 gap-2">
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
			<div
				id="Interiors"
				className="flex justify-center bottom-[0px] md:-bottom-[1160px] bg-bla relative"
			>
				<div className="w-full">
					<Car3popular2 />
				</div>
			</div>
			<div className="text-3xl md:text-6xl text-white animate-pulse text-center font-thin relative font-syncopate uppercase bottom-[0px] md:-bottom-[1100px]">
				Sophisticated, modern, classy
			</div>
			<div
				style={{ backgroundImage: `url(${b5})` }}
				className="w-[300px] h-[400px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1200px] md:h-[800px] bg-cover bg-center rounded-3xl relative -left-[20px] -top-[0px] ss:top-[150px] sm:top-[350px] md:top-[2600px]"
			></div>
			<div className="justify-end items-end flex">
				<div
					style={{ backgroundImage: `url(${b9})` }}
					className="w-[300px] h-[400px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[600px] sm:h-[500px] md:w-[1200px] bg-center md:h-[800px] bg-cover rounded-3xl relative -top-[0px] ss:-top-[300px] sm:-top-[200px] md:top-[1700px]"
				></div>
			</div>
			<div
				style={{ backgroundImage: `url(${b6})` }}
				className="w-[300px] h-[400px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1500px] bg-center md:h-[600px] bg-cover rounded-3xl relative left-6 sm:left-11 md:left-11 -top-[0px] ss:-top-[500px] xs:-top-[200px] md:top-[800px]"
			></div>
			<div className="article-tiles-container bg-black text-white p-6 bottom-[0px] relative md:-bottom-[520px]">
				<div className="article-tiles-desc mb-6 text-center font-syncopate">
					<h3 className="text-4xl ss:text-5xl mb-2">
						Continue your journey
					</h3>
					<p>You may also like the following related articles</p>
				</div>

				<div className="article-tiles-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-10 sm:pt-20">
					<div className="article-tile">
						<figure className="hover01 overflow-hidden">
							<img
								src={b8}
								className="w-full object-cover transform transition-transform duration-300 hover:scale-110"
							/>
						</figure>
						<div className="block font-syncopate text-center">
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
						<figure className="hover01 overflow-hidden group relative">
							<img
								src={toi}
								alt="Image 1"
								className="w-full object-cover transform transition-opacity duration-300 group-hover:opacity-0"
							/>
							<img
								src={b4}
								alt="Image 2"
								className="absolute top-0 left-0 w-full h-full object-cover transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110"
							/>
						</figure>

						<div className="block font-syncopate text-center">
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
								src={b7}
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
			<div className="z-10 w-full relative top-[5850px] md:top-[6895px]">
				<Footer />
			</div>
		</div>
	);
};

export default car3reponsive;
