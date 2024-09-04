import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MdCancelScheduleSend } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import {toast, Toaster} from "react-hot-toast";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

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

    const queryClient = useQueryClient();

    const [currentForm, setCurrentForm] = useState("deli");

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

	const { data: onDelivery, isLoading: isOnDelivery, refetch, isRefetching, } = useQuery({
		queryKey: ["onDelivery"],
		queryFn: async () => {
			try {
				const response = await fetch("/api/order/getOnDelivery/user");
				const data = await response.json();

				if (!response.ok) {
					throw new Error(data.message || "Something went wrong!");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

    const { data: completed, isLoading: isCompleted, refetch: refetchCompleted, isRefetching: isRefetchingCompleted, } = useQuery({
        queryKey: ["completed"],
        queryFn: async () => {
            try {
                const response = await fetch("/api/order/getCompleted/user");
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || "Something went wrong!");
                }

                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
    });

    const {data: canceled, isLoading: isCanceled, refetch: refetchCanceled, isRefetching: isRefetchingCanceled,} = useQuery({
        queryKey: ["canceled"],
        queryFn: async () => {
            try {
                const response = await fetch("/api/order/getCancelledOrders/user");
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || "Something went wrong!");
                }

                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
    });

	const { mutate: cancelOrder, isPending: isCancelling } = useMutation({
		mutationFn: async ({ orderID }) => {
			try {
				const res = await fetch(`/api/order/cancelOrder/${orderID}`, {
					method: "POST",
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
			// invalidate the query to refetch the data
            toast.success("Order canceled successfully");
			queryClient.invalidateQueries({ queryKey: ["onDelivery"] });
			queryClient.invalidateQueries({ queryKey: ["completed"] });
			queryClient.invalidateQueries({ queryKey: ["canceled"] });
		},
		onError: (error) => {
            toast.error(error.message);
		},
	});

    const handleCancelOrder = async (orderID) => {
        cancelOrder({ orderID });
    }
	return (
        <section>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="w-full h-full flex justify-center items-center">
                <div className="bg-gray-800 w-[1700px] h-auto rounded-xl p-2 ">
                    <div className="w-full px-[400px]">
                        <div data-aos="fade-down" className="flex justify-center gap- p-5 font-poppins text-md">
                            <button className={`${currentForm == "deli" ? "bg-gray-500" : "bg-gray-900"} p-5 rounded-tl-xl rounded-bl-xl backdrop-blur-xl hover:bg-gray-700 cursor-pointer duration-300 transition-all ease-in-out`}
                                onClick={() => {toggleForm("deli"), setCurrentForm("deli")}}
                            >
                                On delivery
                            </button>
                            <button className={`${currentForm == "comple" ? "bg-gray-500" : "bg-gray-900"} p-5 backdrop-blur-xl hover:bg-gray-700 cursor-pointer duration-300 transition-all ease-in-out`}
                                onClick={() => {toggleForm("comple"), setCurrentForm("comple")}}
                            >
                                Complete
                            </button>
                            <button className={`${currentForm == "cance" ? "bg-gray-500" : "bg-gray-900"} p-5 rounded-tr-xl rounded-br-xl backdrop-blur-xl hover:bg-gray-700 cursor-pointer duration-300 transition-all ease-in-out`}
                                onClick={() => {toggleForm("cance"), setCurrentForm("cance")}}
                            >
                                Canceled
                            </button>
                        </div>
                    </div>
                    {showDeliveryForm && (
                        <div data-aos="fade-up" className="w-full justify-center px-40 flex overflow-y-auto h-[600px] mb-8">
                            <div className="w-full backdrop-blur-xl p-5 h-[500px] justify-center rounded-md">
                                {onDelivery && onDelivery.length === 0 && (
                                    <div>
                                        <h1 className="text-white text-2xl text-center">
                                            No on delivery order's founds
                                        </h1>
                                    </div>
                                )}
                                {onDelivery && onDelivery.map((order) => (
                                    <div className="bg-gray-500 bg-opacity-40 backdrop-blur-md rounded-2xl mb-8"> 
                                        <div className="text-white font-bold text-xl p-3 bg-primary bg-opacity-80 rounded-2xl flex justify-between">
                                            <div>
                                                OrderID: {order.orderId}
                                            </div>
                                            <div>
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <MdCancelScheduleSend 
                                                            className="text-red-500 flex cursor-pointer w-5 items-center mt-1 justify-center" 
                                                            title="Cancel Order ?"
                                                        />
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent className="bg-gray-900 bg-opacity-45 backdrop-blur-md">
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>
                                                                Are you sure you want to cancel this order?
                                                            </AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                This action is irreversible.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>
                                                                Cancel
                                                            </AlertDialogCancel>
                                                            <AlertDialogAction onClick={() => {
                                                                handleCancelOrder(order._id);
                                                            }}>
                                                                Continue
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        </div>
                                        {order.orderItems.map((item) => (
                                            <div className="flex justify-between p-5 border-b border-gray-500 rounded-2xl">
                                                <div>
                                                    <img src={item.carId.images[0]} alt={item.name} className="w-[200px] h-[130px] rounded-2xl" />
                                                    <p>
                                                        {item.name}
                                                    </p>
                                                </div>
                                                <div className="text-xl font-bold flex justify-center">
                                                    {item.carId.brand}&nbsp;{item.carId.car_model}
                                                </div>
                                                <div className="flex flex-col justify-start items-center">
                                                    <p>
                                                        {item.price} x {item.quantity}
                                                    </p>
                                                    <p className="font-bold">
                                                        ${(Number(item.price.replace(/,/g, "")) * (item.quantity)).toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}   
                            </div>
                        </div>
                    )}
                    {showCompleteForm && (
                        // <div data-aos="fade-up" className="w-full justify-center px-40 p-5 flex mt-12 ">
                        <div data-aos="fade-up" className="w-full justify-center px-40 flex overflow-y-auto h-[600px] mb-8">
                            <div className="w-full backdrop-blur-xl p-5 h-[500px] justify-center rounded-md">
                                {completed && completed.length === 0 && (
                                    <div>
                                        <h1 className="text-white text-2xl text-center">
                                            No completed order's founds
                                        </h1>
                                    </div>
                                )}
                                {completed && completed.map((order) => (
                                    <div className="bg-gray-500 bg-opacity-40 backdrop-blur-md rounded-2xl mb-8"> 
                                        <div className="text-white font-bold text-xl p-3 bg-primary bg-opacity-80 rounded-2xl flex justify-between">
                                            <div>
                                                OrderID: {order.orderId}
                                            </div>
                                            <div>
                                                <MdFeedback
                                                    className="text-green-500 flex cursor-pointer w-5 items-center mt-1 justify-center" 
                                                    onClick={() => {
                                                        {/* TODO */}
                                                    }} 
                                                    title="Feedback"
                                                />
                                            </div>
                                        </div>
                                        {order.orderItems.map((item) => (
                                            <div className="flex justify-between p-5 border-b border-gray-500 rounded-2xl">
                                                <div>
                                                    <img src={item.carId.images[0]} alt={item.name} className="w-[200px] h-[130px] rounded-2xl" />
                                                    <p>
                                                        {item.name}
                                                    </p>
                                                </div>
                                                <div className="text-xl font-bold flex justify-center">
                                                    {item.carId.brand}&nbsp;{item.carId.car_model}
                                                </div>
                                                <div className="flex flex-col justify-start items-center">
                                                    <p>
                                                        {item.price} x {item.quantity}
                                                    </p>
                                                    <p className="font-bold">
                                                        ${(Number(item.price.replace(/,/g, "")) * (item.quantity)).toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}   
                            </div>
                        </div>
                    )}
                    {showCanceled && (
                        <div data-aos="fade-up" className="w-full justify-center px-40 flex overflow-y-auto h-[600px] mb-8">
                            <div className="w-full backdrop-blur-xl p-5 h-[500px] justify-center rounded-md">
                                {canceled && canceled.length === 0 && (
                                    <div>
                                        <h1 className="text-white text-2xl text-center">
                                            No canceled order's founds
                                        </h1>
                                    </div>
                                )}
                                {canceled && canceled.map((order) => (
                                    <div className="bg-gray-500 bg-opacity-40 backdrop-blur-md rounded-2xl mb-8"> 
                                        <div className="text-white font-bold text-xl p-3 bg-primary bg-opacity-80 rounded-2xl flex justify-between">
                                            <div>
                                                OrderID: {order.orderId}
                                            </div>
                                        </div>
                                        {order.orderItems.map((item) => (
                                            <div className="flex justify-between p-5 border-b border-gray-500 rounded-2xl">
                                                <div>
                                                    <img src={item.carId.images[0]} alt={item.name} className="w-[200px] h-[130px] rounded-2xl" />
                                                    <p>
                                                        {item.name}
                                                    </p>
                                                </div>
                                                <div className="text-xl font-bold flex justify-center">
                                                    {item.carId.brand}&nbsp;{item.carId.car_model}
                                                </div>
                                                <div className="flex flex-col justify-start items-center">
                                                    <p>
                                                        {item.price} x {item.quantity}
                                                    </p>
                                                    <p className="font-bold">
                                                        ${(Number(item.price.replace(/,/g, "")) * (item.quantity)).toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}   
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
	);
};

export default Order;
