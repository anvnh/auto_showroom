import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";

const Sidebar = () => {

	const { data: carsData, isLoading, refetch, isRefetching} = useQuery({
		queryKey: ["carsData"],
		queryFn: async () => {
			try {
				const response = await fetch("/api/car/all");
				const data = await response.json();

				const brandTotals = {};

				data.forEach((car) => {
					const { brand, quantity } = car;
					if (brandTotals[brand]) {
						brandTotals[brand] += quantity;
					} else {
						brandTotals[brand] = quantity;
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

	return (
		<section>
			{isLoading && <LoadingSpinner/>}
			{!isLoading && carsData && (
				<div className="w-64 text-black font-poppins p-3 shadow-md text-m">
					<div className="bg-[#F5F6F7] p-4 rounded-2xl">
						<h2 className="text-lg font-bold mb-4"> Brands </h2>
						<ul className="mb-6">
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
					<div className="bg-[#F5F6F7] p-4 rounded-2xl mt-6">
						<h3 className="font-bold mb-2">Prices</h3>
						<div className="flex justify-between text-sm text-gray-600 mb-2">
							<span>Range:</span>
							<span>$13.99 - $25.99</span>
						</div>
						<input type="range" className="w-full" />
					</div>

					<div className="bg-[#F5F6F7] p-4 rounded-2xl mt-6">
						<h3 className="font-bold mb-2">COLOR</h3>
					</div>
				</div>
			)}
		</section>
	);
};

export default Sidebar;
