import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
	news2,
	news3,
	news4,
	videohieuung2,
	news6,
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
	car58,
	car59,
	car592,
	car510,
} from "../../assets";
import { Button } from "@/components/ui/button";
import Car5popular2 from "./car5popular2";
import Footer from "@/components/common/Footer";
import Navbar from "../../_root/_homepage/Navbar";
import NavbarSmall5 from "../navbarsmall/NavbarSmall5";
import Car5reponsive from "../reponsive/car5reponsive";

const Car5popular: React.FC = () => {
	// sự kiện của navbar
	const [selectedSection, setSelectedSection] = useState("");
	const handleNavClick = (section) => {
		setSelectedSection((prevSection) =>
			prevSection === section ? "" : section
		);
	};
	// hiệu hiển thị sau 2s
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 2000);
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
	const buttonColors = ["bg-black", "bg-black", "bg-black"];
	const buttonColors2 = ["bg-blue-300", "bg-orange-500", "bg-purple-500"];

	const buttonsRef = useRef(null);

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			mirror: true,
			easing: "ease-in-out",
			anchorPlacement: "top-center",
			offset: 200,
		});
		AOS.refresh();
	}, [activeImage, activeGroup]);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveImage(
				(prev) => (prev + 1) % imageGroups[activeGroup].length
			);
		}, 7000);
		return () => clearInterval(interval);
	}, [activeGroup, activeImage]); // Thêm activeImage vào mảng dependency

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

	const parallaxRef = useRef(null);
	const parallaxLayerRefs = useRef([]);

	const footerRef = useRef<HTMLElement>(null); // Ref cho phần tử footer

	useEffect(() => {
		const updateFooterPosition = () => {
			if (parallaxRef.current && footerRef.current) {
				// Kiểm tra cả hai ref
				const totalHeight = getPageHeight();
				footerRef.current.style.top = `${totalHeight}px`;
			}
		};

		// Gọi khi trang load và khi viewport thay đổi kích thước
		updateFooterPosition();
		window.addEventListener("resize", updateFooterPosition);

		return () => {
			window.removeEventListener("resize", updateFooterPosition);
		};
	}, []);
	return (
		<div>
			<div className="hidden xl:block">
				<div className="parallax">
					<div>
						<NavbarSmall5
							onNavClick={handleNavClick}
							selectedSection={selectedSection}
							parallaxLayerRefs={parallaxLayerRefs}
							parallaxRef={parallaxRef}
						/>
					</div>
					<Parallax
						pages={8.6}
						style={{ top: "0", left: "0" }}
						className="bg-black"
						ref={parallaxRef} // Gán ref vào Parallax
					>
						<div className="w-full z-10">
							<Navbar onNavClick={handleNavClick} />
						</div>

						<ParallaxLayer
							offset={0}
							speed={0.1}
							factor={4}
							ref={(ref) => (parallaxLayerRefs.current[0] = ref)}
						>
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

						<ParallaxLayer offset={0} speed={8} factor={2}>
							<video
								autoPlay
								muted
								loop
								playsInline
								className="w-full h-auto object-cover top-16 relative"
							></video>
						</ParallaxLayer>

						<ParallaxLayer offset={0} speed={4.5} factor={1}>
							<div className="flex justify-start w-full h-full items-center bottom-64 sm:-left-20 relative md:left-11 left-0 ss:-left-52 ss:bottom-32 sm:bottom-24 xs:bottom-48">
								{isVisible && (
									<div
										data-aos="fade-up"
										className={`font-thin absolute text-white top-96 transform text-center shadow-xl
                  ss:w-[1200px] xs:w-[300px] w-[200px] p-2 md:p-5 
                  transition-opacity duration-1000 opacity-0 font-syncopate ${
						isVisible ? "opacity-100" : ""
					}`}
									>
										<h1 className="text-xs xs:text-xl ss:text-3xl sm:text-4xl lg:text-6xl mb-1 tracking-widest font-bold">
											Roll Royce Phantom <br />
											Extended Series II
										</h1>
										<h2 className="text-xs ss:text-2xl lg:text-4xl sm:text-3xl font-thin pt-1">
											<span className=" ">
											$ 1,65 million
											</span>
										</h2>
									</div>
								)}
							</div>
						</ParallaxLayer>
						<ParallaxLayer
							offset={0.5}
							speed={0.7}
							factor={1}
							ref={(ref) => (parallaxLayerRefs.current[1] = ref)}
						>
							<div
								data-aos="zoom-in-right"
								id="Introduce"
								className="text-center relative pt-[1px] md:pt-[460px] ss:pt-[100px]"
							>
								<h2
									className="font-thin text-md md:first-line:text-2xl sm:text-3xl text-white px-12"
									data-aos="slide-left"
								>
									<span className="font-bold md:text-4xl font-syncopate">
										PURE EXPRESSION
									</span>{" "}
									<br /> <br />
									<br />
									Ghost presents a world of boundless
									potential. Its purity liberates the
									imagination, inviting you to craft a motor
									car that is a complete original. There are
									no limits to what Ghost can become — all one
									has to do is imagine.
								</h2>
							</div>
						</ParallaxLayer>
						<ParallaxLayer offset={0.9} speed={0.9} factor={1}>
							<h2 className="font-thin text-sm sm:text-3xl md:text-2xl text-white grid grid-cols-2 gap-2 md:gap-4 text-center pt-[100px] md:pt-[500px] relative px-4">
								<div data-aos="slide-right">
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
								<div data-aos="slide-left">
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
						</ParallaxLayer>
						<ParallaxLayer offset={1.1} speed={0.7} factor={1}>
							<div className="ss:bottom-[300px] md:bottom-0 bottom-0 relative justify-center items-center flex">
								<div
									style={{ backgroundImage: `url(${car53})` }}
									className="w-[400px] h-[200px] ss:w-[600px] ss:h-[400px] sm:w-[800px] sm:h-[600px] md:w-[1200px] md:h-[600px] bg-cover  animate-pulse bg-center rounded-3xl relative"
								></div>
							</div>
						</ParallaxLayer>
						<ParallaxLayer offset={1.1} speed={0.4} factor={1}>
							<div className="text-3xl md:text-[200px] text-white ss:text-6xl sm:text-8xl ss:bottom-56 animate-pulse text-center pt-28 md:pt-[300px] relative font-syncopate">
								IN THE CAR
							</div>
						</ParallaxLayer>
						<ParallaxLayer offset={1.7} speed={0.8} factor={1}>
							<div
								style={{ backgroundImage: `url(${inside51})` }}
								className="w-[300px] h-[200px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1200px] md:h-[800px] bg-cover bg-center rounded-3xl relative -left-[20px] top-[200px] ss:top-[150px] sm:top-[350px] md:top-[1600px]"
							></div>
						</ParallaxLayer>
						<ParallaxLayer offset={1.8} speed={0.9} factor={1}>
							<div
								style={{ backgroundImage: `url(${inside52})` }}
								className="w-[300px] h-[200px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1500px] bg-center md:h-[900px] bg-cover rounded-3xl relative left-6 sm:left-11 md:left-11 -top-[100px] ss:-top-[500px] xs:-top-[200px] md:top-[500px]"
							></div>
						</ParallaxLayer>
						<ParallaxLayer offset={1.9} speed={1.2} factor={1}>
							<div className="justify-end items-end flex">
								<div
									style={{
										backgroundImage: `url(${inside53})`,
									}}
									className="w-[300px] h-[200px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[600px] sm:h-[500px] md:w-[1200px] bg-center md:h-[800px] bg-cover rounded-3xl relative -top-[1px] ss:-top-[300px] sm:-top-[200px] md:top-[1200px]"
								></div>
							</div>
						</ParallaxLayer>
						<ParallaxLayer
							offset={2.3}
							speed={0.8}
							factor={1}
							ref={(ref) => (parallaxLayerRefs.current[2] = ref)}
						>
							<div className="bottom-[400px] ss:-top-[600px] md:top-[1400px] relative">
								<div className="md:text-6xl ss:text-6xl sm:text-7xl text-3xl text-center text-white animate-pulse font-syncopate ">
									NEW COLOR
								</div>
							</div>
						</ParallaxLayer>
						<ParallaxLayer
							className="z-10"
							offset={2.4}
							speed={0.8}
							factor={1}
						>
							<div
								id="Color"
								className="relative w-full h-[900px] bottom-[360px] ss:-top-[600px] md:top-[1500px]"
							>
								<div
									style={{ backgroundImage: `url(${news4})` }}
									className="relative w-full h-full bg-center bg-cover"
								>
									<div className="absolute inset-0 z-10 flex justify-center items-center">
										<video
											src={videohieuung2}
											autoPlay
											loop
											muted
											className="w-full h-full object-cover opacity-25 bg-gradient-to-t from-blue-900 to-transparent"
										/>
									</div>
								
								</div>
							</div>
						</ParallaxLayer>
						<ParallaxLayer
							offset={3}
							speed={0.8}
							factor={1}
							ref={(ref) => (parallaxLayerRefs.current[3] = ref)}
						>
							<div
								id="Interiors"
								className="flex justify-center bottom-[900px] md:-bottom-[1100px] bg-black relative z-40"
							>
								<div className="w-full z-20">
									<Car5popular2 />
								</div>
							</div>
						</ParallaxLayer>
						<ParallaxLayer
							offset={4}
							speed={0.8}
							factor={1}
							ref={(ref) => (parallaxLayerRefs.current[3] = ref)}
						>
							<div className="sketchfab-embed-wrapper w-[1000x] md:h-[900px] h-[500px] -bottom-[1800px] z-10 relative">
								{" "}
								<iframe
									className="z-20 w-full md:h-[550px] h-[300px] scale-150 "
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
						</ParallaxLayer>
						<ParallaxLayer
							offset={6}
							speed={1.2}
							factor={1}
							ref={(ref) => (parallaxLayerRefs.current[4] = ref)}
						>
							<div className="text-3xl md:text-6xl text-white animate-pulse text-center font-thin relative font-syncopate uppercase bottom-[1700px] md:bottom-[800px]">
								Sophisticated, modern, classy
							</div>
						</ParallaxLayer>
						<ParallaxLayer offset={6} speed={1} factor={1}>
							<div
								style={{ backgroundImage: `url(${news2})` }}
								className="w-[300px] h-[400px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1200px] md:h-[800px] bg-cover bg-center rounded-3xl relative -left-[20px] -top-[1350px] ss:top-[150px] sm:top-[350px] md:-top-[500px]"
							></div>
						</ParallaxLayer>
						<ParallaxLayer offset={6.2} speed={0.8} factor={1}>
							<div className="justify-end items-end flex">
								<div
									style={{ backgroundImage: `url(${news3})` }}
									className="w-[300px] h-[400px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[600px] sm:h-[500px] md:w-[1200px] bg-center md:h-[800px] bg-cover rounded-3xl relative -top-[1050px] ss:-top-[300px] sm:-top-[200px] md:-top-[0px]"
								></div>
							</div>
						</ParallaxLayer>
						<ParallaxLayer offset={6.4} speed={0.5} factor={1}>
							<div
								style={{ backgroundImage: `url(${news6})` }}
								className="w-[300px] h-[400px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1500px] bg-center md:h-[700px] bg-cover rounded-3xl relative left-6 sm:left-11 md:left-11 -top-[690px] ss:-top-[500px] xs:-top-[200px] md:top-[600px]"
							></div>
						</ParallaxLayer>
						<ParallaxLayer
							offset={7.4}
							speed={0.3}
							factor={1}
							ref={(ref) => (parallaxLayerRefs.current[5] = ref)}
						>
							<div className="article-tiles-container bg-black text-white p-6 bottom-[900px] relative md:bottom-0">
								<div className="article-tiles-desc mb-6 text-center font-syncopate">
									<h3 className="text-4xl ss:text-5xl mb-2 ">
									Roll Royce Phantom
									Extended Series II
									</h3>
									<p>
									$1,65 million
									</p>
								</div>

								<div className="article-tiles-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-10 sm:pt-20">
									<div className="article-tile">
										<figure className="hover01 overflow-hidden">
											<img
												src={car58}
												className="w-full object-cover transform transition-transform duration-300 hover:scale-110"
											/>
										</figure>
										<div className="block font-syncopate text-center">
											<h4 className="text-base md:text-xl ss:text-lg font-bold mb-2 mt-5 uppercase">
											Sophisticated and Classy Design
											</h4>
											<p className="text-sm ss:text-base">
											Stands out with its majestic and sophisticated exterior design
											</p>
										</div>
									</div>

									<div className="article-tile">
										<figure className="hover01 overflow-hidden group relative">
											<img
												src={car592}
												alt="Image 1"
												className="w-full h-[700px] object-cover transform transition-opacity duration-300 group-hover:opacity-0"
											/>
											<img
												src={car59}
												alt="Image 2"
												className="absolute top-0 left-0 w-full h-full object-cover transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110"
											/>
										</figure>

										<div className="block font-syncopate text-center">
											<h4 className="text-base ss:text-lg mb-2 mt-5 font-bold">
											Luxurious Interior Space
											</h4>
											<p className="text-sm ss:text-base">
											The interior of the Phantom Extended Series II is like a mobile luxury living room.
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
											<h4 className="text-base font-bold ss:text-lg mb-2 mt-5">
											Powerful Performance 
											</h4>
											<p className="text-sm ss:text-base">
											Possesses a powerful 6.75 liter V12 engine
											</p>
										</div>
									</div>
								</div>
							</div>
						</ParallaxLayer>
						<div className="z-10 w-full bottom-0 absolute">
							<Footer ref={footerRef} />
						</div>
					</Parallax>
				</div>
			</div>
			<div className="block xl:hidden">
				<Car5reponsive />
			</div>
		</div>
	);
};

export default Car5popular;
