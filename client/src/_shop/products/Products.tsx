import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaBookmark, FaSearch } from "react-icons/fa";
import SearchBar from "../common/SearchBar";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import calculateAvgRating from "@/utils/calculateAvgRating";
import axios from "axios";
import { Input } from "@/components/ui/input";
import AOS from "aos";
import "aos/dist/aos.css";
const Products = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-center",
		});
	}, []);
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 4;

	const [loadingProductId, setLoadingProductId] = useState(null);

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
	// add to cart
	const { mutate: addToCart, isPending } = useMutation({
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

			setTimeout(() => {
				setLoadingProductId(null);
			});
		},
		onError: (error) => {
			// TODO
			toast.error("Item already in cart", {
				duration: 2000,
			});

			setTimeout(() => {
				setLoadingProductId(null);
			});
		},
	});

	const [cars, setCars] = useState([]);

	const handleSearch = async (searchTerm: string) => {
		try {
			const response = await axios.get(`/api/car/?search=${searchTerm}`);
			setCars(response.data);
			// console.log(response.data);
		} catch (error) {
			console.error("Error fetching cars:", error);
		}
	};

	const handleAddToCart = (productId) => {
		setLoadingProductId(productId);
		addToCart(productId);
	};

	// calculate
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	// const currentProducts = products ? products.slice(indexOfFirstProduct, indexOfLastProduct) : [];
	const currentProducts =
		cars.length > 0
			? cars.slice(indexOfFirstProduct, indexOfLastProduct)
			: products
			? products.slice(indexOfFirstProduct, indexOfLastProduct)
			: [];
	// const totalPages = products ? Math.ceil(products.length / productsPerPage) : 0;
	const totalPages =
		cars.length > 0
			? Math.ceil(cars.length / productsPerPage)
			: products
			? Math.ceil(products.length / productsPerPage)
			: 0;

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<section className="xl:p-4 w-full sm:px-32">
			<div className="md:block hidden">
				<div className="flex w-full justify-end px-3">
					<div 	data-aos="fade-left" className="text-[16px] flex border border-white justify-between items-center p-2  rounded-xl">
						<input
							placeholder="Search"
							className="ml-2 bg-primary w-[220px] border-none focus:outline-none focus:border-none focus:ring-0"
							onChange={(e) => handleSearch(e.target.value)}
						/>
						<FaSearch
							className="w-4 h-4 text-white cursor-pointer"
							title="Search"
						/>
					</div>
				</div>
			</div>
			<div className="grid md:grid-cols-5 md:gap-32">
				<div className="w-full justify-center flex">
				<div className="">
					<Sidebar />
				</div>
				</div>
				<div className="md:col-span-4 pt-12 md:pt-3 ss:px-32 sm:px-0">
					<div 	data-aos="fade-left"  className="md:hidden block">
						<div className="flex w-full justify-center ss:justify-end md:justify-end mb-3">
							<div className="text-[16px] flex border mb-4 border-white justify-between items-center p-2 rounded-xl">
								<input
									placeholder="Search"
									className="ml-2 bg-primary w-[200px] border-none focus:outline-none focus:border-none focus:ring-0"
									onChange={(e) =>
										handleSearch(e.target.value)
									}
								/>
								<FaSearch
									className="w-4 h-4 text-white cursor-pointer"
									title="Search"
								/>
							</div>
						</div>
					</div>
					{isLoading && products && products.length === 0 && (
						<div className="text-center text-2xl font-bold text-gray-700">
							There are no products available at the moment.
						</div>
					)}
					{!isLoading &&
						!isRefetching &&
						currentProducts?.map((product) => {
							const averageRating = calculateAvgRating({
								reviews: product.user_review,
							});
							return (
								<>
									<Toaster
										position="top-center"
										reverseOrder={false}
									/>
									<div
									data-aos="fade-left"
										key={product._id}
										className="md:flex  bg-white hover:bg-opacity-90 p-3 md:p-4 mb-7 rounded-2xl shadow-md w-full h-auto">
										<div className="relative w-full md:w-1/3 md:mr-4 overflow-hidden mb-4 items-center flex">
											<Link
												to={`/shop/product/${product._id}`}
												className="w-full sm:h-[300px] md:h-[250px] ss:h-[400px] h-[180px] rounded"
											>
												<img
											src={product.images[0]}
											className="w-full ss:h-[400px] md:h-[250px] rounded"
										/>
											</Link>
										</div>
										<div className="w-full md:w-2/3">
											<h2 className="text-xl ss:text-2xl font-bold mb-2 text-black">
												{product.brand}&nbsp;
												{product.car_model}
											</h2>
											<div className="md:flex items-center mb-2">
												<div className="flex text-xl text-yellow-400">
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
												<span className="text-gray-600 text-sm ml-2">
													{product.user_review.length}{" "}
													reviews
												</span>
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
											<div className="flex gap-4 pb-5">
												<button
													className="detail-button bg-gray-300 text-black px-4 py-2 md:px-6 md:py-3 w-[150px] lg:w-[170px] lg:h-[40px] items-center justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white font-bold text-sm md:text-base rounded-xl text-center relative h-9  overflow-hidden border-gray-600 border shadow-2xl before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[210px] "
													onClick={() =>
														handleAddToCart(
															product._id
														)
													}
												>
													{loadingProductId ===
													product._id ? (
														<LoadingSpinner />
													) : (
														<span>
															{" "}
															Add to cart{" "}
														</span>
													)}
												</button>
											
											</div>
										</div>
									</div>
								</>
							);
						})}
					<div>
						{/* Pagination */}
						<div className="flex justify-center mt-8">
							{Array.from({ length: totalPages }, (_, i) => (
								<button
									key={i}
									onClick={() => paginate(i + 1)}
									className={`mx-1 px-3 py-1 rounded transision-all duration-300 ${
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
