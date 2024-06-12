import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
	VideoCar3Popular,
	Videohieuung, b4, b5, b6,
} from "../../assets";
import { Button } from "@/components/ui/button";
import Car3popular2 from "../productHomePage/car3popular2";
import { Footer } from "@/_root/_homepage";

const Car3popular: React.FC = () => {
	// hiệu ứng thay đổi ảnh trong new car color
	const [isVisible, setIsVisible] = useState(false);
	const [activeImage, setActiveImage] = useState(0);
	const [activeGroup, setActiveGroup] = useState(0);
	const imageGroups = [
		[change1, change2, change3],
		[change4, change5, change6],
	];
	const buttonColors = ["bg-white", "bg-white"];
	const buttonColors2 = ["bg-blue-300", "bg-orange-500", "bg-purple-500"];

	const buttonsRef = useRef(null);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 3000);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		AOS.init({ duration: 2000, once: true });
		AOS.refreshHard();
	}, [activeImage, activeGroup]);

	useEffect(() => {
		const interval = setInterval(
			() =>
				setActiveImage(
					(prev) => (prev + 1) % imageGroups[activeGroup].length
				),
			7000
		);
		return () => clearInterval(interval);
	}, [activeGroup]);

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
		<div className="parallax">
			<Parallax
				pages={7.5}
				style={{ top: "0", left: "0" }}
				className="bg-black"
			>
				<ParallaxLayer 	data-aos="zoom-in-right" offset={0} speed={0.1} factor={4}>
					<video
						autoPlay
						muted
						loop
						playsInline
						className="w-full h-[400vh] object-cover"
					>
						<source src={Videohieuung} />
					</video>
				</ParallaxLayer>

				<ParallaxLayer 	data-aos="zoom-in-right" id="Home" offset={0} speed={3} factor={2}>
					<video
						
						autoPlay
						muted
						loop
						playsInline
						className="w-full h-auto object-cover top-16 relative"
					>
						<source src={VideoCar3Popular} />
					</video>
					
				</ParallaxLayer>

				<ParallaxLayer 	data-aos="zoom-in-right" offset={0} speed={2.5} factor={1}>
					<div className="flex justify-start w-full h-full items-center bottom-64 md:bottom-0 sm:bottom-40 sm:right-60 relative md:left-11 left-0 ss:-left-52 ss:bottom-32 xs:bottom-48 ">
						{isVisible && (
							<div
								data-aos-delay="500"
								className={`font-thin absolute text-white top-96 transform text-center shadow-xl
                  ss:w-[900px] xs:w-[300px] w-[200px] p-2 md:p-5 
                  transition-opacity duration-1000 opacity-0 font-syncopate ${
						isVisible ? "opacity-100" : ""
					}`}
							>
								<h1 className="text-xs xs:text-xl ss:text-3xl lg:text-6xl mb-1 tracking-widest font-bold">
									Rolls Royce Ghost 2021
								</h1>
								<h2 className="text-xs ss:text-2xl lg:text-4xl font-thin pt-1">
									<span className="font-bold text-red-100">
										1,65 million $
									</span>
								</h2>
							</div>
						)}
					</div>
				</ParallaxLayer>
				<ParallaxLayer 	data-aos="zoom-in-right" offset={1} speed={2} factor={1}>
					<div
					id="Introduce"
					className="text-center bottom-[1500px] relative ">
						<h2 className="font-thin text-2xl text-white ">
							<span className="font-bold text-4xl font-syncopate">
								PURE EXPRESSION
							</span>{" "}
							<br /> <br />
							<br />
							Ghost presents a world of boundless potential. Its
							purity liberates the imagination, <br /> inviting
							you to craft a motor car that is a complete
							original. There are no limits to what Ghost can
							become — all one has to do is imagine.
						</h2>
					</div>
				</ParallaxLayer>
				<ParallaxLayer 	data-aos="zoom-in-right" offset={1} speed={1.3} factor={1}>
					<h2 className="font-thin text-2xl text-white pt-28 grid grid-cols-2 gap-4 text-center bottom-[900px] relative">
						{" "}
						{/* Thêm grid và grid-cols-2 */}
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
							CO2 emission: 359-347 g/km;
							<br />
							<br />
							<span className="font-bold font-syncopate">
								Fuel consumption:
							</span>{" "}
							17.9–18.6 mpg / 15.8-15.2 l/100km
						</div>
					</h2>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0.9} factor={1}>
					<div
						data-aos="zoom-in-right"
						style={{ backgroundImage: `url(${r8})` }}
						className="w-[1000px] bg-center h-[600px] bg-cover  animate-pulse rounded-3xl left-[450px] relative"
					></div>
				</ParallaxLayer>
				<ParallaxLayer offset={1.8} speed={0.4} factor={1}>
					<div
						data-aos="zoom-in-right"
						className="text-6xl text-white animate-pulse text-center font-thin top-96 relative font-syncopate"
					>
						IN THE CAR
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={0.6} factor={1}>
					<div
						data-aos="zoom-in-right"
						style={{ backgroundImage: `url(${r1})` }}
						className="w-[1000px] bg-center h-[600px] bg-cover rounded-3xl relative left-[700px]"
					></div>
				</ParallaxLayer>
				<ParallaxLayer offset={2.5} speed={1} factor={1}>
					<div
						data-aos="zoom-in-right"
						style={{ backgroundImage: `url(${r3})` }}
						className="w-[1000px] bg-center h-[600px] bg-cover rounded-3xl relative left-28 top-[10px]"
					></div>
				</ParallaxLayer>
				<ParallaxLayer offset={2.8} speed={1.2} factor={1}>
					<div
						data-aos="zoom-in-right"
						style={{ backgroundImage: `url(${r2})` }}
						className="w-[1000px] bg-center h-[600px] bg-cover rounded-3xl relative left-[800px] top-[200px]"
					></div>
				</ParallaxLayer>
				<ParallaxLayer offset={3} speed={0.8} factor={1}>
					<div className="font-thin text-6xl text-center text-white animate-pulse font-syncopate">
						NEW COLOR
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={3.2} speed={0.8} factor={1}>
					<div 
					id="Color"
					className="relative overflow-hidden w-full h-[900px]">
						{/* Vùng chứa ảnh */}
						<div className="absolute top-0 left-0 w-full h-full">
							{imageGroups[activeGroup].map((image, index) => (
								<img
									key={index}
									src={image}
									alt={`Image ${index + 1}`}
									className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-5000 ${
										activeImage === index
											? "opacity-100"
											: "opacity-0"
									}`}
									data-aos={
										activeImage === index
											? "fade-down-right"
											: ""
									}
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
							className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-4 scale-125"
							ref={buttonsRef}
						>
							{imageGroups[activeGroup].map((__, index) => (
								<button
									key={index}
									onClick={() => {
										setActiveImage(index);
										AOS.refresh();
									}}
									className={`w-4 h-4 rounded-full focus:outline-none hover:scale-150 transition-all duration-500 ease-in-out ${buttonColors2[index]}`}
								></button>
							))}
						</div>

						{/* Nút chuyển nhóm ảnh */}
						<div className="absolute flex justify-end pr-9 top-4 w-full space-x-4">
							<button
								onClick={() => {
									setActiveImage(0);
									setActiveGroup(0);
									AOS.refresh();
								}}
								className={`px-4 py-2 rounded-md focus:outline-none hover:scale-110 transition-all duration-300 ease-in-out ${
									activeGroup === 0
										? buttonColors[0]
										: "bg-gray-900 bg-opacity-50 text-white"
								}`}
							>
								front of the car
							</button>
							<button
								onClick={() => {
									setActiveImage(0);
									setActiveGroup(1);
									AOS.refresh();
								}}
								className={`px-4 py-2 rounded-md focus:outline-none hover:scale-110 transition-all duration-300 ease-in-out ${
									activeGroup === 1
										? buttonColors[1]
										: "bg-gray-900 bg-opacity-50 text-white"
								}`}
							>
								side of the vehicle
							</button>
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={4} speed={0.8} factor={1}>
					<div 
					id="Interiors"
					className="flex justify-center bottom-[570px] bg-bla relative">
						<div className="w-full">
							<Car3popular2 />
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={6} speed={1.2} factor={1}>
					<div

						data-aos="zoom-in-right"
						className="text-6xl text-white animate-pulse text-center font-thin relative font-syncopate uppercase bottom-[900px]"
					>
						Sophisticated, modern, classy
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={6} speed={1.2} factor={1}>
					<div
						data-aos="zoom-in-right"
						style={{ backgroundImage: `url(${b4})` }}
						className="w-[1000px] bg-center h-[600px] bg-cover bottom-[600px] relative rounded-3xl left-[700px]"
					></div>
				</ParallaxLayer>
				<ParallaxLayer offset={6.2} speed={0.8} factor={1}>
					<div
						data-aos="zoom-in-right"
						style={{ backgroundImage: `url(${b5})` }}
						className="w-[1000px] bg-center h-[600px] bg-cover rounded-3xl bottom-[300px] relative left-28"
					></div>
				</ParallaxLayer>
				<ParallaxLayer offset={6.4} speed={0.5} factor={1}>
					<div
						data-aos="zoom-in-right"
						style={{ backgroundImage: `url(${b6})` }}
						className="w-[1000px] bg-center h-[600px] bg-cover rounded-3xl bottom-[100px] relative left-[800px]"
					></div>
				</ParallaxLayer>
				<ParallaxLayer offset={7} speed={0.5} factor={1}>
				<div className="w-full bottom-4 relative">
						<Footer />
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
};

export default Car3popular;
