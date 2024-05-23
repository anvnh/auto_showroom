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
			<ul className="items-center justify-start flex-1 hidden list-none sm:flex">
				<li className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10 ml-5">
					<Link
						to=""
						className="relative flex transition duration-300 ease-in-out delay-100 group hover:-translate-y-1 hover:scale-110 hover:text-gray-300"
					>
						<p> Connect Store </p>
						<IoIosArrowDown className="mt-1 ml-2" />
					</Link>
					<div className="absolute left-0 w-0 h-1 transition-all duration-300 bg-gray-400 -bottom-2 group-hover:w-full"></div>
				</li>
				<li className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10">
					<Link
						to=""
						className="relative flex transition duration-300 ease-in-out delay-100 group hover:-translate-y-1 hover:scale-110 hover:text-gray-300"
					>
						<p> Software Update </p>
						<IoIosArrowDown className="mt-1 ml-2" />
					</Link>
					<div className="absolute left-0 w-0 h-1 transition-all duration-300 bg-gray-400 -bottom-2 group-hover:w-full"></div>
				</li>
				<li className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10">
					<Link
						to=""
						className="relative flex transition duration-300 ease-in-out delay-100 group hover:-translate-y-1 hover:scale-110 hover:text-gray-300"
					>
						<p> Maintenance Plans </p>
						<IoIosArrowDown className="mt-1 ml-2" />
					</Link>
					<div className="absolute left-0 w-0 h-1 transition-all duration-300 bg-gray-400 -bottom-2 group-hover:w-full"></div>
				</li>
				<li className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10">
					<Link
						to="/owners"
						className="relative flex transition duration-300 ease-in-out delay-100 group hover:-translate-y-1 hover:scale-110 hover:text-gray-300"
					>
						<p> Resources </p>
						<IoIosArrowDown className="mt-1 ml-2" />
					</Link>
					<div className="absolute left-0 w-0 h-1 transition-all duration-300 bg-gray-400 -bottom-2 group-hover:w-full"></div>
				</li>
			</ul>

			<ul className="items-center justify-end flex-1 hidden list-none sm:flex">
                <Link to="/signup">
					<Button className="text-white text-[18px] bg-gray-950 bg-opacity-0 hover:bg-gray-700"> Sign up </Button>
				</Link>
                <Link to="/signin">
					<Button className="text-white text-[18px] bg-gray-950 bg-opacity-0 hover:bg-gray-700"> Sign in </Button>
				</Link>
			</ul>
			<div className="flex sm:hidden">
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
