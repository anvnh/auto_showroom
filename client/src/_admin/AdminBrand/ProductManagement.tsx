import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FaBookmark, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import calculateAvgRating from "@/utils/calculateAvgRating";
import { motion } from "framer-motion";
import ProductRepon from "../AdminBranchRepon/ProductRepon";
import EditCarModal from "./EditCarModal";
import EditProduct from "../element/elementProduct/EditProduct";

const ProductManagement = () => {
	const queryClient = useQueryClient();
	const [currentPage, setCurrentPage] = useState(1);
    const [currentProduct, setCurrentProduct] = useState(null);

	// get all products
	const {
		data: products,
		isLoading,
		refetch,
		isRefetching,
	} = useQuery({
		queryKey: ["products"],
		queryFn: async () => {
			try {
				const response = await fetch("/api/car/all");
				const data = await response.json();

				console.log(data);

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
	// calculate
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = products
		? products.slice(indexOfFirstProduct, indexOfLastProduct)
		: [];
	const totalPages = products
		? Math.ceil(products.length / productsPerPage)
		: 0;

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
			// invalidate the query to refetch the data
			queryClient.invalidateQueries({ queryKey: ["products"] });
		},
	});


	return (
		<motion.div
			className="bg-gray-800  bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 md:col-span-5 border border-gray-700"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<div className="text-white p-5 space-y-5 md:block hidden">
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
									className="flex bg-gray-700 p-4 mb-4 rounded-2xl shadow-md w-full h-[300px]"
								>
									<div className="relative w-1/24 mr-4 overflow-hidden flex items-center">
										<img
											src={product.images[0]}
											className="w-[500px] h-[250px] object-cover bg-center rounded"
										/>
										{/* <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
									HOT
								</span> */}
									</div>

									<div className="w-2/3">
										<div className="w-auto h-[30px] flex justify-end items-end">
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
												<div
													className="flex"
													onClick={() =>
                                                        {
                                                            document
                                                                .getElementById(
                                                                    "Edit_Car"
                                                                )
                                                            .showModal()
                                                            setCurrentProduct(product)
                                                        }
													}
												>
													<FaPen className="w-4 h-4 text-blue-500 cursor-pointer" />
												</div>
											</div>
										</div>
										<h2 className="text-xl font-bold mb-2 text-white">
											{product.brand}&nbsp;
											{product.car_model}
										</h2>

										<div className="flex items-center mb-2">
                                            {/*
											<div className="flex text-yellow-400">
												{"★".repeat(
													Math.round(averageRating)
												)}
												{"☆".repeat(
													5 -
														Math.round(
															averageRating
														)
												)}
											</div>
                                            */}
											<span className="text-white text-sm ml-2">
												{product.user_review.length}{" "}
												reviews
											</span>
											<a
												href="#"
												className="text-blue-500 text-sm ml-2"
											>
												Reviews
											</a>
										</div>
										<div className="mb-2">
											<span className="text-2xl font-bold text-blue-600">
												${product.price}
											</span>
										</div>
										<p className="text-white mb-4 pr-20 line-clamp-3">
											{product.bio}
										</p>
									</div>
								</div>
							);
						})}
				</div>
				<div>
					{/* Pagination */}
					<div className="flex justify-center mt-8">
						{Array.from({ length: totalPages }, (_, i) => (
							<button
								key={i}
								onClick={() => paginate(i + 1)}
								className={`mx-1 px-3 py-1 rounded transision-all text-black duration-300 ${
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
			<dialog id="Edit_Car" className="modal">
				<div className="modal-box pl-16 backdrop-blur-3xl bg-opacity-0 flex justify-center">
                    <EditProduct product={currentProduct} />
				</div>
				<form method="dialog" className="modal-backdrop">
					<button className="outline-none">
                        Close
                    </button>
				</form>
			</dialog>
			<div className="md:hidden block">
				<ProductRepon />
			</div>
		</motion.div>
	);
};

export default ProductManagement;
