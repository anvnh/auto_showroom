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
	news4,
	videohieuung2,
	Videohieuung,
	inside51,
	inside52,
	inside53,
	news2,
	news3,
	news6,
	car53,
	car54,
	car55,
	intro5,
	car57,
	car58,
	car59,
	car592,
	car510,
} from "../../assets";
import { Rollroyce_phantom_view } from "@/components/3d";
import Car5popular2 from "../productHomePage/car5popular2";
import Footer from "@/components/common/Footer";
import Navbar from "../../_root/_homepage/Navbar";

import AOS from "aos";
import { Link } from "react-router-dom";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import { toast, Toaster } from "react-hot-toast";
import { useMutation, useQuery } from "@tanstack/react-query";

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
	const ID = "66bfc096598bcf76c770c008";
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
					className="w-full h-auto object-cover z-20 pt-[65px]"
				>
						<source src={intro5}/>
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

					<div className="text-3xl md:text-[200px] text-white ss:text-6xl sm:text-8xl animate-pulse text-center pt-28 md:pt-[300px] sm:pt-40 relative font-syncopate lg:pt-1 font-bold">
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
							className="w-[300px] h-[200px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px]  sm:w-[700px] sm:h-[600px] md:w-[1500px] bg-center md:h-[900px] bg-cover rounded-3xl relative -top-[150px] ss:-top-[530px] xs:-top-[200px] md:top-[500px] lg:-top-[500px] lg:h-[600px] lg:w-[1000px]"
						></div>
					</div>
					<div className="justify-end items-end flex z-40">
						<div
							data-aos="fade-right"
							style={{ backgroundImage: `url(${inside53})` }}
							className="w-[300px] h-[200px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[600px] sm:h-[500px] md:w-[1200px] bg-center md:h-[800px] bg-cover rounded-3xl relative top-[100px] ss:-top-[220px] xs:-top-[30px] sm:-top-[00px] md:top-[1200px] lg:-top-[80px] lg:h-[600px] lg:w-[1000px]"
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
				className="relative z-50 pt-40">
				<div>
					<div className="md:text-6xl pb-12 ss:text-6xl sm:text-7xl text-3xl text-center text-white animate-pulse font-syncopate font-bold">
						NEW COLOR
					</div>
				</div>
				<div
					data-aos="fade-out"
					id="Color" className="w-full h-[200px] z-50">
				
				<div
								id="Color"
								className="relative w-full h-[900px]"
							>
								<div
									style={{ backgroundImage: `url(${news4})` }}
									className="relative w-screen h-[200px] ss:h-[600px] bg-center bg-cover"
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

				

				
				</div>
			</div>
			<div id="Interiors" className="flex justify-center relative z-20">
				<div className="w-full">
					<Car5popular2 />
				</div>
			</div>
			<div className="sketchfab-embed-wrapper w-[1000x] h-[500px] z-10 relative">
				<Rollroyce_phantom_view />
			</div>
			<div className="bg-black pt-40">
				<div
					data-aos="fade-right"
					className="text-3xl md:text-6xl text-white animate-pulse text-center relative font-syncopate uppercase bottom-[0px] md:-bottom-[1100px] pb-12 lg:bottom-[100px] lg:text-5xl font-bold">
					Sophisticated, modern, classy
				</div>
				<div className="justify-start items-start flex">
					<div
						data-aos="fade-right"
						style={{ backgroundImage: `url(${news2})` }}
						className="w-[300px] h-[400px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1200px] md:h-[800px] bg-cover bg-center rounded-3xl relative  -top-[0px] ss:top-[150px] sm:top-[250px] md:top-[2600px] lg:h-[600px] lg:w-[1000px] lg:-top-[10px]"
					></div>
				</div>
				<div className="justify-end items-end flex">
					<div
						data-aos="fade-left"
						style={{ backgroundImage: `url(${news3})` }}
						className="w-[300px] h-[400px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[600px] sm:h-[500px] md:w-[1200px] bg-center md:h-[800px] bg-cover rounded-3xl relative top-[10px] ss:-top-[300px] sm:top-[100px] md:top-[1700px] lg:h-[600px] lg:w-[1000px] lg:-top-[100px]"
					></div>
				</div>
				<div className="justify-start items-start flex">
					<div
						data-aos="fade-right"
						style={{ backgroundImage: `url(${news6})` }}
						className="w-full h-[300px] ss:w-[600px] ss:h-[400px] xs:w-[400px] xs:h-[300px] sm:w-[700px] sm:h-[600px] md:w-[1500px] bg-center md:h-[600px] bg-cover rounded-3xl sm:top-[10px] relative top-[50px] ss:-top-[500px] xs:-top-[200px] md:top-[800px] left-[0px] lg:h-[600px] lg:w-[1000px] lg:-top-[150px]"
					></div>
				</div>
			</div>
			<div
				className="article-tiles-container bg-gray-900 text-white p-6 -bottom-[120px] relative md:-bottom-[520px] h-[1600px] ss:h-[1300px] lg:-bottom-[10px]">
				<div className="article-tiles-desc mb-6 text-center font-syncopate ">
					<h3
						data-aos="fade-up"
						className="text-2xl ss:text-5xl mb-2 pt-20 font-bold">
						Roll Royce Phantom
						Extended Series II
					</h3>
					<p data-aos="fade-down font-kanit">	$1,65 million</p>
				</div>
				<div className="flex justify-center gap-5 pt-5">
					<Toaster
						position="top-center"
						reverseOrder={false}
					/>
					<Link to="/shop/payment/66bfc096598bcf76c770c008">
						<button
							data-aos="fade"
							className=" opacity-80 backdrop-blur-xl
							detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-40 lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold font-kanit text-md md:text-base rounded-3xl text-center
							items-center before:ease relative h-12 w-40 overflow-hidden border-white border shadow-xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-white hover:before:-translate-x-40
							"
						>
							Buy Now
						</button>
					</Link>

					<button
						data-aos="fade"
						className=" opacity-80 backdrop-blur-xl
							detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-56 lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold font-kanit text-md items-center md:text-base rounded-3xl text-center
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
								data-aos="fade-up"
								src={car58}
								className="w-full object-cover transform transition-transform duration-300 hover:scale-110"
							/>
						</figure>
						<div
							data-aos="fade-right"
							className="block font-syncopate text-center">
							<h4 className="text-base ss:text-lg font-bold pt-10 mb-2">
								Sophisticated and Classy Design
							</h4>
							<p className="text-sm ss:text-base">
								Stands out with its majestic and sophisticated exterior design
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
							<h4 className="text-base ss:text-lg pt-10 font-bold mb-2">
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
							<h4 className="text-base ss:text-lg mb-2">
								Powerful Performance
							</h4>
							<p className="text-sm ss:text-base">
								Possesses a powerful 6.75 liter V12 engine
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="z-10 w-full relative bg-black">
				<Footer />
			</div>
		</div >
	);
};

export default car5reponsive;
