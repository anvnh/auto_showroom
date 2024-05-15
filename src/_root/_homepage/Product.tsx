import {
	car1,
	car2,
	car4,
	logo1,
	logo4,
	logo5,
	logo236,
} from "../../assets";
import {Button} from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
const Product = () => {
    return (
	<div className="bg-primary">
			<div className="flex justify-center mt-4 pt-20 ">
			<h1 className="relative text-white font-extrabold md:text-5xl xs:text-4xl md:pb-0 pb-10">
				POPULAR <span className="text-purple-500">PRODUCT</span>
			</h1>
			</div>
				<div className="hidden md:block pb-5">
				<div className="flex justify-end h-auto mx-24 pb-3 pt-4">
					<div className="relative group flex text-white text-sm xs:text-xl md:text-2xl">
						<Button className="text-white text-2xl group-hover:text-blue-400"> See all </Button>
						<FaArrowRight className="text-white text-xl mt-3 group-hover:text-blue-400 duration-200"/>
					</div>
				</div>
				</div>
			{/*------------- Card-------------------- */}
			<div className="relative Product grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-4 md:p-9 mx-5 md:mx-14 cursor-pointer pb-16">
				<div className="card flex md:col-span-1 col-span-3 w-full h-full bg-white rounded-3xl p-9 max-h-80 group relative bottom-7 transition ease-in-out duration-500 hover:bg-gradient-to-r from-gray-900 to-white">
					<div className="car -mt-6 w-full flex ">
						<img
							src={car1}
							alt=""
							className=" hover:translate-x-20 mx:hover:scale-150 hover:scale-125 object-cover rounded-lg relative transition-transform duration-500 ease-out transitionDelay-100 hover:rotate-3"
							style={{ top: "-30px" }}
						/>
					</div>				
					<div className="hidden xs:block">
					<div className="logo_Car flex flex-col items-start opacity-100 group-hover:opacity-0 transition ease-in-out duration-500 absolute bottom-32 right-20 p-2">
						<img src={logo1} alt="" />
					</div>
					<div className="Product_text opacity-100 text-primary  font-bold text-xl group-hover:opacity-0 transition ease-in-out duration-5000 absolute bottom-20 right-7">
						<h2>Hyundai Sonata 2022</h2>
						<p className="text-center">$ 26 000</p>
					</div>
					<div className="opacity-0 text-primary font-bold text-sm group-hover:opacity-100 transition ease-in-out duration-300 absolute bottom-20 right-2">
						Lorem ipsum dolor sit ame secte <br /> adipisicing elit.
						Cumque facilis <br /> earum, facere deleniti a, um dolor{" "}
						<br /> sit, amet consectetur adg elit <br /> Quisquam
						eum quasi sequi fuga{" "}
					</div>
					</div>
				</div>

				<div className="card hidden md:block bg-white rounded-3xl p-9 w-full h-full group relative bottom-7">
					<div className="car -mt-0 w-full h-full">
						<img
							src={car2}
							alt=""
							className="w-full h-full object-cover rounded-lg relative"
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

				<div className="card hidden md:block bg-white rounded-3xl p-9 max-h-80 group relative bottom-7">
					<div className="car -mt-0">
						<img
							src={car1}
							alt=""
							className="w-full h-full object-cover rounded-lg relative"
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

			{/*------------- Card2------------------------------------------ */}

			<div className="-mt-12">
			<div className="relative Product grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr] gap-4 md:p-9 mx-5 md:mx-14 cursor-pointer">
				<div className="card flex justify-center bg-white rounded-3xl p-9 max-h-80 group relative bottom-7 w-full h-full">
					<div className="car -mt-0 w-full flex">
						<img
							src={car4}
							alt=""
							className="object-cover rounded-lg relative"
							style={{ top: "-0px" }}
						/>
						<div className="overlay absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl"></div>
					</div>
					<div className="content absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<div className="logo_Car">
							<img src={logo4} alt="" />
						</div>
						<div className="Product_text font-bold text-white text-xl">
							<h2>Hyundai Sonata 2022</h2>
							<p className="text-center">$ 26 000</p>
						</div>
					</div>
				</div>

				<div className="card flex justify-center bg-white rounded-3xl p-9 max-h-80 group relative bottom-7">
					<div className="car -mt-0 w-full flex">
						<img
							src={car2}
							alt=""
							className="object-cover rounded-lg relative"
							style={{ top: "-20px" }}
						/>
						<div className="overlay absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl"></div>
					</div>
					<div className="content absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<div className="logo_Car">
							<img src={logo5} alt="" />
						</div>
						<div className="Product_text font-bold text-white text-xl">
							<h2>Hyundai Sonata 2022</h2>
							<p className="text-center">$ 26 000</p>
						</div>
					</div>
				</div>

				<div className="card flex hidden md:block bg-white rounded-3xl p-9 max-h-80 group relative bottom-7 transition ease-in-out duration-500 hover:bg-gradient-to-r from-white to-gray-900">
					<div className="logo_Car flex flex-col items-start opacity-100 group-hover:opacity-0 transition ease-in-out duration-500 absolute bottom-32 left-20 p-2">
						<img src={logo1} alt="" />
					</div>
					<div className="Product_text opacity-100 text-primary font-bold text-xl group-hover:opacity-0 transition ease-in-out duration-5000 absolute bottom-20 left-7">
						<h2>Hyundai Sonata 2022</h2>
						<p className="text-center">$ 26 000</p>
					</div>
					<div className="car -mt-6 w-full flex">
						<img
							src={car1}
							alt=""
							className="hover:-translate-x-20 hover:scale-125 object-cover rounded-lg relative transition-transform duration-500 ease-out transitionDelay-100 hover:-rotate-3"
							style={{ top: "-20px", right: "-300px" }}
						/>
					</div>
					<div className="opacity-0 text-primary font-bold text-sm group-hover:opacity-100 transition ease-in-out duration-300 absolute bottom-20 left-2">
						Lorem ipsum dolor sit ame secte <br /> adipisicing elit.
						Cumque facilis <br /> earum, facere deleniti a, um dolor{" "}
						<br /> sit, amet consectetur adg elit <br /> Quisquam
						eum quasi sequi fuga{" "}
					</div>
				</div>
			</div>
			</div>
		</div>
	);
};

export default Product;
