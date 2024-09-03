import { useState, useRef, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { FaCartPlus } from "react-icons/fa6";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import toast, { Toaster } from "react-hot-toast";
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

const ProductRepon = () => {
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

	useEffect(() => {
		if (car && car.images && car.images.length > 0) {
			setSelectedImage(car.images[0]);
		}
	}, [car]);
	return (
		<section className="mt-12">
			<div className="block xl:hidden">
			
				{/* {isLoading && <LoadingSpinner />} */}
				{isLoading && <LoadingSpinner />}
				{!isLoading && !isRefetching && car && (
					<div className="block xl:hidden px-5 sm:px-40 ss:px-24 ">
						<div className="w-full h-full ">
							<div className="bg-white w-full rounded-xl p-3 h-auto">
								<div className="w-full h-[200px] sm:h-[400px] mb-5 relative flex justify-center">
									<div
										className="bg-cover bg-center w-full h-full ss:w-[500px] sm:w-[700px] sm:h-[400px] object-cover rounded-xl cursor-pointer"
										style={{
											backgroundImage: `url(${selectedImage})`,
										}}
										onClick={handleImageClick}
									></div>
								</div>
								<div className="w-full h-auto flex items-center justify-center relative px-10">
									<button
										className="absolute left-0 z-10 pl-2 w-[30px] scale-[2] text-black"
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
												className="flex w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-cover cursor-pointer flex-shrink-0"
												onClick={() =>
													handleThumbnailClick(image)
												}
											>
												<figure className="hover01">
													<img
														src={image}
														alt=""
														className="w-[200px] h-full object-cover rounded-md transform transition-transform duration-300 hover:scale-110"
													/>
												</figure>
											</div>
										))}
									</div>
									<button
										className="absolute right-0 z-10 w-[30px] scale-[2] text-black"
										onClick={scrollRight}
									>
										<FaChevronRight />
									</button>
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
								<h1 className="font-syncopate font-bold text-black pt-5 text-center text-2xl">
									{car.brand}
									&nbsp;{car.car_model}
								</h1>
								<p className=" text-xl font-bold text-center my-3 text-blue-500">
									$&nbsp;{car.price}
								</p>
								<div className="sm:pl-24 ss:pl-12">
									<div className="w-full justify-center flex">
										<hr className="w-1/2 border-black  border-opacity-30 relative top-3 " />
									</div>
                                    <div className="pt-6 text-xl text-black">
                                        <div className="flex font-poppins mb-2">
                                            Availability: &nbsp;{" "}
                                            {car.quantity !== 0 ? (
                                                <p> In stock</p>
                                            ) : (
                                                <p>Out of stock</p>
                                            )}
                                        </div>
                                        {/* TODO */}
                                        <div className="font-bold">Free ship</div>
                                        <div className="text-xl flex items-center space-x-4">
                                            <div>Quantity: {car.quantity}</div>
                                        </div>
                                        <div className="flex"></div>
                                    </div>

                                    <hr className="w-full border-1 border-black border-opacity-30 relative top-3 " />

                                    <div className="pt-3 text-[18px] text-black">
                                        <p className="pt-4 flex items-center">
                                            <span className="font-bold pr-2">Production Year:</span> {car.production_year}
                                        </p>
                                        <p className="pt-4 flex items-center">
                                        <span className="font-bold pr-2">Body Style:</span> {car.body_style}
                                        </p>
                                        <p className="pt-4 flex items-center">
                                        <span className="font-bold pr-2">Engine:</span> {car.engine}
                                        </p>
                                        <p className="pt-4 items-center">  
                                        <span className="font-bold pr-1">Transmission:</span> {car.transmission}
                                        </p>
                                        <p className="pt-4 flex items-center">
                                        <span className="font-bold pr">Drive Type:</span> {car.drive_type}
                                        </p>
                                        <p className="pt-4 flex items-center">
                                        <span className="font-bold pr-2">Fuel Type:</span> {car.fuel_type}
                                        </p>
                                    </div>

                                    <div className="pt-3">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" className="border-black text-[18px]
                                                flex bg-gray-400  p-3 rounded-md hover:bg-black duration-300 ease-in-out justify-center detail-button text-black px-4 py-2 md:px-6 md:py-3  items-center transition-all  hover:text-white font-bold text-sm md:text-base text-center relative overflow-hidden border shadow-xl before:absolute before:right-0 before:top-0 before:h-[120px] before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[240px]
                                                ">
                                                    More details ... 
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[425px] bg-gray-700 text-white bg-opacity-55 backdrop-blur-md ">
                                                <DialogHeader>
                                                    <DialogTitle>More details</DialogTitle>
                                                </DialogHeader>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <p className="pt-4 flex items-center"> 	<span className="font-bold pr-2">Production Year:</span> {car.production_year} </p>
                                                    <p className="pt-4 flex items-center"> 	<span className="font-bold pr-2">Body Style:</span> {car.body_style} </p>
                                                    <p className="pt-4 items-center col-span-2">  
                                                    <span className="font-bold pr-1">Engine:</span> {car.engine}
                                                    </p>
                                                    <p className="pt-4 items-center col-span-2">  
                                                    <span className="font-bold pr-1">Transmission:</span> {car.transmission}
                                                    </p>
                                                    <p className="pt-4 items-center col-span-2">   	<span className="font-bold pr-2">Drive Type:</span> {car.drive_type} </p>
                                                    <p className="pt-4 flex items-center"> 	<span className="font-bold pr-2">Fuel Type:</span> {car.fuel_type} </p>
                                                    <p className="pt-4 items-center col-span-2"> 	<span className="font-bold pr-2">Horsepower:</span> {car.horsepower} hp </p>
                                                    <p className="pt-4 flex items-center"> 	<span className="font-bold pr-2">Torque:</span> {car.torque} Nm </p>
                                                    <p className="pt-4 flex items-center"> 	<span className="font-bold pr-2">Top Speed:</span> {car.top_speed} km/h </p>
                                                    <p className="pt-4 flex items-center"> 	<span className="font-bold pr-2">Acceleration:</span> {car.acceleration} </p>
                                                    <p className="pt-4 flex items-center"> 	<span className="font-bold pr-2">Seat Capacity:</span> {car.seat_capacity} </p>
                                                </div>
                                              
                                            </DialogContent>
                                        </Dialog>
                                    </div>

                                    <hr className="w-1/2 border-black border-opacity-30 relative top-3 " />
								</div>
								<div className="justify-evenly pt-12 gap-2 items-end flex text-white mt-auto">
									<button className="flex bg-gray-400 w-[200px] h-[55px] p-3 rounded-md hover:bg-black duration-300 ease-in-out justify-center detail-button text-black px-4 py-2 md:px-6 md:py-3 lg:w-[200px] lg:h-[50px] items-center transition-all  hover:text-white font-bold text-sm md:text-base text-center relative overflow-hidden border-gray-600 border shadow-xl before:absolute before:right-0 before:top-0 before:h-[120px] before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[210px] ">
										<HiMiniViewfinderCircle className="h-auto w-[30px]" />
										<p className="pl-4 text-md text-center">
											{" "}
											{/* TODO */}
											<Link 	to={`/shop/payment/${car._id}`}>Buy now</Link>
										</p>
									</button>
									<button
										className="flex bg-gray-400 w-[200px] h-[55px] p-3 rounded-md hover:bg-black duration-300 ease-in-out justify-center detail-button text-black px-4 py-2 md:px-6 md:py-3 lg:w-[200px] lg:h-[50px] items-center transition-all  hover:text-white font-bold text-sm md:text-base text-center relative overflow-hidden border-gray-600 border shadow-xl before:absolute before:right-0 before:top-0 before:h-[120px] before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[210px] "
										onClick={() => handleAddToCart(car._id)}
									>
										<FaCartPlus className="h-auto w-[30px]" />
										<div className="pl-4 text-md text-center">
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
				)}
			</div>
		</section>
	);
};

export default ProductRepon;
