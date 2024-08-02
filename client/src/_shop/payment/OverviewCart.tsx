import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import calculateAvgRating from "@/utils/calculateAvgRating";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import QuantityCounter from "@/utils/QuantityCounter";
import { toast, Toaster } from "react-hot-toast";
import { Link, createSearchParams } from "react-router-dom";

const OverviewCart = () => {
	const queryClient = useQueryClient();
	const [deletingItems, setDeletingItems] = useState<{ [key: string]: boolean }>({});
	const [cartInfo, setCartInfo] = useState({ items: [], total: 0 });

	const { data: cart, isLoading, refetch, isRefetching } = useQuery({
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

	const handleDelete = async (itemId) => {
		setDeletingItems((prev) => ({ ...prev, [itemId]: true }));
		deleteItem({ item_id: itemId });
	};

	return (
		<section className="text-white relative md:mt-36 mt-12">
			<div className="container p-2 bg-gray-600  bg-opacity-30 backdrop-blur-md rounded-3xl">
				<h2 className="text-3xl font-bold mb-8 p-4">Your Cart</h2>
				<Toaster position="top-center" reverseOrder={false} />
				<div className="pt-0 px-5">
					{isLoading && isRefetching && <LoadingSpinner />}
					{!isLoading && !isRefetching && cart && cart.length === 0 && (
						<div className="text-center text-xl text-white mt-24">
							Your cart is empty 🙄. Add some cars to your cart
						</div>
					)}
					{!isLoading && !isRefetching && cart && (
						<div className="max-h-[700px]  overflow-y-auto overflow-x-hidden">
							{cart.map((item, index) => {
								const averageRating = calculateAvgRating({
									reviews: item.user_review,
								});
								return (
									<section className="mb-4" key={item._id}>
									<div className="hidden md:block">
									<div className="flex flex-col md:flex-row md:space-x-14 text-white text-xl w-full justify-center md:ml-24 mb-2">
											<ul className="li">Price</ul>
											<ul className="li">Quantity</ul>
											<ul className="li">Total</ul>
										</div>
									</div>

										<div className="flex flex-col md:flex-row bg-white p-3 mb-4 rounded-2xl shadow-md h-full w-full hover:bg-opacity-90">
											<div className="relative w-full flex items-center">
												<img
													src={item.images[0]}
													className="w-full h-auto md:h-[150px] rounded"
												/>
											</div>

											<div className="w-full md:w-2/3 text-black">
												<div className="hidden md:block">
												<div className="ml-0 md:ml-16 flex flex-col md:flex-row">
													<div className="mb-2 w-full md:w-[100px]">
														<span className="text-[18px] font-bold text-blue-600">
															${item.price}
														</span>
													</div>

													<div className="ml-0 md:ml-7 mb-2 text-black">
														<div className="flex items-center hover:bg-gray-100 hover:bg-opacity-15 rounded-lg overflow-hidden w-full md:w-24">
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

													<div className="ml-0 md:ml-12 mb-2 w-full md:w-[100px]">
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

												<h2 className="text-2xl pl-3 md:pt-0 pt-5 font-bold mb-2 text-black">
													{item.brand}&nbsp;
													{item.car_model}
												</h2>
												
												<div className="flex pl-3 text-2xl text-yellow-600 cursor-pointer">
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
										
											<h3 className="line-clamp-2 pl-3 md:px-5 mb-5">
													{item.bio}
												</h3>
										
											</div>
									<div className="xl:hidden block">
									<div className="w-full justify-center flex">
										<hr className=" border-black w-1/2 border-1"/>
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
												</div></div>
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
					<div className="flex justify-end pb-4 pt-6">
						<Link
							to={{
								pathname: "/shop/payment",
								search: createSearchParams({
									totalPrice:
										calculateTotalPrice().toString(),
								}).toString(),
							}}
						>
							<div className="detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 w-full lg:w-full lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white font-bold text-sm md:text-base rounded-3xl text-center relative h-12  overflow-hidden border-gray-600 border shadow-2xl before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[210px]">
								Proceed to Payment
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OverviewCart;
