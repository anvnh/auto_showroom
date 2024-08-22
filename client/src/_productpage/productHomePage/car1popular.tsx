import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import {
	buy,
	mer1,
	mer2,
	mer3,
	mer4,
	mer5,
	mer8,
	mer9,
	mer10,
	mer11,
	mer12,
	sky,
	logomer,
	kiaposter,
	video1
} from "../../assets";
import { Link } from "react-router-dom";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { Mercedes_amg_cls_view } from "@/components/3d";
const Car1popular = () => {
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
	const [selectedImage, setSelectedImage] = useState(mer12);

	const handleThumbnailClick = (image) => {
		setSelectedImage(image);
	};
	const ID = "66ab8c2a2c63f54b95a50d1d";
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
			<div
				//  style={{ backgroundImage: `url(${sky})` }}
				className="min-h bg-black"
			>
				<div
					id="Home"

					className="bg-cover bg-center relative w-full min-h-[900px]  sm:min-h-[1200px] md:min-h-[800px] xl:min-h-[1000px]"
				>
					<video
						autoPlay
						muted
						loop
						playsInline
						className="w-full h-auto relative "
					>
						<source src={video1} type="video/mp4" />
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
								className={`bg-gray-900 bg-opacity-75 rounded-2xl font-thin absolute text-white top-48  transform text-center shadow-xl
           	 ss:w-[550px] w-[200px] p-5 md:p-5 
            transition-opacity duration-1000 opacity-0 font-syncopate ${isVisible ? "opacity-100" : ""
									}`}
							>
								<h1 className="text-xs ss:text-3xl lg:text-4xl mb-1 tracking-widest font-bold animate-pulse duration-1000 ease-in-out transition-all">
									MERCEDES-AMG
								</h1>
								<h2 className="text-xs ss:text-2xl lg:text-3xl font-thin animate-pulse duration-1000 ease-in-out transition-all">
									CLS 53 4MATIC+ <br />
									<span className="font-bold text-red-100 ">
										183 600 $
									</span>
								</h2>
							</div>
						)}
					</div>
					<div className="hidden md:block">
						<div className="justify-center items-center flex ">
							{isVisible && (
								<div className="bg-gray-900 grid ss:grid-cols-2 gap-2 grid-cols-1 bg-opacity-75 rounded-2xl font-bold absolute text-white -bottom-1 transform -translate-y-1/2 shadow-xl xl:w-[1200px] md:w-[1000px] sm:w-[700px] ss:w-[500px] w-[300px] p-7">
									<div className="font-thin xl:text-2xl md:text-xl sm:text-sm text-start md:pl-40 ss:pl-1 pl-20 animate-pulse duration-1000 ease-in-out transition-all  ">
										<span className="font-bold">520</span>{" "}
										<span className="text-lg font-light">
											Nm
										</span>{" "}
										<br />
										<span className="font-bold">
											4.5s
										</span>{" "}
										<span className="text-lg font-light">
											0-100km/h
										</span>
										<br />{" "}
										<span className="font-bold"> 320</span>{" "}
										<span className="text-lg font-light">
											KW
										</span>
									</div>
									<div className="hidden ss:block">
										<div className="font-thin xl:text-2xl md:text-xl sm:text-sm text-xs pr-3 animate-pulse duration-1000 ease-in-out transition-all">
											<span className="font-bold">
												There is always a destination.
											</span>{" "}
											Other people think ahead. You think
											further. You want to sense more,
											perform more, and above all, you
											can’t let go any more, because it
											won’t let go of you.
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
						className=" h-full"
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
							></div>
						</div>
						<div
							data-aos="fade-down"
							className="font-thin text-white md:text-2xl text-sm md:p-64 ss:p-14  p-12 pb-32 pt-12 text-center"
						>
							<span className="font-bold ">
								Mercedes-AMG CLS 53 4Matic+
							</span>{" "}
							is equipped with a turbocharged 3.0-liter I6 engine,
							generating maximum power of 435 horsepower and
							maximum torque of 520 Nm. This power is enhanced
							with a 48V hybrid drive system, providing an
							additional 250 Nm of torque and 16 kW of power when
							the driver needs it. All of this power will be
							transmitted to all four wheels through the 9-speed
							Speedshift TCT 9G dual-clutch transmission and
							4Matic+ drive system, thanks to which the car can
							accelerate to 100 km/h in 4.5 seconds. and top speed
							is limited to 250 km/h.
						</div>
						<div
							data-aos="fade-in"
							style={{ backgroundImage: `url(${mer1})` }}
							className="bg-cover bg-center h-[400px] md:w-full relative rounded-full rounded-tl-none rounded-br-none md:pt-[900px] "
						></div>
					</div>
				</div>
				{/* ------------tiêu đề------------------ */}
				<div className="relative pt-32 md:pt-64 pb-32 ">
					<div
						data-aos="fade-up"
						className="font-thin text-blue-200 relative text-md ss:text-2xl  md:text-6xl sm:text-4xl md:px-0 px-16 text-center font-syncopate"
					>
						SIGNIFICANTLY SHARPER, LIKE YOUR EYES
					</div>
					{/* ------------ảnh 1------------------ */}
					<div className="pt-24 md:pt-[220px] flex">
						<div
							data-aos="fade-right"
							className="font-thin text-white text-xs ss:text-sm sm:text-xl xl:text-2xl md:p-24 p-2 xs:p-12"
						>
							In addition to the newly launched upgraded version
							of the CLS-Class, Mercedes-Benz also offers
							customers the high-performance Mercedes-AMG CLS 53
							4Matic+ version of this car model.
						</div>
						<div className="justify-end flex">
							<div
								data-aos="fade-left"
								className="relative bg-cover w-[200px] h-[300px] ss:w-[400px] ss:h-[500px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[600px] xl:w-[1000px] xl:h-[900px] rounded-bl-full"
								style={{ backgroundImage: `url(${mer2})` }}
							></div>
						</div>
					</div>
					{/* ------------ảnh 2------------------ */}
					<div className="pt-[100px] flex">
						<div className="justify-start flex">
							<div
								data-aos="fade-right"
								className="relative bg-cover w-[200px] h-[300px] ss:w-[400px] ss:h-[500px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[500px] xl:w-[1000px] xl:h-[900px] rounded-tr-full"
								style={{ backgroundImage: `url(${mer3})` }}
							></div>
						</div>
						<div
							data-aos="fade-left"
							className="font-thin text-white text-xs ss:text-sm sm:text-xl xl:text-2xl md:p-32 p-2 xs:p-12"
						>
							In addition to the newly launched upgraded version
							of the CLS-Class, Mercedes-Benz also offers
							customers the high-performance Mercedes-AMG CLS 53
							4Matic+ version of this car model. Along with that
							is a special limited edition of only 300 vehicles.
						</div>
					</div>
				</div>

				{/* 3D car------------------------------------------- */}
				<div className="w-screen h-screen">
					<Mercedes_amg_cls_view />
				</div>
				{/* <div className="">
					<div
						id="Model"
						data-aos="fade-up"
						className="font-thin text-blue-200 relative text-3xl ss:text-2xl  md:text-6xl sm:text-4xl text-center pb-10 font-syncopate"
					>
						3D MODEL
					</div>
					<div className="sketchfab-embed-wrapper w-[1000x] md:h-[900px] h-[500px] pt-16 md:pt-52">
						{" "}
						<iframe
							className="w-full md:h-[500px] h-[300px] scale-125 md:scale-150"
							title="Mercedes AMG CLS | Quartz Creative"
							frameborder="0"
							allowfullscreen
							mozallowfullscreen="true"
							webkitallowfullscreen="true"
							allow="autoplay; fullscreen; xr-spatial-tracking"
							xr-spatial-tracking
							execution-while-out-of-viewport
							execution-while-not-rendered
							web-share
							src="https://sketchfab.com/models/88b9a904632e42d18254aa6bf5f43344/embed?autospin=1&autostart=1&preload=1&ui_watermark_link=0&ui_watermark=0"
						>
							{" "}
						</iframe>{" "}
					</div>
				</div> */}
				{/*----------------------- banner -------------------------*/}
				<div className="flex">
					<div
						id="Behind"
						data-aos="fade-left"
						className="relative bg-cover bg-center w-[200px] h-[150px] xs:w-[300px] xs:h-[200px] ss:w-[500px] ss:h-[300px] sm:w-[600px] sm:h-[400px] md:w-[800px] md:h-[500px] xl:w-[1000px] xl:h-[500px] rounded-tr-full"
						style={{ backgroundImage: `url(${kiaposter})` }}
					></div>
					<div
						data-aos="fade-right"
						className="font-thin text-blue-200 relative text-xl ss:text-3xl sm:text-5xl xl:text-6xl justify-center items-center flex md:pl-40 font-syncopate"
					>
						CAR BEHIND
					</div>
				</div>
				{/* ---------------CAR behind--------------------------------- */}
				<div className="md:pt-12">
					<div className="md:flex grid h-full grid-rows-2 pt-20 px-4 md:px-16">
						{/*  các thumbnail */}
						<div
							data-aos="fade-right"
							className="md:w-[300px] w-full p-4 flex h-full "
						>
							<div className="block md:hidden">
								<div className="flex gap-2 sm:gap-5  md:flex-col md:space-y-4 flex-grow ">
									{[mer11, mer12, mer8, mer4, mer5].map(
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
									{[mer11, mer12, mer8, mer4, mer5].map(
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
						<div
							data-aos="fade-left"
							className="w-full relative md:pl-2  flex"
						>
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
						Two AMG Night Package and Night Package II equipment
						packages are standard equipment. Finally, the car is
						equipped with welcome lights with a three-dimensional
						AMG logo displayed on the ground when opening the door.
					</div>
					<div className="justify-end flex">
						<div
							data-aos="fade-left"
							className="relative bg-cover w-[200px] h-[300px] ss:w-[400px] ss:h-[500px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[600px] xl:w-[1000px] xl:h-[900px] rounded-bl-full"
							style={{ backgroundImage: `url(${mer9})` }}
						></div>
					</div>
				</div>
				<div className="pt-[70px] flex">
					<div className="justify-start flex">
						<div
							data-aos="fade-left"
							className="relative bg-cover w-[200px] h-[300px] ss:w-[400px] ss:h-[500px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[500px] xl:w-[1000px] xl:h-[900px] rounded-br-full bg-center"
							style={{ backgroundImage: `url(${mer10})` }}
						></div>
					</div>
					<div
						data-aos="fade-right"
						className="font-thin text-white text-xs ss:text-sm sm:text-xl xl:text-2xl md:p-32 p-2 xs:p-12"
					>
						Inside, the AMG Performance upgrade package will provide
						the interior with a steering wheel wrapped in Nappa
						leather or Dinamica fabric material. The interior is
						also covered with carbon fiber.
					</div>
				</div>

				{/* --------------------------conclusion --------------*/}
				<div className="w-full h-full pt-20 md:pt-40 relative">
					{isLoading && <LoadingSpinner />}
					{!isLoading && !isRefetching && car && (
						<div
							id="Buy"
							data-aos="fade-up"
							style={{ backgroundImage: `url(${buy})` }}
							className="w-screen bg-cover bg-center h-[400px] md:h-[900px] relative"
						>
							<div className="w-full flex  justify-center pt-5 md:pt-20 ">
								<div
									data-aos="fade-right"
									className=" bg-gray-800 w-[320px] h-[150px] md:h-[250px] md:p-12 p-4 md:w-[700px] md:px-20 rounded-3xl bg-opacity-70 backdrop-blur-3xl">
									<Toaster
										position="top-center"
										reverseOrder={false}
									/>
									<Link to="/shop/product/66ab8c2a2c63f54b95a50d1d">
										<div
											data-aos="fade-left"
											data-aos-delay="500"
											className="md:text-4xl cursor-pointer font-bold text-center font-syncopate"
											title="View details"
										>
											MERCEDES-AMG CLS
										</div>
									</Link>
									<div
										data-aos="fade-left"
										data-aos-delay="500"
										className="md:text-2xl text-center font-syncopate">
										$ 183,600
									</div>
									<div className="flex justify-center gap-5 pt-5 md:pt-12">
										<Link to="/shop/payment/66ab8c2a2c63f54b95a50d1d">
											<button
												data-aos="fade-right"
												data-aos-delay="500"
												className=" opacity-80 backdrop-blur-xl
							detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-40 lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold font-syncopate text-xs md:text-base rounded-3xl text-center 
										before:ease relative md:h-12 h-10 w-32 md:w-40 overflow-hidden border-black border shadow-xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-black hover:before:-translate-x-40
							"
											>
												Buy Now
											</button>
										</Link>

										<button
											data-aos="fade-right"
											data-aos-delay="500"
											className=" opacity-80 backdrop-blur-xl
							detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-56 lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold font-syncopate text-xs md:text-base rounded-3xl text-center
										before:ease relative h-10 md:h-12 md:w-40 overflow-hidden border-black border shadow-xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-black hover:before:-translate-x-[230px]
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

export default Car1popular;
