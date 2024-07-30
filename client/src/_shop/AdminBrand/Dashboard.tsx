import { useState, useEffect, useRef } from "react";
import { FaCar } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";
import ProductManagement from "./ProductManagement";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import DashBoardRepon from "../AdminBranchRepon/DashBoardRepon";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { CiImageOn } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";

const Dashboard = () => {
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

	const {
		mutate: addCar,
		isError,
		error,
		isPending,
	} = useMutation({
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

	const [currentPage, setCurrentPage] = useState("");
	const [selectedSection, setSelectedSection] = useState("");
	const [showDiv, setShowDiv] = useState(false);

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
		<div className="w-full h-full flex">
			<div className="hidden xl:block">
				<div className="flex">
					<div className="bg-gray-700 w-[300px] h-[600px] rounded-tr-xl rounded-br-xl p-5 space-y-3 font-bold shadow-md">
						<div
							onClick={() =>
								handleNavClick_repon("Product_Management")
							}
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
							onClick={() =>
								handleNavClick_repon("Order_Management")
							}
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
					<div className="flex-1 pl-5">
						{currentPage === "Product_Management" && (
							<div
								data-aos="slide-left"
								className="grid grid-cols-2 gap-[980px]"
							>
								<div className="w-[1250px] h-full bg-gray-700 rounded-xl shadow-md">
									<ProductManagement />
								</div>
								<div className="w-[260px] h-[270px] bg-gray-700 rounded-xl shadow-md flex items-start">
									<div className="p-5 space-y-3">
										<Button
											className="bg-primary bg-opacity-50 text-white w-56 h-10 text-md items-center flex justify-start"
											onClick={() =>
												document
													.getElementById("Add_Car")
													.showModal()
											}
										>
											<IoIosAddCircleOutline />
											<p className="pl-4">Add product</p>
										</Button>
										<div className="w-[230px] justify-center flex">
											<hr className="w-[50%] border-white relative top-3 pb-8" />
										</div>
										<div
											data-aos="fade-left"
											data-aos-delay="700"
										>
											<div className="flex gap-32">
												<div className="flex gap-4 items-start">
													<div className="space-y-5">
														<div>Quantity</div>
														<div className="flex">
															<p>Color:</p>
															<div className="pl-16 flex gap-5">
																<div className="bg-red-500 w-[20px] h-[20px] rounded-full cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out"></div>
																<div className="bg-blue-400 w-[20px] h-[20px] rounded-full cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out"></div>
																<div className="bg-black w-[20px] h-[20px] rounded-full cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out"></div>
															</div>
														</div>
														<div className="flex w-full gap-3 justify-end items-center pr-5">
															<div>Search:</div>
															<input
																type="text"
																className="bg-white w-[150px] border-2 text-black border-gray-400 rounded-md font-normal"
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
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

			<dialog id="Add_Car" className="modal">
				<div className="modal-box backdrop-blur-3xl bg-gray-950 bg-opacity-45 w-full h-full flex ">
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
								className="modal w-full"
							>
								<div className="w-[500px] bg-gray-700 rounded-xl p-3 bg-opacity-20 backdrop-blur-sm z-5 relative top-10">
									<div className="grid gap-4ss">
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
													value={formData.horsepower}
													onChange={handleInputChange}
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
													onChange={handleInputChange}
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
													value={formData.top_speed}
													onChange={handleInputChange}
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
													onChange={handleInputChange}
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
										onClick={() => imgRef.current.click()}
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
			<div className="block xl:hidden w-full ss:pt-12">
				<div className="justify-center w-full flex">
					<DashBoardRepon />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
