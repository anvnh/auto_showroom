import React, { useState, useRef } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { IoLogoModelS } from "react-icons/io";
import { useEffect } from "react";
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
		{ id: "Model", label: "3DModel" },
		{ id: "Behind", label: "BehindCar" },
		{ id: "Button_Buy", label: "Buy product" },
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
	}, []); // Chỉ chạy một lần khi component mount
	return (
		<div
			className="owc-vertical-navigation__list fixed top-[450px] left-2 h-screen flex flex-col items-start z-20 group"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{isVisible && (
				<div className="flex items-center">
					<div className="px-3 py-6 rounded-md bg-gray-700 bg-opacity-50 text-white transition-all duration-300 ease-in-out transform hover:scale-110">
						<FaHome /> <br />
						<IoIosInformationCircle /> <br />
						<IoLogoModelS /> <br />
						<IoIosInformationCircle /> <br />
						<IoIosInformationCircle />
					</div>
					{isHovered && (
						<ul className="ml-2 transition-all duration-1000 transform origin-left scale-y-0 group-hover:scale-y-100">
							{navItems.map((item) => (
								<li
									key={item.id}
									className={`owc-vertical-navigation__item ${
										selectedSection === item.id
											? "owc-vertical-navigation__item--active"
											: ""
									}`}
									onClick={() => onNavClick(item.id)}
								>
									<div className="bg-gray-800 text-white px-2 py-3 hover:bg-gray-500 hover:scale-110 text-sm cursor-pointer transition-transform duration-200 ease-out">
										{item.label}
									</div>
								</li>
							))}
						</ul>
					)}
				</div>
			)}
		</div>
	);
};

export default NavbarSmall;
