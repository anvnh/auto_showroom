import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import ButtonManagement from "../AdminBrand/ButtonManagement";


const ProductRepon = () => {
	const [currentPage, setCurrentPage] = useState(1);

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
	const productsPerPage = 4;
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
		<div className="pt-5 h-full">
			<div className="text-white p-1 space-y-5">
				<div
					data-aos="fade-up"
					className="w-full rounded-xl h-[80px] ss:h-[50px] bg-white text-black items-center gap-12 flex justify-start font-bold"
				>
					<div className="grid grid-cols-2 ss:flex ss:gap-24 p-2 w-full">
						<div>quantity</div>

						<div className="flex gap-4 items-center">
							<p>Color:</p>
							<div className="bg-red-500 w-[20px] h-[20px] rounded-full cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out"></div>
							<div className="bg-blue-400 w-[20px] h-[20px] rounded-full cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out"></div>
							<div className="bg-black w-[20px] h-[20px] rounded-full cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out"></div>
						</div>
						<div className="w-full justify-end items-center flex">
							<div className="flex w-full gap-2 items-center pt-3 ss:pt-0 ">
								<div>Search:</div>
								<input
									type="text"
									className="bg-white border-2 border-gray-400 rounded-md"
								/>
							</div>
						</div>
					</div>
				</div>
        <div
					data-aos="fade-up"
					className="w-full rounded-xl h-[80px] ss:h-[60px] bg-white text-black items-center gap-12 flex justify-start font-bold"
				>
              <ButtonManagement/>
				</div>
				<div>
					{!isLoading &&
						!isRefetching &&
						currentProducts &&
						currentProducts.map((product) => (
							<div
								data-aos="fade-up"
								key={product._id}
								className=" bg-white p-4 mb-4 rounded-2xl shadow-md w-full h-auto"
							>
								<div className="relative w-full">
									<img
										data-aos="fade-up"
										src="https://t4.ftcdn.net/jpg/04/51/65/87/240_F_451658744_Bm9QLAj1D0nluOkPHDKVXKTSZ6jRBOOS.jpg"
										className="w-full h-auto bg-center bg-cover"
									/>
									<span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
										HOT
									</span>
								</div>
								<div className="w-full">
									<h2
										data-aos="fade-up"
										className="text-2xl pt-4 ss:text-4xl ss:pt-4 font-bold mb-2 text-black"
									>
										{product.brand}
									</h2>
									<div
										data-aos="fade-up"
										className="flex items-center mb-2"
									>
										<div className="flex text-yellow-400 ss:text-4xl">
											{/* TODO */}
											{"★".repeat(5)}
											{"☆".repeat(5 - 5)}
										</div>
										<span className="text-gray-600 text-sm ml-2">
											{/* TODO */}0 reviews
										</span>
										<a
											href="#"
											className="text-blue-500 text-sm ml-2 items-center flex"
										>
											Submit a review
										</a>
									</div>
									<div data-aos="fade-up" className="mb-2">
										<span className="text-2xl font-bold text-blue-600 ss:text-3xl">
											${product.price}
										</span>
									</div>
									<p
										data-aos="fade-up"
										className="text-gray-700 mb-4"
									>
										{product.bio}
									</p>
									<div
										data-aos="fade-up"
										className="flex justify-end items-center "
									>
										<button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 ss:text-2xl">
											Add To Cart
										</button>
										<button className="border border-gray-300 text-gray-700 px-4 py-2 rounded">
											<FaBookmark className="ss:w-[30px] h-auto" />
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
		</div>
	);
};

export default ProductRepon;
