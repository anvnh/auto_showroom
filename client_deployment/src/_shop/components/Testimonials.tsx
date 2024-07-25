import { IoIosStar } from "react-icons/io";
import { MdOutlineVerifiedUser } from "react-icons/md";
const Testimonials = () => {
    return (
        <div className="grid sm:grid-cols-2 grid-cols-1">
            <div className="text-black">
                <div className="md:px-60 px-12 pt-20">
                    <div className="text-3xl md:text-4xl font-bold font-poppins">
                        What Our <br /> Customers Say
                    </div>

                    <div className="py-12">
                        <h1 className="font-bold md:text-2xl pb-3">
                            Great
                        </h1>
                        <div className="flex text-green-400">
                            <IoIosStar className="text-xl" />
                            <IoIosStar className="text-xl" />
                            <IoIosStar className="text-xl" />
                            <IoIosStar className="text-xl" />
                            <IoIosStar className="text-xl" />
                        </div>
                        <div className="pt-3 md:text-xl">
                            Based on 1000+ reviews
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-12 md:pt-20 px-12">
                <div className="flex text-green-400 text-3xl items-center">
                    <IoIosStar className="" />
                    <IoIosStar className="" />
                    <IoIosStar className="" />
                    <IoIosStar className="" />
                    <IoIosStar className="" />
                    <MdOutlineVerifiedUser className="text-xl"/>
                </div>
                <div className="pt-5 md:text-xl text-black">
                    <p>
                        <span className="font-bold md:text-2xl">John Doe</span> <br />
                        <span>CEO at Company</span>
                    </p>
                    <p className="pt-5">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    </p>
                </div>

                <div className="pt-5">
                    <div className="avatar placeholder space-x-4">
                        <div className="bg-black w-12 rounded-3xl text-black"> </div>
                        <div className="bg-black w-12 rounded-3xl text-black"> </div>
                        <div className="bg-black w-12 rounded-3xl text-black"> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
