import React from "react";

const SidebarVocher = () => {
	return (
		<section>
			<div className="w-64 ss:w-[500px] sm:w-[600px] md:w-64 text-black font-poppins p-3 shadow-md text-md grid ss:grid-cols-2 md:grid-cols-1 ss:space-x-5 md:space-x-0">
				<div className="bg-[#F5F6F7] p-4 justify-center items-center rounded-xl flex">
					<h2 className="text-lg font-bold"> Voucher you have: </h2>
                    <p className="pl-4 text-center pt-1">19</p>
					
				</div>
				<div className="bg-[#F5F6F7] p-4 h-full rounded-xl ss:mt-0 md:mt-6 mt-6">
					<h3 className="font-bold mb-2">Prices</h3>
					<div className="flex justify-between text-sm text-gray-600 mb-2">
						<span>Range:</span>
					</div>
					<div className="flex justify-between text-sm text-gray-600 mb-2">
						<span>$13.99 - $25.99</span>
					</div>
					<input type="range" className="w-full" />
				</div>
			</div>
		</section>
	);
};

export default SidebarVocher;
