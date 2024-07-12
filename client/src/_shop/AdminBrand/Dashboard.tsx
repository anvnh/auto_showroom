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
import { useDropzone } from 'react-dropzone'; // If using react-dropzone
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { IoCloseSharp } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";

const Dashboard = () => {

    const [img, setImg] = useState(null);
	const imgRef = useRef(null);
	const [success, setSuccess] = useState(false);
    
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
		exterior_color: "",
		interior_color: "",
		fuel_type: "",
		seat_capacity: "",
		cargo_space: "",
		audio_system: "",
		price: "",
		quantity: "",
		warranty: "",
		image: "",
	});

    const { mutate: addCar, isError, error, isPending } = useMutation({
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
			toast.success("Car created successfully");
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
				exterior_color: "",
				interior_color: "",
				fuel_type: "",
				seat_capacity: "",
				cargo_space: "",
				audio_system: "",
				price: "",
				quantity: "",
				warranty: "",
				image: "",
			});
			
		},
		onError: (error) => {
			toast.error(error.message);
		}
	});

    const [currentPage, setCurrentPage] = useState("");
    const [selectedSection, setSelectedSection] = useState("");
    const [showDiv, setShowDiv] = useState(false);
    
    const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
    
    const handleSubmit = () => {
        // Send formData to the server
        formData.image = img;
        console.log(formData);
        addCar(formData);
    }

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

    const openModal = () => {
        setShowDiv(true);
    };

    const closeModal = () => {
        setShowDiv(false);
    };

    const handleImgChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setImg(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

    return (
		<div className="w-full h-full flex">
			<div className="hidden xl:block">
				<div className="flex">
					<div className="bg-gray-700 w-[300px] h-[600px] rounded-xl p-5 space-y-3 font-bold shadow-md">
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
											onClick={openModal}
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
			{showDiv && (
				<div className="fixed top-0 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-25 z-50">
					<div
						data-aos="fade-in"
						className="backdrop-blur-3xl bg-gray-950 bg-opacity-45 p-5 rounded-lg shadow-lg w-[700px]"
					>
						<div className="flex justify-end">
							<button onClick={closeModal}>
								<IoIosClose className="w-[30px] h-[30px]" />
							</button>
						</div>
						<h2 className="text-xl text-white p-3 grid grid-cols-2 gap-2">
							<textarea
								className="textarea textarea-bordered h-[10px]"
								placeholder="Bio"
								name="bio"
								onChange={handleInputChange}
							></textarea>
							<textarea
								className="textarea textarea-bordered h-[10px]"
								placeholder="Brand"
								name="brand"
								onChange={handleInputChange}
							></textarea>
							<textarea
								className="textarea textarea-bordered  h-[10px]"
								placeholder="Model"
								name="car_model"
								onChange={handleInputChange}
							></textarea>
							<textarea
								className="textarea textarea-bordered  h-[10px]"
								placeholder="Production year"
								name="production_year"
								onChange={handleInputChange}
							></textarea>
							<textarea
								className="textarea textarea-bordered  h-[10px]"
								placeholder="Body style"
								name="body_style"
								onChange={handleInputChange}
							></textarea>
							<textarea
								className="textarea textarea-bordered  h-[10px]"
								placeholder="Engine"
								name="engine"
								onChange={handleInputChange}
							></textarea>
							<textarea
								className="textarea textarea-bordered h-[10px]"
								placeholder="Transmission"
								name="transmission"
								onChange={handleInputChange}
							></textarea>
							<textarea
								className="textarea textarea-bordered  h-[10px]"
								placeholder="Drive type"
								name="drive_type"
								onChange={handleInputChange}
							></textarea>
							<textarea
								className="textarea textarea-bordered h-[10px]"
								placeholder="Exterior color"
								name="exterior_color"
								onChange={handleInputChange}
							></textarea>
							<textarea
								className="textarea textarea-bordered h-[10px]"
								placeholder="Interior color"
								name="interior_color"
								onChange={handleInputChange}
							></textarea>
							<textarea
								className="textarea textarea-bordered h-[10px]"
								placeholder="Fuel type"
								name="fuel_type"
								onChange={handleInputChange}
							></textarea>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										className="bg-black border-none h-[48px]"
									>
										<div className="w-full flex justify-start text-gray-400">
											Performance
										</div>
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-80 bg-black bg-opacity-50 backdrop-blur-md">
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
													onChange={handleInputChange}
												/>
											</div>
										</div>
									</div>
								</PopoverContent>
							</Popover>
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
						{/* Input for manual selection */}
						<div className="w-full bg-black p-4 h-[200px] rounded-2xl bg-opacity-20">
							{img && (
								<div className="relative w-auto mx-auto">
									<IoCloseSharp
										className="absolute top-0 right-0 text-white bg-black rounded-full w-5 h-5 cursor-pointer"
										onClick={() => {
											setImg(null);
											imgRef.current.value = null;
										}}
									/>
									<img
										src={img}
										className="w-full mx-auto h-28 object-contain rounded"
									/>
								</div>
							)}
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
			)}
			<div className="block xl:hidden w-full ss:pt-12">
				<div className="justify-center w-full flex">
					<DashBoardRepon />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
