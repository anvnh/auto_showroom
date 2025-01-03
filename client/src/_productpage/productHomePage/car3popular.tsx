import React, { useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
	r1,
	r2,
	r3,
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
	Videohieuung,
	b4,
	b5,
	b6,
	toi,
	b7,
	intro3,
	b8,
	b9,
	new3,
} from "../../assets";
import Car3popular2 from "./car3popular2";
import Footer from "@/components/common/Footer";
import Navbar from "../../_root/_homepage/Navbar";
import NavbarSmall3 from "../navbarsmall/NavbarSmall3";
import Car3reponsive from "../reponsive/car3reponsive";
import { Link } from "react-router-dom";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import toast, { Toaster } from "react-hot-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Rollroyce_ghost_view } from "@/components/3d";
function getPageHeight() {
	const parallaxContainer = document.querySelector(".parallax"); // Lấy phần tử Parallax
	const viewportHeight = window.innerHeight; // Lấy chiều cao viewport
	const pages = 8.4; // Số lượng trang
	console.log(viewportHeight * pages);
	return viewportHeight * pages; // Tính chiều cao tổng của Parallax
}

const Car3popular: React.FC = () => {
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
	const buttonColors = ["bg-black", "bg-black", "bg-black"];
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

	const parallaxRef = useRef(null); // Tạo ref cho Parallax
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
	}, []); // Dependency array rỗng để đảm bảo useEffect chỉ chạy một lần sau khi mount
	const ID = "66bfb4d4598bcf76c770bf1f";
	const carId = ID;
	// get single car
	const {
		data: car,
		isLoading,
		refetch,
		isRefetching,
	} = useQuery({
		queryKey: ["car", carId],
		queryFn: async () => {
			try {
				const response = await fetch(`/api/car/${carId}`);
				const data = await response.json();

				// console.log(data);

				if (!response.ok) {
					throw new Error(data.message || "Something went wrong!");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});
	const { mutate: addToCart, isPending: isAddingToCart } = useMutation({
		mutationFn: async (productId) => {
			try {
				const response = await fetch(
					`/api/user/add/cart/${productId}`,
					{
						method: "POST",
					}
				);
				const data = await response.json();

				if (!response.ok) {
					throw new Error(data.error || "Something went wrong!");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
		onSuccess: () => {
			console.log("okaodjihsi");
			toast.success("Product added to cart", {
				duration: 2000,
			});
			// setTimeout(() => { setLoadingProductId (null) });
		},
		onError: (error) => {
			// TODO
			toast.error("Item already in cart", {
				duration: 2000,
			});
			// setTimeout(() => { setLoadingProductId (null) });
		},
	});
	const handleAddToCart = (productId) => {
		// setLoadingProductId(productId);
		addToCart(productId);
	};

	return (
		<div>
			<div className="hidden xl:block">
				<div className="parallax" style={{ overflow: "auto" }}>
					<div>
						<NavbarSmall3
							onNavClick={handleNavClick}
							selectedSection={selectedSection}
							parallaxLayerRefs={parallaxLayerRefs}
							parallaxRef={parallaxRef}
						/>
					</div>
					<Parallax
						pages={8.65}
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
								className="w-full h-[400vh] pt-32 object-cover"
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
								className="w-full h-auto object-cover relative"
							>
								<source src={intro3}/>

							</video>
						</ParallaxLayer>

						<ParallaxLayer offset={0} speed={4.5} factor={1}>
							<div className="flex justify-start w-full h-full items-center bottom-64 sm:-left-20 relative md:left-11 left-0 ss:-left-52 ss:bottom-32 sm:bottom-24 xs:bottom-48">
								{isVisible && (
									<div
										className={`font-thin absolute text-white top-96 transform text-center shadow-xl
                  ss:w-[1200px] xs:w-[300px] w-[200px] p-2 md:p-5 
                  transition-opacity duration-1000 opacity-0 font-syncopate ${isVisible ? "opacity-100" : ""
											}`}
									>
										<h1 className="text-xs xs:text-xl ss:text-3xl sm:text-4xl lg:text-6xl mb-1 tracking-widest font-bold">
											Rolls Royce Ghost 2021
										</h1>
										<h2 className="text-xs ss:text-2xl lg:text-4xl sm:text-3xl font-kanit  pt-1">
											<span className="">$ 332,500</span>
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
								id="Introduce"
								className="text-center relative pt-[1px] md:pt-[560px] ss:pt-[100px]"
							>
								<h2 className="font-thin text-md md:first-line:text-2xl sm:text-3xl text-white px-12">
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
						</ParallaxLayer>
						<ParallaxLayer offset={1.1} speed={0.7} factor={1}>
							<div className="ss:bottom-[300px] md:bottom-0 bottom-0 relative justify-center items-center flex">
								<div
									style={{ backgroundImage: `url(${r8})` }}
									className="w-[400px] h-[200px] ss:w-[600px] ss:h-[400px] sm:w-[800px] sm:h-[600px] md:w-[1200px] md:h-[600px] bg-cover  animate-pulse bg-center rounded-3xl relative"
								></div>
							</div>
						</ParallaxLayer>
						<ParallaxLayer offset={1.1} speed={0.4} factor={1}>
							<div className="text-3xl md:text-[200px] text-white ss:text-6xl sm:text-8xl ss:bottom-56 animate-pulse text-center pt-28 md:pt-[300px] relative font-syncopate font-bold">
								IN THE CAR
							</div>
						</ParallaxLayer>
						<ParallaxLayer offset={1.7} speed={0.8} factor={1}>
							<div
								style={{ backgroundImage: `url(${r1})` }}
								className="w-[300px] h-[200px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1200px] md:h-[800px] bg-cover bg-center rounded-3xl relative -left-[20px] top-[200px] ss:top-[150px] sm:top-[350px] md:top-[1900px]"
							></div>
						</ParallaxLayer>
						<ParallaxLayer offset={1.8} speed={0.9} factor={1}>
							<div
								style={{ backgroundImage: `url(${r3})` }}
								className="w-[300px] h-[200px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1500px] bg-center md:h-[900px] bg-cover rounded-3xl relative left-6 sm:left-11 md:left-11 -top-[100px] ss:-top-[500px] xs:-top-[200px] md:top-[500px]"
							></div>
						</ParallaxLayer>
						<ParallaxLayer offset={1.9} speed={1.2} factor={1}>
							<div className="justify-end items-end flex">
								<div
									style={{ backgroundImage: `url(${r2})` }}
									className="w-[300px] h-[200px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[600px] sm:h-[500px] md:w-[1200px] bg-center md:h-[800px] bg-cover rounded-3xl relative -top-[1px] ss:-top-[300px] sm:-top-[200px] md:top-[1500px]"
								></div>
							</div>
						</ParallaxLayer>
						<ParallaxLayer
							offset={2.3}
							speed={0.8}
							factor={1}
							ref={(ref) => (parallaxLayerRefs.current[2] = ref)}
						>
							<div className="bottom-[400px] ss:-top-[600px] md:top-[1500px] relative">
								<div className="md:text-6xl ss:text-6xl sm:text-7xl text-3xl text-center font-bold text-white animate-pulse font-syncopate ">
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
								className="relative overflow-hidden w-full h-[990px] bottom-[360px] ss:-top-[600px] md:top-[1500px]"
							>
								{/* Vùng chứa ảnh */}
								<div className="absolute top-0 left-0 w-full h-full">
									{imageGroups[activeGroup].map(
										(image, index) => (
											<img
												key={index}
												src={image}
												alt={`Image ${index + 1}`}
												className={`absolute top-0 left-0 w-full h-auto object-cover transition-opacity duration-500 ${activeImage === index
													? "opacity-100"
													: "opacity-0"
													}`}
											/>
										)
									)}
								</div>

								{/* Nút chuyển ảnh */}

								<div
									className="z-20 pl-[1590px] absolute top-[230px] md:top-[500px] transform -translate-y-1/2 flex md:flex-col flex-row md:space-y-4 space-y-0 scale-125 gap-3 "
									ref={buttonsRef}
								>
									{imageGroups[activeGroup].map(
										(__, index) => (
											<button
												key={index}
												onClick={() => {
													setActiveImage(index);
												}}
												className={`md:w-5 md:h-5 ss:w-6 ss:h-6 sm:w-8 sm:h-8 w-4 h-4 rounded-full focus:outline-none hover:scale-150 transition-all duration-200 ease-in-out ${buttonColors2[index]}`}
											></button>
										)
									)}
								</div>

								{/* Nút chuyển nhóm ảnh */}
								<div className="absolute flex justify-end pr-4 top-52 ss:top-[410px] xs:top-[300px] sm:top-[550px]  md:top-4 md:w-[1850px]  sm:h-[60px] sm:text-4xl text-sm md:text-xl md:h-[40px] h-[40[x]] md:space-x-4 md:gap-0 gap-2">
									<button
										onClick={() => {
											setActiveImage(0);
											setActiveGroup(0);
										}}
										className={`px-4 py-2 rounded-md focus:outline-none hover:scale-110 transition-all duration-300 ease-in-out ${activeGroup === 0
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
										className={`px-4 py-2 rounded-md focus:outline-none hover:scale-110 transition-all duration-300 ease-in-out ${activeGroup === 1
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
										className={`px-4 py-2 rounded-md focus:outline-none hover:scale-110 transition-all duration-300 ease-in-out ${activeGroup === 2
											? buttonColors[1]
											: "bg-gray-900 bg-opacity-50 text-white"
											}`}
									>
										Behind
									</button>
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
								className="flex justify-center bottom-[900px] md:-bottom-[1030px] pt-12 relative z-50"
							>
								<div className="w-full z-50">
									<Car3popular2 />
								</div>
							</div>
						</ParallaxLayer>
						<ParallaxLayer
							offset={4}
							speed={0.8}
							factor={1}
							ref={(ref) => (parallaxLayerRefs.current[3] = ref)}
						>
							<div className="sketchfab-embed-wrapper w-[1000x] h-[500px] md:h-[800px]  -bottom-[1700px] z-10 relative">
								{" "}
								<Rollroyce_ghost_view />
								{/* <iframe
									className="w-full md:h-[550px] h-[300px] scale-125 z-50"
									frameBorder="0"
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
								</iframe>{" "} */}
							</div>
						</ParallaxLayer>

						<ParallaxLayer
							offset={6.2}
							speed={1.2}
							factor={1}
							ref={(ref) => (parallaxLayerRefs.current[4] = ref)}
						>
							<div className="text-3xl md:text-6xl text-white animate-pulse text-center  relative font-syncopate uppercase bottom-[1700px] md:bottom-[1200px] font-bold">
								Sophisticated, modern, classy
							</div>
						</ParallaxLayer>
						<ParallaxLayer offset={6.2} speed={1} factor={1}>
							<div
								style={{ backgroundImage: `url(${b6})` }}
								className="w-[300px] h-[400px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1200px] md:h-[800px] bg-cover bg-center rounded-3xl relative -left-[20px] -top-[1350px] ss:top-[150px] sm:top-[350px] md:-top-[900px]"
							></div>
						</ParallaxLayer>
						<ParallaxLayer offset={6.3} speed={0.8} factor={1}>
							<div className="justify-end items-end flex">
								<div
									style={{ backgroundImage: `url(${new3})` }}
									className="w-[300px] h-[400px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[600px] sm:h-[500px] md:w-[1200px] bg-center md:h-[800px] bg-cover rounded-3xl relative -top-[1050px] ss:-top-[300px] sm:-top-[200px] md:-top-[400px]"
								></div>
							</div>
						</ParallaxLayer>
						<ParallaxLayer offset={6.4} speed={0.9} factor={1}>
							<div
								style={{ backgroundImage: `url(${b5})` }}
								className="w-[300px] h-[400px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1200px] bg-center md:h-[1200px] bg-cover rounded-3xl relative left-6 sm:left-11 md:left-11 -top-[690px] ss:-top-[500px] xs:-top-[200px] md:top-[100px]"
							></div>
						</ParallaxLayer>
						<ParallaxLayer
							offset={7.4}
							speed={0.8}
							factor={1}
							ref={(ref) => (parallaxLayerRefs.current[5] = ref)}
						>
							{isLoading && <LoadingSpinner />}
							{!isLoading && !isRefetching && car && (
								<div className="article-tiles-container bg-gray-900 text-white p-6 bottom-[1600px] h-[1900px] relative md:bottom-[500px]">
									<Toaster
										position="top-center"
										reverseOrder={false}
									/>
									<div className="article-tiles-desc mb-6 text-center font-syncopate">
										<h3 className="text-4xl pt-5 ss:text-5xl mb-2 font-bold">
											Rolls-Royce-Ghost-2021
										</h3>
										<p className="text-2xl font-kanit">$ 332,500</p>
									</div>
									<div className="flex justify-center gap-5 pt-5">
										<Link to="/shop/payment/66bfb4d4598bcf76c770bf1f">
											<button
												className=" opacity-80 backdrop-blur-xl
							detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-40 lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold font-syncopate text-sm md:text-base rounded-3xl text-center
										before:ease relative h-12 w-40 overflow-hidden border-white border shadow-xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-white hover:before:-translate-x-40
							"
											>
												Buy Now
											</button>
										</Link>

										<button
											className=" opacity-80 backdrop-blur-xl
							detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-56 lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold font-syncopate text-sm md:text-base rounded-3xl text-center
										before:ease relative h-12 w-40 overflow-hidden border-white border shadow-xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-white hover:before:-translate-x-[230px]
							"
											onClick={() =>
												handleAddToCart(car._id)
											}
										>
											{isAddingToCart ? (
												<LoadingSpinner />
											) : (
												<p>Add to cart</p>
											)}
										</button>
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
													Ghost Prism draws
													inspiration from the world
													of contemporary designs.
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
													Pure and pristine. The
													ultimate foundation for
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
													Envision an original with
													Bespoke services.
												</p>
											</div>
										</div>
									</div>
								</div>
							)}
						</ParallaxLayer>
						<div className="z-10 w-full bottom-0 absolute">
							<Footer ref={footerRef} />
						</div>
					</Parallax>
				</div>
			</div>
			<div className="block xl:hidden">
				<Car3reponsive />
			</div>
		</div>
	);
};

export default Car3popular;
