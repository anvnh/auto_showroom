import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import calculateAvgRating from "@/utils/calculateAvgRating";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { MdAddShoppingCart, MdDelete } from "react-icons/md";
import QuantityCounter from "@/utils/QuantityCounter";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import OverviewCart from "../payment/OverviewCart";


const UserCart = () => {

    const queryClient = useQueryClient();

	const [deletingItems, setDeletingItems] = useState<{ [key: string]: boolean }>({});

	const [cartInfo, setCartInfo] = useState({ items: [], total: 0 });

    const {data: cart, isLoading, refetch, isRefetching} = useQuery({
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

    const { mutate: deleteItem, isPending: isDeleting} = useMutation({
		mutationFn: async ({item_id}) => {
			try {
				const res = await fetch(`/api/user/delete/cart/${item_id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const data = await res.json();

				if(!res.ok){
					throw new Error(data.error || "Something went wrong");
				}

				return data;
			}
			catch (error) {
				throw new Error(error);
			}
		},
		onSuccess: (data, variables) => {
			toast.success("Car removed successfully");
			// invalidate the query to refetch the data
			setDeletingItems((prev) => ({ ...prev, [variables.item_id]: false }));
			queryClient.invalidateQueries({queryKey: ["cart"]});
		},
		onError: (error, variables) => {
            setDeletingItems((prev) => ({ ...prev, [variables.item_id]: false }));
            toast.error("Failed to remove item");
        },
	});

	const calculateTotalPrice = () => {
        if (!cart) return 0;
        return cart.reduce((total, item) => {
            const itemTotal = Number(item.price.replace(/,/g, "")) * (quantities[item._id] || 1);
            return total + itemTotal;
        }, 0).toLocaleString();
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
		<section>
			<Toaster position="top-center" reverseOrder={false} />
			<div className="bg-primary pt-0 md:px-0 px-5">
				<h1 className="sm:text-4xl ss:text-4xl text-3xl font-bold mb-6 md:pt-9 pt-10">
					Your cart
				</h1>
				<h2 className="sm:text-xl ss:text-xl text-md mb-4">
					Remember to apply the coupon code if you have one !!!
				</h2>
				{isLoading && isRefetching && <LoadingSpinner />}
				{!isLoading && !isRefetching && cart && cart.length === 0 && (
					<div className="text-center text-xl text-white mt-24">
						Your cart is empty 🙄. Add some cars to your cart
					</div>
				)}
				{!isLoading &&
					!isRefetching &&
					cart &&
					cart.map((item) => {
						const averageRating = calculateAvgRating({
							reviews: item.user_review,
						});
						return (
							<section className="mb-4" key={item._id}>
								<div className="flex space-x-44 text-white text-xl w-full justify-center ml-64 mb-2">
									<ul className="li">Price</ul>
									<ul className="li">Quantity</ul>
									<ul className="li">Total</ul>
								</div>
								<div
									key={item._id}
									className="flex bg-white p-4 mb-4 rounded-2xl shadow-md w-full h-[300px] hover:bg-opacity-90"
								>
									<div className="relative w-1/3 overflow-hidden flex items-center">
										<img
											src={item.images[0]}
											className="w-[400px] h-[250px] rounded"
										/>
									</div>

									<div className="w-2/3 text-black">
										<div className="ml-56 flex">
											<div className="mb-2 w-[100px]">
												<span className="text-[18px] font-bold text-blue-600">
													${item.price}
												</span>
											</div>

											<div className="ml-32 mb-2 text-black">
												<div className="flex items-center hover:bg-gray-100 hover:bg-opacity-15 rounded-lg overflow-hidden w-24">
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

											<div className="ml-40 mb-2 w-[100px]">
												<span className="text-[18px] font-bold text-blue-600">
													$
													{(
														Number(
															item.price.replace(
																/,/g,
																""
															)
														) *
														(quantities[item._id] ||
															1)
													).toLocaleString()}
												</span>
											</div>
										</div>

										<h2 className="text-2xl font-bold mb-2 text-black">
											{item.brand}&nbsp;{item.car_model}
										</h2>
										<h3 className="line-clamp-2">
											{item.bio}
										</h3>

										<div className="flex text-2xl text-yellow-600 cursor-pointer">
											{"★".repeat(
												Math.round(averageRating)
											)}
											{"☆".repeat(
												5 - Math.round(averageRating)
											)}
										</div>
									</div>
									<div
										className="flex h-[30px] hover:bg-opacity-50 cursor-pointer"
										title="Remove from cart"
									>
										{deletingItems[item._id] && (
											<LoadingSpinner />
										)}
										{!deletingItems[item._id] && (
											<MdDelete
												className="text-red-500 text-xl"
												onClick={() =>
													handleDelete(item._id)
												}
											/>
										)}
									</div>
								</div>
							</section>
						);
					})}
				<div className="flex justify-end pt-10 text-white font-bold text-2xl">
					Total Price: ${calculateTotalPrice()}
				</div>
				<div className="flex justify-end py-10">
					<Link to="/shop/payment">
						<div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Proceed to Payment
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default UserCart
