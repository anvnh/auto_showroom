import { Slider } from "@/components/ui/slider"
 
type SliderProps = React.ComponentProps<typeof Slider>

const Sidebar = () => {

    // TODO: Make this sidebar dynamic
	const cars_brand = [
		{ name: "Toyota", count: "_" },
		{ name: "Audi", count: "_" },
		{ name: "BMW", count: "_" },
		{ name: "Mercedes", count: "_"},
		{ name: "Nissan", count: "_"},
		{ name: "Porche", count: "_"},
	];


	return (
		<div className="w-64 text-black font-poppins p-4 shadow-md text-m">
			<div className="bg-[#F5F6F7] p-4 rounded-2xl">
				<h2 className="text-lg font-bold mb-4"> Brands </h2>
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
			</div>
		</div>
	);
};

export default Sidebar;
