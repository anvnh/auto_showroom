import { useState } from 'react';
import {logo, menu, close} from '../../assets'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@/components/ui/button"

const Navbar = () => {

	const [toggle, setToggle] = useState(false);

    return (
		<nav className="w-full flex pt-3 pb-2 justify-between items-center navbar bg-gray-950 md:px-12.5 px-8 bg-opacity-50">
			<Link to="/">
				<img
					src={logo}
					alt="logo"
					className="md:w-[68px] w-[55px] md:h-[60px] h-[55px]"
				/>
			</Link>
			<ul className="list-none sm:flex hidden justify-start items-center flex-1">
				<li className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10 ml-5">
					<Link
						to=""
						className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-gray-300 duration-300"
					>
						<p> Connect Store </p>
						<IoIosArrowDown className="ml-2 mt-1" />
					</Link>
					<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
				</li>
				<li className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10">
					<Link
						to=""
						className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-gray-300 duration-300"
					>
						<p> Software Update </p>
						<IoIosArrowDown className="ml-2 mt-1" />
					</Link>
					<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
				</li>
				<li className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10">
					<Link
						to=""
						className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-gray-300 duration-300"
					>
						<p> Maintenance Plans </p>
						<IoIosArrowDown className="ml-2 mt-1" />
					</Link>
					<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
				</li>
				<li className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10">
					<Link
						to="/owners"
						className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-gray-300 duration-300"
					>
						<p> Resources </p>
						<IoIosArrowDown className="ml-2 mt-1" />
					</Link>
					<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
				</li>
			</ul>

			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				<Button className="text-white text-[18px] bg-gray-950 bg-opacity-0 hover:bg-gray-700"> Sign up </Button>
				<Button className="text-white text-[18px] bg-gray-950 bg-opacity-0 hover:bg-gray-700"> Sign in </Button>
			</ul>
			<div className="sm:hidden flex">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[23px] h-[24px] object-contain"
					onClick={() => setToggle(!toggle)}
				/>
				<div className={`
					${toggle ? "flex" : "hidden"}
					text-white p-6 bg-gradient-to-r from-gray-800 to-gray-700 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-20
				`}>
					Hi
				</div>
			</div>
		</nav>
	);
}

export default Navbar
