import React from "react";
import { Voucher15do } from "@/assets";
import { MdDelete } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";

const VoucherPopup = () => {

    const { data: vouchers, isLoading, refetch, isRefetching, } = useQuery({
        queryKey: ["vouchers"],
        queryFn: async () => {
            try {
                const response = await fetch("/api/user/vouchers");
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Something went wrong!");
                }

                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
    });

    return (
        <div>
            <div className="flex bg-gray-800 bg-opacity-50 backdrop-blur-xl text-black p-2 mb-4 rounded-2xl shadow-md w-full h-[200px]">
                {vouchers && vouchers.map((voucher) => (
                    <>
                        <div className="relative w-2/3 p-1 mr-4 flex items-center">
                            <img
                            src={voucher.img}
                            className="w-full h-auto shadow-xl shadow-black  rounded"
                            alt="Voucher"
                        />
                        </div>
                            <div className="w-2/3 flex text-md text-white flex-col space-y-2 pt-8">
                                <div className="flex gap-2">
                                    <div className="font-bold ">Discount:</div>
                                    <p className="font-bold text-md">{voucher.discount}%</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="font-bold">Condition:</div>
                                    <p>Bill at least <span className="font-bold"> ${voucher.minPrice} </span></p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="font-bold">Expiry Date:</div>
                                    <p>
                                        {new Date(voucher.expiryDate).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </>
                ))}
            </div>
        </div>
    );
};

export default VoucherPopup;
