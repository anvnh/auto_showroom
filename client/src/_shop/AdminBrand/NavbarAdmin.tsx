import React, { useState } from "react";
import { BarChart2, ShoppingBag, Menu, Settings, TrendingUp, ShoppingCart, DollarSign, User } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import OverviewPage from "../element/OverviewPage";
import ProductPage from "../element/ProductPage";


const slidebar_items = [
	{
		name: "Overview",
		icon: BarChart2,
		color: "white",
	},
	{
		name: "Product",
		icon: ShoppingBag,
		color: "white",
	},
	{
		name: "Users",
		icon: User,
		color: "white",
	},
	{
		name: "Sales",
		icon: DollarSign,
		color: "white",
	},
	{
		name: "Orders",
		icon: ShoppingCart,
		color: "white",
	},
	{
		name: "Analytics",
		icon: TrendingUp,
		color: "white",
	},
	{
		name: "Settings",
		icon: Settings,
		color: "white",
	},
];

const NavbarAdmin = () => {
	const [currentPage, setCurrentPage] = useState("Overview");
	const [isSlidebarOpen, setIsSlidebarOpen] = useState(true);

	const handleNavClick = (section: string) => {
		setCurrentPage(section);
	};

	return (
		<div className="flex h-full
		">
			<motion.div
				className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
					isSlidebarOpen ? "w-64" : "w-20"
				}`}
				animate={{
					width: isSlidebarOpen ? 256 : 80,
				}}
			>
				<div className="h-[1150px] bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex-col border-r border-gray-700">
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => setIsSlidebarOpen(!isSlidebarOpen)}
						className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
					>
						<Menu size={24} />
					</motion.button>

					<nav className="mt-8 flex-grow">
						{slidebar_items.map((item) => (
							<motion.div
								key={item.name}
								className={`flex items-center p-4 text-sm font-poppins rounded-lg hover:bg-gray-700 transition-colors mb-2 cursor-pointer ${
									currentPage === item.name ? "bg-gray-700 text-white" : ""
								}`}
								onClick={() => handleNavClick(item.name)}
							>
								<item.icon
									size={20}
									style={{
										color: item.color,
										minWidth: "20px",
									}}
								/>
								<AnimatePresence>
									{isSlidebarOpen && (
										<motion.span
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, delay: 0.3 }}
											className="ml-4 whitespace-nowrap"
										>
											{item.name}
										</motion.span>
									)}
								</AnimatePresence>
							</motion.div>
						))}
					</nav>
				
				</div>
			</motion.div>
			<div className="w-full h-full relative ">
							{currentPage === "Overview" && (
						
								<div className="overflow-hidden ">
										<OverviewPage />
								</div>
								
							)}
							{currentPage === "Product" && (
								<div
									
									className=""
								>
									<ProductPage />
								</div>
							)}
								{currentPage === "Users" && (
								<div
									
									className=""
								>
									Users
								</div>
							)}
							{currentPage === "Sales" && (
								<div
									
									className=""
								>
									Statistics
								</div>
							)}
							{currentPage === "Orders" && (
								<div
									
									className=""
								>
									Voucher
								</div>
							)}
							{currentPage === "Analytics" && (
								<div
									
									className=""
								>
									Help
								</div>
							)}
							{currentPage === "Settings" && (
								<div
								
									className=""
								>
									Settings
								</div>
							)}
						</div>
		</div>
	);
};

export default NavbarAdmin;
