import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

const Sidebar = () => {
	const {
		data: carsData,
		isLoading,
		refetch,
		isRefetching,
	} = useQuery({
		queryKey: ["carsData"],
		queryFn: async () => {
			try {
				const response = await fetch("/api/car/all");
				const data = await response.json();

				const brandTotals = {};

				data.forEach((car) => {
					const { brand, quantity } = car;
					if (brandTotals[brand]) {
						brandTotals[brand] += Number(quantity);
					} else {
						brandTotals[brand] = Number(quantity);
					}
				});

				if (!response.ok) {
					throw new Error(data.message || "Something went wrong!");
				}

				return Object.entries(brandTotals).map(([brand, quantity]) => ({
					brand,
					quantity,
				}));
			} catch (error) {
				throw new Error(error);
			}
		},
	});

	const { data: pricesData } = useQuery({
		queryKey: ["pricesData"],
		queryFn: async () => {
			try {
				const response = await fetch("/api/car/other/getMinMax");
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
		<section>
			{isLoading && <LoadingSpinner />}
			{!isLoading && carsData && (
				<div
					data-aos="fade-right"
					className="w-64 ss:w-[500px] sm:w-[600px] md:w-64 text-black font-poppins p-3 shadow-md text-md grid ss:grid-cols-2 md:grid-cols-1 ss:space-x-5 md:space-x-0"
				>
					<div className="bg-[#F5F6F7] p-4 rounded-xl">
						<h2
							data-aos="fade-right"
							data-aos-delay="300"
							className="text-lg font-bold mb-4"
						>
							Brands
						</h2>
						<ul
							data-aos="fade-right"
							data-aos-delay="300"
							className="mb-6"
						>
							{carsData.map((car) => (
								<li
									key={car.brand}
									className="flex justify-between items-center mb-2"
								>
									<span>{car.brand}</span>
									<span className="text-blue-500">
										{car.quantity}
									</span>
								</li>
							))}
						</ul>
					</div>
					<div
						data-aos="fade-right"
						className="bg-[#F5F6F7] p-4 h-full rounded-xl ss:mt-0 md:mt-6 mt-6"
					>
						<h3
							data-aos="fade-right"
							data-aos-delay="300"
							className="font-bold mb-2 text-lg"
						>
							Prices
						</h3>
						{pricesData && (
							<div
								data-aos="fade-right"
								data-aos-delay="300"
								className="flex justify-between text-md text-black mb-2 font-plain"
							>
								<p>
									Min: ${pricesData.minPrice.toLocaleString()}
									<br />
									Max: ${pricesData.maxPrice.toLocaleString()}
								</p>
							</div>
						)}
						<div
							data-aos="fade-right"
							data-aos-delay="300"
							className="space-y-4 justify-between text-sm text-gray-600 mb-2"
						>
							<input
								type="number"
								placeholder="Min"
								className="p-2 w-full border border-gray-300 rounded-md bg-white text-black"
							/>
							<input
								type="number"
								placeholder="Max"
								className="p-2 w-full border border-gray-300 rounded-md bg-white text-black"
							/>
							<Button
								className="
							detail-button bg-gray-300 text-black px-4 py-2 md:px-6 md:py-3  w-full h-[40px] items-center justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white font-bold text-sm md:text-base rounded-xl text-center relative  overflow-hidden border-gray-600 border shadow-2xl before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[210px] 
							
							"
							>
								Filter
							</Button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Sidebar;
