import { GoShieldCheck } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { FaCarRear } from "react-icons/fa6";

const Features = () => {
    return (
        <div className="w-full flex pl-60 pr-32 justify-between gap-8 h-[200px] pt-14 font-poppins">
            <div className="bg-opacity-50 w-1/2 rounded-2xl flex items-start justify-start">
                <div className="text-3xl font-bold">
                    We're BIG on <br/> what matters to you
                </div>
            </div>
            <div className="bg-opacity-50 w-1/2 rounded-2xl grid grid-cols-2 backdrop-blur-md">
                <div className="pb-7">
                    <GoShieldCheck className="text-5xl mb-4"/>
                    <h1 className="text-2xl text-bold">
                        Special Financing Offers
                    </h1>
                </div>
                <div>
                    <IoDiamondOutline className="text-5xl mb-4"/>
                    <h1 className="text-2xl text-bold">
                        Trusted Car Dealership
                    </h1>
                </div>
                <div>
                    <IoIosPricetags className="text-5xl mb-4"/>
                    <h1 className="text-2xl text-bold">
                        Transparent Pricing
                    </h1>
                </div>
                <div>
                    <FaCarRear className="text-5xl mb-4"/>
                    <h1 className="text-2xl text-bold">
                        Expert Car Service
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Features
