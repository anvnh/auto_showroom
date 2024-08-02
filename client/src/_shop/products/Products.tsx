import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import SearchBar from "../common/SearchBar";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Products = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 4;

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

	const handleSearch = (searchTerm: string) => {
		console.log("Searching for:", searchTerm);
	};

	return (
		<section className="xl:p-4 w-full">
			<div className="md:block hidden">
				<div className="flex w-full justify-end mb-6">
					<SearchBar onSearch={handleSearch} />
				</div>
			</div>
			<div className="grid md:grid-cols-5 gap-1">
				<div className="col-span-1">
					<Sidebar />
				</div>
				<div className="col-span-4 p-3">
					<div className="block md:hidden mb-6">
						<SearchBar onSearch={handleSearch} />
					</div>
					{isLoading && !products && (
						<div className="text-center text-2xl font-bold text-gray-700">
							There are no products available at the moment.
						</div>
					)}
					{!isLoading &&
						!isRefetching &&
						currentProducts &&
						currentProducts.map((product) => (
							<Link
								to={`/shop/product/${product._id}`}
								key={product._id}
							>
								<div className="md:flex bg-white hover:bg-opacity-90 p-4 mb-4 rounded-2xl shadow-md w-full h-auto">
									<div className="relative w-full md:w-1/3 mr-4 overflow-hidden items-center flex">
										<img
											src={product.images[0]}
											className="w-full md:h-[250px] rounded"
										/>
									</div>
									<div className="w-full md:w-2/3">
										<h2 className="text-xl font-bold mb-2 text-black">
											{product.brand}&nbsp;
											{product.car_model}
										</h2>
										<div className="md:flex items-center mb-2">
											<div className="flex text-yellow-400">
												{"★".repeat(5)}
												{"☆".repeat(5 - 5)}
											</div>
											<span className="text-gray-600 text-sm ml-2">
												0 reviews
											</span>
											<a
												href="#"
												className="text-blue-500 text-sm ml-2"
											>
												Submit a review
											</a>
										</div>
										<div className="mb-2">
											<span className="text-2xl font-bold text-blue-600">
												$&nbsp;{product.price}
											</span>
										</div>
										<div className="xl:block hidden">
											<p className="text-gray-700 mb-4">
												{product.bio.length > 320
													? `${product.bio.substring(
															0,
															310
													  )}...`
													: product.bio}
											</p>
										</div>
										<div className="block xl:hidden">
											<p className="text-gray-700 mb-4">
												{product.bio.length > 320
													? `${product.bio.substring(
															0,
															100
													  )}...`
													: product.bio}
											</p>
										</div>
										<div className="flex gap-4">
											<button className="detail-button bg-gray-300 text-black px-4 py-2 md:px-6 md:py-3 w-[150px] lg:w-[170px] lg:h-[40px] items-center justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white font-bold text-sm md:text-base rounded-xl text-center relative h-9  overflow-hidden border-gray-600 border shadow-2xl before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[210px] ">
												Add To Cart
											</button>
											<button className="border border-gray-300 text-gray-700 px-4 py-2 rounded">
												<FaBookmark />
											</button>
										</div>
									</div>
								</div>
							</Link>
						))}
					<div>
						<div className="flex justify-center mt-8">
							{Array.from({ length: totalPages }, (_, i) => (
								<button
									key={i}
									onClick={() => paginate(i + 1)}
									className={`mx-1 px-3 py-1 rounded transition-all duration-300 ${
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
		</section>
	);
};

export default Products;
