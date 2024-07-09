import { Slider } from "@/components/ui/slider"
 
type SliderProps = React.ComponentProps<typeof Slider>

const Sidebar = () => {

    // TODO: Make this sidebar dynamic
	const cars_brand = [
		{ name: "Toyota", count: 2 },
		{ name: "Audi", count: 48 },
		{ name: "BMW", count: 14 },
		{ name: "Mercedes", count: 15 },
		{ name: "Nissan", count: 23 },
		{ name: "Porche", count: 1 },
	];


	const colors = ["blue", "red", "white", "yellow", "pink", "gray"];

	return (
		<div className="w-64 text-black font-poppins p-4 shadow-md text-m">
			<div className="bg-[#F5F6F7] p-4 rounded-2xl">
				<h2 className="text-lg font-bold mb-4">Products</h2>
				<ul className="mb-6">
					{cars_brand.map((deal, index) => (
						<li
							key={index}
							className="flex justify-between items-center mb-2"
						>
							<span>{deal.name}</span>
							<span className="text-blue-500">{deal.count}</span>
						</li>
					))}
				</ul>
			</div>
			<div className="bg-[#F5F6F7] p-4 rounded-2xl mt-6">
				<h3 className="font-bold mb-2">
                    Prices
                </h3>
				<div className="flex justify-between text-sm text-gray-600 mb-2">
					<span>Range:</span>
					<span>$13.99 - $25.99</span>
				</div>
				<input type="range" className="w-full" />
			</div>

			<div className="bg-[#F5F6F7] p-4 rounded-2xl mt-6">
				<h3 className="font-bold mb-2">COLOR</h3>
				<div className="flex space-x-2">
					{colors.map((color, index) => (
						<div
							key={index}
							className={`w-6 h-6 rounded-full border border-black bg-${color}-${
								color === "white" ? "" : 500
							}`}
						></div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
