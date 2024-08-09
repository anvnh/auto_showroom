import React, { useState, useRef } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { IoLogoModelS } from "react-icons/io";
import { useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link từ react-scroll
import { MdOutlineContactSupport } from "react-icons/md";

interface SubNavbarProps {
	selectedSection: string;
	onNavClick: (section: string) => void;
}

const NavbarSmall: React.FC<SubNavbarProps> = ({
	selectedSection,
	onNavClick,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const navItems = [
		{ id: "Home", label: "Home" },
		{ id: "Introduce", label: "Introduce" },
		{ id: "Popular_Cars", label: "Upcoming Cars" },
		{ id: "Upcoming_Cars", label: "Upcoming Cars" },
        { id: "Footer", label: "Footer" },
	];

	const handleMouseEnter = () => {
		hoverTimeoutRef.current = setTimeout(() => {
			setIsHovered(true);
		}, 100);
	};

	const handleMouseLeave = () => {
		clearTimeout(hoverTimeoutRef.current!);
		setIsHovered(false);
	};
	// hiệu ứng hiển thị khi 5s trôi qua
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);
	return (
		<div className="hidden md:block">
			<div
				className="owc-vertical-navigation__list fixed top-[450px] left-2 h-screen flex flex-col items-start fixed z-20 group"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{isVisible && (
					<div
						data-aos="fade-down"
						data-aos-delay="4000"
						data-aos-duration="2000"
						className="flex items-center"
					>
						<div className="px-3 py-6 rounded-tl-xl rounded-bl-xl backdrop-blur-2xl bg-gray-700 bg-opacity-50 text-white duration-600 transition-all ease-in-out">
							<div className="group-hover:scale-100 transform scale-110  transition-all duration-300">
								<FaHome /> <br />
								<IoIosInformationCircle /> <br />
								<IoLogoModelS /> <br />
								<FaCarSide /> <br />
								<MdOutlineContactSupport/>
							</div>
						</div>
						{isHovered && (
							<div className="bg-gray-800 bg-opacity-60 backdrop-blur-2xl text-white pl-1 pr-3 py-4 rounded-tr-3xl rounded-br-3xl ml-0 transition-all duration-1000 transform origin-left scale-y-0 group-hover:scale-y-100">
								<div className="flex flex-col gap-2">
									{" "}
									{navItems.map((item) => (
										<Link
											key={item.id}
											activeClass="owc-vertical-navigation__item--active"
											to={item.id}
											spy={true}
											smooth={true}
											offset={-70}
											duration={500}
											onSetActive={onNavClick}
											className="text-xs cursor-pointer hover:bg-gray-500 hover:scale-110 transition-transform 
											duration-200 ease-out px-2 py-2 rounded-tr-3xl rounded-br-3xl "
										>
											{item.label}
										</Link>
									))}
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default NavbarSmall;
