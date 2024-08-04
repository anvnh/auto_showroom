import { motion } from "framer-motion";
import { BarChart2 } from "lucide-react";
import React, { useRef, useState } from "react";
import Header from "./comon/Header";
import { IoAddCircle } from "react-icons/io5";

import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import { CiImageOn } from "react-icons/ci";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { IoIosClose } from "react-icons/io";
import { Input } from "@material-tailwind/react";
import { Label } from "recharts";
import { ScrollBar } from "@/components/ui/scroll-area";
import { Toaster } from "react-hot-toast";
import VouchersManagement from "./elementVoucher/VouchersManagement";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

const Vouchers = () => {
	const imgRef = useRef(null);
	const [imgs, setImgs] = useState([]);

	const handleImgChange = (e) => {
		const files = Array.from(e.target.files);

		if (imgs.length >= 1) {
			alert("Only 1 photo can be added.");
			return;
		}

		files.forEach((file) => {
			const reader = new FileReader();
			reader.onload = () => {
				setImgs((prevImgs) => [...prevImgs, reader.result]);
			};
			reader.readAsDataURL(file);
		});
	};
	const handleRemoveImg = (indexToRemove) => {
		setImgs(imgs.filter((_, index) => index !== indexToRemove));
	};

	const [formData, setFormData] = useState({
		TermsOfUse: "",
		discount: "",
		DateOfManufacture: "",
		ExpiryDate: "",
		quantity: "",
		images: [],
	});
	const [dateManufacture, setDateManufacture] = React.useState<Date>();
	const [dateExpiry, setDateExpiry] = React.useState<Date>();

	const resetForm = () => {
		setFormData({
			TermsOfUse: "",
			discount: "",
			DateOfManufacture: "",
			ExpiryDate: "",
			quantity: "",
			images: [],
		});
		setDate(undefined);
		setDates(undefined);
		setImgs([]);
	};

	return (
		<div>
			<Header title="Voucher" />

			<main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
				{/* STATS */}
				<motion.div
					className="grid grid-cols-1 gap-5 sm:grid-cols-4 md:grid-cols-5 mb-8 w-full"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<motion.div
						className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
						whileHover={{
							y: -5,
							boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
						}}
					>
						<div className="px-4 py-5 sm:p-6">
							<span className="flex items-center text-sm font-medium text-gray-400">
								<BarChart2 size={20} className="mr-2" />
								Voucher
							</span>
							<p className="mt-1 text-3xl font-semibold text-gray-100">
								132
							</p>
						</div>
					</motion.div>
					<motion.div
						className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
						whileHover={{
							y: -5,
							boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
						}}
					>
						<div className="px-4 py-5 sm:p-6">
							<span className="flex items-center text-sm font-medium text-gray-400">
								<BarChart2 size={20} className="mr-2" />
								inventory
							</span>
							<p className="mt-1 text-3xl font-semibold text-gray-100">
								230
							</p>
						</div>
					</motion.div>
					<motion.div
						className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
						whileHover={{
							y: -5,
							boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
						}}
					>
						<div className="px-4 py-5 sm:p-6">
							<span className="flex items-center text-sm font-medium text-gray-400">
								<BarChart2 size={20} className="mr-2" />
								Expired coupon
							</span>
							<p className="mt-1 text-3xl font-semibold text-gray-100">
								16
							</p>
						</div>
					</motion.div>
					<motion.div
						className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
						whileHover={{
							y: -5,
							boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
						}}
					>
						<div className="px-4 py-5 sm:p-6">
							<span className="flex items-center text-sm font-medium text-gray-400">
								<BarChart2 size={20} className="mr-2" />
								used
							</span>
							<p className="mt-1 text-3xl font-semibold text-gray-100">
								90
							</p>
						</div>
					</motion.div>
					<motion.div
						className="bg-gray-800 sm:col-span-4 md:col-span-1 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 h-16 md:h-full"
						whileHover={{
							y: -5,
							boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
						}}
					>
						<div
							className="text-white group w-full h-full text-xl flex justify-center items-center cursor-pointer"
							onClick={() =>
								document.getElementById("Add_Car").showModal()
							}
						>
							<div className="group-hover:scale-110 duration-300 transition-all gap-3 ease-in-out flex ">
								<IoAddCircle className="w-7 h-auto" />
								Add Voucher
							</div>
						</div>
					</motion.div>

					<div className="md:col-span-5 sm:col-span-4 w-full">
						<VouchersManagement />
					</div>
				</motion.div>

				{/* CHARTS */}
				<dialog id="Add_Car" className="modal">
					<div className="modal-box backdrop-blur-3xl bg-gray-100  shadow-gray-500 shadow-md bg-opacity-0 w-full h-[430px] flex rounded-xl">
						<div className=" rounded-lg shadow-lg w-full">
							<h2 className="text-xl text-white px-3">
								<textarea
									className="textarea textarea-bordered h-[10px] w-full"
									placeholder="Terms of Use"
									name="TermsOfUse"
									value={formData.TermsOfUse}
									onChange={(e) =>
										setFormData({
											...formData,
											TermsOfUse: e.target.value,
										})}
								></textarea>
							</h2>
							<h2 className="text-xl text-white p-3 grid grid-cols-2 gap-2">
								<Toaster
									position="top-center"
									reverseOrder={false}
								/>
								<textarea
									className="textarea textarea-bordered h-[10px]"
									placeholder="discount"
									name="discount"
									value={formData.discount}
									onChange={(e) =>
										setFormData({
											...formData,
											discount: e.target.value,
										})}
								></textarea>
										<textarea
									className="textarea textarea-bordered h-[10px]"
									placeholder="Quanity"
									name="quantity"
									value={formData.quantity}
									onChange={(e) =>
										setFormData({
											...formData,
											quantity: e.target.value,
										})}
								></textarea>
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant={"outline"}
											className={cn(
												"justify-start text-left bg-black border-black z-50 font-normal",
												!dateManufacture && "text-muted-foreground"
											)}
											onClick={() =>
												document
													.getElementById(
														"Add_Performances"
													)
													.showModal()
											}
										>
											<CalendarIcon className="mr-2 h-4 w-4" />
											{dateManufacture ? (
												format(dateManufacture, "PPP")
											) : (
												<span className="opacity-50">Date Manufacture</span>
											)}
										</Button>
									</PopoverTrigger>
									<dialog
										id="Add_Performances"
										className="modal "
									>
										<div className="w-auto shadow-md rounded-xl bg-opacity-0 backdrop-blur-xl relative top-36 mr-52">
											
												<Calendar
													mode="single"
													selected={dateManufacture}
													onSelect={setDateManufacture}
													initialFocus
													className=" z-50 bg-black"
												/>
											
										</div>
										<form
											method="dialog"
											className="modal-backdrop w-full absolute h-screen"
										>
											<button className="">Close</button>
										</form>
									</dialog>
								</Popover>
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant={"outline"}
											className={cn(
												" justify-start text-left bg-black border-black z-50 font-normal",
												!dateExpiry && "text-muted-foreground"
											)}
											onClick={() =>
												document
													.getElementById(
														"Add_Performance"
													)
													.showModal()
											}
										>
											<CalendarIcon className="mr-2 h-4 w-4" />
											{dateExpiry ? (
												format(dateExpiry, "PPP")
											) : (
												<span className="opacity-50">Date Expiry</span>
											)}
										</Button>
									</PopoverTrigger>
									<dialog
										id="Add_Performance"
										className="modal "
									>
										<div className="w-auto shadow-md rounded-xl bg-opacity-0 backdrop-blur-xl relative top-36 ml-60">
											
												<Calendar
													mode="single"
													selected={dateExpiry}
													onSelect={setDateExpiry}
													initialFocus
													className=" z-50 bg-black"
												/>
											
										</div>
										<form
											method="dialog"
											className="modal-backdrop w-full absolute h-screen"
										>
											<button className="">Close</button>
										</form>
									</dialog>
								</Popover>
							</h2>
							<div className="w-full bg-black p-4 h-[160px]  rounded-2xl bg-opacity-20">
								<ScrollArea>
									<div className="flex space-x-3">
										{imgs.map((img, index) => (
											<div>
												<IoIosClose
													className="w-6 h-6 cursor-pointer"
													onClick={() =>
														handleRemoveImg(index)
													}
												/>
												<img
													key={index}
													src={img}
													alt={`img-${index}`}
													className="w-auto h-20 object-cover rounded-xl"
												/>
											</div>
										))}
									</div>
									<ScrollBar
										orientation="horizontal"
										className="bg-white bg-opacity-20"
									/>
								</ScrollArea>

								<div className="flex justify-between border-t py-2 border-t-gray-700">
									<div className="flex gap-1 items-center">
										<CiImageOn
											className="fill-[#2191d8] w-6 h-6 cursor-pointer"
											onClick={() =>
												imgRef.current.click()
											}
										/>
									</div>

									<input
										type="file"
										hidden
										ref={imgRef}
										onChange={handleImgChange}
										accept="image/*"
										multiple
									/>
								</div>
							</div>

							<div className="flex items-center">
								<div className="mt-4 flex w-full justify-end">
									<Button
										variant="secondary"
										className="bg-opacity-40 rounded-xl">
									
										Add
									</Button>
								</div>
							</div>
						</div>
					</div>
					<form method="dialog" className="modal-backdrop">
						<button className="outline-none"
							onClick={() => resetForm()}>Close</button>
					</form>
				</dialog>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
			</main>
		</div>
	);
};
export default Vouchers;
