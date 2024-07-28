import { useState, useEffect } from "react";
// import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { logo, menu, close } from "../../assets";
interface SubNavbarProps {
	selectedSection_element: string;
	onNavClick: (section: string) => void;
}

const Navbar: React.FC<SubNavbarProps> = ({
	selectedSection_element,
	onNavClick,
}) => {
	useEffect(() => {
		AOS.init({
			duration: 500,
			easing: "ease-in-back",
			once: false,
			mirror: true,
			anchorPlacement: "top-top",
		});
	}, []);

	const [toggle, setToggle] = useState(false);

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

	const handleBackClick_repon = () => {
		setCurrentPage("main");
	};

	return (
		<div className="z-50 fixed top-0 w-full font-poppins transition-transform duration-300">
				<nav
					data-aos="fade-down"
					className="w-full pt-3 h-14 md:h-16 flex pb-2 bg-gray-950 md:px-12.5 z-50 relative"
				>
					<div className="absolute left-1/2 transform -translate-x-1/2">
						<Link to="/">
							<img
								data-aos="fade-down"
								src={logo}
								alt="logo"
								className="md:w-[57px] w-[35px] md:h-[50px] h-[35px]"
							/>
						</Link>
					</div>
					<div className="flex-1 flex justify-end items-center">
					<ul className="list-none sm:flex md:justify-end xl:pl-0 pl-4 items-center justify-start flex-1">
								{/* <Link to="/SignIn">
									<li className="relative group pr-5">
										<FaUser className="text-white w-[27px] h-[27px] transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
									</li>
								</Link> */}
							</ul>
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
	
			<div className="hidden md:block">
			
					<div
						className={`z-50 md:top-12 w-full font-poppins transition-transform duration-300 sm:block ${
							isHidden ? "-translate-y-full" : "translate-y-0"
						}`}
					>
						<nav
							data-aos="fade-down"
							className="w-full pt-4 h-14 opacity-10 text-white md:px-12.5 z-50 relative backdrop-blur-3xl bg-gray-950 bg-opacity-45 sm:block hidden"
						>
							<ul className="list-none sm:flex gap-10 justify-center items-center flex-1">
								<li
									className={`cursor-pointer transition-opacity duration-300 ${
										selectedP && selectedP !== "vehicles"
											? "opacity-50"
											: "opacity-100"
									}`}
									onMouseEnter={() =>
										handleMouseEnter("vehicles")
									}
									onMouseLeave={handleMouseLeave}
									onClick={() =>
										handleToggleSection("vehicles")
									}
								>
									<div className="relative group flex transition ease-in-out delay-100  duration-300 select-none">
									<p> Connect Store </p>
										<div className="absolute -bottom-2 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
									</div>
								</li>
								<li
									className={`cursor-pointer transition-opacity duration-300 ${
										selectedP && selectedP !== "shopping"
											? "opacity-50"
											: "opacity-100"
									}`}
									onMouseEnter={() =>
										handleMouseEnter("shopping")
									}
									onMouseLeave={handleMouseLeave}
									onClick={() =>
										handleToggleSection("shopping")
									}
								>
									<div className="relative group  flex transition ease-in-out delay-100  duration-300 select-none">
									<p> Software Update </p>
										<div className="absolute -bottom-2 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
									</div>
								</li>
								<li
									className={`cursor-pointer transition-opacity duration-300 ${
										selectedP && selectedP !== "owners"
											? "opacity-50"
											: "opacity-100"
									}`}
									onMouseEnter={() =>
										handleMouseEnter("owners")
									}
									onMouseLeave={handleMouseLeave}
									onClick={() =>
										handleToggleSection("owners")
									}
								>
									<div className="relative group flex transition ease-in-out delay-100  duration-300 select-none">
									
										<p> Maintenance Plans </p>
											<div className="absolute -bottom-2 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
									
									</div>
								</li>
							</ul>
						</nav>
					</div>
			
			</div>
			<div className="hidden md:block">
				{isExpanded && selectedSection === "vehicles" && (
					<div
						data-aos="slide-up"
						data-aos-duration="900" 
						className={`z-1 absolute w-screen h-screen font-syncopate bg-opacity-85 bg-gray-900  ${
							isHidden ? "hidden" : ""
						}`}
					>
						<div
							data-aos="fade-up"
							data-aos-duration="900" 
							className={`${isHidden ? "hidden" : ""}`}
						>
						
						</div>
					</div>
				)}
				{isExpanded && selectedSection === "shopping" && (
					<div
						data-aos="slide-up"
						data-aos-duration="900" 
						className={`z-1 absolute w-screen h-[450px] ss:h-[900px] rounded-b-[20px] font-syncopate px-[10px] lg:px-[50px] pt-[28px] bg-opacity-85 bg-gray-900 ${
							isHidden ? "hidden" : ""
						}`}
					>
						<div
							data-aos="fade-up"
							data-aos-duration="900" 
							
							className={`${isHidden ? "hidden" : ""}`}
						>
						
						</div>
					</div>
				)}
			</div>
			{toggle && (
				<div
					data-aos="fade"
					className="md:hidden opacity-90 h-screen relative w-full backdrop-blur-3xl bg-opacity-20 text-white"
				>
				
						<ul className="flex flex-col space-y-5 sm:space-y-16 ss:space-y-10 pt-[50%] sm:pt-[20%] items-center py-2">
							<li
								className="cursor-pointer transition-opacity duration-300 w-full text-center"
								onClick={() => handleNavClick_repon("vehicles")}
							>
								<div
									data-aos="fade-up"
									data-aos-delay="300"
									className="relative group flex justify-center transition ease-in-out delay-100 duration-300 select-none sm:text-2xl ss:text-3xl"
								>
									<p> Connect Store </p>
								</div>
							</li>
							<li
								className="cursor-pointer transition-opacity duration-300 w-full text-center"
								onClick={() => handleNavClick_repon("shopping")}
							>
								<div
									data-aos="fade-up"
									data-aos-delay="500"
									className="relative group flex justify-center transition ease-in-out delay-100 duration-300 select-none sm:text-2xl ss:text-3xl"
								>
										<p> Software Update </p>
								</div>
							</li>
							<li
								className="cursor-pointer transition-opacity duration-300 w-full text-center"
								onClick={() => handleNavClick_repon("owners")}
							>
								<div
									data-aos="fade-up"
									data-aos-delay="700"
									className="relative group flex justify-center transition ease-in-out delay-100 duration-300 select-none sm:text-2xl ss:text-3xl"
								>
									
									<p> Maintenance Plans </p>
								
								</div>
							</li>
							
						</ul>
		
				</div>
			)}
		</div>
	);
};

export default Navbar;
