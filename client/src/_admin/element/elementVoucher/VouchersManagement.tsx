import { Voucher15do } from "@/assets";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import {toast, Toaster} from "react-hot-toast";

const VouchersManagement = () => {

    const queryClient = useQueryClient();

	// get all vouchers
	const { data: vouchers, isLoading, refetch, isRefetching, } = useQuery({
		queryKey: ["vouchers"],
		queryFn: async () => {
			try {
				const response = await fetch("/api/vouchers/all");
				const data = await response.json();

                console.log(data);

				if (!response.ok) {
					throw new Error(data.message || "Something went wrong!");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

    // delete voucher
	const { mutate: deleteVoucher, isPending: isDeleting } = useMutation({
		mutationFn: async (ID) => {
			try {
				const res = await fetch(`/api/vouchers/delete/${ID}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const data = await res.json();

				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
		onSuccess: () => {
			toast.success("Voucher deleted successfully");
			// invalidate the query to refetch the data
			queryClient.invalidateQueries({ queryKey: ["vouchers"] });
		},
	});


    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-1 md:col-span-5 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
                <div className="text-white p-5 space-y-5 ">
                    <div>
                        {isLoading && isRefetching && <LoadingSpinner />}
                        {!isLoading && !isRefetching && vouchers?.length === 0 && (
                            <p className="text-center text-gray-300">No vouchers found!</p>
                        )}
                        {!isLoading &&
                            !isRefetching &&
                            vouchers &&
                            vouchers?.map((product) => (
                                <div className="md:flex bg-gray-600 mb-8 ss:text-xl sm:text-xl p-7 md:p-3 md:mb-4 rounded-2xl shadow-md w-full h-auto md:h-[390px]">
                                    <div className="relative md:w-2/3 p-1 md:mr-4 flex items-center">
                                        <img
                                        src={product.img}
                                        className="w-full md:h-[320px] shadow-xl object-cover shadow-black  rounded"
                                        alt="Voucher"
                                    />
                                    </div>
                                        <div className="md:w-2/3 flex flex-col space-y-3">
                                         <div className="hidden md:block">
                                         <div className="flex justify-end items-center">
                                                <div className="flex gap-3 bg-black p-2 bg-opacity-20 rounded-2xl">
                                                    {isDeleting ? (
                                                        <LoadingSpinner />
                                                    ) : (
                                                        <MdDelete 
                                                            className="w-5 h-5 text-red-500 cursor-pointer" 
                                                            onClick={() => deleteVoucher(product._id)}   
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                         </div>
                                            <div>
                                                <div className="font-bold">Terms of Use:</div>
                                                <p>
                                                    Purchasing products at AAP showroom, minimum bill required: &nbsp;
                                                    <span className='md:font-bold text-md'>
                                                        ${product.minPrice}
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <span className="font-bold">
                                                    Discount:&nbsp;
                                                    <span className="text-xl pl-5">
                                                        {product.discount}%
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex gap-5">
                                                <div className="font-bold">
                                                    Manufacture:
                                                </div>
                                                <p>
                                                    {product.manufacturDate}
                                                </p>
                                            </div>
                                            <div className="flex gap-7">
                                                <div className="font-bold">Expiry Date:</div>
                                                <p>
                                                    {product.expiryDate}
                                                </p>
                                            </div>
                                            <div className="flex gap-7">
                                                <div className="font-bold">
                                                    Criteria:
                                                </div>
                                                <p>
                                                    {/*TODO*/}
                                                    User must have at least {product.minPosts} posts and {product.minLikes} likes
                                                </p>
                                            </div>
                                            <div className="block md:hidden">
                                         <div className="flex justify-end items-center">
                                                <div className="flex gap-3 bg-black p-2 bg-opacity-20 rounded-2xl">
                                                    {isDeleting ? (
                                                        <LoadingSpinner />
                                                    ) : (
                                                        <MdDelete 
                                                            className="w-5 h-5 text-red-500 cursor-pointer" 
                                                            onClick={() => deleteVoucher(product._id)}   
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                         </div>
                                        </div>
                                    </div>
                        ))}
                </div>
            </div>
        </motion.div>
    );
};

export default VouchersManagement;
