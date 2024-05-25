import { useState } from "react";
import { logo, menu, close } from "../../assets";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar = ({ onNavClick }) => {
	const [toggle, setToggle] = useState(false);

	const [dropdownVe, setDropdownVe] = useState(false);
	const [dropdownSh, setDropdownSh] = useState(false);
	const [dropdownIn, setDropdownIn] = useState(false);

	/*code for navbar event */
	const handleClick = (section) => {
		onNavClick(section);
	};
	

	return (
		<nav className="w-full flex pt-3 pb-2 justify-between items-center navbar bg-gray-950 md:px-12.5 px-8 bg-opacity-50">
			<img
				src={logo}
				alt="logo"
				className="md:w-[68px] w-[55px] md:h-[60px] h-[55px]"
			/>

			<ul className="list-none sm:flex hidden justify-start items-center flex-1">
				<li
					className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10 ml-5"
					onClick={() => {
						handleClick("vehiclesBar");
					}}
				>
					<div
						onClick={() => {
							setDropdownVe(!dropdownVe);
							setDropdownSh(false);
							setDropdownIn(false);
						}}
						className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-gray-300 duration-300"
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
						handleClick("shoppingBar");
					}}
				>
					<div
						onClick={() => {
							setDropdownSh(!dropdownSh);
							setDropdownVe(false);
							setDropdownIn(false);
						}}
						className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-gray-300 duration-300"
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
						handleClick("inventoryBar");
					}}
				>
					<div
						onClick={() => {
							setDropdownIn(!dropdownIn);
							setDropdownSh(false);
							setDropdownVe(false);
						}}
						className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-gray-300 duration-300"
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
						to="/users"
						className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-gray-300 duration-300"
					>
						<p> Owners </p>
						<MdOpenInNew className="ml-2 mt-1" />
					</Link>
					<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
				</li>
			</ul>

			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[23px] h-[24px] object-contain"
					onClick={() => setToggle(!toggle)}
				/>
				<div
					className={`
					${toggle ? "flex" : "hidden"} 
					p-6 bg-gradient-to-r from-gray-800 to-gray-700 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-20`}
				>
					<ul className="list-none flex justify-end items-start flex-1 flex-col">
						<li className="relative group font-poppins font-normal cursor-pointer text-[18px] text-white mb-2.5">
							<p className="transform group-hover:scale-110 group-hover:text-gray-300 transition-transform duration-300">
								Vehicles
							</p>
						</li>
						<li className="relative group font-poppins font-normal cursor-pointer text-[18px] text-white mb-2.5">
							<p className="transform group-hover:scale-110 group-hover:text-gray-300 transition-transform duration-300">
								Shopping Assist
							</p>
						</li>
						<li className="relative group font-poppins font-normal cursor-pointer text-[18px] text-white mb-2.5">
							<p className="transform group-hover:scale-110 group-hover:text-gray-300 transition-transform duration-300">
								Inventory
							</p>
						</li>
						<li className="relative group font-poppins font-normal cursor-pointer text-[18px] text-white mb-2.5">
							<Link to="/users">
								<p className="transform group-hover:scale-110 group-hover:text-gray-300 transition-transform duration-300">
									Owners
								</p>
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				<li className="relative group">
					<FaUser className="text-white w-[27px] h-[27px] transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
