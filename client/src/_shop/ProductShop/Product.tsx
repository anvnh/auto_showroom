import React, { useState, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { FaCartPlus } from "react-icons/fa6";
import {
	car41,
	car42,
	car43,
	car44,
	car45,
	car46,
	car47,
	car418,
	car49,
} from "../../assets";

const Product = () => {
	const [selectedImage, setSelectedImage] = useState(car42); // Hình ảnh được chọn ban đầu
	const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái của modal
	const [quantity, setQuantity] = useState(1); // Số lượng sản phẩm, mặc định là 1
	const thumbnailRef = useRef(null); // Tạo ref cho phần tử chứa các thumbnail

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

	return (
		<div>
			<div className="text-black text-center z-10 pt-40 text-5xl font-syncopate font-bold">
				<h1>AUDI R8 COUPE 2022</h1>
			</div>
			<div className="w-full h-screen pt-12 px-24">
				<div className="flex gap-12">
					<div className="bg-white shadow-md rounded-xl shadow-black w-[1800px] h-[750px] flex flex-col">
						{/* Ảnh lớn */}
						<div className="w-full h-[80%] relative p-4 flex justify-center items-center px-12">
							<div
								className="bg-cover bg-center w-full h-full object-cover rounded-3xl cursor-pointer"
								style={{
									backgroundImage: `url(${selectedImage})`,
								}}
								onClick={handleImageClick}
							></div>
						</div>

						<hr className="w-1/2 border-black mx-auto relative top-3 pb-12" />
						{/* Các thumbnail */}
						<div className="w-[1100px] h-auto p-4 flex items-center justify-center relative px-32 pb-6">
							<button
								className="absolute left-0 z-10 pl-7 w-[30px] scale-[3] text-black"
								onClick={scrollLeft}
							>
								<FaChevronLeft />
							</button>
							<div
								className="flex overflow-hidden space-x-4"
								style={{
									scrollbarWidth: "none" /* Firefox */,
									"-ms-overflow-style":
										"none" /* IE and Edge */,
								}}
								ref={thumbnailRef}
							>
								{[car42, car44, car43, car45, car46, car47].map(
									(image, index) => (
										<div
											key={index}
											className="w-[100px] h-[100px] md:w-[250px] md:h-[150px] object-cover cursor-pointer flex-shrink-0"
											onClick={() =>
												handleThumbnailClick(image)
											}
										>
											<img
												src={image}
												alt=""
												className="w-full h-full object-cover hover:scale-110 transition-all ease-in-out duration-400 rounded-xl"
											/>
										</div>
									)
								)}
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

					<div className="bg-white shadow-md rounded-xl shadow-black w-[1200px] h-[600px]">
						<div className="p-5">
							<h1 className="text-black font-syncopate font-bold text-3xl">
								AUDI R8 COUPE 2022
							</h1>
							<p className="text-black text-2xl">$ 900 000</p>
							<hr className="w-1/2 border-black relative top-3 " />

							<div className="text-black pt-10 text-xl space-y-4">
								<div>Availability:</div>
								<div>Category:</div>
                                <div className="flex">
                                    <p>Color:</p>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
								<div className="flex">
									<div>Quantity:</div>

									<div className="pl-12">
										<input
											type="number"
											value={quantity}
											className="w-20 pl-6 text-center bg-white border-t border-b border-l border-r rounded-md border-gray-900 "
											onChange={(e) =>
												setQuantity(
													parseInt(e.target.value)
												)
											}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="justify-end items-end pr-12 pt-[250px] flex text-white gap-5">
                        <button className="flex bg-gray-800 w-[180px] h-[55px] p-3 rounded-md hover:bg-black duration-300 ease-in-out">
								<HiMiniViewfinderCircle className="h-auto w-[30px]" />
								<p className="pl-4 text-xl"> View details</p>
							</button>
							<button className="flex bg-gray-800 w-[180px] h-[55px] p-3 rounded-md hover:bg-black duration-300 ease-in-out">
								<FaCartPlus className="h-auto w-[30px]" />
								<p className="pl-4 text-xl"> Add to cart</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
