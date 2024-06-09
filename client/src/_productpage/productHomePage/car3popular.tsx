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
	Videohieuung,
} from "../../assets";

const Car3popular: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	// hiệu ứng thay đổi ảnh
	const [activeImage, setActiveImage] = useState(0);
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	useEffect(() => {
		// Gọi AOS.refresh() sau khi activeImage thay đổi và DOM đã được cập nhật
		AOS.refreshHard();
	}, [activeImage]);

	const buttonColors = ["bg-blue-300", "bg-orange-500", "bg-purple-500"];
	const images = [change4, change5, change6];
	const buttonsRef = useRef(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveImage((prev) => (prev + 1) % images.length);
		}, 7000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (buttonsRef.current) {
			const containerRect =
				buttonsRef.current.parentElement.getBoundingClientRect();
			const buttonsRect = buttonsRef.current.getBoundingClientRect();
			if (buttonsRect.bottom > containerRect.bottom) {
				buttonsRef.current.style.bottom = 0;
			}
		}
	}, [activeImage]); // Cập nhật khi activeImage thay đổi
	return (
		<div className="parallax">
			<Parallax pages={5} style={{ top: "0", left: "0" }}>
				<ParallaxLayer offset={0} speed={0.1} factor={4}>
					<video
						autoPlay
						muted
						loop
						playsInline
						className="w-full h-[500vh] object-cover" // Giữ nguyên tỷ lệ và che phủ toàn bộ container
					>
						<source src={Videohieuung} />
					</video>
				</ParallaxLayer>

				<ParallaxLayer offset={0} speed={3} factor={2}>
					<video
						autoPlay
						muted
						loop
						playsInline
						className="w-full h-auto object-cover" // Giữ nguyên tỷ lệ và che phủ toàn bộ container
					>
						<source src={VideoCar3Popular} />
					</video>
				</ParallaxLayer>

				<ParallaxLayer offset={0} speed={2.5} factor={1}>
					{" "}
					{/* Điều chỉnh speed cho phù hợp */}
					<div className="flex justify-start w-full h-full items-center">
						{isVisible && (
							<div
								data-aos="fade-up-left"
								data-aos-delay="500" // Delay 500ms sau khi isVisible = true
								className={`font-thin absolute text-white top-96 transform text-center shadow-xl
                  ss:w-[900px] w-[200px] p-2 md:p-5 
                  transition-opacity duration-1000 opacity-0 ${
						isVisible ? "opacity-100" : ""
					}`}
							>
								<h1 className="text-xs ss:text-3xl lg:text-6xl mb-1 tracking-widest font-bold">
									Rolls Royce Ghost 2021
								</h1>
								<h2 className="text-xs ss:text-2xl lg:text-4xl font-thin pt-12">
									<span className="font-bold text-red-100">
										1,65 million $
									</span>
								</h2>
							</div>
						)}
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={2} factor={1}>
					<div className="text-center bottom-[1500px] relative">
						<h2 className="font-thin text-2xl text-white ">
							<span className="font-bold text-4xl">
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
				<ParallaxLayer offset={1} speed={1.3} factor={1}>
					<h2 className="font-thin text-2xl text-white pt-28 grid grid-cols-2 gap-4 text-center bottom-[900px] relative">
						{" "}
						{/* Thêm grid và grid-cols-2 */}
						<div>
							<span className="font-bold">
								NEDC * (combined):
							</span>
							<br />
							CO2 emission: 343 g/km;
							<br />
							<br />
							<span className="font-bold">
								Fuel consumption:
							</span>{" "}
							18.8 mpg / 15.0 l/100km
							<br />
							<br />
						</div>
						<div>
							<span className="font-bold">
								WLTP # (combined):
							</span>
							<br />
							CO2 emission: 359-347 g/km;
							<br />
							<br />
							<span className="font-bold">
								Fuel consumption:
							</span>{" "}
							17.9–18.6 mpg / 15.8-15.2 l/100km
						</div>
					</h2>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={1.2} factor={1}>
					<div
						data-aos="zoom-in-right"
						style={{ backgroundImage: `url(${r8})` }}
						className="w-[1000px] bg-center h-[600px] bg-cover  animate-pulse duration-1000 ease-in-out transition-all rounded-3xl left-[450px] relative"
					></div>
				</ParallaxLayer>
				<ParallaxLayer offset={1.8} speed={0.4} factor={1}>
					<div
						data-aos="zoom-in-right"
						className="text-6xl text-white animate-pulse text-center font-thin top-96 relative"
					>
						IN THE CAR
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={0.6} factor={1}>
					<div
						data-aos="zoom-in-right"
						style={{ backgroundImage: `url(${r1})` }}
						className="w-[1000px] bg-center h-[600px] bg-cover   duration-1000 ease-in-out transition-all rounded-3xl relative left-[700px]"
					></div>
				</ParallaxLayer>
				<ParallaxLayer offset={2.5} speed={1} factor={1}>
					<div
						data-aos="zoom-in-right"
						style={{ backgroundImage: `url(${r3})` }}
						className="w-[1000px] bg-center h-[600px] bg-cover   duration-1000 ease-in-out transition-all rounded-3xl relative left-28 top-[10px]"
					></div>
				</ParallaxLayer>
				<ParallaxLayer offset={2.8} speed={1.2} factor={1}>
					<div
						data-aos="zoom-in-right"
						style={{ backgroundImage: `url(${r2})` }}
						className="w-[1000px] bg-center h-[600px] bg-cover   duration-1000 ease-in-out transition-all rounded-3xl relative left-[800px] top-[200px]"
					></div>
				</ParallaxLayer>
				<ParallaxLayer offset={3} speed={0.8} factor={1}>
				<div className="font-thin text-6xl text-center text-white animate-pulse">
							CAR COLOR
						</div>

				</ParallaxLayer>
				<ParallaxLayer offset={3.2} speed={1.2} factor={1}>

					<div className="relative overflow-hidden w-full h-[1000px]">
						<div className="absolute top-0 left-0 w-full h-full">
							{images.map((image, index) => (
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
						</div>

						<div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-4 scale-125 ">
							{images.map((_, index) => (
								<button
									key={index}
									onClick={() => {
										setActiveImage(index);
										AOS.refresh();
									}}
									className={`w-4 h-4 rounded-full focus:outline-none hover:scale-150 transition-all duration-500 ease-in-out ${
										buttonColors[
											index % buttonColors.length
										]
									}`}
								></button>
							))}
						</div>
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
};

export default Car3popular;
