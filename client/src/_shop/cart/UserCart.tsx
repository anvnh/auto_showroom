import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import calculateAvgRating from "@/utils/calculateAvgRating";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import QuantityCounter from "@/utils/QuantityCounter";
import { toast, Toaster } from "react-hot-toast";
import { Link, createSearchParams } from "react-router-dom";

const UserCart = () => {
	const queryClient = useQueryClient();

	const [deletingItems, setDeletingItems] = useState<{
		[key: string]: boolean;
	}>({});

	const [cartInfo, setCartInfo] = useState({ items: [], total: 0 });

	const {
		data: cart,
		isLoading,
		refetch,
		isRefetching,
	} = useQuery({
		queryKey: ["cart"],
		queryFn: async () => {
			try {
				const response = await fetch("/api/user/cart");
				const data = await response.json();

				if (!response.ok) {
					throw new Error(data.error || "Something went wrong!");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

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
			// invalidate the query to refetch the data
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

	const calculateTotalPrice = () => {
		if (!cart) return 0;
		return cart
			.reduce((total, item) => {
				const itemTotal =
					Number(item.price.replace(/,/g, "")) *
					(quantities[item._id] || 1);
				return total + itemTotal;
			}, 0)
			.toLocaleString();
	};

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

	// const handleDelete = async (itemId) => {
	// 	deleteItem({item_id: itemId});
	// };
	const handleDelete = async (itemId) => {
		setDeletingItems((prev) => ({ ...prev, [itemId]: true }));
		deleteItem({ item_id: itemId });
	};

	return (
		<section className="pb-24 pt-12 xl:px-0 px-3 text-white">
			<Toaster position="top-center" reverseOrder={false} />

			<div className="container xl:w-[1500px] pb-12 p-4 bg-gray-600 bg-opacity-30 backdrop-blur-md rounded-3xl">
				<h1 className="text-5xl text-center font-bold mb-8 px-12 pt-12">
					Your Cart
				</h1>
				<h2 className="sm:text-xl text-center ss:text-xl px-12 text-md mb-12">
					Remember to apply the coupon code if you have one !!!
				</h2>
				<Toaster position="top-center" reverseOrder={false} />
				<div className="pt-0 px-5">
					{isLoading && isRefetching && <LoadingSpinner />}
					{!isLoading &&
						!isRefetching &&
						cart &&
						cart.length === 0 && (
							<div className="text-center text-xl text-white mt-24">
								Your cart is empty 🙄. Add some cars to your
								cart
							</div>
						)}
					{!isLoading && !isRefetching && cart && (
						<div className="h-auto xl:w-[1400px]">
							{cart.map((item, index) => {
								const averageRating = calculateAvgRating({
									reviews: item.user_review,
								});
								return (
									<section className="mb-4" key={item._id}>
										<div className="hidden md:block">
											<div className="flex flex-col md:flex-row space-x-24 text-white text-xl w-full pr-20 justify-end  mb-2">
												<ul className="li">Price</ul>
												<ul className="li">Quantity</ul>
												<ul className="li">Total</ul>
											</div>
										</div>

										<div className="flex flex-col  md:flex-row bg-white p-4 mb-4 rounded-2xl shadow-md h-full hover:bg-opacity-90">
											<div className="relative  flex items-center">
												<img
													src={item.images[0]}
													className="xl:w-[700px] w-full h-full xl:h-[280px] rounded"
												/>
											</div>

											<div className="w-full text-black">
												<div className="hidden md:block">
													<div className=" flex flex-col justify-end pr-3 gap-[55px]  md:flex-row">
														<div className="mb-2 w-full md:w-[100px]">
															<span className="text-[18px] font-bold text-blue-600">
																${item.price}
															</span>
														</div>

														<div className=" mb-2 text-black">
															<div className="flex items-center hover:bg-gray-100 hover:bg-opacity-15 rounded-lg overflow-hidden w-full md:w-24">
																<QuantityCounter
																	quantity={
																		quantities[
																			item
																				._id
																		] || 1
																	}
																	onIncrease={() =>
																		increaseQuantity(
																			item
																		)
																	}
																	onDecrease={() =>
																		decreaseQuantity(
																			item
																		)
																	}
																/>
															</div>
														</div>

														<div className=" mb-2 w-full md:w-[100px]">
															<span className="text-[18px] font-bold text-blue-600">
																$
																{(
																	Number(
																		item.price.replace(
																			/,/g,
																			""
																		)
																	) *
																	(quantities[
																		item._id
																	] || 1)
																).toLocaleString()}
															</span>
														</div>
													</div>
												</div>

												<h2 className="md:text-2xl text-xl pl-4 md:pt-0 pt-5 font-bold text-black">
													{item.brand}&nbsp;
													{item.car_model}
												</h2>

												<div className="flex pl-4 text-xl text-yellow-600 cursor-pointer">
													{"★".repeat(
														Math.round(
															averageRating
														)
													)}
													{"☆".repeat(
														5 -
															Math.round(
																averageRating
															)
													)}
												</div>

												<h3 className="line-clamp-3 md:px-5 md:text-[18px] mb-5">
													{item.bio}
												</h3>
											</div>
											<div className="xl:hidden block">
												<div className="w-full justify-center flex">
													<hr className=" border-black w-1/2 border-1" />
												</div>
											</div>
											<div className="block md:hidden">
												<div className="ml-3 mt-4 md:ml-12 ">
													<div className="mb-2 w-full text-black md:w-[100px]">
														Price:
														<span className="text-[18px] ml-20 font-bold text-blue-600">
															${item.price}
														</span>
													</div>

													<div className="ml-0 md:ml-7 mb-2 text-black">
														<div className="flex items-center hover:bg-gray-100 hover:bg-opacity-15 rounded-lg overflow-hidden w-full md:w-24">
															<div className="pr-12">
																Quantity:
															</div>
															<QuantityCounter
																quantity={
																	quantities[
																		item._id
																	] || 1
																}
																onIncrease={() =>
																	increaseQuantity(
																		item
																	)
																}
																onDecrease={() =>
																	decreaseQuantity(
																		item
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
																	item.price.replace(
																		/,/g,
																		""
																	)
																) *
																(quantities[
																	item._id
																] || 1)
															).toLocaleString()}
														</span>
													</div>
												</div>
											</div>
											<div
												className="flex items-center justify-end  h-[30px] hover:bg-opacity-50 cursor-pointer"
												title="Remove from cart"
											>
												{deletingItems[item._id] && (
													<LoadingSpinner />
												)}
												{!deletingItems[item._id] && (
													<MdDelete
														className="text-red-500 text-xl scale-125"
														onClick={() =>
															handleDelete(
																item._id
															)
														}
													/>
												)}
											</div>
										</div>
									</section>
								);
							})}
						</div>
					)}
					<div className="flex justify-end pt-10 text-white font-bold text-2xl">
						Total Price: ${calculateTotalPrice()}
					</div>
					<div className="flex justify-end py-1">
						<Link
							to={{
								pathname: "/shop/payment",
								search: createSearchParams({
									totalPrice:
										calculateTotalPrice().toString(),
								}).toString(),
							}}
						>
							<div
								className="detail-button bg-white text-black mt-12 px-4 py-2 md:px-6 md:py-3 w-[300px] lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold text-sm md:text-base rounded-3xl text-center
						  before:ease relative h-12 overflow-hidden border-gray-600 border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[290px] md:hover:before:-translate-x-[220px]
						  "
							>
								Proceed to Payment
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UserCart;
