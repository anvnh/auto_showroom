import Navbar from "./common/Navbar";
import OverviewCart from "./payment/OverviewCart";
import Payment from "./payment/Payment";

const PaymentLayout = () => {
	return (
		<section className="w-full bg-primary">
			<div className="w-full ">
				<div className="items-start justify-center">
					<div className="w-full bg-primary">
                        <Navbar />
					</div>
				</div>
				<div className="items-start justify-center flex space-x-10">
					<div className="w-1/3 bg-primary">
                        <Payment />
					</div>
                    <div className="w-1/3 bg-primary">
						<OverviewCart />
                    </div>
				</div>
            </div>
		</section>
	);
};

export default PaymentLayout;
