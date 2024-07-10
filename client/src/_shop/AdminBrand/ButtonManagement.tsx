import React from "react";
import { Button } from "@material-tailwind/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { FiRefreshCw } from "react-icons/fi";

const ButtonManagement = () => {
	return (
		<div className="w-full">
			<div className="hidden xl:block">
				<div className="p-5 space-y-5">
					<Button data-aos="fade-left" 	data-aos-delay="700" className="bg-gradient-to-b from-gray-700 to-gray-400 text-white w-56 h-10 text-md items-center flex justify-start">
						<IoIosAddCircleOutline />
						<p className="pl-4">Add product</p>
					</Button>

					<Button data-aos="fade-left" 	data-aos-delay="900" className="bg-gradient-to-b from-gray-700 to-gray-400 text-white w-56 h-10 text-md items-center flex justify-start">
						<CiCircleMinus />
						<p className="pl-4">Delete product</p>
					</Button>

					<Button data-aos="fade-left" 	data-aos-delay="1200" className="bg-gradient-to-b from-gray-700 to-gray-400 text-white w-56 h-10 text-md items-center flex justify-start">
						<FiRefreshCw />
						<p className="pl-4">Update product</p>
					</Button>
				</div>
			</div>
			<div className="block xl:hidden">
				<div className="p-3 flex gap-3 items-center justify-center w-full">
					<Button data-aos="fade-up" 	data-aos-delay="700" className="bg-gradient-to-b from-gray-700 to-gray-400 text-white w-20 h-10 text-sm ">
						<p>Add </p>
					</Button>

					<Button data-aos="fade-up" 	data-aos-delay="900" className="bg-gradient-to-b from-gray-700 to-gray-400 text-white w-24 h-10 text-sm ">
						<p>Delete </p>
					</Button>

					<Button data-aos="fade-up" 	data-aos-delay="1200" className="bg-gradient-to-b from-gray-700 to-gray-400 text-white w-24 h-10 text-sm">
						<p>Update</p>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ButtonManagement;
