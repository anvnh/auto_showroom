import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Order = () => {

	useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    })
    // swap visa and Dỉrect
	const [showDeliveryForm, setShowDeliveryForm] = useState(true);
	const [showCompleteForm, setShowCompleteForm] = useState(false);
    const [showCanceled, setShowCanceled] = useState(false);
	const [activeForm, setActiveForm] = useState<string>("");

	const toggleForm = (form: string) => {
		if (form === "deli") {
			setShowDeliveryForm(true);
			setShowCompleteForm(false);
            setShowCanceled(false);
			setActiveForm("deli");
		} else if (form === "comple") {
			setShowDeliveryForm(false);
			setShowCompleteForm(true);
            setShowCanceled(false);
			setActiveForm("comple");
        } else if (form === "cance") {
			setShowDeliveryForm(false);
			setShowCompleteForm(false);
            setShowCanceled(true);
			setActiveForm("cance");
		} else {
			setShowDeliveryForm(false);
			setShowCompleteForm(false);
            setShowCanceled(false);
			setActiveForm("");
		}
	};
	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className="bg-gray-800 w-[1700px] h-[900px] rounded-xl p-2 ">
				<div className="w-full px-[400px]">
					<div data-aos="fade-down" className="flex justify-center gap- p-5 font-poppins text-md">
						<button className="bg-gray-900 p-5 rounded-tl-xl rounded-bl-xl backdrop-blur-xl hover:bg-gray-700 cursor-pointer duration-300 transition-all ease-in-out"
                        onClick={() => toggleForm("deli")}
                        >
							On delivery
						</button>
						<button className="bg-gray-900 p-5  backdrop-blur-xl hover:bg-gray-700 cursor-pointer duration-300 transition-all ease-in-out"
                        onClick={() => toggleForm("comple")}
                        >
							Complete
						</button>
						<button className="bg-gray-900 p-5 rounded-tr-xl rounded-br-xl backdrop-blur-xl hover:bg-gray-700 cursor-pointer duration-300 transition-all ease-in-out"
                        onClick={() => toggleForm("cance")}
                        >
							Canceled
						</button>
					</div>
				</div>
                {showDeliveryForm && (
                    <div data-aos="fade-up" className="w-full justify-center px-40  flex mt-12 ">
                        <div className="w-full backdrop-blur-xl p-5 h-[500px] justify-center rounded-md flex bg-gray-700 ">
                            Delivery
                        </div>
                    </div>
                )}
                {showCompleteForm && (
                    <div data-aos="fade-up" className="w-full justify-center px-40 p-5 flex mt-12 ">
                        <div className="w-full backdrop-blur-xl p-5 h-[500px] justify-center rounded-md flex bg-gray-700 ">
                            Complete
                        </div>
                    </div>
                )}
                {showCanceled && (
                    <div data-aos="fade-up" className="w-full justify-center px-40 p-5 flex mt-12 ">
                        <div className="w-full backdrop-blur-xl p-5 h-[500px] justify-center rounded-md flex bg-gray-700 ">
                            Canceled
                        </div>
                    </div>
                )}
			</div>
		</div>
	);
};

export default Order;
