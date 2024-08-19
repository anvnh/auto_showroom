import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import calculateAvgRating from "@/utils/calculateAvgRating";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import QuantityCounter from "@/utils/QuantityCounter";
import { toast, Toaster } from "react-hot-toast";
import { Link, createSearchParams, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import VoucherPopup from "../payment/VoucherPopup";

const Cart = () => {
	const ID = useParams();
	const carId = ID.id;
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

	useEffect(() => {
		AOS.init({
			duration: 1200,
			easing: "ease-in-out",
			once: true,
			mirror: false,
			anchorPlacement: "top-bottom",
		});
	}, []);

	const queryClient = useQueryClient();
	const [deletingItems, setDeletingItems] = useState<{
		[key: string]: boolean;
	}>({});

	const { mutate: deleteItem, isPending: isDeleting } = useMutation({
		mutationFn: async ({ item_id }) => {
			try {
				const res = await fetch(`/api/user/delete/cart/${item_id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const data = await res.json();

				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
		onSuccess: (data, variables) => {
			toast.success("Car removed successfully");
			setDeletingItems((prev) => ({
				...prev,
				[variables.item_id]: false,
			}));
			queryClient.invalidateQueries({ queryKey: ["cart"] });
		},
		onError: (error, variables) => {
			setDeletingItems((prev) => ({
				...prev,
				[variables.item_id]: false,
			}));
			toast.error("Failed to remove item");
		},
	});

	const [quantities, setQuantities] = useState({});

	const increaseQuantity = (item) => {
		setQuantities((prevQuantities) => ({
			...prevQuantities,
			[item._id]: (prevQuantities[item._id] || 1) + 1,
		}));
	};

	const decreaseQuantity = (item) => {
		setQuantities((prevQuantities) => ({
			...prevQuantities,
			[item._id]: Math.max((prevQuantities[item._id] || 1) - 1, 1),
		}));
	};

	const handleDelete = async (itemId) => {
		setDeletingItems((prev) => ({ ...prev, [itemId]: true }));
		deleteItem({ item_id: itemId });
	};

	return (
		<section className="text-white relative md:mt-36 mt-12">
			<div className="container p-2 bg-gray-800 backdrop-blur-md rounded-3xl">
				<h2 data-aos="fade-up" className="text-3xl font-bold mb-8 p-4">
					Your Cart
				</h2>
				<Toaster position="top-center" reverseOrder={false} />
				<div className="pt-0 px-5">
					{isLoading && isRefetching && <LoadingSpinner />}
					{!isLoading && !isRefetching && car && car.length === 0 && (
						<div className="text-center text-xl text-white mt-24">
							Your cart is empty 🙄. Add some cars to your cart
						</div>
					)}
					{!isLoading && !isRefetching && car && (
						<div
							data-aos="fade-up"
							className="h-full overflow-y-auto overflow-x-hidden"
						>
							<section className="mb-4" key={car._id}>
								<div className="flex flex-col md:flex-row bg-gradient-to-r from-white to-gray-400 hover:bg-gradient-to-r hover:from-gray-100 hover:to-white p-3 mb-4 rounded-2xl  shadow-md h-full w-full hover:bg-opacity-90">
									<div className="relative w-full flex items-center">
										<Link to={`/shop/product/${car._id}`}>
											<img
												src={car.images[0]}
												className="w-full h-auto md:h-[200px] bg-cover object-cover bg-center bg- rounded"
											/>
										</Link>
									</div>

									<div className="w-full md:w-[0.75] text-black">
										<div className="">
											<h2 className="text-2xl pl-3 md:pt-0 pt-5 font-bold mb-2 text-black">
												{car.brand}&nbsp;
												{car.car_model}
											</h2>

											<div className="flex pl-3 text-2xl text-yellow-600 cursor-pointer">
												{"★".repeat(
													Math.round(
														calculateAvgRating({
															reviews:
																car.user_review,
														})
													)
												)}
												{"☆".repeat(
													5 -
														Math.round(
															calculateAvgRating({
																reviews:
																	car.user_review,
															})
														)
												)}
											</div>

											<h3 className="line-clamp-2 pl-3 md:px-4 mb-5">
												{car.bio}
											</h3>
									<div className="md:block hidden">
									<div className="justify-start p-5 w-full gap-5 flex flex-col md:flex-row">
												<div className="mb-2 w-full md:w-[100px]">
													<span className="text-[20px] font-bold text-blue-600">
														$
														{(
															Number(
																car.price.replace(
																	/,/g,
																	""
																)
															) *
															(quantities[
																car._id
															] || 1)
														).toLocaleString()}
													</span>
												</div>

												<div className="w-full justify-end flex text-black">
													<div className="flex items-center hover:bg-gray-100 hover:bg-opacity-15 rounded-lg overflow-hidden w-full md:w-24">
														<QuantityCounter
															quantity={
																quantities[
																	car._id
																] || 1
															}
															onIncrease={() =>
																increaseQuantity(
																	car
																)
															}
															onDecrease={() =>
																decreaseQuantity(
																	car
																)
															}
														/>
													</div>
												</div>
											</div>
									</div>
										</div>
									</div>
									<div className="xl:hidden block">
										<div className="w-full justify-center flex">
											<hr className=" border-black w-1/2 border-1" />
										</div>
									</div>
									<div className="block md:hidden">
										<div className="ml-3 mt-4 md:ml-12 ">
											<div className="ml-0 md:ml-7 mb-2 text-black">
												<div className="flex items-center hover:bg-gray-100 hover:bg-opacity-15 rounded-lg overflow-hidden w-full md:w-24">
													<div className="pr-12">
														Quantity:
													</div>
													<QuantityCounter
														quantity={
															quantities[
																car._id
															] || 1
														}
														onIncrease={() =>
															increaseQuantity(
																car
															)
														}
														onDecrease={() =>
															decreaseQuantity(
																car
															)
														}
													/>
												</div>
											</div>

											<div className="ml-0 md:ml-12 mb-2 w-full md:w-[100px] text-black">
												Total:
												<span className="pl-20 text-[18px] font-bold text-blue-600">
													$
													{(
														Number(
															car.price.replace(
																/,/g,
																""
															)
														) *
														(quantities[car._id] ||
															1)
													).toLocaleString()}
												</span>
											</div>
										</div>
									</div>
									<div className="scale-100 flex justify-end">
										<div
											className="flex  items-center justify-end w-[35px] h-[35px] rounded-full hover:bg-opacity-70 cursor-pointer bg-white p-2 shadow-md shadow-black text-blackhover:bg-white transition-all duration-300 ease-in-out green-400  font-bold text-md md:text-basetext-center
						  before:ease relative overflow-hidden border-gray-600 border  before:absolute before:right-0 before:top-0 before:h-12 before:w-4 before:translate-x-12 before:rotate-12 before:bg-red-500 before:opacity-50 before:duration-700 hover:shadow-red-500 font-poppins hover:before:-translate-x-[290px] md:hover:before:-translate-x-[49px]"
											title="Remove from cart"
										>
											{deletingItems[car._id] && (
												<LoadingSpinner />
											)}
											{!deletingItems[car._id] && (
												<MdDelete
													className="text-red-600 text-xl scale-125"
													onClick={() =>
														handleDelete(car._id)
													}
												/>
											)}
										</div>
									</div>
								</div>
							</section>
							<div data-aos="fade-down">
								<div className="flex justify-end pt-10 text-white font-bold text-2xl">
									Total Price: $
									{(
										Number(car.price.replace(/,/g, "")) *
										(quantities[car._id] || 1)
									).toLocaleString()}
								</div>
								<div className="flex justify-end pb-4 pt-6 gap-3">
									<div
										className="detail-button bg-gray-400 text-black px-4 py-2 md:px-6 md:py-3 w-[130px] lg:w-[150px] cursor-pointer lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white font-bold text-xs items-center sm:text-sm md:text-base rounded-3xl text-center relative h-12  overflow-hidden border-white border shadow-2xl before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[210px]"
										onClick={() =>
											document
												.getElementById("Add_Voucher")
												.showModal()
										}
									>
										Voucher
									</div>

									<div className="detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 w-full text-xs lg:w-[250px] lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white font-bold items-center sm:text-sm md:text-base rounded-3xl text-center relative h-12  overflow-hidden border-white border shadow-2xl before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[210px] cursor-pointer">
										Proceed to Payment
									</div>
								</div>
							</div>
						</div>
					)}

					<div>
						<dialog id="Add_Voucher" className="modal">
							<div className="modal-box backdrop-blur-3xl bg-gray-100  shadow-gray-500 shadow-md bg-opacity-0 w-full h-full flex rounded-xl">
								<div className=" rounded-lg shadow-lg w-full">
									<VoucherPopup />

									<div className="mt-4  flex w-full justify-end">
										<button
											className=" w-32 h-10 h bg-opacity-40 rounded-xl 				detail-button bg-white text-black mt-12 px-4 py-2 md:px-6 md:py-3 lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold text-sm md:text-base text-center
before:ease relative overflow-hidden border-white border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[290px] md:hover:before:-translate-x-[150px]
"
										>
											Add
										</button>
									</div>
								</div>
							</div>
							<form method="dialog" className="modal-backdrop">
								<button className="outline-none">Close</button>
							</form>
						</dialog>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cart;
