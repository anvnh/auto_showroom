import React from "react";
import { motion } from "framer-motion";
import { BarChart2 } from "lucide-react";
import { IoAddCircle } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosClose } from "react-icons/io";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { CiImageOn } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import ProductManagement from "../AdminBrand/ProductManagement";
import Header from "./comon/Header";

import AnalyticsTable from "./elementAnalytics/AnalyticsTable";

const ProductPage = () => {
	const [imgs, setImgs] = useState([]);
	const [colors, setColors] = useState([]);

	const imgRef = useRef(null);

	const queryClient = useQueryClient();

	const [formData, setFormData] = useState({
		horsepower: "",
		torque: "",
		top_speed: "",
		acceleration: "",
		bio: "",
		brand: "",
		car_model: "",
		production_year: "",
		body_style: "",
		engine: "",
		transmission: "",
		drive_type: "",
		colors: [],
		fuel_type: "",
		seat_capacity: "",
		cargo_space: "",
		audio_system: "",
		price: "",
		quantity: "",
		warranty: "",
		images: [],
	});

	const { mutate: addCar, isError, error, isPending, } = useMutation({
		mutationFn: async (formData) => {
			try {
				const res = await fetch("/api/car/add", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});

				const data = await res.json();
				if (!res.ok)
					throw new Error(data.error || "Failed to create car.");
				console.log(data);
				return data;
			} catch (error) {
				throw new Error(error.message);
			}
		},
		onSuccess: () => {
			setFormData({
				horsepower: "",
				torque: "",
				top_speed: "",
				acceleration: "",
				bio: "",
				brand: "",
				car_model: "",
				production_year: "",
				body_style: "",
				engine: "",
				transmission: "",
				drive_type: "",
				colors: [],
				fuel_type: "",
				seat_capacity: "",
				cargo_space: "",
				audio_system: "",
				price: "",
				quantity: "",
				warranty: "",
				images: [],
			});
			closeModal();
			toast.success("Car created successfully");
			// reload
			queryClient.invalidateQueries(["products"]);
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	// get all products
	const { data: products, isLoading, refetch, isRefetching, } = useQuery({
		queryKey: ["products"],
		queryFn: async () => {
			try {
				const response = await fetch("/api/car/all");
				const data = await response.json();

				console.log(data);

				if (!response.ok) {
					throw new Error(data.message || "Something went wrong!");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

	const { data: inventory } = useQuery({
		queryKey: ["carsData"],
		queryFn: async () => {
			try {
				const response = await fetch("/api/car/all");
				const data = await response.json();

				let total = 0;
				let total_amount = 0;

				data.forEach((car) => {
					total += Number(car.quantity);
					total_amount += Number(car.price.replace( /,/g, "")) * Number(car.quantity);
				});


				if (!response.ok) {
					throw new Error(data.message || "Something went wrong!");
				}

				console.log(total, total_amount);

				return { total, total_amount };

			} catch (error) {
				throw new Error(error);
			}
		},
	});

	const [currentPage, setCurrentPage] = useState("");
	const [selectedSection, setSelectedSection] = useState("");

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		// Send formData to the server
		formData.images = imgs;
		formData.colors = colors;
		// console.log(formData);
		addCar(formData);
	};

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

	const handleImgChange = (e) => {
		const files = Array.from(e.target.files);
		const updatedImgs = [...imgs];

		files.forEach((file) => {
			const reader = new FileReader();
			reader.onload = () => {
				updatedImgs.push(reader.result);
				// setImgs(updatedImgs);
				setImgs((prevImgs) => [...prevImgs, reader.result]);
			};
			reader.readAsDataURL(file);
		});
	};

	const handleRemoveImg = (indexToRemove) => {
		setImgs(imgs.filter((_, index) => index !== indexToRemove));
	};

	const closeModal = () => {
		const modal = document.getElementById("Add_Car");
		if (modal) {
			modal.close();
		}
	};
	return (
		<div>
			<Header title="Product" />
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
								Product
							</span>
							<p className="mt-1 text-3xl font-semibold text-gray-100">
								{products?.length}
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
								Sold
							</span>
							<p className="mt-1 text-3xl font-semibold text-gray-100">
								{/* TODO */}
								1000
							</p>
						</div>
					</motion.div>

					{inventory && (
						<>
							<motion.div
								className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
								whileHover={{
									y: -5,
									boxShadow:
										"0 25px 50px -12px rgba(0, 0, 0, 0.5)",
								}}
							>
								<div className="px-4 py-5 sm:p-6">
									<span className="flex items-center text-sm font-medium text-gray-400">
										<BarChart2 size={20} className="mr-2" />
										Inventory
									</span>
									<p className="mt-1 text-3xl font-semibold text-gray-100">
										{inventory.total}
									</p>
								</div>
							</motion.div>
							<motion.div
								className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
								whileHover={{
									y: -5,
									boxShadow:
										"0 25px 50px -12px rgba(0, 0, 0, 0.5)",
								}}
							>
								<div className="px-4 py-5 sm:p-6">
									<span className="flex items-center text-sm font-medium text-gray-400">
										<BarChart2 size={20} className="mr-2" />
										Total Amount
									</span>
									<p className="mt-1 text-3xl font-semibold text-gray-100">
										$
										{inventory.total_amount.toLocaleString()}
									</p>
								</div>
							</motion.div>
						</>
					)}

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
								Add product
							</div>
						</div>
					</motion.div>

					<div className="md:col-span-5 sm:col-span-4 w-full">
						<ProductManagement />
					</div>
				</motion.div>
				
				<dialog id="Add_Car" className="modal">
					<div className="modal-box backdrop-blur-3xl bg-gray-700 shadow-gray-500 shadow-md bg-opacity-0 w-full h-full flex ">
						<div className=" rounded-lg shadow-lg w-full">
							<h2 className="text-xl text-white px-3">
								<textarea
									className="textarea textarea-bordered h-[10px] w-full"
									placeholder="Bio"
									name="bio"
									value={formData.bio}
									onChange={handleInputChange}
								></textarea>
							</h2>
							<h2 className="text-xl text-white p-3 grid grid-cols-2 gap-2">
								<Toaster
									position="top-center"
									reverseOrder={false}
								/>
								<textarea
									className="textarea textarea-bordered h-[10px]"
									placeholder="Brand"
									name="brand"
									value={formData.brand}
									onChange={handleInputChange}
								></textarea>
								<textarea
									className="textarea textarea-bordered  h-[10px]"
									placeholder="Model"
									name="car_model"
									value={formData.car_model}
									onChange={handleInputChange}
								></textarea>
								<textarea
									className="textarea textarea-bordered  h-[10px]"
									placeholder="Production year"
									name="production_year"
									value={formData.production_year}
									onChange={handleInputChange}
								></textarea>
								<textarea
									className="textarea textarea-bordered  h-[10px]"
									placeholder="Body style"
									name="body_style"
									value={formData.body_style}
									onChange={handleInputChange}
								></textarea>
								<textarea
									className="textarea textarea-bordered  h-[10px]"
									placeholder="Engine"
									name="engine"
									value={formData.engine}
									onChange={handleInputChange}
								></textarea>
								<textarea
									className="textarea textarea-bordered h-[10px]"
									placeholder="Transmission"
									name="transmission"
									value={formData.transmission}
									onChange={handleInputChange}
								></textarea>
								<textarea
									className="textarea textarea-bordered  h-[10px]"
									placeholder="Drive type"
									name="drive_type"
									value={formData.drive_type}
									onChange={handleInputChange}
								></textarea>
								<textarea
									className="textarea textarea-bordered h-[10px]"
									placeholder="Fuel type"
									name="fuel_type"
									value={formData.fuel_type}
									onChange={handleInputChange}
								></textarea>

								<Button
									variant="outline"
									className="bg-black border-none h-[48px]"
									onClick={() =>
										document
											.getElementById("Add_Performance")
											.showModal()
									}
								>
									<div className="w-full flex justify-start text-gray-400">
										Performance
									</div>
								</Button>

								<dialog
									id="Add_Performance"
									className="modal "
								>
									<div className="w-[500px] bg-gray-700 shadow-white	 shadow-md rounded-xl p-3 bg-opacity-50 backdrop-blur-xl relative top-10">
										<div className="grid gap-4">
											<div className="grid gap-2">
												<div className="grid grid-cols-3 items-center gap-4">
													<Label htmlFor="width">
														Horse Power
													</Label>
													<Input
														id="width"
														defaultValue=""
														className="col-span-2 h-8"
														name="horsepower"
														value={
															formData.horsepower
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="grid grid-cols-3 items-center gap-4">
													<Label htmlFor="maxWidth">
														Torque
													</Label>
													<Input
														id="maxWidth"
														defaultValue=""
														className="col-span-2 h-8"
														name="torque"
														value={formData.torque}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="grid grid-cols-3 items-center gap-4">
													<Label htmlFor="height">
														Top Speed
													</Label>
													<Input
														id="height"
														defaultValue=""
														className="col-span-2 h-8"
														name="top_speed"
														value={
															formData.top_speed
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="grid grid-cols-3 items-center gap-4">
													<Label htmlFor="maxHeight">
														Acceleration
													</Label>
													<Input
														id="maxHeight"
														defaultValue=""
														className="col-span-2 h-8"
														name="acceleration"
														value={
															formData.acceleration
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
											</div>
										</div>
									</div>
									<form
										method="dialog"
										className="modal-backdrop w-full absolute h-screen"
									>
										<button className="">Close</button>
									</form>
								</dialog>

								<textarea
									className="textarea textarea-bordered h-[10px]"
									placeholder="Seat capacity"
									name="seat_capacity"
									onChange={handleInputChange}
								></textarea>
								<textarea
									className="textarea textarea-bordered h-[10px]"
									placeholder="Cargo capacity"
									name="cargo_space"
									onChange={handleInputChange}
								></textarea>
								<textarea
									className="textarea textarea-bordered h-[10px]"
									placeholder="Audio system"
									name="audio_system"
									onChange={handleInputChange}
								></textarea>
								<textarea
									className="textarea textarea-bordered h-[10px]"
									placeholder="Price"
									name="price"
									onChange={handleInputChange}
								></textarea>
								<textarea
									className="textarea textarea-bordered h-[10px]"
									placeholder="Quantity"
									name="quantity"
									onChange={handleInputChange}
								></textarea>
								<textarea
									className="textarea textarea-bordered h-[10px]"
									placeholder="Warranty"
									name="warranty"
									onChange={handleInputChange}
								></textarea>
							</h2>
							<div className="w-full bg-black p-4 h-[200px] rounded-2xl bg-opacity-20">
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
										className="bg-opacity-40 rounded-xl"
										onClick={handleSubmit}
									>
										{isPending ? <LoadingSpinner /> : "Add"}
									</Button>
								</div>
							</div>
						</div>
					</div>
					<form method="dialog" className="modal-backdrop">
						<button className="outline-none">Close</button>
					</form>
				</dialog>
				<AnalyticsTable />
			</main>
		</div>
	);
};

export default ProductPage;
