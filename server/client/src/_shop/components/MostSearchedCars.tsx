import { CiBookmark } from "react-icons/ci";
import { RiSpeedUpFill } from "react-icons/ri";
import { FaGasPump } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { FaCartPlus } from "react-icons/fa";



const MostSearchedCars = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 4;

	// get all products
	const { data: products, isLoading, refetch, isRefetching, } = useQuery({
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

	return (
		<section>
			<div className="text-4xl text-black font-poppins font-bold justify-start w-[300px] ss:w-full pl-12 sm:pl-48 xl:pl-52 md:pl-24 md:text-5xl items-center flex pb-12">
				<h1>The most searched car</h1>
			</div>
			<div className="justify-center items-center flex">
			<div className="grid xl:grid-cols-4 md:grid-cols-3 gap-10 md:px-20  ss:grid-cols-2 ">
				{/* Map through products */}
				{!isRefetching && products?.length === 0 && (
					<p className="text-center my-4">No products available</p>
				)}
				{!isLoading &&
					!isRefetching &&
					currentProducts &&
					currentProducts.map((product) => (
						<div key={product._id} className="md:w-[350px] sm:w-[350px] w-[300px] rounded-3xl overflow-hidden border border-gray-900 shadow-lg bg-white hover:bg-gray-400 hover:bg-opacity-15">
							<div className="relative">
								<img
									className="w-full h-48 object-cover"
									src={product.images[0]}
									alt="Car"
								/>
								<button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
									<CiBookmark className="text-xl text-gray-700" />
								</button>
							</div>
							<div className="p-4 text-black">
								<h2 className="text-xl font-bold">
									{product.brand} {product.car_model}
								</h2>
								<p className="text-sm line-clamp-1">
									{product.bio}
								</p>
								<div className="flex items-center justify-between mt-4 text-gray-700 mx-3">
									<div className="items-center mr-4 line-clamp-1">
										<RiSpeedUpFill className="w-5 h-5 mr-1 " />
										{product.top_speed}
									</div>
									<div className="items-center mr-4 line-clamp-1">
										<FaGasPump className="w-5 h-5 mr-1" />
										{product.fuel_type}
									</div>
									<div className="items-center mr-4 line-clamp-1">
										<FaCogs className="w-5 h-5 mr-1" />
										{product.transmission}
									</div>
								</div>
								<div className="mt-4 flex justify-between items-center">
									<span className="text-2xl font-bold text-gray-900">
										{product.price + "$"}
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
					))}
			</div>
			</div>

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

		</section>
	);
};

export default MostSearchedCars;
