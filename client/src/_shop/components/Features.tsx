import { GoShieldCheck } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { FaCarRear } from "react-icons/fa6";

const Features = () => {
    return (
        <section className="pb-40">
            <div className="w-full flex pl-60 pr-32 justify-between gap-8 h-[200px] pt-14 mb-24 font-poppins">
                <div className="bg-opacity-50 rounded-2xl flex items-start justify-start text-black">
                    <div className="text-4xl font-bold">
                        We're BIG on <br/> what matters to you
                    </div>
                </div>
                <div className="bg-opacity-50 w-1/2 rounded-2xl grid grid-cols-2 text-black">
                    <div className="pb-8 px-5">
                        <GoShieldCheck className="text-5xl mb-4 text-blue-400"/>
                        <h1 className="text-2xl text-bold">
                            Special Financing Offers
                        </h1>
                        <p className="pt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt aliqua.
                        </p>
                    </div>
                    <div>
                        <IoDiamondOutline className="text-5xl mb-4 text-blue-400"/>
                        <h1 className="text-2xl text-bold">
                            Trusted Car Dealership
                        </h1>
                        <p className="pt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="pb-8 px-5">
                        <IoIosPricetags className="text-5xl mb-4 text-blue-400"/>
                        <h1 className="text-2xl text-bold">
                            Transparent Pricing
                        </h1>
                        <p className="pt-5">
                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.
                        </p>
                    </div>
                    <div>
                        <FaCarRear className="text-5xl mb-4 text-blue-400"/>
                        <h1 className="text-2xl text-bold">
                            Expert Car Service
                        </h1>
                        <p className="pt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
        </div>
        </section>
    );
}

export default Features
