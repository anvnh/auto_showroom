import React from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../../assets";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";

const NavbarAdmin = () => {
	useEffect(() => {
		AOS.init({
			duration: 900,
			easing: "ease-in-back",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);

	const [toggle, setToggle] = useState(false);

	return (
		<div className="z-50 fixed top-0 w-full font-poppins transition-transform duration-300">
			<nav
				data-aos="fade"
				className="w-full pt-3 h-14 md:h-16 flex pb-2 bg-gray-950 md:px-12.5 z-50 relative"
			>
				<div className="absolute left-1/2 transform -translate-x-1/2">
					<Link to="/">
						<img
							data-aos="fade"
							src={logo}
							alt="logo"
							className="md:w-[57px] w-[35px] md:h-[50px] h-[35px]"
						/>
					</Link>
				</div>
				<div className="pl-5 flex items-center ">
					<FaCircleUser className="w-[35px] h-auto" />
					<p className="pl-5 text-xl">Name</p>
				</div>
				<div className="pl-5 flex items-center w-full justify-end">
					<IoIosNotifications className="w-[50px] h-auto pr-3" />
				</div>
				<div className="flex-1 flex justify-end items-center">
					<button
						className="md:hidden text-white pr-3 focus:outline-none"
						onClick={() => setToggle(!toggle)}
					>
						<img
							src={toggle ? close : menu}
							alt="menu"
							className="w-[24px] h-[24px] object-contain"
							onClick={() => setToggle(!toggle)}
						/>
					</button>
				</div>
			</nav>
		</div>
	);
};

export default NavbarAdmin;
