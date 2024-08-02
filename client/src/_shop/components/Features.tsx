import { GoShieldCheck } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { FaCarRear } from "react-icons/fa6";

const Features = () => {
	return (
		<div className="pt-5">
			<hr className="w-1/2 border-black mx-auto relative top-1" />
			<section className="pb-24 pt-20">
				<div className="w-full flex px-12 sm:px-20 md:pl-60 justify-between gap-16 h-auto pt-10 font-poppins">
					<div className="bg-opacity-50 rounded-2xl flex items-start justify-start text-black ">
						<div className="md:text-5xl text-2xl sm:text-4xl font-bold mt-10">
							We're BIG on <br /> what matters to you
						</div>
					</div>
					<div className="bg-opacity-5 sm:text-xl w-full grid md:grid-cols-2 text-black bg-gray-600 p-10 rounded-3xl hover:bg-opacity-20">
						<div className="space-y-2">
							<GoShieldCheck className="text-4xl text-blue-400" />
							<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
								Special Financing Offers
							</h1>
							<p className="pt-5">
								Drive home your dream car with our flexible financing options. Enjoy low payments and competitive rates.
							</p>
						</div>
						<div className="space-y-2">
							<IoDiamondOutline className="text-4xl text-blue-400 " />
							<h1 className="text-2xl font-bold md:text-4xl">
								Trusted Car Dealership
							</h1>
							<p className="pt-5">
								Experience the difference of buying from a trusted name. We're committed to providing exceptional customer service and quality vehicles.
							</p>
						</div>
						<div className="pt-5 space-y-2">
							<IoIosPricetags className="text-4xl text-blue-400" />
							<h1 className="text-2xl  font-bold md:text-4xl">
								Transparent Pricing
							</h1>
							<p className="pt-5">
								No hidden fees, no surprises. Our clear and upfront pricing ensures you know exactly what you're paying.
							</p>
						</div>
						<div className="pt-5 space-y-2">
							<FaCarRear className="text-4xl text-blue-400" />
							<h1 className="text-2xl font-bold md:text-4xl">
								Expert Car Service
							</h1>
							<p className="pt-5">
								Trust our skilled technicians to keep your car running smoothly. From routine maintenance to complex repairs, we deliver exceptional service every time.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Features;
