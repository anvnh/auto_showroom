import { useState, useRef, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { FaCartPlus } from "react-icons/fa6";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import toast, { Toaster } from "react-hot-toast";
import ProductRepon from "./ProductRepon";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Product = () => {
	const ID = useParams();
	const carId = ID.id;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const thumbnailRef = useRef(null);

	// get single car
	const {
		data: car,
		isLoading,
		refetch,
		isRefetching,
	} = useQuery({
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

	const { mutate: addToCart, isPending: isAddingToCart } = useMutation({
		mutationFn: async (productId) => {
			try {
				const response = await fetch(
					`/api/user/add/cart/${productId}`,
					{
						method: "POST",
					}
				);
				const data = await response.json();

				if (!response.ok) {
					throw new Error(data.error || "Something went wrong!");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
		onSuccess: () => {
			toast.success("Product added to cart", {
				duration: 2000,
			});
			// setTimeout(() => { setLoadingProductId (null) });
		},
		onError: (error) => {
			// TODO
			toast.error("Item already in cart", {
				duration: 2000,
			});
			// setTimeout(() => { setLoadingProductId (null) });
		},
	});

	const handleAddToCart = (productId) => {
		// setLoadingProductId(productId);
		addToCart(productId);
	};

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
			console.log("ok");
		}
	};

	const scrollRight = () => {
		if (thumbnailRef.current) {
			thumbnailRef.current.scrollBy({
				top: 0,
				left: 300,
				behavior: "smooth",
			});
			console.log("ok");
		}
	};

	const [quantity, setQuantity] = useState(1);

	const decreaseQuantity = () => {
		setQuantity((prev) => Math.max(1, prev - 1));
	};

	const increaseQuantity = () => {
		setQuantity((prev) => (car.quantity > prev ? prev + 1 : prev));
	};

	const [selectedImage, setSelectedImage] = useState(car?.images[0]);

	useEffect(() => {
		if (car && car.images && car.images.length > 0) {
			setSelectedImage(car.images[0]);
		}
	}, [car]);

	return (
		<section className="pb-44">
					<Toaster position="top-center" reverseOrder={false} />
			<div className="hidden xl:block">
				{/* {isLoading && <LoadingSpinner />} */}
				{isLoading && <LoadingSpinner />}
				{!isLoading && !isRefetching && car && (
					<div>
						
						<div className="flex text-white text-center z-10 pt-5 text-5xl font-syncopate font-bold justify-center">
							<h1>{car.brand}</h1>
							<h1>&nbsp;{car.car_model}</h1>
						</div>
						<div className="w-full h-screen pt-12 px-24">
							<div className="flex gap-6">
								<div className="bg-white  shadow-md rounded-xl shadow-black w-[1800px] h-[860px] flex flex-col">
									<div className="w-full h-[80%] relative p-2 flex justify-center items-center px-12">
										<div
											className="bg-cover bg-center  w-full h-[600px] object-cover rounded-3xl cursor-pointer "
											style={{
												backgroundImage: `url(${selectedImage})`,
											}}
											onClick={handleImageClick}
										></div>
									</div>

									<hr className="w-1/2 border-black mx-auto relative top-3 pb-5" />

									<div className="w-[1100px] h-auto p-4 flex items-center justify-center relative px-32 pb-6">
										<button
											className="absolute left-0 z-10 pl-7 w-[30px] scale-[3] text-black"
											onClick={scrollLeft}
										>
											<FaChevronLeft />
										</button>
										<div
											className="flex  overflow-hidden  space-x-4"
											ref={thumbnailRef}
										>
											{car.images.map((image, index) => (
												<div
													key={index}
													className="flex w-[100px] h-[100px] md:w-[200px] md:h-[150px] object-cover cursor-pointer flex-shrink-0"
													onClick={() =>
														handleThumbnailClick(
															image
														)
													}
												>
													<figure className="hover01">
														<img
															src={image}
															alt=""
															className="w-[300px] h-full object-cover rounded-md transform transition-transform duration-300 hover:scale-110"
														/>
													</figure>
												</div>
											))}
										</div>
										<button
											className="absolute right-0  z-10 pr-12 w-[30px] scale-[3] text-black"
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
													className="w-[1500px] h-[800px] object-cover bg-center rounded-xl"
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

										<div className="pt-6 text-xl">
											<div className="flex font-poppins mb-2">
												Availability: &nbsp;{" "}
												{car.quantity !== 0 ? (
													<p> In stock</p>
												) : (
													<p>Out of stock</p>
												)}
											</div>
                                            {/* TODO */}
											<div className="">Free ship</div>
											<div className="flex"></div>
										</div>

										<hr className="w-1/2 border-black border-opacity-30 relative top-3 " />

                                        <div className="pt-3 text-[18px]">
                                            <p className="pt-4 flex items-center">
                                                Production Year: {car.production_year}
                                            </p>
                                            <p className="pt-4 flex items-center">
                                                Body Style: {car.body_style}
                                            </p>
                                            <p className="pt-4 flex items-center">
                                                Engine: {car.engine}
                                            </p>
                                            <p className="pt-4 flex items-center">  
                                                Transmission: {car.transmission}
                                            </p>
                                            <p className="pt-4 flex items-center">
                                                Drive Type: {car.drive_type}
                                            </p>
                                            <p className="pt-4 flex items-center">
                                                Fuel Type: {car.fuel_type}
                                            </p>
                                        </div>

                                        <div className="pt-3">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="outline" className="border-black text-[18px]">
                                                        More details ... 
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[425px] bg-white bg-opacity-55 backdrop-blur-md text-black">
                                                    <DialogHeader>
                                                        <DialogTitle>More details</DialogTitle>
                                                        <DialogDescription>
                                                            More details about the car
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <p className="pt-4 flex items-center"> Production Year: {car.production_year} </p>
                                                        <p className="pt-4 flex items-center"> Body Style: {car.body_style} </p>
                                                        <p className="pt-4 flex items-center"> Engine: {car.engine} </p>
                                                        <p className="pt-4 flex items-center"> Transmission: {car.transmission} </p>
                                                        <p className="pt-4 flex items-center"> Drive Type: {car.drive_type} </p>
                                                        <p className="pt-4 flex items-center"> Fuel Type: {car.fuel_type} </p>
                                                        <p className="pt-4 flex items-center"> Horsepower: {car.horsepower} hp </p>
                                                        <p className="pt-4 flex items-center"> Torque: {car.torque} Nm </p>
                                                        <p className="pt-4 flex items-center"> Top Speed: {car.top_speed} km/h </p>
                                                        <p className="pt-4 flex items-center"> Acceleration: {car.acceleration} s </p>
                                                        <p className="pt-4 flex items-center"> Seat Capacity: {car.seat_capacity} </p>
                                                    </div>
                                                    <DialogFooter>
                                                        <DialogClose asChild>
                                                            <Button type="button" variant="secondary" className="bg-black text-white">
                                                                Close
                                                            </Button>
                                                        </DialogClose>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                        </div>

                                        <hr className="w-1/2 border-black border-opacity-30 relative top-3 " />

										<div className="text-xl pt-8 flex items-center space-x-4">
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

									<div className="justify-evenly items-end flex text-white ">
										<button className="flex bg-gray-400 w-[200px] h-[55px] p-3 rounded-md hover:bg-black duration-300 ease-in-out justify-center detail-button text-black px-4 py-2 md:px-6 md:py-3 lg:w-[200px] lg:h-[50px] items-center transition-all  hover:text-white font-bold text-sm md:text-base text-center relative overflow-hidden border-gray-600 border shadow-xl before:absolute before:right-0 before:top-0 before:h-[120px] before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[210px] ">
											<HiMiniViewfinderCircle className="h-auto w-[30px]" />
											<p className="pl-4 text-xl">
												{" "}
												{/* TODO */}
                                                <Link 
                                                    to={`/shop/payment/${car._id}`}
                                                >
                                                    Buy now
                                                </Link>
											</p>
										</button>
										<button
											className="flex bg-gray-400 w-[200px] h-[55px] p-3 rounded-md hover:bg-black duration-300 ease-in-out justify-center detail-button text-black px-4 py-2 md:px-6 md:py-3 lg:w-[230px] lg:h-[50px] items-center transition-all  hover:text-white font-bold text-sm md:text-base text-center relative overflow-hidden border-gray-600 border shadow-xl before:absolute before:right-0 before:top-0 before:h-[120px] before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[240px] "
											onClick={() =>
												handleAddToCart(car._id)
											}
										>
											<FaCartPlus className="h-auto w-[30px]" />
											<div className="pl-4 text-xl">
												{isAddingToCart ? (
													<LoadingSpinner />
												) : (
													<p>Add to cart</p>
												)}
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			<ProductRepon/>
		</section>
	);
};

export default Product;
