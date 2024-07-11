import React, { useState, useEffect } from "react";
import { FaCar } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";
import ProductManagement from "./ProductManagement";
import ButtonManagement from "./ButtonManagement";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@material-tailwind/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { FiRefreshCw } from "react-icons/fi";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import DashBoardRepon from "../AdminBranchRepon/DashBoardRepon";

const Dashboard = () => {
	const [currentPage, setCurrentPage] = useState("");
	const [selectedSection, setSelectedSection] = useState("");
	const [openDialog, setOpenDialog] = useState(false);

	const handleNavClick_repon = (section: string) => {
		setCurrentPage(section);
		setSelectedSection(section);
	};
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);
	return (
		<div className="w-full h-full flex pl-7">
			<div className="bg-gray-700 w-[300px] h-[600px] rounded-xl p-5 space-y-3 font-bold shadow-md">
				<div
					onClick={() => handleNavClick_repon("Product_Management")}
					className={`flex hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out items-center cursor-pointer p-2 rounded ${
						selectedSection === "Product_Management"
							? "bg-gray-300 text-black"
							: ""
					}`}
				>
					<FaCar className="w-[20px] h-auto" />
					<p className="pl-5">Product Management</p>
				</div>
				<div
					onClick={() => handleNavClick_repon("Order_Management")}
					className={`flex hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out items-center cursor-pointer p-2 rounded ${
						selectedSection === "Order_Management"
							? "bg-gray-300 text-black"
							: ""
					}`}
				>
					<FaShippingFast className="w-[20px] h-auto" />
					<p className="pl-5">Order Management</p>
				</div>
				<div
					onClick={() => handleNavClick_repon("Statistics")}
					className={`flex hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out items-center cursor-pointer p-2 rounded ${
						selectedSection === "Statistics"
							? "bg-gray-300 text-black"
							: ""
					}`}
				>
					<FaChartLine className="w-[20px] h-auto" />
					<p className="pl-5">Statistics</p>
				</div>
				<div
					onClick={() => handleNavClick_repon("Voucher")}
					className={`flex hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out items-center cursor-pointer p-2 rounded ${
						selectedSection === "Voucher"
							? "bg-gray-300 text-black"
							: ""
					}`}
				>
					<MdDiscount className="w-[20px] h-auto" />
					<p className="pl-5">Voucher</p>
				</div>
				<div
					onClick={() => handleNavClick_repon("Help")}
					className={`flex hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out items-center cursor-pointer p-2 rounded ${
						selectedSection === "Help"
							? "bg-gray-300 text-black"
							: ""
					}`}
				>
					<RxQuestionMarkCircled className="w-[20px] h-auto" />
					<p className="pl-5">Help</p>
				</div>
			</div>
			<div className="flex-1 pl-5 ">
				{currentPage === "Product_Management" && (
					<div
						data-aos="slide-left"
						className="grid grid-cols-2 gap-[980px]"
					>
						<div className="w-[1250px] h-full bg-gray-700 rounded-xl shadow-md ">
							<ProductManagement />
						</div>
						<div className="w-[260px] h-[200px] bg-gray-700 rounded-xl shadow-md flex items-center">
							<div className="p-5 space-y-3">
								<Button
									className="bg-primary bg-opacity-50 text-white w-56 h-10 text-md items-center flex justify-start"
									onClick={() => setOpenDialog(true)}
								>
									<IoIosAddCircleOutline />
									<p className="pl-4">Add product</p>
								</Button>

								<Button className="bg-primary bg-opacity-50 text-white w-56 h-10 text-md items-center flex justify-start">
									<CiCircleMinus />
									<p className="pl-4"> Delete product </p>
								</Button>

								<Button className="bg-primary bg-opacity-50 text-white w-56 h-10 text-md items-center flex justify-start">
									<FiRefreshCw />
									<p className="pl-4">Update product</p>
								</Button>
							</div>
						</div>
					</div>
				)}
				{currentPage === "Order_Management" && (
					<div
						data-aos="slide-left"
						className="w-[400px] h-[500px] bg-gray-500 rounded-xl shadow-md"
					>
						Order Management
					</div>
				)}
				{currentPage === "Statistics" && (
					<div
						data-aos="slide-left"
						className="w-[1250px] h-full bg-gray-500 rounded-xl shadow-md shadow-gray-500"
					>
						Statistics
					</div>
				)}
				{currentPage === "Voucher" && (
					<div
						data-aos="slide-left"
						className="w-[1250px] h-full bg-gray-500 rounded-xl shadow-md shadow-gray-500"
					>
						Voucher
					</div>
				)}
				{currentPage === "Help" && (
					<div
						data-aos="slide-left"
						className="w-[1250px] h-full bg-gray-500 rounded-xl shadow-md shadow-gray-500"
					>
						Help
					</div>
				)}
			</div>
			</div>
			</div>
			<div className="justify-center flex items-center">
			<div className="block xl:hidden " >
					<DashBoardRepon />
			</div>
			</div>
		</div>
	);
};

export default Dashboard;
