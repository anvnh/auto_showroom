import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";

const Products = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 2;

    // get all products
	const { data: products, isLoading, refetch, isRefetching} = useQuery({
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
			<div>
				{!isLoading &&
					!isRefetching &&
					products &&
					products.map((product) => (
						<div
							key={product._id}
							className="flex bg-white p-4 mb-4 rounded-2xl shadow-md w-full h-[300px]"
						>
							<div className="relative w-1/3 mr-4 overflow-hidden">
								<img
									src="https://t4.ftcdn.net/jpg/04/51/65/87/240_F_451658744_Bm9QLAj1D0nluOkPHDKVXKTSZ6jRBOOS.jpg"
									className="w-full h-[300px] rounded"
								/>
								<span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
									HOT
								</span>
							</div>
							<div className="w-2/3">
								<h2 className="text-xl font-bold mb-2 text-black">
									{product.brand}
								</h2>
								<div className="flex items-center mb-2">
									<div className="flex text-yellow-400">
										{/* TODO */}
										{"★".repeat(5)}
										{"☆".repeat(5 - 5)}
									</div>
									<span className="text-gray-600 text-sm ml-2">
										{/* TODO */}0 reviews
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
										${product.price}
									</span>
									{/* <span className="text-gray-500 line-through ml-2">
							${oldPrice}
						</span> */}
									{/* <span className="text-red-500 ml-2">
							{discount}% OFF
						</span> */}
								</div>
								<p className="text-gray-700 mb-4">
									{product.bio}
								</p>
								<div className="flex">
									<button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
										Add To Cart
									</button>
									<button className="border border-gray-300 text-gray-700 px-4 py-2 rounded">
										<FaBookmark />
									</button>
								</div>
							</div>
						</div>
					))}
			</div>
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
		</section>
	);
}

export default Products