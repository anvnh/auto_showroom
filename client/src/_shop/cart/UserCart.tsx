import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import calculateAvgRating from "@/utils/calculateAvgRating";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { MdCheck, MdDelete } from "react-icons/md";
import QuantityCounter from "@/utils/QuantityCounter";
import { toast, Toaster } from "react-hot-toast";
import { Link, createSearchParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const UserCart = () => {
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
	const [checkedItems, setCheckedItems] = useState({});

	const handleClick = (itemId) => {
		setCheckedItems((prevCheckedItems) => ({
			...prevCheckedItems,
			[itemId]: !prevCheckedItems[itemId], // Đảo ngược trạng thái của từng item
		}));
	};

	return (
		<section className="pb-24 pt-12 xl:px-0 px-3 text-white">
			<Toaster position="top-center" reverseOrder={false} />

			<div className="container xl:w-[1500px] pb-12 p-4 bg-gray-600 bg-opacity-15 backdrop-blur-xl rounded-3xl">
				<div data-aos="fade-in">
					<h1 className="text-5xl text-center font-bold mb-8 px-12 pt-12">
						Your Cart
					</h1>
					<h2 className="sm:text-xl text-center ss:text-xl px-12 text-md mb-12">
						Remember to apply the coupon code if you have one !!!
					</h2>
				</div>
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
										<div
											data-aos="fade-left"
											className="flex flex-col md:flex-row bg-gradient-to-r from-white to-gray-400 shadow-2xl shadow-black p-7 mb-7 rounded-2xl h-full hover:bg-gradient-to-r hover:from-gray-100 hover:to-white duration-500 transition-all ease-in-out"
										>
											<div className="relative  flex items-center">
												<Link
													to={`/shop/product/${item._id}`}
												>
													<img
														src={item.images[0]}
														className="xl:w-[700px] shadow-xl shadow-black w-full h-full xl:h-[280px] rounded"
													/>
												</Link>
											</div>

											<div className="w-full text-black pt-5 md:pt-0">
												<div className="flex">
													<h2 className="md:text-2xl w-full text-xl  pl-4 md:pt-0 pt-5 font-bold text-black">
														{item.brand}&nbsp;
														{item.car_model}
													</h2>
													<div className="hidden md:block ">
														<div className="flex w-full justify-end">
															<div
																className="flex  items-center justify-end w-[40px] h-[40px] rounded-full hover:bg-opacity-70 cursor-pointer bg-white p-3 shadow-md shadow-black text-blackhover:bg-white transition-all duration-300 ease-in-out green-400  font-bold text-md md:text-basetext-center
						  before:ease relative overflow-hidden border-gray-600 border  before:absolute before:right-0 before:top-0 before:h-12 before:w-4 before:translate-x-12 before:rotate-12 before:bg-red-500 before:opacity-50 before:duration-700 hover:shadow-red-500 font-poppins hover:before:-translate-x-[290px] md:hover:before:-translate-x-[39px]"
																title="Remove from cart"
															>
																{deletingItems[
																	item._id
																] && (
																	<LoadingSpinner />
																)}
																{!deletingItems[
																	item._id
																] && (
																	<MdDelete
																		className="text-red-600 text-xl scale-125"
																		onClick={() =>
																			handleDelete(
																				item._id
																			)
																		}
																	/>
																)}
															</div>
														</div>
														<div className=" mb-2 w-full md:w-[100px]">
															<span className="text-[18px] font-bold text-blue-600">
																$
																{( Number( item.price.replace( /,/g, "")) * (quantities[ item._id ] || 1)
																).toLocaleString()}
															</span>
														</div>
													</div>
												</div>

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

												<h3 className="line-clamp-3 w-full ml-4 md:ml-0 md:px-5 md:mr-24 md:text-[18px] mb-5">
													{item.bio}
												</h3>
												<div className="hidden md:block">
													<div className="ml-4 mt-[10px] w-full md:w-[100px]">
														<span className="text-[25px] font-bold text-blue-600">
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
												<div className="md:block hidden">
													<div className="xl:mt-14 md:mt-52 items-end w-full justify-end  flex text-black gap-7">
														<div className="flex items-center hover:bg-gray-100 hover:bg-opacity-15 rounded-lg overflow-hidden w-full md:w-24 top-[7px] scale-110 relative">
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
														<div
															className="w-[36px] h-[36px] cursor-pointer rounded-full bg-white shadow-md shadow-black flex items-center justify-center   text-blackhover:bg-white transition-all duration-300 ease-in-out green-400  font-bold text-md md:text-basetext-center
						  before:ease relative overflow-hidden border-gray-600 border  before:absolute before:right-0 before:top-0 before:h-12 before:w-4 before:translate-x-12 before:rotate-12 before:bg-green-500 before:opacity-50 before:duration-700 hover:shadow-green-500 font-poppins hover:before:-translate-x-[290px] md:hover:before:-translate-x-[39px]"
															onClick={() =>
																handleClick(
																	item._id
																)
															}
														>
															{checkedItems[
																item._id
															] && (
																<MdCheck className="text-green-500 rounded-full w-full h-full text-4xl font-bold" />
															)}
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
												<div className="w-full justify-end flex gap-4">
												<div
																className="flex  items-center justify-end w-[40px] h-[40px] rounded-full hover:bg-opacity-70 cursor-pointer bg-white p-3 shadow-md shadow-black text-blackhover:bg-white transition-all duration-300 ease-in-out green-400  font-bold text-md md:text-basetext-center
						  before:ease relative overflow-hidden border-gray-600 border  before:absolute before:right-0 before:top-0 before:h-12 before:w-4 before:translate-x-12 before:rotate-12 before:bg-red-500 before:opacity-50 before:duration-700 hover:shadow-red-500 font-poppins hover:before:-translate-x-[290px] md:hover:before:-translate-x-[39px]"
																title="Remove from cart"
															>
																{deletingItems[
																	item._id
																] && (
																	<LoadingSpinner />
																)}
																{!deletingItems[
																	item._id
																] && (
																	<MdDelete
																		className="text-red-600 text-xl scale-125"
																		onClick={() =>
																			handleDelete(
																				item._id
																			)
																		}
																	/>
																)}
															</div>
													<div
														className="w-[40px] h-[40px] cursor-pointer rounded-full bg-white shadow-md shadow-black text-blackhover:bg-white transition-all duration-300 ease-in-out green-400  font-bold text-md md:text-basetext-center
						  before:ease relative overflow-hidden border-gray-600 border  before:absolute before:right-0 before:top-0 before:h-12 before:w-4 before:translate-x-12 before:rotate-12 before:bg-green-500 before:opacity-50 before:duration-700 hover:shadow-green-500 font-poppins hover:before:-translate-x-[290px] md:hover:before:-translate-x-[39px]"
														onClick={() =>
															handleClick(
																item._id
															)
														}
													>
														{checkedItems[
															item._id
														] && (
															<MdCheck className="text-green-500 rounded-full w-full h-full text-4xl font-bold" />
														)}
													</div>
													
												</div>
											</div>
										</div>
									</section>
								);
							})}
						</div>
					)}
					<div data-aos="fade-down">
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
									className="detail-button bg-white text-black mt-12 px-4 py-2 md:px-6 md:py-3 w-[250px] lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold text-md md:text-base rounded-3xl text-center
						  before:ease relative h-12 overflow-hidden border-gray-600 border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[290px] md:hover:before:-translate-x-[220px]
						  "
								>
									Proceed to Payment
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UserCart;
