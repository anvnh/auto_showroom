import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { car51, r3, new3 } from "../../assets";

const car5popular2 = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);
	return (
		<div className="bg-black">
			<div>
				{/* mobile------------------- */}
				<div className="block md:hidden">
					<div
						data-aos="fade-down"
						style={{ backgroundImage: `url(${r3})` }}
						className=" bg-cover bg-center h-24 sm:h-48 relative object-cover z-20"
					>
						<div className="flex justify-center pt-10 md:pt-0 inset-0">
							<h1 className="font-syncopate text-white text-[20px] xs:text-[27px] sm:text-[32px] md:text-[40px] xl:text-[50px]">
								Interiors & Technology
							</h1>
						</div>
					</div>
				</div>
				-{/* destop------------------ */}
				<div className="hidden md:block">
					<div
						style={{ backgroundImage: `url(${r3})` }}
						className=" bg-cover bg-center h-24 sm:h-48 relative object-cover z-20"
					>
						<div className="flex justify-center pt-10 md:pt-12 inset-0">
							<h1 className="font-syncopate text-white text-[20px] xs:text-[27px] sm:text-[32px] md:text-[40px] xl:text-[50px]">
								Interiors & Technology
							</h1>
						</div>
					</div>
				</div>
				{/* destop---------- */}
				<div className="relative hidden lg:flex  w-screen h-screen">
					<div className="h-screen w-1/2">
						<img
							src={car51}
							className="lg:h-[400px] lg:w-[500px] mlg:h-screen mlg:w-screen object-cover"
						/>
					</div>
					<div className="z-20 h-screen w-1/2 flex justify-center items-center bg-slate-800 text-white">
						<div className="w-[700px] h-[500px] flex justify-center items-center flex-col  border-purple-500 border-2">
							<h1 className="font-syncopate text-center text-[55px] font-medium uppercase">
								Interiors
							</h1>
							<p className="font-kanit text-center text-xl p-12">
								Rolls-Royce has pulled out all the stops with
								the Ghost. The cabin is a study in pure luxury,
								handcrafted with the finest materials.
							</p>
						</div>
					</div>
				</div>
				<div className="relative hidden lg:flex  w-screen h-screen text-slate-800">
					<div className="h-screen w-1/2 flex justify-center items-center bg-gray-900 text-white">
						<div className="w-[700px] h-[500px] flex justify-center items-center flex-col  border-blue-500 border-2">
							<h1 className="font-syncopate text-center text-[55px] font-medium uppercase">
								Technology
							</h1>
							<p className="font-kanit text-center text-xl p-12">
								The Ghost has a large infotainment touchscreen
								and in-dash navigation that includes
								connectivity to both Apple CarPlay and Android
								Auto.
							</p>
						</div>
					</div>
					<div className="h-screen w-1/2 bg-yellow-200">
						<img
							src={new3}
							className="h-screen w-screen object-cover"
						/>
					</div>
				</div>
				{/* ------------------------mobile--------- */}
				<div className="z-40 w-full h-full flex flex-col lg:hidden">
					<div className="w-screen h-full">
						<img
							data-aos="fade"
							src={car51}
							className="w-screen h-full object-cover"
						/>
					</div>
					<div className="w-screen flex flex-col justify-center items-center h-[300px]  bg-slate-100 text-slate-800 ">
						<h1
							data-aos="fade-left"
							className=" font-syncopate  text-[25px] ss:text-[35px] uppercase "
						>
							Interiors
						</h1>
						<p
							data-aos="fade-right"
							className=" font-kanit  text-center text-[18px] xs:text-[20px] px-[7%] "
						>
							Rolls-Royce has pulled out all the stops with the
							Ghost. The cabin is a study in pure luxury,
							handcrafted with the finest materials.
						</p>
					</div>
				</div>
				<div className="z-50 w-screen h-full flex lg:hidden flex-col ">
					<div className="w-screen h-[600px]">
						<img
							src={new3}
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="w-screen flex flex-col justify-center items-center h-[300px]  bg-slate-100 text-slate-800 ">
						<h1
							data-aos="fade-left"
							className=" font-syncopate  text-[20px] xs:text-[25px] ss:text-[35px]  "
						>
							Technology
						</h1>
						<p
							data-aos="fade-right"
							className=" font-kanit  text-center text-[18px] xs:text-[20px] px-[7%] "
						>
							The Ghost has a large infotainment touchscreen and
							in-dash navigation that includes connectivity to
							both Apple CarPlay and Android Auto.
						</p>
					</div>
				</div>
				<div
					id="Model"
					className=" bg-cover bg-center h-24 sm:h-48 relative object-cover"
				>
					<div className="flex justify-center pt-16 absolute inset-0">
						<h1
							data-aos="fade-left"
							className="relative text-white font-extrabold md:text-6xl animate-pulse xs:text-4xl text-2xl animate-p bottom-9 sm:bottom-1 md:pb-0 transition-colors duration-500 font-syncopate uppercase"
						>
							3D model
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default car5popular2;
