import Navbar from "../common/Navbar";
import Payment from "../payment/Payment";
import Cart from "./cart";





const PaymentLayout = () => {
	return (
		<section className="w-full h-[1900px] md:h-[1700px] xl:h-[1050px] bg-primary">
			<div className="w-full ">
				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Navbar />
					</div>
				</div>
				
					<div className="md:grid p-5 pt-1 md:grid-cols-2 md:px-12 xl:px-[100px] md:gap-10">
						<div className=" bg-primary">
							<Payment />
						</div>
						<div className=" bg-primary ">
							<Cart />
						</div>
					</div>
			
			</div>
		</section>
	);
};

export default PaymentLayout;
