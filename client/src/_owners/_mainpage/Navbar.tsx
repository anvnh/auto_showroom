import { useState } from 'react';
import {logo, menu, close} from '../../assets'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@/components/ui/button";

const Navbar = () => {

	const [toggle, setToggle] = useState(false);

    return (
		<nav className="w-full flex pt-3 pb-2 justify-between items-center navbar md:px-12.5 px-8 bg-primary">
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
						to=""
						className="relative flex transition duration-300 ease-in-out delay-100 group hover:-translate-y-1 hover:scale-110 hover:text-gray-300"
					>
						<p> Resources </p>
						<IoIosArrowDown className="mt-1 ml-2" />
					</Link>
					<div className="absolute left-0 w-0 h-1 transition-all duration-300 bg-gray-400 -bottom-2 group-hover:w-full"></div>
				</li>
			</ul>

			<ul className="items-center justify-end flex-1 hidden list-none sm:flex">
                <Button 
                    className="text-white text-[18px] bg-gray-950 bg-opacity-0 hover:bg-gray-700"
                > 
                    Sign up 
                </Button>

                <Button 
                    className="text-white text-[18px] bg-gray-950 bg-opacity-0 hover:bg-gray-700"
                > 
                    Sign in 
                </Button>
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
					text-white p-6 bg-gray-950 bg-opacity-70 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-20
				`}>
                    <ul className="flex flex-col items-start w-full mt-4">
                        <li className="relative group font-poppins font-normal cursor-pointer text-[20px] text-white mb-4">
                            <Link to=""> Connect Store </Link>
                            <div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
                        </li>
                        <li className="relative group font-poppins font-normal cursor-pointer text-[20px] text-white mb-4">
                            <Link to=""> Software Update </Link>
                            <div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
                        </li>
                        <li className="relative group font-poppins font-normal cursor-pointer text-[20px] text-white mb-4">
                            <Link to=""> Maintenance Plans </Link>
                            <div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
                        </li>
                        <li className="relative group font-poppins font-normal cursor-pointer text-[20px] text-white mb-4">
                            <Link to=""> Resources </Link>
                            <div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
                        </li>
                    </ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar
