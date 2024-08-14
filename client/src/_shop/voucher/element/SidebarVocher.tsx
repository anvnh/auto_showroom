import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const SidebarVocher = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-center",
		});
	}, []);
	return (
		<section>
			<div className="w-64 ss:w-[500px] sm:w-[600px] md:w-64 text-black font-poppins p-3 shadow-md text-md grid ss:grid-cols-2 md:grid-cols-1 ss:space-x-5 md:space-x-0">
				<div
					data-aos="fade-right"
					className="bg-[#F5F6F7] p-4 justify-center items-center rounded-xl flex"
				>
					<h2
						data-aos="fade-right"
						data-aos-delay="400"
						className="text-lg font-bold"
					>
						{" "}
						Voucher you have:{" "}
					</h2>
					<p
						data-aos="fade-right"
						data-aos-delay="400"
						className="pl-4 text-center pt-1"
					>
						19
					</p>
				</div>
				<div
					data-aos="fade-right"
					className="bg-[#F5F6F7] p-4 h-full rounded-xl ss:mt-0 md:mt-6 mt-6"
				>
					<h3
						data-aos="fade-right"
						data-aos-delay="400"
						className="font-bold mb-2"
					>
						Prices
					</h3>
					<div
						data-aos="fade-right"
						data-aos-delay="400"
						className="flex justify-between text-sm text-gray-600 mb-2"
					>
						<span>Range:</span>
					</div>
					<div
						data-aos="fade-right"
						data-aos-delay="400"
						className="flex justify-between text-sm text-gray-600 mb-2"
					>
						<span>$13.99 - $25.99</span>
					</div>
					<input
						data-aos-delay="400"
						type="range"
						className="w-full"
					/>
				</div>
			</div>
		</section>
	);
};

export default SidebarVocher;
