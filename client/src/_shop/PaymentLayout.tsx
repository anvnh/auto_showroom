import Footer from "@/components/common/Footer";
import Navbar from "./common/Navbar";
import OverviewCart from "./payment/OverviewCart";
import Payment from "./payment/Payment";
import { useState } from "react";

const PaymentLayout = () => {
	return (
		<section className="w-full h-[1900px] md:h-[1700px] xl:h-[1100px] bg-primary">
			<div className="w-full ">
				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Navbar />
					</div>
				</div>

				<div className=" min-h-[900px] ">
					<div className=" bg-primary ">
						<Payment />
					</div>
				
				</div>
				<div className="items-start justify-center">
					<div className="w-full bg-primary pt-24">
						<Footer />
					</div>
				</div>
			</div>
		</section>
	);
};

export default PaymentLayout;
