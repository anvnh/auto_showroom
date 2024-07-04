import { CiBookmark } from "react-icons/ci";
import { RiSpeedUpFill } from "react-icons/ri";
import { FaGasPump } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";

const Products = () => {

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

	return (
		<div className="flex flex-warp gap-4 w-full px-36">
			{/* Map through products */}
			{!isLoading && !isRefetching && products?.length === 0 && (
				<p className="text-center my-4">No products available</p>
			)}
			{!isLoading &&
				!isRefetching &&
				products &&
				products.map((product) => (
					<div className="w-[500px] rounded-3xl overflow-hidden shadow-lg bg-white hover:bg-opacity-85">
						<div className="relative">
							<img
								className="w-full h-48 object-cover"
								src={product.image}
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
							<p className="text-sm">{product.bio}</p>
							<div className="flex items-center justify-between mt-4 text-gray-700 mx-3">
								<div className="items-center mr-4">
									<RiSpeedUpFill className="w-5 h-5 mr-1" />
									{product.performance.top_speed}
								</div>
								<div className="items-center mr-4">
									<FaGasPump className="w-5 h-5 mr-1" />
									{product.fuel_type}
								</div>
								<div className="items-center">
									<FaCogs className="w-5 h-5 mr-1" />
									{product.transmission}
								</div>
							</div>
							<div className="mt-4 flex justify-between items-center">
								<span className="text-2xl font-bold text-gray-900">
									{product.price + "$"}
								</span>
								<Link to="" className="text-blue-500 flex">
									View Details
									<MdArrowOutward className="w-5 h-5 ml-1" />
								</Link>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default Products;
