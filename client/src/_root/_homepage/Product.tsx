import {
	carnb1,
	car2,
	car4,
	logo1,
	logo236,
	car5,
	car6,
	car3,
	acc,
	aa,
	carremove6,
	ditme,
	logomer,
	logoroi,
	carremove,
	logoaudi,
} from "../../assets";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const Product = () => {
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
		<div className="bg-primary">
			<div
				style={{ backgroundImage: `url(${aa})` }}
				className="bg-cover bg-center h-24 sm:h-48 relative object-cover"
			>
				<div className="flex justify-center absolute inset-0">
					<h1 className="relative text-white font-extrabold md:text-5xl xs:text-3xl sm:text-4xl text-2xl animate-pulse justify-center items-center flex transition-colors font-syncopate duration-500  select-none">
						POPULAR PRODUCT
					</h1>
				</div>
			</div>

			{/*--------------Card-------------------------------------*/}
			<div className="contrainer pt-20 md:pt-12 ">
				<div className="relative Product grid grid-cols-1 md:grid-cols-[2fr]  xl:grid-cols-[2fr_1fr_1fr] gap-4 md:p-9 mx-5 md:mx-14 cursor-pointer -mb-24 ">
					{/*--------------Card1-------------------------------------*/}
					<Link to="/Mercedes-AMG-CLS">
						<div
							style={{ backgroundImage: `url(${acc})` }}
							data-aos="zoom-out"
							className="card group bg-cover bg-center xl:col-span-1 col-span-2 bg-white rounded-3xl p-9 relative bottom-7 transition-all ease-in-out duration-300 hover:bg-gray-500 "
						>
							<div className="car w-full flex justify-center sm:justify-end">
								<img
									src={carnb1}
									alt=""
									className="object-cover w-[450px] left-0 md:left-12 relative transition-transform duration-500 ease-out group-hover:rotate-3 group-hover:-translate-x-1 mx:group-hover:scale-150 group-hover:scale-110 
									scale-90 sm:group-hover:-translate-x-10 "
									style={{ top: "17px" }}
								/>
							</div>

							<div className="hidden sm:block">
								<div className="logo_Car w-[150px] h-auto flex flex-col items-start opacity-100 group-hover:opacity-0 transition ease-in-out duration-500 absolute bottom-36 left-20  p-2">
									<img src={logomer} alt="" />
								</div>
								<div className="Product_text opacity-100 text-white  font-bold text-xl group-hover:opacity-0 transition ease-in-out duration-500 absolute bottom-24 left-5 font-syncopate">
									<h2>Mercedes AMG CLS</h2>
									<p className="text-center">$ 183 600</p>
								</div>
								<div className="opacity-0 text-white text-sm group-hover:opacity-100 transition ease-in-out duration-300 absolute bottom-24 left-12">
									You want to sense more, see more,
									<br />
									perform more, and above all, you can’t{" "}
									<br />
									let go any more, because it won’t let <br />
									go of you. Whatever you plan, <br />
									you want to experience more. Your <br />
									destination:the Mercedes-AMG CLS 53 <br />
									4MATIC+.
								</div>
							</div>
						</div>
					</Link>

					{/*--------------Card2-------------------------------------*/}
					<Link to="/Mercedes-Benz-Maybach-2022">
						<div
							style={{ backgroundImage: `url(${acc})` }}
							data-aos="fade-left"
							className="card group hidden bg-cover bg-center xl:block bg-white rounded-3xl p-6 w-full h-full group relative bottom-7 items-center justify-center "
						>
							<div className="car -mt-0 w-[350px] h-[200px] justify-center items-center flex">
								<img
									src={car2}
									alt=""
									className="w-[500px] h-auto object-cover rounded-lg relative group-hover:scale-110 scale-100 transition-all ease-in-out duration-300 "
									style={{ top: "40px" }}
								/>
								<div className="overlay absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl"></div>
							</div>

							<div className="content absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-12">
								<div className="logo_Car w-[150px] h-auto ">
									<img src={logomer} alt="" />
								</div>
								<div className="Product_text font-bold text-white text-xl">
									<h2 className="font-syncopate text-center">
										Mercedes-Benz <br /> Maybach 2022
									</h2>
									<p className="text-center">$ 679 867</p>
								</div>
							</div>
						</div>
					</Link>

					{/*--------------Card3-------------------------------------*/}
					<Link to="/Rolls-Royce-Ghost-2021">
						<div
							style={{ backgroundImage: `url(${acc})` }}
							data-aos="zoom-out"
							className="card group bg-cover bg-center hidden xl:block bg-white rounded-3xl p-0 w-full h-full group relative bottom-7"
						>
							<div className="car -mt-0 w-[350px] h-[200px]">
								<img
									src={car3}
									alt=""
									className="w-[500px] h-auto left-10 object-cover rounded-lg relative group-hover:scale-110 scale-100 transition-all ease-in-out duration-300"
									style={{ top: "75px" }}
								/>
								<div className="overlay absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl"></div>
							</div>
							<div className="content absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="content absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-12">
									<div className="logo_Car w-[150px] h-auto ">
										<img src={logoroi} alt="" />
									</div>
									<div className="Product_text font-bold text-white text-xl">
										<h2 className="font-syncopate text-center">
											Rolls Royce Ghost <br /> 2021
										</h2>
										<p className="text-center">
											$ 1,65 million
										</p>
									</div>
								</div>
							</div>
						</div>
					</Link>
				</div>
				{/*--------------hàng 2-------------------------------------*/}
				<div className="relative  Product grid grid-cols-1 md:grid-cols-2 sm:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_2fr] mt-20 gap-4 md:p-9 mx-5 md:mx-14 cursor-pointer xl:mt-12 xs:py-20 xs:mt-1">
					{/*--------------Card4-------------------------------------*/}
					<Link to="/Audi-R8-coupe-2022">
						<div
							style={{ backgroundImage: `url(${acc})` }}
							data-aos="fade-up"
							className="card group bg-cover bg-center bg-white rounded-3xl p-9 w-full h-full group relative bottom-7"
						>
							<div className="car -mt-0 nd:w-[350px] h-auto justify-center items-center flex">
								<img
									src={carremove}
									alt=""
									className="w-[500px] h-auto object-cover rounded-lg relative group-hover:scale-110 scale-100 transition-all ease-in-out duration-300"
									style={{ top: "10px" }}
								/>
								<div className="overlay absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl"></div>
							</div>
							<div className="content absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-12">
								<div className="logo_Car w-[100px] sm:w-[150px] h-auto ">
									<img src={logoaudi} alt="" />
								</div>
								<div className="Product_text font-bold text-white sm:text-xl">
									<h2 className="font-syncopate">
										Audi R8 Coupe 2022
									</h2>
									<p className="text-center">$ 213 500</p>
								</div>
							</div>
						</div>
					</Link>
					{/*--------------Card5-------------------------------------*/}
					<Link to="/Roll-Royce-Phantom">
						<div
							style={{ backgroundImage: `url(${acc})` }}
							data-aos="fade-up"
							className="card group bg-cover bg-center bg-white rounded-3xl p-9 w-full h-full group relative bottom-7"
						>
							<div className="car -mt-0 xl:w-[350px] h-auto justify-center items-center flex">
								<img
									src={car6}
									alt=""
									className="w-[500px] h-auto object-cover rounded-lg relative group-hover:scale-110 scale-100 transition-all ease-in-out duration-300"
									style={{ top: "25px" }}
								/>
								<div className="overlay absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl"></div>
							</div>
							<div className="content absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="content absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 dm:bottom-12">
									<div className="logo_Car w-[100px] sm:w-[150px] h-auto ">
										<img src={logoroi} alt="" />
									</div>
									<div className="Product_text font-bold text-white sm:text-xl">
										<h2 className="font-syncopate  text-center">
											Roll Royce Phantom <br />
											Extended Series II
										</h2>
										<p className="text-center">$ 638 000</p>
									</div>
								</div>
							</div>
						</div>
					</Link>
					{/*--------------Card6-------------------------------------*/}
					<Link to="/Audi-e-tron-GT-2024">
					<div
						style={{ backgroundImage: `url(${acc})` }}
						data-aos="fade-up"
						className="card hidden xl:block bg-cover bg-center group xl:col-span-1 col-span-2 bg-white rounded-3xl p-9 relative bottom-7 transition-all ease-in-out duration-300 hover:bg-gray-500"
					>
						<div className="car w-full flex justify-center sm:justify-end">
							<img
								src={carremove6}
								alt=""
								className="object-cover w-[450px] left-0 md:left-10 relative transition-transform duration-500 ease-out group-hover:rotate-3 group-hover:-translate-x-1 mx:group-hover:scale-150 group-hover:scale-110 
									scale-90 sm:group-hover:-translate-x-10 "
								style={{ top: "-1px" }}
							/>
						</div>

						<div className="hidden sm:block">
							<div className="logo_Car w-[150px] h-auto flex flex-col items-start opacity-100 group-hover:opacity-0 transition ease-in-out duration-500 absolute bottom-36 left-20  p-2">
								<img src={logoaudi} alt="" />
							</div>
							<div className="Product_text opacity-100 text-white font-bold text-xl group-hover:opacity-0 transition ease-in-out duration-500 absolute bottom-20 left-5 ">
								<h2 className="font-syncopate">
									Audi e-tron GT 2024

								</h2>
								<p className="text-center">$ 106 500</p>
							</div>
							<div className="opacity-0 text-white text-sm group-hover:opacity-100 transition ease-in-out duration-300 absolute bottom-24 left-12">
							The 2024 Audi e-tron GT is a luxury electric <br /> sedan that combines stunning <br /> design with impressive performance. <br /> It features a sleek, aerodynamic exterior, <br /> a high-quality interior with advanced <br /> technology, and a powerful electric <br /> powertrain that delivers up <br /> to 522 horsepower in the RS model. 
							</div>
						</div>
					</div>
					</Link>
				</div>
				
				{/*--------------banner-------------------------------------*/}

				{/*}
				<div data-aos="slide-up" className="w-screen bg-white ">
					<div
						style={{ backgroundImage: `url(${bannn})` }}
						className=" bg-cover bg-center h-24 sm:h-48 relative object-cover"
					></div>
				</div>
                */}
				<div
					data-aos="slide-up"
					style={{ backgroundImage: `url(${ditme})` }}
					className=" bg-cover bg-center h-24 sm:h-48 relative object-cover"
				>
					<div className="flex justify-center absolute inset-0">
						<h1 className="relative text-white font-extrabold md:text-6xl animate-pulse sm:text-4xl xs:text-3xl text-xl justify-center items-center flex text-center transition-colors duration-500 font-syncopate select-none uppercase">
						Upcoming product
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Product;