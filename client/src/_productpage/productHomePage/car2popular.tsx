import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import {
	Buy2,
	merr,
	merr1,
	merr2,
	merr3,
	merr4,
	merr5,
	merr7,
	merr8,
	merr9,
	merr11,
	merr12,
	sky,
	logomer,
	video2,
	changecolor2
} from "../../assets";
import { close_icon } from "@/assets/homepage";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Mercedes_maybach_view } from "@/components/3d";
import { IoMdCloseCircle } from "react-icons/io";
const Car2popular = () => {
	// hiệu ứng hiển thị khi 3s trôi qua
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-center",
		});
	}, []);
	const [selectedImage, setSelectedImage] = useState(merr11);

	const handleThumbnailClick = (image) => {
		setSelectedImage(image);
	};
	// useEffect(() => {
	// 	window.scrollTo(0,0);
	// }, []);
	const ID = "66ab97d42c63f54b95a50dc1";
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


	const [isPopupVisible, setPopupVisible] = useState(false)
	const showPopup = () => {
		setPopupVisible(true)
	}
	const hidePopup = () => {
		setPopupVisible(false)
	}
	return (
		<div>
			<div
				style={{ backgroundImage: `url(${sky})` }}

				className="min-h bg-black"
			>
				<div
					id="Home"
			className="bg-cover bg-center relative pb-20 md:pb-0"
				>
					<video
						autoPlay
						muted
						loop
						playsInline
						className="w-full h-auto"
					>
						<source src={video2} type="video/mp4" />
					</video>
					<div
						className="overlay absolute inset-x-0 bottom-0 h-1/4"
						style={{
							backgroundImage:
								"linear-gradient(to top, black, transparent)",
						}}
					></div>
					<div className="flex justify-center z-10">
						{isVisible && (
							<div
								data-aos="fade-in"
								className={`bg-gray-900 bg-opacity-75 rounded-2xl font-thin absolute text-white top-48 transform text-center shadow-xl
								ss:w-[550px] w-[200px] p-2 md:p-5 
							transition-opacity duration-1000 opacity-0 font-syncopate ${isVisible ? "opacity-100" : ""
									}`}
							>
								<h1 className="text-xs ss:text-3xl lg:text-4xl mb-2 	tracking-widest font-bold animate-pulse duration-1000 ease-in-out transition-all ">
									Mercedes-Benz
								</h1>
								<h2 className="text-xs ss:text-2xl lg:text-3xl font-thin animate-pulse duration-1000 ease-in-out transition-all">
									Maybach 2022
									<br />
									<span className="font-bold text-red-100">
										$ 679,867
									</span>
								</h2>
							</div>
						)}
					</div>
					<div className="hidden md:block">
						<div className="justify-center items-center flex">
							{isVisible && (
								<div className="bg-gray-900 grid ss:grid-cols-2 gap-2 grid-cols-1 bg-opacity-75 rounded-2xl font-bold absolute text-white -bottom-1 transform -translate-y-1/2 shadow-xl xl:w-[1200px] md:w-[1000px] sm:w-[700px] ss:w-[500px] w-[300px] p-7 ">
									<div className="font-thin xl:text-2xl md:text-xl sm:text-sm text-start md:pl-40 ss:pl-1 pl-20 animate-pulse duration-1000 ease-in-out transition-all  ">
										<span className="font-bold">13.6</span>{" "}
										<span className="text-lg font-light">
											1/100 km
										</span>{" "}
										<br />
										<span className="font-bold">
											4.5s
										</span>{" "}
										<span className="text-lg font-light">
											0-100km/h
										</span>
										<br />{" "}
										<span className="font-bold"> 463</span>{" "}
										<span className="text-lg font-light">
											KW
										</span>
									</div>
									<div className="hidden ss:block">
										<div className="font-thin xl:text-2xl md:text-xl sm:text-sm text-xs pr-3 animate-pulse duration-1000 ease-in-out transition-all">
											<span className="font-bold">
												The competitive line-up for the
												Mercedes Maybach
											</span>{" "}
											Serenity and uniqueness characterise
											the design. Underlined by the mighty
											chrome radiator grille with
											"Maybach" lettering and the bonnet
											trim on the powerful front section.
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* -------------------------phần 2 --------------*/}
				<div
					id="Introduce"
					// style={{ backgroundImage: `url(${sky})` }}
					className=" rounded-bl-3xl bg-center w-full min-h-screen relative object-cover justify-center items-center flex "
				>
					<div
						className="h-full"
					// style={{
					// 	backgroundImage: `url(${sky})`,
					// }}
					>
						<div className="flex justify-center items-center">
							<div
								data-aos="fade-left"
								className="text-white relative font-thin text-xl p-5 ss:p-16 top-0 sm:text-5xl animate-pulse duration-1000 ease-in-out transition-all font-syncopate"
							>
								MERCEDES
							</div>
							<div
								data-aos="fade-right"
								style={{ backgroundImage: `url(${logomer})` }}
								className="w-20 bg-center h-28 bg-cover sm:h-36 animate-pulse duration-1000 ease-in-out transition-all"
							>
								{" "}
							</div>
						</div>
						<div
							data-aos="fade-down"
							className="font-thin text-white md:text-2xl text-sm md:p-64 ss:p-14  p-12 pb-64 pt-44 text-center"
						>
							<span className="font-bold ">
							The Mercedes-Benz Maybach 2022
							</span>{" "}
						 represents the pinnacle of luxury and advanced technology, offering an unparalleled driving experience. With its elegant design, opulent interior, and meticulous attention to detail, the Maybach sets a new standard for sophistication and comfort. Equipped with state-of-the-art features, including advanced driver assistance systems, premium materials, and a powerful yet smooth engine, the Maybach seamlessly blends performance with unparalleled luxury. Every aspect of the 2022 Maybach is crafted to provide passengers with a first-class experience, making it a true statement of prestige and refinement on the road.
						</div>
						<div
							data-aos="fade-in"
							style={{ backgroundImage: `url(${merr7})` }}
							className="bg-cover bg-center h-[400px] md:w-full relative rounded-full rounded-tl-none rounded-br-none md:pt-[900px] "
						></div>
					</div>
				</div>
				{/* ------------tiêu đề------------------ */}
				<div className="relative pt-32 md:pt-64 pb-12 ">
					<div
						data-aos="fade-left"
					className="text-white relative text-2xl ss:text-2xl  md:text-6xl sm:text-4xl md:px-0 px-10 text-center font-kanit font-bold"
					>
						SIGNIFICANTLY SHARPER - LIKE YOUR EYES
					</div>
					{/* ------------ảnh 1------------------ */}
					<div className="pt-24 md:pt-[220px] flex">
						<div
							data-aos="fade-right"
							className="font-thin text-white text-xs ss:text-sm sm:text-xl xl:text-2xl md:p-24 p-2 xs:p-12"
						>
					The precision-cut lights are designed to evoke a sense of clarity and focus, much like the sharp gaze of human eyes, reflecting both the car’s cutting-edge technology and its sophisticated design ethos.
						</div>
						<div className="justify-end flex">
							<div
								data-aos="fade-left"
								className="relative bg-cover w-[200px] h-[300px] ss:w-[400px] ss:h-[500px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[600px] xl:w-[1000px] xl:h-[900px] rounded-bl-full"
								style={{ backgroundImage: `url(${merr8})` }}
							></div>
						</div>
					</div>
					{/* ------------ảnh 2------------------ */}
					<div className="pt-[100px] flex">
						<div className="justify-start flex">
							<div
								data-aos="fade-right"
								className="relative bg-cover w-[200px] h-[300px] ss:w-[400px] ss:h-[500px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[500px] xl:w-[1000px] xl:h-[900px] rounded-br-full"
								style={{ backgroundImage: `url(${merr9})` }}
							></div>
						</div>
						<div
							data-aos="fade-left"
							className="font-thin text-white text-xs ss:text-sm sm:text-xl xl:text-2xl md:p-32 p-2 xs:p-12"
						>
							This model features advanced, sharply defined LED or DIGITAL LIGHT headlamps that not only enhance visibility but also add a bold, modern aesthetic to the vehicle’s front profile.
						</div>
					</div>
				</div>

				{/* 3D car------------------------------------------- */}
				<div
				id="Model"
				className="w-screen relative h-full z-10 bg-[#DADADA] "
			>
				<div className="md:hidden block bg-black px-5 ss:px-12 pb-5">
					<p data-aos="fade-right" data-aos-delay="200" className="text-xl">Luxury and class</p>
					<hr data-aos="fade-right" data-aos-delay="300" className="border w-1/6 border-red-500 mt-5" />
					<p data-aos="fade-right" data-aos-delay="400" className="text-4xl font-kanit font-bold pt-6">
						<span className="">3D model</span>{" "}
						<span className="text-xl font-mono">of</span>
						<br />
						Mercedes BenZ Maybach 2022
					</p>
					<button
					data-aos="fade-right" data-aos-delay="500"
							onClick={() => {
								showPopup();
							}}	
							className="mt-5 border w-[120px] border-white hover:border-black p-3 rounded-md
							opacity-80 backdrop-blur-xl
									detail-button text-white px-4 py-2 md:px-6 md:py-3  justify-center flex hover:bg-white transition-all duration-300 ease-in-out hover:text-black  font-bold  text-xs md:text-base text-center
												before:ease relative h-10 md:h-12 md:w-36 overflow-hidden  shadow-xl before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-gray-500 before:opacity-80 before:duration-700 hover:shadow-white hover:before:-translate-x-[200px]
							"
						>
							View
						</button>
				</div>
				<video
					autoPlay
					muted
					loop
					playsInline
					className="w-full z-10 h-auto relative"
				>
					<source src={changecolor2} type="video/mp4" />
				</video>
				<div
					onClick={() => {
						showPopup();
					}}
					className="absolute  lg:-top-[220px] lg:-left-[300px]  xl:-top-[300px] xl:-left-[500px]  w-full h-full flex justify-center items-center"
				>
					<div data-aos="fade-left" className="md:block hidden z-50 lg:w-[350px] lg:h-[250px] xl:w-[500px] xl:h-[300px] rounded-2xl bg-black backdrop-blur-xl bg-opacity-75 font-bold text-white p-5 ">
						<p data-aos="fade-right" data-aos-delay="200" className="xl:text-xl">Luxury and class</p>
						<hr data-aos="fade-right" data-aos-delay="300" className="border w-1/6 border-red-500 mt-5" />
						<p data-aos="fade-right" data-aos-delay="400" className="xl:text-4xl lg:text-3xl font-kanit font-bold pt-6">
							<span className="">3D model</span>{" "}
							<span className="text-xl font-mono">of</span>
							<br />
							Mercedes BenZ Maybach
						</p>
						<button
						data-aos="fade-right" data-aos-delay="600"
							onClick={() => {
								showPopup();
							}}
							className="xl:mt-12 lg:mt-4 border w-[80px] border-white hover:border-black p-3 rounded-xl
							opacity-80 backdrop-blur-xl
									detail-button  text-white px-4 py-2 md:px-6 md:py-3  justify-center flex hover:bg-white transition-all duration-300 ease-in-out hover:text-black  font-bold  text-xs md:text-base text-center
												before:ease relative h-10 md:h-12 md:w-36 overflow-hidden  shadow-xl before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-gray-500 before:opacity-80 before:duration-700 hover:shadow-white hover:before:-translate-x-[200px]
							"
						>
							View
						</button>
					</div>
				</div>
			</div>

				<div className={`top-0 left-0 w-screen ${isPopupVisible ? "flex" : "hidden"} h-screen fixed bg-neutral-800 z-50`}>
					<section className={`w-screen h-screen flex  flex-col justify-center items-center `}>
					<div className="w-[100%] h-[8%]  flex justify-between items-center">
							<section className="w-[5%] h-full "></section>
							<section className="w-[80%] h-full  flex justify-center items-center">
							<p className="font-kanit font-bold text-[20px] ss:text-[29px] sm:text-[35px] xsm:text-[45px] mlg:text-[50px]">
									Mercedes Maybach 3D Model
								</p>
							</section>
							<section
							onClick={() => {
								hidePopup();
							}}
							className="cursor-pointer w-[30px] sm:w-[50px] pr-3 sm:pr-5 h-full flex justify-center items-center text-red-600 scale-150 sm:scale-[3]"
						>
							<IoMdCloseCircle />
						</section>
						</div>
						<div className="w-[100%] h-[100%] overflow-hidden ">

							<Mercedes_maybach_view />
						</div>
					</section>
				</div>
				{/* <div className="">
					<div
						id="Model"
						data-aos="fade-up"
						className="font-thin text-blue-200 relative text-3xl ss:text-2xl  md:text-6xl sm:text-4xl text-center pt-[200px] font-syncopate"
					>
						3D MODEL
					</div>
					<div className="sketchfab-embed-wrapper w-[1000x] md:h-[900px] h-[500px] pt-16 md:pt-52">
						{" "}
						<iframe
							className="w-full md:h-[500px] h-[300px] scale-125 md:scale-150"
							title="Mercedes-Benz Maybach 2022"
							frameborder="0"
							allowfullscreen
							mozallowfullscreen="true"
							webkitallowfullscreen="true"
							allow="autoplay; fullscreen; xr-spatial-tracking"
							xr-spatial-tracking
							execution-while-out-of-viewport
							execution-while-not-rendered
							web-share
							src="https://sketchfab.com/models/979f37a878f04b2a8d888b62ea6027e9/embed?autospin=1&autostart=1&preload=1&ui_theme=dark"
						>
							{" "}
						</iframe>{" "}
					</div>
				</div> */}
				{/*----------------------- banner -------------------------*/}
				<div className="flex pt-12">
					<div
						id="Behind"
						data-aos="fade-left"
						className="relative bg-cover bg-center w-[200px] h-[150px] xs:w-[300px] xs:h-[200px] ss:w-[500px] ss:h-[300px] sm:w-[600px] sm:h-[400px] md:w-[800px] md:h-[500px] xl:w-[1000px] xl:h-[500px] rounded-tr-full"
						style={{ backgroundImage: `url(${merr2})` }}
					></div>
					<div
						data-aos="slide-right"
						className="font-bold text-white relative text-2xl ss:text-3xl sm:text-5xl xl:text-6xl justify-center items-center flex pl-5 md:pl-60 font-kanit"
					>
						CAR BEHIND
					</div>
				</div>
				{/* ---------------CAR behind--------------------------------- */}
				<div data-aos="fade-right" className="md:pt-12">
					<div className="md:flex grid h-full grid-rows-2 pt-20 px-4 md:px-16">
						{/*  các thumbnail */}
						<div className="md:w-[300px] w-full p-4 flex h-full ">
							<div className="block md:hidden">
								<div className="flex gap-2 sm:gap-5  md:flex-col md:space-y-4 flex-grow ">
									{[merr11, merr12, merr5, merr4, merr1].map(
										(image, index) => (
											<div
												key={index}
												className="w-full object-cover"
												onClick={() =>
													handleThumbnailClick(image)
												}
											>
												<img
													src={image}
													alt=""
													className="md:w-full md:h-full h-[100px] object-cover hover:scale-110 transition-all ease-in-out duration-400 rounded-xl"
												/>
											</div>
										)
									)}
								</div>
							</div>
							<div className="md:block hidden">
								<div className="flex gap-2 md:flex-col md:space-y-4 flex-grow ">
									{[merr11, merr12, merr5, merr4, merr1].map(
										(image, index) => (
											<div
												key={index}
												className="w-full object-cover"
												onClick={() =>
													handleThumbnailClick(image)
												}
											>
												<img
													src={image}
													alt=""
													className="md:w-full md:h-full h-[100px] object-cover hover:scale-110 transition-all ease-in-out duration-400 rounded-xl"
												/>
											</div>
										)
									)}
								</div>
							</div>
						</div>

						{/* ảnh lớn */}
						<div data-aos="fade-left" className="w-full relative md:pl-2  flex">
							<div
								className="bg-cover bg-center w-full relative md:bottom-0 bottom-40 md:h-auto h-[300px] object-cove rounded-3xl"
								style={{
									backgroundImage: `url(${selectedImage})`,
								}}
							></div>
						</div>
					</div>
				</div>

				{/* -------------------------banner --------------------------*/}

				<div className="pt-2 md:pt-[200px] flex">
					<div
						data-aos="fade-right"
						className="font-thin text-white text-xs ss:text-sm sm:text-xl xl:text-2xl md:p-24 p-2 xs:p-12"
					>
						 The Maybach is equipped with cutting-edge technology, including the MBUX infotainment system with voice control, advanced driver-assistance features like adaptive cruise control, lane-keeping assist, and a 360-degree camera.
					</div>
					<div className="justify-end flex">
						<div
							data-aos="fade-left"
							className="relative bg-cover w-[200px] h-[300px] ss:w-[400px] ss:h-[500px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[600px] xl:w-[1000px] xl:h-[900px] rounded-bl-full"
							style={{ backgroundImage: `url(${merr})` }}
						></div>
					</div>
				</div>
				<div className="pt-[70px] flex">
					<div className="justify-start flex">
						<div
							data-aos="fade-left"
							className="relative bg-cover w-[200px] h-[300px] ss:w-[400px] ss:h-[500px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[500px] xl:w-[1000px] xl:h-[900px] rounded-br-full"
							style={{ backgroundImage: `url(${merr3})` }}
						></div>
					</div>
					<div
						data-aos="fade-right"
						className="font-thin text-white text-xs ss:text-sm sm:text-xl xl:text-2xl md:p-32 p-2 xs:p-12"
					>
						The ambient lighting system is customizable with 64 different colors, and the large infotainment screens, coupled with the Burmester 4D surround sound system, deliver a theater-like audio experience.
					</div>
				</div>

				{/* --------------------------conclusion --------------*/}
				<div className="w-full h-full pt-20 md:pt-40 relative">
					{isLoading && <LoadingSpinner />}
					{!isLoading && !isRefetching && car && (
						<div
							id="Buy"
							style={{ backgroundImage: `url(${Buy2})` }}
								className="w-screen bg-cover bg-center h-[500px] md:h-[900px] relative"
						>
						<div className="w-full flex  justify-center pt-5 md:pt-12 ">
						<div
								data-aos="fade-right"
								className=" bg-gray-800 w-[320px] h-[150px] md:h-[270px] md:p-12 p-4 md:w-[700px] md:px-20 rounded-3xl bg-opacity-70 backdrop-blur-3xl"
							>
									<Toaster
										position="top-center"
										reverseOrder={false}
									/>
									<Link to="/shop/product/66ab97d42c63f54b95a50dc1">
										<div
												className="md:text-4xl text-xl cursor-pointer font-bold text-center font-syncopate"
											title="View details"
										>
											Mercedes-Benz
											<p className=" md:text-2xl">
												Maybach 2022
											</p>
										</div>
									</Link>
									<div 	className="md:text-2xl text-md text-center font-poppins">
										$ 679,867
									</div>
									<div className="flex justify-center gap-5 pt-2 md:pt-12">
										<Link to="/shop/payment/66ab97d42c63f54b95a50dc1">
											<button
												className=" opacity-80 backdrop-blur-xl
							detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-40 lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-poppins text-xs md:text-base rounded-3xl text-center font-bold
										before:ease relative h-8 w-24 overflow-hidden border-black border shadow-xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-black hover:before:-translate-x-40
							"
											>
												Buy Now
											</button>
										</Link>

										<button
											className=" opacity-80 backdrop-blur-xl
							detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-56 lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white font-poppins text-xs md:text-base rounded-3xl text-center font-bold
										before:ease relative h-8 w-28 overflow-hidden border-black border shadow-xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-black hover:before:-translate-x-[230px]
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
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Car2popular;
