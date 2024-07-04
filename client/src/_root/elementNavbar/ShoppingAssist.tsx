import React from "react";

import { BuilCar, offer, testdrive } from "../../assets";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { testDrive } from "@/assets/hplat_asset/img/dropdownNavBarImage/shopping";

const ShoppingAssist = () => {
	return (
		<div >
			<div className="hidden md:block">
			<div>
				<div className="pt-20 h-auto relative justify-start flex">
					<img
						data-aos="slide-right"
					data-aos-delay="1200"
						className="w-[640px] rounded-[25px]"
						src={BuilCar}
					/>
				</div>
				<p 	data-aos="slide-left"
					data-aos-delay="2000" className="pt-6 relative flex pl-36 text-3xl">
					build your car
				</p>
			</div>
			<div>
				<div className="bottom-72 h-auto relative justify-center flex">
					<img
						data-aos="slide-up"
					data-aos-delay="1000"
						className="w-[680px] rounded-[25px]"
						src={offer}
					/>
				</div>
				<p 	data-aos="slide-left"
					data-aos-delay="1700" className="z-20 pl-[850px] bottom-[810px] relative text-3xl">
					Offer
				</p>
			</div>
			<div>
      <div className="bottom-[1100px] h-auto relative justify-end flex">
				<img
					data-aos="slide-left"
			data-aos-delay="1400"
					className="w-[700px] rounded-[25px]"
					src={testdrive}
				/>
			</div>
      <p 	data-aos="slide-right"
					data-aos-delay="1500" className="z-20 pl-[1400px] bottom-[1050px] relative text-3xl">
					Test drive
				</p>
      </div>
			</div>
			<div className="block md:hidden">

			</div>
		</div>
	);
};

export default ShoppingAssist;
