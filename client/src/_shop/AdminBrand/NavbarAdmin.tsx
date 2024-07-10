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
	const [isHidden, setIsHidden] = useState(false);
	let lastScrollTop = 0;
	// repon
	const [currentPage, setCurrentPage] = useState("main");

	const handleNavClick_repon = (section: string) => {
		setCurrentPage(section);
	};

	const handleBackClick_repon = () => {
		setCurrentPage("main");
	};
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
	const [toggle, setToggle] = useState(false);

	const [selectedP, setSelectedP] = useState("");

	const handleMouseEnter = (section: string) => {
		setSelectedP(section);
	};

	const handleMouseLeave = () => {
		setSelectedP("");
	};

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
					<FaCircleUser className="md:w-[35px] w-[30px] h-auto" />
					<p className="pl-5 md:text-xl">Name</p>
				</div>
				<div className="w-full items-center justify-end flex">
				<div className="pl-5 flex items-center w-full justify-end">
					<IoIosNotifications className="w-[50px] h-auto pr-3" />
				</div>
				
					<button
						className="md:hidden text-white pr-3 focus:outline-none"
						onClick={() => setToggle(!toggle)}
					>
						<img
							src={toggle ? close : menu}
							alt="menu"
							className="w-[30px] h-[24px] object-contain"
							onClick={() => setToggle(!toggle)}
						/>
					</button>
				
				</div>
			</nav>
			<div
						className={`z-50 md:top-12 w-full font-poppins transition-transform duration-300 sm:block ${
							isHidden ? "-translate-y-full" : "translate-y-0"
						}`}
					>
						<nav
							data-aos="fade-up"
							className="w-full pt-4 h-14 opacity-10 text-white md:px-12.5 z-50 relative backdrop-blur-3xl bg-gray-900 bg-opacity-45 sm:block hidden"
						>
							<ul className="list-none sm:flex gap-10 justify-center items-center flex-1">
							<Link to="/">
								<li
									className={`cursor-pointer transition-opacity duration-300 ${
										selectedP && selectedP !== "Home"
											? "opacity-50"
											: "opacity-100"
									}`}
									onMouseEnter={() =>
										handleMouseEnter("Home")
									}
									onMouseLeave={handleMouseLeave}
								
								>
									<div className="relative group flex transition ease-in-out delay-100  duration-300 select-none">
										<p> Home </p>
										<div className="absolute -bottom-2 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
									</div>
								</li>
								</Link>
								<Link to="/shop">
								<li
									className={`cursor-pointer transition-opacity duration-300 ${
										selectedP && selectedP !== "shop"
											? "opacity-50"
											: "opacity-100"
									}`}
									onMouseEnter={() =>
										handleMouseEnter("shop")
									}
									onMouseLeave={handleMouseLeave}
	
								
								>
									<div className="relative group  flex transition ease-in-out delay-100  duration-300 select-none">
										<p> Shop </p>
										<div className="absolute -bottom-2 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
									</div>
								</li>
								</Link>
								<Link to="/social">
								<li
									className={`cursor-pointer transition-opacity duration-300 ${
										selectedP && selectedP !== "Social"
											? "opacity-50"
											: "opacity-100"
									}`}
									onMouseEnter={() =>
										handleMouseEnter("Social")
									}
									onMouseLeave={handleMouseLeave}
								
								>
									<div className="relative group  flex transition ease-in-out delay-100  duration-300 select-none">
										<p> Social </p>
										<div className="absolute -bottom-2 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
									</div>
								</li>
								</Link>
							</ul>
						</nav>
					</div>
					{toggle && (
				<div
					data-aos="fade"
					className="md:hidden opacity-90 h-screen relative w-full backdrop-blur-3xl bg-opacity-20 text-white"
				>
					{currentPage === "main" ? (
						<ul className="flex flex-col space-y-5 sm:space-y-16 ss:space-y-10 pt-[50%] sm:pt-[20%] items-center py-2">
								<Link to="/">
							<li
								className="cursor-pointer transition-opacity duration-300 w-full text-center"
							
							>
								<div
									data-aos="fade-up"
									data-aos-delay="300"
									className="relative group flex justify-center transition ease-in-out delay-100 duration-300 select-none sm:text-2xl ss:text-3xl"
								>
									<p> Home </p>
								</div>
							</li>
							</Link>
							<Link to="/shop">
							<li
								className="cursor-pointer transition-opacity duration-300 w-full text-center"
								
							>
								<div
									data-aos="fade-up"
									data-aos-delay="500"
									className="relative group flex justify-center transition ease-in-out delay-100 duration-300 select-none sm:text-2xl ss:text-3xl"
								>
									<p> Shop </p>
								</div>
							</li>
							</Link>
							<Link to="/social">
							<li
								className="cursor-pointer transition-opacity duration-300 w-full text-center"
								
							>
								<div
									data-aos="fade-up"
									data-aos-delay="500"
									className="relative group flex justify-center transition ease-in-out delay-100 duration-300 select-none sm:text-2xl ss:text-3xl"
								>
									<p> Socical </p>
								</div>
							</li>
							</Link>
						</ul>
					) : (
						<div className="pt-5 pl-4">
							{/* <button
								data-aos="fade-right"
							
							>
							
							</button>
							{currentPage === "vehicles" && (
								<div data-aos="fade-right">
									{" "}
								
								</div>
							)}
							{currentPage === "shopping" && (
								<div data-aos="fade-right">
								
								</div>
							)} */}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default NavbarAdmin;
