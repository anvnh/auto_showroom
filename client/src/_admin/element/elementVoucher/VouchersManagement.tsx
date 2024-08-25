import { Voucher15do } from "@/assets";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const VouchersManagement = () => {
	return (
		<motion.div
			className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-1 md:col-span-5 border border-gray-700"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<div className="text-white p-5 space-y-5 md:block hidden">
				<div>
					<Toaster position="top-center" reverseOrder={false} />
					<div className="flex bg-gray-600 p-4 mb-4 rounded-2xl shadow-md w-full h-[390px]">
						<div className="relative w-2/3 p-1 mr-4 flex items-center">
							<img
								src={Voucher15do}
								className="w-full h-auto shadow-xl shadow-black  rounded"
								alt="Voucher"
							/>
						</div>
						<div className="w-2/3 flex flex-col space-y-5">
							<div className="flex justify-end items-center">
								<div className="flex gap-3 bg-black p-2 bg-opacity-20 rounded-2xl">
									<MdDelete className="w-5 h-5 text-red-500 cursor-pointer" />
								</div>
							</div>
                            <div className="font-bold flex gap-12">
                                <div >Quantity:</div>
                                <p >20</p>
                            </div>
                            <div className="flex gap-5">
                                <div className="font-bold">Terms of Use:</div>
                                <p >purchased at AAP showroom, total bill over $50,000</p>
                            </div>
                            <div className="flex gap-5">
                                <div className="font-bold">Manufacture:</div>
                                <p >8/4/2024</p>
                            </div>
                            <div className="flex gap-7">
                                <div className="font-bold">Expiry Date:</div>
                                <p >8/5/2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default VouchersManagement;
