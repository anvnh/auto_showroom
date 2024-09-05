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
                <div className="bg-gray-800 w-screen md:w-[1000px] h-auto pb-12 md:rounded-xl p-2 ">
                    <div className="w-full">
                        <div data-aos="fade-down" className="flex justify-center p-5 font-poppins text-xs md:text-md">
                            <button className={`${currentForm == "deli" ? "bg-gray-500" : "bg-gray-900"} p-5 rounded-tl-xl rounded-bl-xl backdrop-blur-xl hover:bg-gray-700 cursor-pointer duration-300 transition-all ease-in-out group`}
                                onClick={() => {toggleForm("deli"), setCurrentForm("deli")}}
                            >
                              <p className="group-hover:scale-105 transition-all ease-in-out duration-300 font-bold">
                              On delivery
                              </p>
                            </button>
                            <button className={`${currentForm == "comple" ? "bg-gray-500" : "bg-gray-900"} p-5 backdrop-blur-xl hover:bg-gray-700 group cursor-pointer duration-300 transition-all ease-in-out`}
                                onClick={() => {toggleForm("comple"), setCurrentForm("comple")}}
                            >
                              <p className="group-hover:scale-105 transition-all ease-in-out duration-300 font-bold">
                              Complete
                              </p>
                            </button>
                            <button className={`${currentForm == "cance" ? "bg-gray-500" : "bg-gray-900"} p-5 rounded-tr-xl rounded-br-xl backdrop-blur-xl group hover:bg-gray-700 cursor-pointer duration-300 transition-all ease-in-out`}
                                onClick={() => {toggleForm("cance"), setCurrentForm("cance")}}
                            >
                               <p className="group-hover:scale-105 transition-all ease-in-out duration-300 font-bold">
                               Canceled
                               </p>
                            </button>
                        </div>
                    </div>
                    {showDeliveryForm && (
                        <div data-aos="fade-up" className="w-full justify-center md:px-12  flex overflow-y-auto overflow-x-hidden h-auto min-h-[800px] mb-8">
                            <div className="w-full backdrop-blur-xl p-5  h-[500px] justify-center rounded-md">
                                {onDelivery && onDelivery.length === 0 && (
                                    <div>
                                        <h1 className="text-white text-2xl text-center font-kanit">
                                            No on delivery order's founds
                                        </h1>
                                    </div>
                                )}
                                {onDelivery && onDelivery.map((order) => (
                                    <div className="bg-gray-600 bg-opacity-40 backdrop-blur-md rounded-2xl mb-8"> 
                                        <div className="text-white  font-bold text-xl p-3 bg-primary bg-opacity-80 rounded-tr-xl rounded-tl-xl w-full md:h-[60px] flex justify-center">
                                            <div className="text-xl w-full">
                                                OrderID: <span className="font-normal">{order.orderId}</span>
                                            </div>
                                            <div>
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <MdCancelScheduleSend 
                                                            className="text-red-500 flex cursor-pointer w-5 items-center mt-2 justify-center" 
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
                                            <div className="xs:flex p-5 border-b border-gray-500 rounded-2xl">
                                                <div cla>
                                                    <img src={item.carId.images[0]} alt={item.name} className="md:w-[400px] h-[250px] bg-cover object-cover bg-center rounded-2xl" />
                                                    <p>
                                                        {item.name}
                                                    </p>
                                                </div>
                                              <div className="pl-5 mt-5 ">
                                              <div className="text-2xl xs:w-[360px] font-bold font-kanit flex justify-start">
                                                    {item.carId.brand}&nbsp;{item.carId.car_model}
                                                </div>
                                                <div className="flex text-xl mt-5 justify-start w-full items-center">
                                                    <p>
                                                        {item.price} x {item.quantity}
                                                    </p>
                                                </div>
                                                <p className="text-blue-500 font-kanit mt-2 text-2xl">
                                                        $ {(Number(item.price.replace(/,/g, "")) * (item.quantity)).toLocaleString()}
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
                        <div data-aos="fade-up" className="w-full justify-center md:px-12 flex overflow-y-auto h-auto min-h-[800px] mb-8">
                            <div className="w-full backdrop-blur-xl p-5 h-[500px] justify-center rounded-md">
                                {completed && completed.length === 0 && (
                                    <div>
                                        <h1 className="text-white text-2xl text-center font-kanit">
                                            No completed order's founds
                                        </h1>
                                    </div>
                                )}
                                {completed && completed.map((order) => (
                                    <div className="bg-gray-500 bg-opacity-40 backdrop-blur-md rounded-2xl mb-8"> 
                                      <div className="text-white  font-bold text-xl p-3 bg-primary bg-opacity-80 rounded-tr-xl rounded-tl-xl w-full md:only:h-[60px] flex justify-center">
                                      <div className="text-xl w-full">
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
                                            <div className="xs:flex p-5 border-b border-gray-500 rounded-2xl">
                                                <div>
                                                    <img src={item.carId.images[0]} alt={item.name} className="w-[400px] h-[250px] bg-cover object-cover bg-center rounded-2xl" />
                                                    <p>
                                                        {item.name}
                                                    </p>
                                                </div>
                                                <div className="pl-5 mt-5">
                                              <div className="text-2xl xs:w-[360px] font-bold font-kanit flex justify-start">
                                                    {item.carId.brand}&nbsp;{item.carId.car_model}
                                                </div>
                                                <div className="flex text-xl mt-5 justify-start w-full items-center">
                                                    <p>
                                                        {item.price} x {item.quantity}
                                                    </p>
                                                </div>
                                                <p className="text-blue-500 font-kanit mt-2 text-2xl">
                                                        $ {(Number(item.price.replace(/,/g, "")) * (item.quantity)).toLocaleString()}
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
                        <div data-aos="fade-up" className="w-full justify-center md:px-12 flex overflow-y-auto h-auto min-h-[800px] mb-8">
                            <div className="w-full backdrop-blur-xl p-5 h-[500px] justify-center rounded-md">
                                {canceled && canceled.length === 0 && (
                                    <div>
                                        <h1 className="text-white text-2xl text-center font-kanit">
                                            No canceled order's founds
                                        </h1>
                                    </div>
                                )}
                                {canceled && canceled.map((order) => (
                                    <div className="bg-gray-500 bg-opacity-40 backdrop-blur-md rounded-2xl mb-8"> 
                                      <div className="text-white  font-bold text-xl p-3 bg-primary bg-opacity-80 rounded-tr-xl rounded-tl-xl w-full md:h-[60px] flex justify-center">
                                      <div className="text-xl w-full">
                                                OrderID: {order.orderId}
                                            </div>
                                        </div>
                                        {order.orderItems.map((item) => (
                                            <div className="xs:flex p-5 border-b border-gray-500 rounded-2xl">
                                                <div>
                                                    <img src={item.carId.images[0]} alt={item.name}  className="w-[400px] h-[250px] bg-cover object-cover bg-center rounded-2xl" />
                                                    <p>
                                                        {item.name}
                                                    </p>
                                                </div>
                                                <div className="pl-5 mt-5">
                                              <div className="text-2xl xs:w-[360px] font-bold font-kanit flex justify-start">
                                                    {item.carId.brand}&nbsp;{item.carId.car_model}
                                                </div>
                                                <div className="flex text-xl mt-5 justify-start w-full items-center">
                                                    <p>
                                                        {item.price} x {item.quantity}
                                                    </p>
                                                </div>
                                                <p className="text-blue-500 font-kanit mt-2 text-2xl">
                                                        $ {(Number(item.price.replace(/,/g, "")) * (item.quantity)).toLocaleString()}
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
