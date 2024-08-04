import { CiBookmark } from "react-icons/ci";
import { RiSpeedUpFill } from "react-icons/ri";
import { FaGasPump } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { FaCartPlus } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import useAuthUser from "@/hooks/useAuthUser";
import AOS from "aos";
import "aos/dist/aos.css";

const MostSearchedCars = () => {
	useEffect(() => {
		AOS.init({
			duration: 900,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-center",
		});
	}, []);
	const [currentPage, setCurrentPage] = useState(1);
	const [loadingProductId, setLoadingProductId] = useState(null);

	const queryClient = useQueryClient();

	const {mutate: addToCart, isPending,} = useMutation({
		mutationFn: async (productId) => {
			try {
				const response = await fetch(`/api/user/add/cart/${productId}`, {
					method: "POST",
				});
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
			setTimeout(() => { setLoadingProductId(null) });
		},
		onError: (error) => {
			// TODO
			toast.error("Item already in cart", {
				duration: 2000,
			});
			setTimeout(() => { setLoadingProductId(null) });
		}
    });

	// get all products
	const { data: suggestedProducts, isLoading, refetch, isRefetching, } = useQuery({
		queryKey: ["products"],
		queryFn: async () => {
			try {
				const response = await fetch("/api/car/other/suggested");
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

	const {data: authUser} = useAuthUser();

	const handleAddToCart = (productId) => {
		setLoadingProductId(productId);
		addToCart(productId);
	}

	return (
		<section>
			<Toaster position="top-center" reverseOrder={false} />
			<div data-aos="fade-up" className="text-4xl text-black font-poppins font-bold justify-start w-[300px] ss:w-full pl-12 sm:pl-48 xl:pl-52 md:pl-24 md:text-5xl items-center flex pb-12">
				<h1>The most searched car</h1>
			</div>
			<div className="justify-center items-center flex">
				<div className="grid xl:grid-cols-4 md:grid-cols-3 gap-10 md:px-20  ss:grid-cols-2 ">
					{/* Map through products */}
					{!isRefetching && suggestedProducts?.length === 0 && (
						<p className="text-center my-4">
							No products available
						</p>
					)}
					{!isLoading &&
						!isRefetching &&
						suggestedProducts &&
						suggestedProducts.map((product) => (
							<div
							data-aos="zoom-out"
								key={product._id}
								className="md:w-[350px] sm:w-[350px] w-[300px] rounded-3xl overflow-hidden border border-gray-900 shadow-lg bg-white"
							>
								<div className="relative">
									<img
										className="w-full h-48 object-cover"
										src={product.images[0]}
										alt="Car"
									/>
									{authUser ? (
										<button
											className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-opacity-40 cursor-pointer"
											onClick={() =>
												handleAddToCart(product._id)
											}
										>
											<div className="flex">
												{loadingProductId ===
												product._id ? (
													<LoadingSpinner size="xs" />
												) : (
													<MdAddShoppingCart className="text-2xl text-gray-700" />
												)}
											</div>
										</button>
									) : (
										<button
											className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-opacity-40 cursor-pointer"
											onClick={() => toast.error("You need to login to add to your cart")}
										>
											<MdAddShoppingCart className="text-2xl text-gray-700" />
										</button>
									)}
								</div>
								<div className="hover:bg-gray-400 hover:bg-opacity-15">
									<div className="p-4 text-black">
										<h2 className="text-xl font-bold">
											{product.brand} {product.car_model}
										</h2>
										<p className="text-sm line-clamp-1">
											{product.bio}
										</p>
										<div className="flex items-center justify-between mt-4 text-black mx-3">
											<div className="items-center mr-4 w-1/3 line-clamp-1" title="Speed">
												<RiSpeedUpFill className="w-5 h-5 mr-1 " />
												{product.top_speed}km/h
											</div>
											<div className="items-center w-1/3 mr-4 line-clamp-1" title="Fuel type">
												<FaGasPump className="w-5 h-5 mr-1" />
												{product.fuel_type}
											</div>
											<div className="items-center w-1/3 mr-4 line-clamp-1" title="Transmission">
												<FaCogs className="w-5 h-5 mr-1" />
												{product.transmission}
											</div>
										</div>
										<div className="mt-4 flex justify-between items-center">
											<span className="text-2xl font-bold text-gray-900">
												${product.price}
											</span>
											<Link
												to={`/shop/product/${product._id}`}
												className="text-blue-500 flex"
											>
												View Details
												<MdArrowOutward className="w-5 h-5 ml-1" />
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>

			{/* Pagination */}
			{/* <div className="flex justify-center mt-8">
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
			</div> */}
		</section>
	);
};

export default MostSearchedCars;
