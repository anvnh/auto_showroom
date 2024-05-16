import {
	car1,
	car2,
	car4,
	logo1,
	logo236,
	car5,
	car6,
	car3,
    acc,
	aa,bannn,ditme
} from "../../assets";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

const Product = () => {
	return (
		<div className="bg-primary">
			<div style={{ backgroundImage: `url(${aa})` }} className="bg-cover bg-center h-24 sm:h-48 relative object-cover">
				<div className="flex justify-center pt-16 absolute inset-0">
					<h1 className="relative text-white font-extrabold md:text-5xl xs:text-4xl text-2xl animate-pulse bottom-9 sm:bottom-1 md:pb-0 transition-colors duration-500 ">
						POPULAR PRODUCT
					</h1>
				</div>
			</div>

			<div className="hidden md:block pb-5">
				<div className="flex justify-end h-auto mx-24 pb-3 pt-4 texe-xl text-5xl md:text-5xl xs:text-4xl">
					<div className="relative group flex text-white text-sm xs:text-xl md:text-2xl -bottom-10">
						<Button
							className="text-white text-2xl group-hover:text-blue-400 mb-5"
						>
							{" "}
							See all{" "}
						</Button>
						<FaArrowRight className="text-white text-xl mt-3 group-hover:text-blue-400 duration-200" />
					</div>
				</div>
			</div>

			{/*--------------Card-------------------------------------*/}
			<div className="contrainer pt-20 md:pt-1 ">
				<div className="relative Product grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr] gap-4 md:p-9 mx-5 md:mx-14 cursor-pointer -mb-14 ">
					{/*--------------Card1-------------------------------------*/}
					<div style={{ backgroundImage: `url(${acc})` }} className="card group bg-cover bg-center xl:col-span-1 col-span-2 bg-white rounded-3xl p-9 relative bottom-7 transition-all ease-in-out duration-300 hover:bg-gray-500">
				
						<div className="car w-full flex justify-center sm:justify-end">
							<img
								src={car1}
								alt=""
								className="object-cover rounded-lg relative transition-transform duration-500 ease-out group-hover:rotate-3 group-hover:-translate-x-1 mx:group-hover:scale-150 group-hover:scale-125 sm:group-hover:-translate-x-14 "
								style={{ top: "-10px" }}
							/>
						</div>
						<div className="hidden sm:block">
							<div className="logo_Car flex flex-col items-start opacity-100 group-hover:opacity-0 transition ease-in-out duration-500 absolute bottom-36 left-24  p-2">
								<img src={logo1} alt="" />
							</div>
							<div className="Product_text opacity-100 text-white  font-bold text-xl group-hover:opacity-0 transition ease-in-out duration-5000 absolute bottom-24 left-12">
								<h2>Hyundai Sonata 2022</h2>
								<p className="text-center">$ 26 000</p>
							</div>
							<div className="opacity-0 text-white text-sm group-hover:opacity-100 transition ease-in-out duration-300 absolute bottom-24 left-12">
								Lorem ipsum dolor sit ame secte <br />{" "}
								adipisicing elit. Cumque facilis <br /> earum,
								facere deleniti a, um dolor <br /> sit, amet
								consectetur adg elit <br /> Quisquam eum quasi
								sequi fuga{" "}
							</div>
						</div>
					</div>

					{/*--------------Card2-------------------------------------*/}
					<div style={{ backgroundImage: `url(${acc})` }} className="card group hidden bg-cover bg-center xl:block bg-white rounded-3xl p-9 w-full h-full group relative bottom-7">
						<div className="car -mt-0 w-full h-full">
							<img
								src={car2}
								alt=""
								className="w-full h-full object-cover rounded-lg relative group-hover:scale-125 transition-all ease-in-out duration-300"
								style={{ top: "-20px" }}
							/>
							<div className="overlay absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl"></div>
						</div>
						<div className="content absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="logo_Car">
								<img src={logo236} alt="" />
							</div>
							<div className="Product_text font-bold text-white text-xl">
								<h2>Hyundai Sonata 2022</h2>
								<p className="text-center">$ 26 000</p>
							</div>
						</div>
					</div>

					{/*--------------Card3-------------------------------------*/}
					<div style={{ backgroundImage: `url(${acc})` }} className="card group bg-cover bg-center hidden xl:block bg-white rounded-3xl p-9 w-full h-full group relative bottom-7">
						<div className="car -mt-0 w-full h-full">
							<img
								src={car3}
								alt=""
								className="w-full h-full object-cover rounded-lg relative group-hover:scale-125 transition-all ease-in-out duration-300"
								style={{ top: "-20px" }}
							/>
							<div className="overlay absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl"></div>
						</div>
						<div className="content absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="logo_Car">
								<img src={logo236} alt="" />
							</div>
							<div className="Product_text font-bold text-white text-xl">
								<h2>Hyundai Sonata 2022</h2>
								<p className="text-center">$ 26 000</p>
							</div>
						</div>
					</div>
				</div>
				{/*--------------hàng 2-------------------------------------*/}
				<div  className="relative Product grid grid-cols-1 md:grid-cols-2 sm:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_2fr] mt-20 gap-4 md:p-9 mx-5 md:mx-14 cursor-pointer xl:mt-2 xs:py-20 xs:mt-1 ">
					{/*--------------Card4-------------------------------------*/}
					<div style={{ backgroundImage: `url(${acc})` }} className="card group bg-cover bg-center bg-white rounded-3xl p-9 w-full h-full group relative bottom-7">
						<div className="car -mt-0 w-full h-full">
							<img
								src={car4}
								alt=""
								className="w-full h-full object-cover rounded-lg relative group-hover:scale-125 transition-all ease-in-out duration-300"
								style={{ top: "-20px" }}
							/>
							<div className="overlay absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl"></div>
						</div>
						<div className="content absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="logo_Car">
								<img src={logo236} alt="" />
							</div>
							<div className="Product_text font-bold text-white text-xl">
								<h2>Hyundai Sonata 2022</h2>
								<p className="text-center">$ 26 000</p>
							</div>
						</div>
					</div>
					{/*--------------Card5-------------------------------------*/}
					<div style={{ backgroundImage: `url(${acc})` }} className="card group bg-cover bg-center bg-white rounded-3xl p-9 w-full h-full group relative bottom-7">
						<div className="car -mt-0 w-full h-full">
							<img
								src={car6}
								alt=""
								className="w-full h-full object-cover rounded-lg relative group-hover:scale-125 transition-all ease-in-out duration-300"
								style={{ top: "-20px" }}
							/>
							<div className="overlay absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl"></div>
						</div>
						<div className="content absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="logo_Car">
								<img src={logo236} alt="" />
							</div>
							<div className="Product_text font-bold text-white text-xl">
								<h2>Hyundai Sonata 2022</h2>
								<p className="text-center">$ 26 000</p>
							</div>
						</div>
					</div>

					{/*--------------Card6-------------------------------------*/}
					<div style={{ backgroundImage: `url(${acc})` }} className="card hidden md:block bg-cover bg-center group xl:col-span-1 col-span-2 bg-white rounded-3xl p-9 relative bottom-7 transition-all ease-in-out duration-300 hover:bg-gray-500">
						<div className="car w-full flex justify-center sm:justify-end">
							<img
								src={car5}
								alt=""
								className="object-cover rounded-lg relative transition-transform duration-500 ease-out group-hover:rotate-3 group-hover:-translate-x-1 mx:group-hover:scale-150 group-hover:scale-125 sm:group-hover:-translate-x-14 "
								style={{ top: "-10px" }}
							/>
						</div>
						<div className="hidden md:block">
							<div className="logo_Car flex flex-col items-start opacity-100 group-hover:opacity-0 transition ease-in-out duration-500 absolute bottom-36 left-24 p-2">
								<img src={logo1} alt="" />
							</div>
							<div className="Product_text opacity-100 text-white font-bold text-xl group-hover:opacity-0 transition ease-in-out duration-5000 absolute bottom-24 left-12">
								<h2>Hyundai Sonata 2022</h2>
								<p className="text-center">$ 26 000</p>
							</div>
							<div className="opacity-0 text-white text-sm group-hover:opacity-100 transition ease-in-out duration-300 absolute bottom-24 left-12">
								Lorem ipsum dolor sit ame secte <br />{" "}
								adipisicing elit. Cumque facilis <br /> earum,
								facere deleniti a, um dolor <br /> sit, amet
								consectetur adg elit <br /> Quisquam eum quasi
								sequi fuga{" "}
							</div>
						</div>
					</div>
				</div>
{/*--------------banner-------------------------------------*/}

				<div className="w-screen bg-white">
					<div style={{ backgroundImage: `url(${bannn})` }} className=" bg-cover bg-center h-24 sm:h-48 relative object-cover"></div>
				</div>
				<div style={{ backgroundImage: `url(${ditme})` }} className=" bg-cover bg-center h-24 sm:h-48 relative object-cover">
					<div className="flex justify-center pt-16 absolute inset-0">
						<h1 className="relative text-white font-extrabold md:text-6xl animate-pulse xs:text-4xl text-2xl animate-p bottom-9 sm:bottom-1 md:pb-0 transition-colors duration-500 ">
							Discover the new AAP
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Product;
