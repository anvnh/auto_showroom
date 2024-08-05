import React from "react";
import { Voucher15do } from "@/assets";
import { MdDelete } from "react-icons/md";

const VoucherPopup = () => {
	return (
		<div>
			<div className="flex bg-gray-800 bg-opacity-50 backdrop-blur-xl text-black p-2 mb-4 rounded-2xl shadow-md w-full h-[200px]">
				<div className="relative w-2/3 p-1 mr-4 flex items-center">
					<img
						src={Voucher15do}
						className="w-full h-auto shadow-xl shadow-black  rounded"
						alt="Voucher"
					/>
				</div>

				<div className="w-2/3 flex text-md text-white flex-col space-y-2 pt-8">
					<div className="flex gap-2">
						<div className="font-bold ">Quantity:</div>
						<p>20</p>
					</div>
					<div className="flex gap-2">
						<div className="font-bold ">Discount:</div>
						<p>15%</p>
					</div>
					<div className="flex gap-2">
						<div className="font-bold">Condition:</div>
						<p>Bill over $50,000</p>
					</div>
					<div className="flex gap-2">
						<div className="font-bold">Expiry Date:</div>
						<p>8/5/2024</p>
					</div>
				</div>
			</div>
			<div className="flex bg-gray-800 bg-opacity-50 backdrop-blur-xl text-black p-2 mb-4 rounded-2xl shadow-md w-full h-[200px]">
				<div className="relative w-2/3 p-1 mr-4 flex items-center">
					<img
						src={Voucher15do}
						className="w-full h-auto shadow-xl shadow-black  rounded"
						alt="Voucher"
					/>
				</div>

				<div className="w-2/3 flex text-md text-white flex-col space-y-2 pt-8">
					<div className="flex gap-2">
						<div className="font-bold ">Quantity:</div>
						<p>20</p>
					</div>
					<div className="flex gap-2">
						<div className="font-bold ">Discount:</div>
						<p>15%</p>
					</div>
					<div className="flex gap-2">
						<div className="font-bold">Condition:</div>
						<p>Bill over $50,000</p>
					</div>
					<div className="flex gap-2">
						<div className="font-bold">Expiry Date:</div>
						<p>8/5/2024</p>
					</div>
				</div>
			</div>
			<div className="flex bg-gray-800 bg-opacity-50 backdrop-blur-xl text-black p-2 mb-4 rounded-2xl shadow-md w-full h-[200px]">
				<div className="relative w-2/3 p-1 mr-4 flex items-center">
					<img
						src={Voucher15do}
						className="w-full h-auto shadow-xl shadow-black  rounded"
						alt="Voucher"
					/>
				</div>

				<div className="w-2/3 flex text-md text-white flex-col space-y-2 pt-8">
					<div className="flex gap-2">
						<div className="font-bold ">Quantity:</div>
						<p>20</p>
					</div>
					<div className="flex gap-2">
						<div className="font-bold ">Discount:</div>
						<p>15%</p>
					</div>
					<div className="flex gap-2">
						<div className="font-bold">Condition:</div>
						<p>Bill over $50,000</p>
					</div>
					<div className="flex gap-2">
						<div className="font-bold">Expiry Date:</div>
						<p>8/5/2024</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VoucherPopup;
