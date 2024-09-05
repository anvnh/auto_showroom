import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { logo, menu, close } from "../../assets";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import useAuthUser from "@/hooks/useAuthUser";
import toast from "react-hot-toast";
import { FaShippingFast } from "react-icons/fa";

interface SubNavbarProps {
	selectedSection_element: string;
	onNavClick: (section: string) => void;
}

const Navbar: React.FC<SubNavbarProps> = ({ selectedSection_element, onNavClick, }) => {
	useEffect(() => {
		AOS.init({
			duration: 700,
			easing: "ease-in-back",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);

	const [toggle, setToggle] = useState(false);

	const {data: authUser, isLoading} = useAuthUser();

	const [selectedSection, setSelectedSection] = useState("");
	const handleNavClick = (section: string) => {
		setSelectedSection((prevSection) =>
			prevSection === section ? "" : section
		);
	};

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

	const [selectedP, setSelectedP] = useState("");

	const handleMouseEnter = (section: string) => {
		setSelectedP(section);
	};

	const handleMouseLeave = () => {
		setSelectedP("");
	};

	const [isVisible, setIsVisible] = useState(false);
	const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		let scrollTop =
			window.pageYOffset || document.documentElement.scrollTop;

		const handleScroll = () => {
			const newScrollTop =
				window.pageYOffset || document.documentElement.scrollTop;

			if (newScrollTop !== scrollTop) {
				scrollTop = newScrollTop;

				if (timer) {
					clearTimeout(timer);
				}

				const newTimer = setTimeout(() => setIsVisible(true), 100);
				setTimer(newTimer);
			}
		};

		window.addEventListener("scroll", handleScroll);

		const initialTimer = setTimeout(() => setIsVisible(true), 3800);
		setTimer(initialTimer);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (timer) {
				clearTimeout(timer);
			}
		};
	}, []);

	const [isExpanded, setIsExpanded] = useState(false);

	const handleToggleSection = (section: string) => {
		if (selectedSection === section) {
			setIsExpanded(!isExpanded);
		} else {
			setSelectedSection(section);
			setIsExpanded(true);
		}
	};
	// repon
	const [currentPage, setCurrentPage] = useState("main");

	const handleNavClick_repon = (section: string) => {
		setCurrentPage(section);
	};

	return (
		<div className="z-50 fixed top-0 w-full font-poppins transition-transform duration-300">
			<nav
				data-aos="fade"
				data-aos-duration="800"
				className="w-full pt-3 h-14 md:h-16 flex pb-2 bg-gray-950 md:px-12.5 z-50 relative"
			>
				<div className="absolute left-1/2 transform -translate-x-1/2">
					<Link to="/">
						<img
							data-aos-duration="800"
							data-aos="fade"
							src={logo}
							alt="logo"
							className="md:w-[57px] w-[35px] md:h-[50px] h-[35px]"
						/>
					</Link>
				</div>
				<div className="flex-1 flex justify-start pl-3 items-center">
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
				<ul className="list-none flex pr-3 justify-end items-center flex-1">
					{authUser ? (
						<>
							<Link to="/shop/cart">
								<MdOutlineShoppingCart
									className="text-white w-[30px] xl:w-[35px] h-[27px] text-3xl xl:mr-4 mr-2"
									title="Go to your cart"
								/>
							</Link>
                            <Link to="/order">
                                <FaShippingFast 
									className="text-white w-[25px] xl:w-[29px] h-[23px] text-2xl xl:mr-4 mr-2"
									title="Go to your cart"
                                />
                            </Link>
							{isLoading && <LoadingSpinner />}
							{!isLoading && (
								<Link to={`${authUser ? "/social" : "/social/login"}`}>
									<div className="avatar placeholder w-[30px] xl:w-full h-auto">
										<div className="bg-[#C9C6C6] w-10 rounded-3xl text-black">
											{authUser ? (
												<img src={authUser.profileImg} />
											) : (
												<FaUser />
											)}
										</div>
									</div>
								</Link>
							)}
						</>
					) : (
						<>
							<MdOutlineShoppingCart
								className="text-white w-[30px] xl:w-[35px] h-[27px] text-3xl xl:mr-4 mr-2 cursor-pointer"
								title="Go to your cart"
								onClick={() => toast.error("Please login to view your cart")}
							/>
							{!isLoading && (
								<Link to={`${authUser ? "/social" : "/login"}`}>
									<div className="avatar placeholder w-[30px] xl:w-full h-auto">
										<div className="bg-[#C9C6C6] w-10 rounded-3xl text-black">
											{authUser ? (
												<img src={authUser.profileImg} />
											) : (
												<FaUser />
											)}
										</div>
									</div>
								</Link>
							)}
						</>
					)}
				</ul>
			</nav>

			<div className="hidden md:block">
				<div
					className={`z-50 md:top-12 w-full font-poppins transition-transform duration-300 sm:block ${
						isHidden ? "-translate-y-full" : "translate-y-0"
					}`}
				>
					<nav
						data-aos="fade-down"
						data-aos-delay="500"
						className="w-full pt-4 h-14 opacity-10 text-white md:px-12.5 z-50 relative backdrop-blur-3xl bg-gray-950 bg-opacity-45 sm:block hidden"
					>
						<ul className="list-none sm:flex gap-10 justify-center items-center flex-1">
							<Link to="/">
								<li className="cursor-pointer">
									<div className="relative group flex transition ease-in-out delay-100  duration-300 select-none">
										<p> Home </p>
										<div className="absolute -bottom-2 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
									</div>
								</li>
							</Link>
							<Link to="/shop/product">
								<li className="cursor-pointer">
									<div className="relative group  flex transition ease-in-out delay-100  duration-300 select-none">
										<p> All products </p>
										<div className="absolute -bottom-2 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
									</div>
								</li>
							</Link>
					
							<li className="cursor-pointer">
								<Link to="/about-us">
								<div className="relative group flex transition ease-in-out delay-100  duration-300 select-none">
									<p> About Us </p>
									<div className="absolute -bottom-2 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
								</div>
								</Link>
							</li>
							{authUser?.isAdmin === true && (
									<li
										className={`cursor-pointer transition-opacity duration-300 ${selectedP && selectedP !== "Admin"
											? "opacity-50"
											: "opacity-100"
											}`}
										onMouseEnter={() =>
											handleMouseEnter("Admin")
										}
										onMouseLeave={handleMouseLeave}
										onClick={() =>
											handleToggleSection("Admin")
										}
									>
										<div className="relative group  flex transition ease-in-out delay-100  duration-300 select-none">
											<Link to="/admin">
												<p> Admin </p>
											</Link>
											<div className="absolute -bottom-2 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
										</div>
									</li>
								)}
						</ul>
					</nav>
				</div>
			</div>

			<div className="hidden md:block">
				{isExpanded && selectedSection === "shopping" && (
					<div
						data-aos="slide-up"
						className={`z-1 absolute w-screen h-[450px] ss:h-[900px] rounded-b-[20px] font-syncopate px-[10px] lg:px-[50px] pt-[28px] bg-opacity-85 bg-gray-900 ${
							isHidden ? "hidden" : ""
						}`}
					>
						<div
							data-aos="fade-up"
							data-aos-delay="1000"
							className={`${isHidden ? "hidden" : ""}`}
						></div>
					</div>
				)}
			</div>

			{toggle && (
				<div
					data-aos="fade"
					className="md:hidden opacity-90 h-screen relative w-full backdrop-blur-3xl bg-opacity-30 bg-gray-950 text-white"
				>
					{currentPage === "main" ? (
						<ul className="flex flex-col space-y-5 sm:space-y-16 ss:space-y-10 pt-[50%] sm:pt-[20%] items-center py-2">
							<Link to="/">
								<li className="cursor-pointer transition-opacity duration-300 w-full text-center">
									<div
										data-aos="fade-up"
										data-aos-delay="300"
										className="relative group flex justify-center transition ease-in-out delay-100 duration-300 select-none sm:text-2xl ss:text-3xl"
									>
										<p> Home </p>
									</div>
								</li>
							</Link>

							<Link to="/shop/product">
								<li className="cursor-pointer transition-opacity duration-300 w-full text-center">
									<div
										data-aos="fade-up"
										data-aos-delay="500"
										className="relative group flex justify-center transition ease-in-out delay-100 duration-300 select-none sm:text-2xl ss:text-3xl"
									>
										<p> All products </p>
									</div>
								</li>
							</Link>

		
							<li className="cursor-pointer transition-opacity duration-300 w-full text-center">
								<div
									data-aos="fade-up"
									data-aos-delay="600"
									className="relative group flex justify-center transition ease-in-out delay-100 duration-300 select-none sm:text-2xl ss:text-3xl"
								>
									{/* TODO */}
									<Link to="/about-us">
										<p> About us </p>
									</Link>
								</div>
							</li>
							{authUser?.isAdmin === true && (
								<li
									className="cursor-pointer transition-opacity duration-300 w-full text-center"
									onClick={() =>
										handleNavClick_repon("Admin")
									}
								>
									<div
										data-aos="fade-up"
										data-aos-delay="1000"
										className="relative group flex justify-center transition ease-in-out delay-100 duration-300 select-none sm:text-2xl ss:text-3xl"
									>
										<Link to="/admin">
											<p> Admin </p>
										</Link>
									</div>
								</li>
							)}
						</ul>
					) : (
						<div className="pt-5 pl-4">
							{/* <button
								data-aos="fade-right"
								onClick={handleBackClick_repon}
							>
								<FaAngleLeft className="w-6 h-auto" />
							</button>
							{currentPage === "vehicles" && (
								<div data-aos="fade-right"> </div>
							)}
							{currentPage === "shopping" && (
								<div data-aos="fade-right"></div>
							)} */}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Navbar;
