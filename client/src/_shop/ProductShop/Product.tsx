import { useState, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { FaCartPlus } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";

const Product = () => {
	const ID = useParams();
	const carId = ID.id;
	const [isModalOpen, setIsModalOpen] = useState(false); 
	const thumbnailRef = useRef(null); 

	// get single car
	const { data: car, isLoading, refetch, isRefetching } = useQuery({
		queryKey: ["car", carId],
		queryFn: async () => {
			try {
				const response = await fetch(`/api/car/${carId}`);
				const data = await response.json();

				// console.log(data);

				if (!response.ok) {
					throw new Error(data.message || "Something went wrong!");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

	const handleThumbnailClick = (image) => {
		setSelectedImage(image);
	};

	const handleImageClick = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const scrollLeft = () => {
		if (thumbnailRef.current) {
			thumbnailRef.current.scrollBy({
				top: 0,
				left: -300,
				behavior: "smooth",
			});
		}
	};

	const scrollRight = () => {
		if (thumbnailRef.current) {
			thumbnailRef.current.scrollBy({
				top: 0,
				left: 300,
				behavior: "smooth",
			});
		}
	};

	const [selectedColor, setSelectedColor] = useState<null | string>(null);
	const colors = ["black", "white", "red", "green", "blue", "yellow"];

	const [quantity, setQuantity] = useState(1);

	const decreaseQuantity = () => {
		setQuantity((prev) => Math.max(1, prev - 1));
	};

	const increaseQuantity = () => {
		setQuantity((prev) => (car.quantity > prev ? prev + 1 : prev));
	};
	
	const [selectedImage, setSelectedImage] = useState(car?.images[0]);

	return (
		<section>
			{/* {isLoading && <LoadingSpinner />} */}
			{isLoading && <LoadingSpinner />}
			{!isLoading && !isRefetching && (
				<div>
					<div className="flex text-white text-center z-10 pt-5 text-5xl font-syncopate font-bold justify-center">
						<h1>{car.brand}</h1>
						<h1>&nbsp;{car.car_model}</h1>
					</div>
					<div className="w-full h-screen pt-12 px-24">
						<div className="flex gap-6">
							<div className="bg-white shadow-md rounded-xl shadow-black w-[1800px] h-[750px] flex flex-col">
								<div className="w-full h-[80%] relative p-6 flex justify-center items-center px-12">
									<div
										className="bg-cover bg-center w-full h-full object-cover rounded-3xl cursor-pointer"
										style={{
											backgroundImage: `url(${selectedImage})`,
										}}
										onClick={handleImageClick}
									></div>
								</div>

								<hr className="w-1/2 border-black mx-auto relative top-3 pb-12" />

								<div className="w-[1100px] h-auto p-4 flex items-center justify-center relative px-32 pb-6">
									<button
										className="absolute left-0 z-10 pl-7 w-[30px] scale-[3] text-black"
										onClick={scrollLeft}
									>
										<FaChevronLeft />
									</button>
									<div
										className="flex overflow-hidden space-x-4"
										ref={thumbnailRef}
									>
										{car.images.map((image, index) => (
											<div
												key={index}
												className="flex w-[100px] h-[100px] md:w-[300px] md:h-[150px] object-cover cursor-pointer flex-shrink-0"
												onClick={() =>
													handleThumbnailClick(image)
												}
											>
												<figure className="hover01 overflow-hidden">
													<img
														src={image}
														alt=""
														className="w-full h-full object-cover rounded-md transform transition-transform duration-300 hover:scale-110"
													/>
												</figure>
											</div>
										))}
									</div>
									<button
										className="absolute right-0 z-10 pr-12 w-[30px] scale-[3] text-black"
										onClick={scrollRight}
									>
										<FaChevronRight />
									</button>
								</div>

								{/* Modal phóng to ảnh */}
								{isModalOpen && (
									<div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
										<div className="relative">
											<button
												className="absolute top-0 right-0 m-4 text-white text-3xl"
												onClick={closeModal}
											>
												&times;
											</button>
											<img
												src={selectedImage}
												alt=""
												className="w-[1500px] h-auto max-h-screen object-cover rounded-xl"
											/>
										</div>
									</div>
								)}
							</div>

							<div className="text-black font-poppins bg-white border border-white shadow-md rounded-2xl shadow-black w-[1200px] h-auto p-5 flex flex-col">
								<div className="p-5 flex-grow font-poppins">
									<h1 className="font-syncopate font-bold text-3xl">
										{car.brand}
										&nbsp;{car.car_model}
									</h1>
									<p className=" text-2xl font-bold my-3 text-blue-500">
										$&nbsp;{car.price}
									</p>

									<hr className="w-1/2 border-black border-opacity-30 relative top-3 " />

									<div className="pt-10 text-xl space-y-4">
										<div className="flex font-poppins">
											Availability: &nbsp;{" "}
											{car.quantity !== 0 ? (
												<p> In stock</p>
											) : (
												<p>Out of stock</p>
											)}
										</div>
										<div>Free ship</div>
										<div className="flex"></div>
									</div>

									<hr className="w-1/2 border-black border-opacity-30 relative top-3 " />

									<div className="pt-5 text-xl w-full flex items-center">
										<p className="">
											Select color: &nbsp; &nbsp;
										</p>
										{/* <ul className="flex space-x-2">
											<li className="border border-gray-500 radio rounded-full bg-black"></li>
											<li className="border border-gray-500 radio rounded-full bg-white"></li>
											<li className="border border-gray-500 radio rounded-full bg-red-500"></li>
											<li className="border border-gray-500 radio rounded-full bg-green-500"></li>
											<li className="border border-gray-500 radio rounded-full bg-blue-500"></li>
											<li className="border border-gray-500 radio rounded-full bg-yellow-500"></li>
										</ul> */}
										<div></div>
										{colors.map((color) => (
											<button
												key={color}
												className={`border-2 boder-black rounded-full focus:outline-none mx-1 ${
													selectedColor === color
														? "w-8 h-8"
														: "w-6 h-6"
												}`}
												style={{
													backgroundColor: color,
												}}
												onClick={() =>
													setSelectedColor(color)
												}
											/>
										))}
									</div>

									<div className="text-xl pt-4 flex items-center space-x-4">
										<div>Quantity:</div>
										<div className="flex items-center bg-gray-100 rounded-lg overflow-hidden w-24">
											<button
												onClick={decreaseQuantity}
												className="px-2 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none"
											>
												-
											</button>
											<span className="flex-grow text-center py-1">
												{quantity}
											</span>
											<button
												onClick={increaseQuantity}
												className="px-2 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none"
											>
												+
											</button>
										</div>
									</div>
								</div>

								<div className="justify-evenly items-end flex text-white mt-auto">
									<button className="flex bg-gray-800 w-[200px] h-[55px] p-3 rounded-md hover:bg-black duration-300 ease-in-out">
										<HiMiniViewfinderCircle className="h-auto w-[30px]" />
										<p className="pl-4 text-xl">
											{" "}
											View details
										</p>
									</button>
									<button className="flex bg-gray-800 w-[200px] h-[55px] p-3 rounded-md hover:bg-black duration-300 ease-in-out">
										<FaCartPlus className="h-auto w-[30px]" />
										<p className="pl-4 text-xl">
											{" "}
											Add to cart
										</p>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Product;
