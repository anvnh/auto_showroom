import { useState, useEffect } from "react";
import {
	logo,
	menu,
	close,
	logomer,
	logoaudi,
	logopos,
	logoroi,
	carnb1,
	carnb2,
	carnb3,
} from "../../assets";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { MdLocalOffer } from "react-icons/md";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { GiSteeringWheel } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";
const Navbar = () => {
	useEffect(() => {
		AOS.init({
			duration: 600,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);

	const [toggle, setToggle] = useState(false);

	const [dropdownVe, setDropdownVe] = useState(false);
	const [dropdownSh, setDropdownSh] = useState(false);
	const [dropdownIn, setDropdownIn] = useState(false);

	/**code navbar event */
	const [selectedSection, setSelectedSection] = useState("");
	const handleNavClick = (section: string) => {
		setSelectedSection((prevSection) =>
			prevSection === section ? "" : section
		);
	};
	const section = selectedSection;
	// console.log(section)

	const [isHidden, setIsHidden] = useState(false);
	let lastScrollTop = 0;

	useEffect(() => {
		const handleScroll = () => {
			let scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;

			if (scrollTop > lastScrollTop) {
				setIsHidden(true); // Cuộn xuống, ẩn navbar
			} else {
				setIsHidden(false); // Cuộn lên, hiện navbar
			}

			lastScrollTop = scrollTop;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const {data: authUser, isLoading } = useQuery({
        // use queryKey to give a unique name to the query and refer to it later
        queryKey: ['authUser'],
        queryFn: async () => {
            try {
                const res = await fetch('/api/auth/me');
                const data = await res.json();
                if(data.error) return null;
                if (!res.ok) {
                    throw new Error(data.message || 'Something went wrong');
                }
                console.log("authUser is here: ", data);
                return data;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        retry: false,
    })

	return (

		<div
			className={`z-50 fixed top-0 w-full font-poppins transition-transform duration-300 ${
				isHidden ? "-translate-y-full" : "translate-y-0"
			}`}
		>
			<nav className="w-full flex pt-3 pb-2 justify-between items-center navbar bg-gray-950 md:px-12.5 px-8 bg-opacity-70 z-50">
				<Link to="/">
					<img
						src={logo}
						alt="logo"
						className="md:w-[57px] w-[55px] md:h-[50px] h-[55px]"
					/>
				</Link>

				<ul className="list-none sm:flex hidden justify-start items-center flex-1">
					<li
						className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10 ml-5"
						onClick={() => {
							handleNavClick("vehiclesBar");
						}}
					>
						<div
							onClick={() => {
								setDropdownVe(!dropdownVe);
								setDropdownSh(false);
								setDropdownIn(false);
							}}

							className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:text-gray-300 duration-300 select-none"

						>
							<p> Vehicles </p>
							{dropdownVe ? (
								<IoIosArrowDown className="ml-2 mt-1" />
							) : (
								<IoIosArrowUp className="ml-2 mt-1" />
							)}
						</div>
						<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
					</li>
					<li
						className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10"
						onClick={() => {
							handleNavClick("shoppingBar");
						}}
					>
						<div
							onClick={() => {
								setDropdownSh(!dropdownSh);
								setDropdownVe(false);
								setDropdownIn(false);
							}}

							className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:text-gray-300 duration-300 select-none"

						>
							<p> Shopping Assist </p>
							{dropdownSh ? (
								<IoIosArrowDown className="ml-2 mt-1" />
							) : (
								<IoIosArrowUp className="ml-2 mt-1" />
							)}
						</div>
						<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
					</li>

					<li
						className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10"
						onClick={() => {
							handleNavClick("inventoryBar");
						}}
					>
						<div
							onClick={() => {
								setDropdownIn(!dropdownIn);
								setDropdownSh(false);
								setDropdownVe(false);
							}}

							className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:text-gray-300 duration-300 select-none"

						>
							<p> Inventory </p>
							{dropdownIn ? (
								<IoIosArrowDown className="ml-2 mt-1" />
							) : (
								<IoIosArrowUp className="ml-2 mt-1" />
							)}
						</div>
						<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
					</li>

					<li className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10">
						<Link
							to="/owners"

							className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1  hover:text-gray-300 duration-300 select-none"

						>
							<p> Owners </p>
							<MdOpenInNew className="ml-2 mt-1" />
						</Link>
						<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
					</li>
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center sticky z-50 ">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[23px] h-[24px] object-contain"
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`
					${toggle ? "flex" : "hidden"}

					text-white p-6 bg-gray-950 bg-opacity-70 absolute top-20 right-0 mx-4 my-2 min-w-[300px] rounded-xl sidebar z-50 font-syncopate
				`}
					>
						<ul className="list-none flex justify-end items-start flex-1 flex-col">
							<li className="relative group cursor-pointer text-[18px] text-white mb-2.5">
								<p className="transform group-hover:scale-110 group-hover:text-gray-300 transition-transform duration-300 select-none">
									Vehicles
								</p>
							</li>
							<li className="relative group cursor-pointer text-[18px] text-white mb-2.5">
								<p className="transform group-hover:scale-110 group-hover:text-gray-300 transition-transform duration-300 select-none">
									Shopping Assist
								</p>
							</li>
							<li className="relative group cursor-pointer text-[18px] text-white mb-2.5">
								<p className="transform group-hover:scale-110 group-hover:text-gray-300 transition-transform duration-300 select-none">
									Inventory
								</p>
							</li>
							<li className="relative group cursor-pointer text-[18px] text-white mb-2.5 select-none">

								<Link to="/owners">
									<p className="transform group-hover:scale-110 group-hover:text-gray-300 transition-transform duration-300">
										Owners
									</p>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<ul className="list-none sm:flex hidden justify-end items-center flex-1">
					<Link to={`${authUser ? "/social" : ""}`}>
						<li className="relative group">
							<FaUser className="text-white w-[27px] h-[27px] transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
						</li>
					</Link>
				</ul>

				{/*vehicle---------------------------------------------- */}
			</nav>

			{section === "vehiclesBar" ? (
				<div
					data-aos="fade-right"
					className={`z-1 absolute w-screen h-[450px] ss:h-[600px] rounded-b-[20px] font-syncopate  px-[10px] lg:px-[50px] pt-[28px] bg-opacity-85 bg-gray-600`}
				>
					<div className="rounded-[40px] border-t-[2px]">
						<img className="w-[80px] md:w-[150px] lg:w-[150px] " src={logomer} />
					</div>

					{/* // hàng 1 ----------------------*/}
					<div className="flex justify-center md:justify-evenly items-center gap-[100px] sm:gap-[210px] bottom-10 relative w-screen h-[150px] xs:h-[180px]">
						<Link to="/Mercedes-AMG-CLS">
							<div className="cursor-pointer">
								<div>
									<img
										className="  h-[70px] sm:h-[90px] lg:h-[100xp] w-[200px] sm:w-[260px] lg:w-[280px]  object-cover hover:scale-110 transition "
										src={carnb1}
									/>
								</div>
								<p className=" text-[17px] ss:text-[23px] md:text-[28px]">
									AMG CLS
								</p>
								<p className=" text-[18px]">$26 100</p>
							</div>
						</Link>
						<Link to="Mercedes-Benz-Maybach-2022">
							<div className="cursor-pointer">
								<div>
									<img
										className="   relative h-[70px] sm:h-[90px] lg:h-[100px]  bg-center  object-cover  w-[200px] sm:w-[260px] lg:w-[280px] hover:scale-110 transition"
										src={carnb2}
									/>
								</div>
								<p className=" text-[17px] ss:text-[23px] md:text-[28px]">
									Maybach 2022
								</p>
								<p className="text-[18px]">$ 679 867</p>
							</div>
						</Link>
					</div>

					{/* // audi ----------------------------*/}
					<div className="rounded-[40px] border-t-[2px] border-slate-400px-[10px]">
						<img
							className="ml-[20px] w-[40px] ss:w-[70px]  md:w-[130px] lg:w-[140px]"
							src={logoaudi}
						/>
					</div>
					{/* hàng 2----------------------------------- */}
					<div className="flex justify-center md:justify-evenly items-center gap-[100px] sm:gap-[210px] bottom-10 relative w-screen h-[150px] xs:h-[180px]">
					<Link to="/audi-A5-Couple">
						<div className="cursor-pointer">
							<div>
								<img
									className=" h-[70px] sm:h-[90px] lg:h-[100xp] w-[200px] sm:w-[260px] lg:w-[280px]  object-cover hover:scale-110 transition"
									src={carnb3}
								/>
							</div>
							<p className=" text-[17px] ss:text-[23px] md:text-[28px]">A5 Coupe</p>
							<p className="text-[18px]">$ 48 000</p>
						</div>
						</Link>
							<Link to="/audi-s6-limousin">
						<div className="cursor-pointer">
							<div>
								<img
									className=" h-[70px] sm:h-[90px] lg:h-[100xp] w-[200px] sm:w-[260px] lg:w-[280px]  object-cover hover:scale-110 transition"
									src={carnb3}
								/>
							</div>
							<p className=" text-[17px] ss:text-[23px] md:text-[28px]">S6 Limousin</p>
							<p className="text-[18px]">$ 58 000</p>
						</div>
						</Link>
							
					</div>
				</div>
			) : null}

			{/* shopping asisst------------------------------------------------- */}
			{section === "shoppingBar" ? (
				<div
					data-aos="fade-right"
					className=" z-50 absolute w-screen h-[200px] rounded-b-[20px] bg-opacity-85 xl:px-[100px] bg-gray-600  pt-[50px]   "
				>
					<div className="h-[200px]   flex justify-evenly  ">
						<div className="lg:w-[300px] xl:w-[400px] cursor-pointer hover:scale-110 transition duration-300 flex-row items-center justify-center text-center ">
							<div className="flex justify-center  ">
								<MdLocalOffer className="w-[50px] h-auto" />
							</div>
							<p className="font-bold text-[15px] sm:text-[20px]">
								Offer and Incentives
							</p>
						</div>
						<div className="cursor-pointer hover:scale-110 transition duration-300 lg:w-[300px] xl:w-[400px]  text-center ">
							<div className=" lg:w-[300px] xl:w-[400px] flex justify-center">
								<HiMiniWrenchScrewdriver className="w-[50px] h-auto" />
							</div>
							<p className="font-bold text-[15px] sm:text-[20px]">
								Build Your Car
							</p>
						</div>

						<div className="cursor-pointer hover:scale-110 transition duration-300 lg:w-[300px] xl:w-[400px] text-center ">
							<div className=" lg:w-[300px] xl:w-[400px] flex justify-center">
								<GiSteeringWheel className="w-[50px] h-auto" />
							</div>
							<p className="font-bold text-[15px] sm:text-[20px]">
								Test Drive
							</p>
						</div>

					</div>
				</div>
			) : null}


			{/* Inventory------------------------------------------- */}
			{section === "inventoryBar" ? (
				<div
					data-aos="fade-right"
					className="z-50 absolute w-screen h-[250px] rounded-b-[20px] bg-opacity-85 bg-gray-600 py-[20px]  "
				>
					<div className="">
						<div className="w-screen font-bold text-[30px] text-center mb-[35px] border-b-[3px]">
							Choose Your Brand
						</div>
						<div className="w-screen h-[100px] flex items-center justify-evenly">
							<div>
								<img
									className=" w-[80px] md:w-[170px] cursor-pointer hover:scale-110 transition duration-300 "
									src={logoaudi}
								/>
							</div>
							<div>
								<img
									className=" w-[80px] md:w-[200px] cursor-pointer hover:scale-110 transition duration-300"
									src={logomer}
								/>
							</div>
							<div>
								<img
									className="w-[80px] md:w-[140px]  cursor-pointer hover:scale-110 transition duration-300"
									src={logoroi}
								/>
							</div>
							<div>
								<img
									className=" w-[80px] md:w-[100px]  cursor-pointer hover:scale-110 transition duration-300"
									src={logopos}
								/>
							</div>

						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Navbar;
