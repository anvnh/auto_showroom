import React from "react";
import { Button } from "@material-tailwind/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { FiRefreshCw } from "react-icons/fi";

const ButtonManagement = () => {
	return (
		<div className="p-5 space-y-5">
			<Button className="bg-gradient-to-b from-gray-700 to-gray-400 text-white w-56 h-10 text-md items-center flex justify-start">
				<IoIosAddCircleOutline />
				<p className="pl-4">Add product</p>
			</Button>

			<Button className="bg-gradient-to-b from-gray-700 to-gray-400 text-white w-56 h-10 text-md items-center flex justify-start">
				<CiCircleMinus />
				<p className="pl-4">Delete product</p>
			</Button>

			<Button className="bg-gradient-to-b from-gray-700 to-gray-400 text-white w-56 h-10 text-md items-center flex justify-start">
				<FiRefreshCw />
				<p className="pl-4">Update product</p>
                
			</Button>
		</div>
	);
};

export default ButtonManagement;
