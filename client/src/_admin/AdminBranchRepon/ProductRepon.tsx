import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import calculateAvgRating from "@/utils/calculateAvgRating";
import { FaPen } from "react-icons/fa";

const ProductRepon = () => {
	const queryClient = useQueryClient();
	const [currentPage, setCurrentPage] = useState(1);

	// get all products
	const { data: products, isLoading, refetch, isRefetching } = useQuery({
		queryKey: ["products"],
		queryFn: async () => {
			try {
				const response = await fetch("/api/car/all");
				const data = await response.json();

				if (!response.ok) {
					throw new Error(data.message || "Something went wrong!");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

	const productsPerPage = 3;
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = products
		? products.slice(indexOfFirstProduct, indexOfLastProduct)
		: [];
	const totalPages = products ? Math.ceil(products.length / productsPerPage) : 0;

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const { mutate: deleteCar, isPending: isDeleting } = useMutation({
		mutationFn: async (ID) => {
			try {
				const res = await fetch(`/api/car/${ID}`, {
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
		onSuccess: () => {
			toast.success("Car deleted successfully");
			queryClient.invalidateQueries({ queryKey: ["products"] });
		},
	});

	return (
		<div className="h-full">
			<div className="text-white">
				<div data-aos="fade-up" data-aos-delay="1200">
					<Toaster position="top-center" reverseOrder={false} />
					{!isLoading &&
						!isRefetching &&
						currentProducts &&
						currentProducts.map((product) => {
							const averageRating = calculateAvgRating({
								reviews: product.user_review,
							});

							return (
								<div
									key={product._id}
									className="flex flex-col md:flex-row bg-gray-700 p-4 mb-8 rounded-2xl shadow-md ss:w-full w-full h-auto  md:h-[300px]"
								>
									<div className="relative w-full md:w-1/3 mr-0 md:mr-4 overflow-hidden flex items-center mb-4 md:mb-0">
										<img
											src={product.images[0]}
											className="w-full md:w-[500px] h-auto rounded"
										/>
									</div>

									<div className="w-full md:w-2/3">
										<div className="w-full h-auto flex justify-end items-end">
											<div className="w-auto h-auto flex justify-end items-center gap-3 bg-black p-2 bg-opacity-20 rounded-2xl">
												<div className="flex items-center space-x-3">
													{isDeleting ? (
														<LoadingSpinner />
													) : (
														<MdDelete
															className="w-5 h-5 text-red-500 cursor-pointer"
															onClick={() =>
																deleteCar(
																	product._id
																)
															}
														/>
													)}
												</div>
												<div className="flex">
													<FaPen className="w-4 h-4 text-blue-500 cursor-pointer" />
												</div>
											</div>
										</div>
										<h2 className="text-xl sm:text-4xl font-bold mb-2 text-white">
											{product.brand}&nbsp;{product.car_model}
										</h2>

										
											<div className="flex sm:text-xl text-yellow-400">
												{"★".repeat(Math.round(averageRating))}
												{"☆".repeat(5 - Math.round(averageRating))}
											</div>
											<span className="text-white sm:text-2xl text-sm ml-2">
												{product.user_review.length} reviews
											</span>
											<a
												href="#"
												className="text-blue-500  sm:text-2xl text-sm ml-2"
											>
												Reviews
											</a>
									
										<div className="mb-2">
											<span className="text-2xl sm:text-4xl font-bold text-blue-600">
												${product.price}
											</span>
										</div>
										<p className="text-white text-sm mb-4 sm:text-xl">
											{product.bio.length > 200
												? `${product.bio.substring(0, 120)}...`
												: product.bio}
										</p>
									</div>
								</div>
							);
						})}
				</div>
				<div>
					<div className="flex justify-center mt-8">
						{Array.from({ length: totalPages }, (_, i) => (
							<button
								key={i}
								onClick={() => paginate(i + 1)}
								className={`mx-1 px-3 py-1 rounded transition-all text-black duration-300 ${
									currentPage === i + 1
										? "bg-gray-600 text-white scale-110"
										: "bg-gray-200 hover:bg-gray-300"
								}`}
							>
								{i + 1}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductRepon;
