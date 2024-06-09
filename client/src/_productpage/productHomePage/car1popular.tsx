import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import {
	mer1,
	mer2,
	mer3,
	mer4,
	mer5,
	mer6,
	mer7,
	mer8,
	mer9,
	mer10,
	mer11,
	mer12,
	sky,
	logomer,
	kiaposter,
	banner1,
	VideoCar1Popular,
} from "../../assets";
import NavbarSmall from "../navbarSmall/NavbarSmall";
import { Button } from "@/components/ui/button";
const car1popular = () => {
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
			mirror: false,
			anchorPlacement: "top-center",
		});
	}, []);
	const [selectedImage, setSelectedImage] = useState(mer12);

	const handleThumbnailClick = (image) => {
		setSelectedImage(image);
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<div style={{ backgroundImage: `url(${sky})` }} className="min-h">
				<div
					id="Home"
					data-aos="fade"
					className="bg-cover bg-center relative w-full  min-h-[700px] md:min-h-[800px] xl:min-h-[1000px]"
				>
					<video
						autoPlay
						muted
						loop
						playsInline
						className="w-full h-auto"
					>
						<source src={VideoCar1Popular} />
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
								data-aos="zoom-in"
								className={`bg-gray-900 bg-opacity-75 rounded-2xl font-thin absolute text-white top-24 transform text-center shadow-xl
           	 ss:w-[550px] w-[200px] p-2 md:p-5 
            transition-opacity duration-1000 opacity-0 ${
				isVisible ? "opacity-100" : ""
			}`}
							>
								<h1 className="text-xs ss:text-3xl lg:text-4xl mb-1 tracking-widest font-bold animate-pulse duration-1000 ease-in-out transition-all">
									MERCEDES-AMG
								</h1>
								<h2 className="text-xs ss:text-2xl lg:text-3xl font-thin animate-pulse duration-1000 ease-in-out transition-all">
									CLS 53 4MATIC+ <br />
									<span className="font-bold text-red-100 ">26 000 $</span>
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
									<span className="font-bold">4.5s</span>{" "}
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
										further. You want to sense more, perform
										more, and above all, you can’t let go
										any more, because it won’t let go of
										you.
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
					style={{ backgroundImage: `url(${sky})` }}
					className=" rounded-bl-3xl bg-center w-full min-h-screen relative object-cover justify-center items-center flex -top-96 md:top-0"
				>
					<div
						className="absolute h-full"
						style={{
							backgroundImage: `url(${sky})`,
						}}
					>
						<div className="flex justify-center items-center">
							<div
								data-aos="zoom-in-left"
								className="text-white relative font-thin text-xl p-5 ss:p-16 top-0 sm:text-5xl animate-pulse duration-1000 ease-in-out transition-all"
							>
								MERCEDES
							</div>
							<div
								data-aos="zoom-in-right"
								style={{ backgroundImage: `url(${logomer})` }}
								className="w-20 bg-center h-28 bg-cover sm:h-36 animate-pulse duration-1000 ease-in-out transition-all"
							>
								{" "}
							</div>
						</div>
						<div
							data-aos="zoom-in"
							className="font-thin text-white md:text-2xl text-sm md:p-64 ss:p-14  p-12 pb-64 pt-44 text-center"
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
							data-aos="zoom-in"
							style={{ backgroundImage: `url(${mer1})` }}
							className="bg-cover bg-center w-full relative rounded-full rounded-tl-none rounded-br-none pt-[900px] "
						></div>
					</div>
				</div>
				{/* ------------tiêu đề------------------ */}
				<div className="relative xl:pt-[1400px] lg:pt-[1400px] md:pt-[1400px] xs:pt-[500px] pt-[670px] ss:py-[100px]">
					<div
						data-aos="flip-left"
						className="font-thin text-blue-200 relative text-md ss:text-2xl  md:text-6xl sm:text-4xl text-center pb-[100px] "
					>
						SIGNIFICANTLY SHARPER - LIKE YOUR EYES
					</div>
					{/* ------------ảnh 1------------------ */}
					<div className="pt-0 md:pt-[20px] flex">
						<div
							data-aos="slide-right"
							className="font-thin text-white text-xs ss:text-sm sm:text-xl xl:text-2xl md:p-24 p-2 xs:p-12"
						>
							In addition to the newly launched upgraded version
							of the CLS-Class, Mercedes-Benz also offers
							customers the high-performance Mercedes-AMG CLS 53
							4Matic+ version of this car model.
						</div>
						<div className="justify-end flex">
							<div
								data-aos="slide-left"
								className="relative bg-cover w-[200px] h-[300px] ss:w-[400px] ss:h-[500px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[600px] xl:w-[1000px] xl:h-[900px] rounded-bl-full"
								style={{ backgroundImage: `url(${mer2})` }}
							></div>
						</div>
					</div>
					{/* ------------ảnh 2------------------ */}
					<div className="pt-[100px] flex">
						<div className="justify-start flex">
							<div
								data-aos="slide-right"
								className="relative bg-cover w-[200px] h-[300px] ss:w-[400px] ss:h-[500px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[500px] xl:w-[1000px] xl:h-[900px] rounded-tr-full"
								style={{ backgroundImage: `url(${mer3})` }}
							></div>
						</div>
						<div
							data-aos="slide-left"
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
				<div className="">
					<div
						id="Model"
						data-aos="zoom-out"
						className="font-thin text-blue-200 relative text-3xl ss:text-2xl  md:text-6xl sm:text-4xl text-center pt-[200px]"
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
				</div>
				{/*----------------------- banner -------------------------*/}
				<div className="flex">
					<div
						id="Behind"
						data-aos="slide-left"
						className="relative bg-cover bg-center w-[200px] h-[150px] xs:w-[300px] xs:h-[200px] ss:w-[500px] ss:h-[300px] sm:w-[600px] sm:h-[400px] md:w-[800px] md:h-[500px] xl:w-[1000px] xl:h-[500px] rounded-tr-full"
						style={{ backgroundImage: `url(${kiaposter})` }}
					></div>
					<div
						data-aos="slide-right"
						className="font-thin text-blue-200 relative text-xl ss:text-3xl sm:text-5xl xl:text-6xl justify-center items-center flex left-10 ss:left-12 sm:left-7 md:left-32 xs:left-20"
					>
						CAR BEHIND
					</div>
				</div>
				{/* ---------------CAR behind--------------------------------- */}
				<div data-aos="slide-up" className="pt-12">
					<div className="flex pt-20 row-span-2">
						{/*  các thumbnail */}
						<div className="md:w-[300px] w-[150px] p-4 flex max-h-[calc(900vh-1000px)]">
							<div className="flex flex-col space-y-4 flex-grow ">
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
												className="w-full object-cover hover:scale-110 transition-all ease-in-out duration-400 rounded-xl"
											/>
										</div>
									)
								)}
							</div>
						</div>

						{/* ảnh lớn */}
						<div className="w-full relative pl-2 justify-end items-end flex">
							<div
								className="bg-cover bg-center w-full h-full object-cove rounded-3xl"
								style={{
									backgroundImage: `url(${selectedImage})`,
								}}
							></div>
						</div>
					</div>
				</div>

				{/* -------------------------banner --------------------------*/}

				<div className="pt-[300px] flex">
					<div
						data-aos="slide-right"
						className="font-thin text-white text-xs ss:text-sm sm:text-xl xl:text-2xl md:p-24 p-2 xs:p-12"
					>
						Two AMG Night Package and Night Package II equipment
						packages are standard equipment. Finally, the car is
						equipped with welcome lights with a three-dimensional
						AMG logo displayed on the ground when opening the door.
					</div>
					<div className="justify-end flex">
						<div
							data-aos="slide-left"
							className="relative bg-cover w-[200px] h-[300px] ss:w-[400px] ss:h-[500px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[600px] xl:w-[1000px] xl:h-[900px] rounded-bl-full"
							style={{ backgroundImage: `url(${banner1})` }}
						></div>
					</div>
				</div>
				<div className="pt-[1px] flex">
					<div className="justify-start flex">
						<div
							data-aos="slide-left"
							className="relative bg-cover w-[200px] h-[300px] ss:w-[400px] ss:h-[500px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[500px] xl:w-[1000px] xl:h-[900px] rounded-br-full bg-center"
							style={{ backgroundImage: `url(${mer10})` }}
						></div>
					</div>
					<div
						data-aos="slide-right"
						className="font-thin text-white text-xs ss:text-sm sm:text-xl xl:text-2xl md:p-32 p-2 xs:p-12"
					>
						Inside, the AMG Performance upgrade package will provide
						the interior with a steering wheel wrapped in Nappa
						leather or Dinamica fabric material. The interior is
						also covered with carbon fiber.
					</div>
				</div>

				{/* --------------------------conclusion --------------*/}
				<div id="Button_Buy" className="pb-24 pt-40 relative">
        <div
          data-aos="zoom-out"
          className={`font-thin text-white text-center text-xl md:text-3xl transition-opacity duration-1000 opacity-0 ${
            isVisible ? "opacity-100" : ""
          }`}
        >
          <span className="font-bold">The Mercedes-AMG CLS 53 4Matic+</span>{" "}
          is a great choice for those looking for a luxurious, <br />
          powerful sports car equipped with many advanced technologies.
		<br />
		<br />

		<span>For only <span className="text-red-100 font-bold">26 000 $</span> you can own this car</span>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center items-center gap-9">
          <Button
            variant="outline"
            className="w-32 h-11 md:w-60 md:h-20 px-6 py-3 bg-transparent border border-white text-white hover:bg-primary hover:text-white transition-colors duration-300 hover:scale-110"
          >
            Add to Cart
          </Button>

          <Button
            variant="outline"
            className="w-32 h-11 md:w-60 md:h-20 px-6 py-3 bg-transparent border border-white text-white hover:bg-primary hover:text-white transition-colors duration-300 hover:scale-110"
          >
            Buy Car
          </Button>
        </div>
      </div>
			</div>
		</div>
	);
};

export default car1popular;
