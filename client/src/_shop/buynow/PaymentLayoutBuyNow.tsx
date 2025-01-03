import Navbar from "../common/Navbar";
import Payment from "../payment/Payment";
import PaymentBuyNow from "../payment/PaymentBuyNow";
import Cart from "./cart";
import Footer from "@/components/common/Footer";

const PaymentLayout = () => {
    return (
        <section className="w-full h-[1900px] md:h-[1700px] xl:h-[1050px] bg-primary">
            <div className="w-full ">
                <div className="items-start justify-center">
                    <div className="w-full bg-primary">
                        <Navbar />
                    </div>
                </div>
                <div className=" bg-primary">
                    <PaymentBuyNow />
                </div>
                <div className="items-start justify-center">
                    <div className="w-full bg-primary pt-72">
                        <Footer />
                    </div>
                </div>
            </div>
            </section>
    );
};

export default PaymentLayout;
