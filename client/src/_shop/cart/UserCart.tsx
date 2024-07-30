import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import calculateAvgRating from "@/utils/calculateAvgRating";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { MdAddShoppingCart, MdDelete } from "react-icons/md";
import QuantityCounter from "@/utils/QuantityCounter";
import { toast, Toaster } from "react-hot-toast";


const UserCart = () => {

    const queryClient = useQueryClient();

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
		onSuccess: () => {
			toast.success("Car removed successfully");
			// invalidate the query to refetch the data
			queryClient.invalidateQueries({queryKey: ["cart"]});
		}
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

    const handleDelete = (item_id) => {
        deleteItem({item_id});
    }

    return (
		<section>
			<Toaster position="top-center" reverseOrder={false} />
			<div className="bg-primary pt-12 md:px-0 px-5">
				<h1 className="sm:text-4xl ss:text-4xl text-3xl font-bold mb-4 md:pt-32 pt-10">
					Your cart
				</h1>
				<h2 className="sm:text-xl ss:text-xl text-md mb-4 md:pt-2 pt-2">
					Remember to apply the coupon code if you have one !!!
				</h2>
                
                <div className="flex space-x-44 text-white text-xl w-full justify-center ml-64">
                    <ul className="li">
                        Price
                    </ul>
                    <ul className="li">
                        Quantity
                    </ul>
                    <ul className="li">
                        Total
                    </ul>
                </div>

				{isLoading && isRefetching && <LoadingSpinner />}
				{!isLoading &&
                    !isRefetching &&
                    cart &&
                    cart.map((item) => {
                        const averageRating = calculateAvgRating({reviews: item.user_review});
                        return (
							<>
								<div
									key={item._id}
									className="flex bg-white p-4 mb-4 rounded-2xl shadow-md w-full h-[300px]"
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
												<div className="flex items-center bg-gray-100 rounded-lg overflow-hidden w-24">
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
													$ {Number( item.price.replace( /,/g, "")) * (quantities[item._id] || 1)} </span>
											</div>
										</div>

										<h2 className="text-2xl font-bold mb-2 text-black">
											{item.brand}&nbsp;{item.car_model}
										</h2>
										<h3>
											{item.bio.length > 200
												? `${item.bio.substring(
														0,
														200
												  )}...`
												: item.bio}
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
									<div className="flex h-[30px] hover:bg-opacity-50 cursor-pointer" title="Remove from cart">
                                        {isDeleting && <LoadingSpinner />}
                                        {!isDeleting && (
                                            <MdDelete 
                                                className="text-red-500 text-xl" 
                                                onClick={() => handleDelete(item._id)}
                                            />
                                        )}
									</div>
								</div>
							</>
						);
                    })}
                    <div className="flex justify-end py-20">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Proceed to Payment
                        </button>
                    </div>
			</div>
		</section>
	);
}

export default UserCart
