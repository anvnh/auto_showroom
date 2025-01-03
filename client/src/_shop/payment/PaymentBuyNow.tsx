import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Cards from "react-credit-cards-2";
import AOS from "aos";
import "aos/dist/aos.css";
import mapboxgl from "mapbox-gl";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import calculateAvgRating from "@/utils/calculateAvgRating";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MdDelete, MdOutlineCalculate } from "react-icons/md";
import QuantityCounter from "@/utils/QuantityCounter";
import { toast, Toaster } from "react-hot-toast";
import { Link, createSearchParams } from "react-router-dom";
import VoucherPopup from "./VoucherPopup";
import { IoLocation } from "react-icons/io5";
import { GiHomeGarage } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import useAuthUser from "@/hooks/useAuthUser";
import Car from "@/components/3d/child_component/Supra";
import { car3popular } from "@/_productpage";

mapboxgl.accessToken =
	"pk.eyJ1IjoidHVhbmFuaDIwMDU4ODkiLCJhIjoiY20wNmc3cGE5MGR0bTJpczR6anF0cDMxeiJ9.nf180VnWasOogLOLMOS5gw";

let isAOSInitialized = false;
const Payment = () => {
	useEffect(() => {
		if (!isAOSInitialized) {
			AOS.init({
				duration: 1200,
				easing: "ease-in-out",
				once: true,
				mirror: false,
				anchorPlacement: "top-bottom",
			});
			isAOSInitialized = true; // Đặt cờ là true sau khi khởi tạo AOS
		}
	}, []);
	const [state, setState] = useState({
		number: "",
		name: "",
		expiry: "",
		cvc: "",
		focus: "",
	});
	const [inputinformation, setInputinformation] = useState({
		RecipientName: "",
		Gmail: "",
		Phone: "",
		Address: "",
	});

    const [payMethod, setPayMethod] = useState(null);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setState((prev) => ({ ...prev, [name]: value }));
	};

	const handleInputFocus = (e) => {
		setState((prev) => ({ ...prev, focus: e.target.name }));
	};

    const { data: vouchers } = useQuery({
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

	const map = useRef<mapboxgl.Map | null>(null);
    const [inputAddressValue, setInputAddressValue] = useState("");
	const [address, setAddress] = useState("");
	const [distance, setDistance] = useState<number | null>(null);
	const [currentLocation, setCurrentLocation] = useState("");
	const [shippingCost, setShippingCost] = useState<number | null>(null);

	const handleClick = () => {
		setAddress("Trường Đại học CNTT và TT Việt-Hàn");
		setDistance(0);
		setShippingCost(0);
	};

	const calculateDistance = (
		lat1: number,
		lon1: number,
		lat2: number,
		lon2: number
	) => {
		const toRadians = (degree: number) => degree * (Math.PI / 180);
		const R = 6371;
		const dLat = toRadians(lat2 - lat1);
		const dLon = toRadians(lon2 - lon1);
		const a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(toRadians(lat1)) *
				Math.cos(toRadians(lat2)) *
				Math.sin(dLon / 2) *
				Math.sin(dLon / 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

		return R * c;
	};

	const handleGetLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					fetch(
						`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`
					)
						.then((response) => response.json())
						.then((data) => {
							const placeName =
								data.features[0]?.place_name ||
								"Location not found";
							setAddress(placeName);
							setCurrentLocation(placeName);
							setInputAddressValue(placeName);

							// Gọi hàm tính phí ship
							handleCalculateDistance(placeName);

							if (map.current) {
								map.current.setCenter([longitude, latitude]);
								map.current.setZoom(15);

								new mapboxgl.Marker({})
									.setLngLat([longitude, latitude])
									.addTo(map.current);
							}
						})
						.catch((error) =>
							console.error(
								"Error fetching location data:",
								error
							)
						);
				},
				(error) => console.error("Error getting geolocation:", error)
			);
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	};

	const handleCalculateDistance = (address: string) => {
		if (address.trim()) {
			fetch(
				`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
					address
				)}.json?access_token=${mapboxgl.accessToken}`
			)
				.then((response) => response.json())
				.then((data) => {
					const feature = data.features[0];
					if (feature) {
						const { center } = feature;
						const [longitude, latitude] = center;

						const daNangLat = 15.975098188846443;
						const daNangLon = 108.25353149551003;
						const calculatedDistance = calculateDistance(
							daNangLat,
							daNangLon,
							latitude,
							longitude
						);
						setDistance(calculatedDistance);
						// Tính tiền ship: 5 đô mỗi km
						const calculatedShippingCost = calculatedDistance * 5;

						setShippingCost(calculatedShippingCost);
					} else {
						alert("Address not found.");
					}
				})
				.catch((error) =>
					console.error("Error fetching location data:", error)
				);
		} else {
			alert("Please enter an address to calculate distance.");
		}
	};

	const handleAddressInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = e.target.value;
		setAddress(value);

		if (!value.trim()) {
			setDistance(null);
			setShippingCost(null);
		} else {
			handleCalculateDistance(value);
		}
	};

	// change div
	const [visa, setVisa] = useState(true);
	const [infomationForm, setInformationForm] = useState(false);

	const toggleForm = (form) => {
		if (form === "visa") {
			setVisa(true);
			setInformationForm(false);
		} else if (form === "infomation") {
			setVisa(false);
			setInformationForm(true);
		}
	};

	// của cart
	const ID = useParams();
	const carId = ID.id;
	// get single car
	const {
		data: car,
		isLoading,
		refetch,
		isRefetching,
	} = useQuery({
		queryKey: ["car", carId],
		queryFn: async () => {
			try {
				const response = await fetch(`/api/car/${carId}`);
				const data = await response.json();

				// console.log(data);

				if (!response.ok) {
					throw new Error(data.message || "Something went wrong!");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

	useEffect(() => {
		AOS.init({
			duration: 1200,
			easing: "ease-in-out",
			once: true,
			mirror: false,
			anchorPlacement: "top-bottom",
		});
	}, []);

	const queryClient = useQueryClient();
	const [deletingItems, setDeletingItems] = useState<{
		[key: string]: boolean;
	}>({});

	const { mutate: deleteItem, isPending: isDeleting } = useMutation({
		mutationFn: async ({ item_id }) => {
			try {
				const res = await fetch(`/api/user/delete/cart/${item_id}`, {
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
		onSuccess: (data, variables) => {
			toast.success("Car removed successfully");
			setDeletingItems((prev) => ({
				...prev,
				[variables.item_id]: false,
			}));
			queryClient.invalidateQueries({ queryKey: ["cart"] });
		},
		onError: (error, variables) => {
			setDeletingItems((prev) => ({
				...prev,
				[variables.item_id]: false,
			}));
			toast.error("Failed to remove item");
		},
	});

	const [quantities, setQuantities] = useState({});

	const increaseQuantity = (item) => {
		setQuantities((prevQuantities) => ({
			...prevQuantities,
			[item._id]: (prevQuantities[item._id] || 1) + 1,
		}));
	};

	const decreaseQuantity = (item) => {
		setQuantities((prevQuantities) => ({
			...prevQuantities,
			[item._id]: Math.max((prevQuantities[item._id] || 1) - 1, 1),
		}));
	};

    const {mutate: addOrderToDatabase} = useMutation({
        mutationFn: async ({cars, info}) => {
            try {
                const res = await fetch("/api/order/add", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({cars, info}),
                });
                const result = await res.json();

                if (!res.ok) {
                    throw new Error(result.error || "Something went wrong");
                }

                return result;
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            toast.success("We have received and send you an email with the payment details. Please check your email.");
        },
        onError: (error) => {
            toast.error("Failed to add order:", error.message);
        },
    });

    const {mutate: sendPaymentMail, isLoading: isSendingMail} = useMutation({
        mutationFn: async ({cars, info}) => {
            try {
                const res = await fetch("/api/user/payment/buynow/details", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({cars, info}),
                });
                const result = await res.json();

                if (!res.ok) {
                    throw new Error(result.error || "Something went wrong");
                }

                return result;
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: ({cars, info}) => {
            addOrderToDatabase({
                cars, info
            });
            // toast.success("Payment mail sent successfully");
        },
        onError: (error) => {
            toast.error("Internal server error", error.message);
        },
    });

    const {data: user} = useAuthUser();

	const calculateTotalPrice = () => {
		if (!car) return 0;

			const itemTotal =
				Number(car.price.replace(/,/g, "")) *
				(quantities[car._id] || 1);		
		// console.log("oko " + itemTotal);
		// const totalPriceWithShipping = totalCartPrice + (Math.round(shippingCost) || 0);
		// Trả với visa thì trả trước tiền cọc 40%
		return itemTotal;
		// return totalPriceWithShipping;
		// return totalPriceWithShipping.toLocaleString();
	};


	const calculateTotalPriceWithVoucher = (percent, payMethod) => {
		if (!car) return 0;
		const itemTotal =
				Number(car.price.replace(/,/g, "")) *
				(quantities[car._id] || 1);		

		const totalPriceWithShipping =
		itemTotal + (Math.round(shippingCost) || 0);
		const depon = (totalPriceWithShipping * percent) / 100;
		const depons = itemTotal - depon;
		// console.log("per " + percent)
		// console.log("depon " + depons)
		const totallast = (depons * 40) / 100;
		// console.log(totallast)
		return payMethod == "Visa" ? totallast : depons;
	};

	const handleDelete = async (itemId) => {
		setDeletingItems((prev) => ({ ...prev, [itemId]: true }));
		deleteItem({ item_id: itemId });
	};

	const handleProceedToPayment = () => {
		if (!car){
            return toast.error("Please add a car to your cart");
		}
        const quantity = quantities[car._id] || 1;
        const total = Number(car.price.replace(/,/g, "")) * quantity;
        const vehicleInfo = {
            id: car._id,
            brand: car.brand,
            model: car.car_model,
            price: car.price,
            quantity: quantity,
            total: total
        }
        // create a unique order Id, required number and characters
        const orderId = Math.floor(Math.random() * 10000000000) + Math.random().toString(36).substring(2, 13).toUpperCase();
        const paymentMethod = payMethod == null ? toast.error("Please choose payment method") : payMethod;
        const paymentResult =  paymentMethod === "Visa" ? "Paid" : "Not Paid";
        const isPaid = paymentResult === "Paid" ? true : false;
        const isDelivered = false;
        if(!address || user ? !user.fullName : !inputinformation.RecipientName || user ? !user.email : !inputinformation.Gmail || !inputinformation.Phone) {
            // console.log(address, inputinformation.RecipientName, inputinformation.Gmail, inputinformation.Phone);
            return toast.error("Please fill in all the information");
        }
        if(paymentMethod === "Visa") {
            if(!state.number || !state.name || !state.expiry || !state.cvc) {
                return toast.error("Please fill in all the information");
            }
        }
        if(orderId && paymentMethod)  {
            // toast.success("Payment successful");
            // console.log(address);
            sendPaymentMail({
                cars: vehicleInfo,
                info: {
                    fullName: user ? user.fullName : inputinformation.RecipientName,
                    orderId,
                    address,
                    shippingCost,
                    paymentMethod,
                    paymentResult,
                    email: user ? user.email : inputinformation.Gmail,
                    totalPrice: calculateTotalPrice(),
                    isPaid,
                    paidAt: isPaid ? new Date() : null,
                    isDelivered,
                    deliveredAt: null,
                    phone: inputinformation.Phone,
                    state,
                }
            });
        }
	};

	// swap visa and Dỉrect
	const [showvisaForm, setShowVisaForm] = useState(false);
	const [showdirectForm, setShowDirectForm] = useState(false);
	const [activeForm, setActiveForm] = useState<string>("");

	const toggleFormPayment = (form: string) => {
		if (form === "visaPayment") {
			setShowVisaForm(true);
			setShowDirectForm(false);
			setActiveForm("visaPayment");
		} else if (form === "DirectPayment") {
			setShowVisaForm(false);
			setShowDirectForm(true);
			handleClick();
			setActiveForm("DirectPayment");
		} else {
			setShowVisaForm(false);
			setShowDirectForm(false);
			setActiveForm("");
		}
	};

    const [selectedVoucher, setSelectedVoucher] = useState("");
    const [voucherPercent, setVoucherPercent] = useState(0);

    const handleChooseVoucher = (voucher) => {
        setSelectedVoucher(voucher._id);
        setVoucherPercent(voucher.discount);
        document.getElementById("Add_Voucher").close();
    }
	const handlClickRemoveVoucher = () => {
		
		console.log("0");
		setVoucherPercent(0);
		toast.success("Remove voucher successfully");

	};
	return (
		<div className="md:grid p-5 pt-1 md:grid-cols-2 md:px-12 xl:px-[100px] md:gap-10">
            <Toaster position="top-center" reverseOrder={false} />
			<div className="mt-20 md:mt-36 ">
				<div className="w-full bg-gray-800 rounded-3xl backdrop-blur-md p-5 sm:flex mb-7">
					<h1 className="w-full justify-start flex font-bold font-poppins text-white text-2xl md:pb-0 pb-5">
						Choose payment method
					</h1>
					<div className="flex gap-4 sm:justify-end justify-center w-full">
						<button
							className="detail-button bg-white text-black w-[120px] lg:h-[40px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold text-sm md:text-base rounded-3xl text-center items-center
							before:ease relative h-12 overflow-hidden border-white border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[290px] md:hover:before:-translate-x-[120px]"
							onClick={() => {
                                toggleFormPayment("visaPayment")
                                setPayMethod("Visa")
                            }}
						>
							Card
						</button>
						<button
							className="detail-button bg-white text-black  w-[120px] lg:h-[40px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold text-sm md:text-base rounded-3xl text-center items-center
							before:ease relative h-12 overflow-hidden border-white border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[290px] md:hover:before:-translate-x-[120px]"
							onClick={() => {
                                toggleFormPayment("DirectPayment")
                                setPayMethod("Direct")
                                setAddress("Trường Đại học CNTT và TT Việt-Hàn")
                            }}
						>
							Direct
						</button>
					</div>
				</div>
				{showdirectForm && (
					<section data-aos="fade-left" className="text-black">
						<div className="container mx-auto p-6 md:p-10 bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-3xl">
							<h2 className="text-2xl md:text-3xl font-bold font-poppins mb-20 text-white">
								Input infomation
							</h2>
							<div className="mt-4 grid grid-cols-1 gap-4 md:gap-6">
								<input
									data-aos="fade-left"
									type="text"
									className="form-control bg-gray-900 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:shadow-blue-400 focus:shadow-md transition-all duration-300 text-white "
									placeholder="Recipient name "
									name="RecipientName"
									value={user ? user.fullName : inputinformation.RecipientName}
									onChange={(event) =>
										setInputinformation({
											...inputinformation,
											RecipientName: event.target.value,
										})
									}
									required
								/>
								<input
									data-aos="fade-left"
									type="text"
									data-aos-delay="100"
									className="form-control bg-gray-900 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:shadow-blue-400 focus:shadow-md transition-all duration-300 text-white "
									placeholder="Gmail"
									name="Gmail"
									value={user ? user.email : inputinformation.Gmail}
									onChange={(event) =>
										setInputinformation({
											...inputinformation,
											Gmail: event.target.value,
										})
									}
									required
								/>
								<input
									data-aos="fade-left"
									data-aos-delay="200"
									name="Phone"
									value={inputinformation.Phone}
									onChange={(event) =>
										setInputinformation({
											...inputinformation,
											Phone: event.target.value,
										})
									}
									type="number"
									className="form-control bg-gray-900 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:shadow-blue-400 focus:shadow-md transition-all duration-300 text-white "
									placeholder="Phone number"
									required
								/>
								<div className="grid grid-cols-2 gap-4 ">
									<input
										data-aos="fade-left"
										data-aos-delay="400"
										type="text"
										name="cvc"
										className="form-control bg-gray-900 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none col-span-2 focus:ring-2 focus:shadow-blue-400 focus:shadow-md transition-all duration-300 text-white"
										placeholder="Search or enter your address"
										value={address}
										onChange={handleAddressInputChange}
										disabled
									/>
									<div className="col-span-1">
										<div className="md:hidden block">
											{distance !== null && (
												<div className=" p-4 text-white rounded-lg shadow-md">
													<p>
														Distance about: <br />
														<span className="text-blue-300">
															{distance.toFixed(
																2
															)}{" "}
															km
														</span>
													</p>
												</div>
											)}
										</div>
										<div className="md:block hidden">
											{distance !== null && (
												<div className=" p-4 text-white rounded-lg shadow-md">
													<p>
														Distance about:
														<span className="text-blue-300 pl-3">
															{distance.toFixed(
																2
															)}{" "}
															km
														</span>
													</p>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				)}
				{showvisaForm && (
					<section data-aos="fade-left" className="text-black">
						{visa && (
							<div className="container mx-auto p-6 md:p-10 bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-3xl">
								<h2 className="text-2xl md:text-3xl font-bold font-poppins mb-6 text-white">
									Payment Information
								</h2>
								<div className="flex justify-center mt-6 mb-12 scale-75 transform md:scale-100 md:hover:scale-110 xl:scale-[1.2] xl:hover:scale-[1.3] md:pb-12 md:pt-12 duration-300 ease-in-out">
									<Cards
										number={state.number}
										expiry={state.expiry}
										cvc={state.cvc}
										name={state.name}
										focused={state.focus}
									/>
								</div>
								<div className="mt-4 grid grid-cols-1 gap-4 md:gap-6">
									<input
										data-aos="fade-left"
										type="text"
										name="number"
										className="form-control bg-gray-900 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:shadow-blue-400 focus:shadow-md transition-all duration-300 text-white "
										placeholder="Card Number"
										value={state.number}
										maxLength={16}
										onChange={handleInputChange}
										onFocus={handleInputFocus}
										required
									/>

									<input
										data-aos="fade-left"
										data-aos-delay="200"
										type="text"
										name="name"
										className="form-control bg-gray-900 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:shadow-blue-400 focus:shadow-md transition-all duration-300 text-white "
										placeholder="Name on Card"
										value={state.name}
										onChange={handleInputChange}
										onFocus={handleInputFocus}
										required
									/>
									<div className="grid grid-cols-2 gap-4 ">
										<input
											data-aos="fade-left"
											data-aos-delay="300"
											type="text"
											name="expiry"
											className="form-control bg-gray-900 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:shadow-blue-400 focus:shadow-md transition-all duration-300 text-white "
											placeholder="Valid Thru (MM/YY)"
											pattern="\d\d/\d\d"
											value={state.expiry}
											maxLength={4}
											onChange={handleInputChange}
											onFocus={handleInputFocus}
											required
										/>
										<input
											data-aos="fade-left"
											data-aos-delay="400"
											type="text"
											name="cvc"
											className="form-control bg-gray-900 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:shadow-blue-400 focus:shadow-md transition-all duration-300 text-white "
											placeholder="CVC"
											pattern="\d{3,4}"
											maxLength={3}
											value={state.cvc}
											onChange={handleInputChange}
											onFocus={handleInputFocus}
											required
										/>
									</div>
								</div>
								<div>
									<div
										data-aos="fade-right"
										className="flex gap-5 justify-end"
									>
										<button
											className="detail-button bg-white text-black mt-12 px-4 py-2 md:px-6 md:py-3 w-[320px] lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold text-sm md:text-base rounded-3xl text-center
										before:ease relative h-12 overflow-hidden border-white border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[200px] md:hover:before:-translate-x-[370px]
"
											onClick={() =>
												toggleForm("infomation")
											}
										>
											Enter personal information
										</button>
									</div>
								</div>
							</div>
						)}
						{infomationForm && (
							<div className="container mx-auto p-6 md:p-10 bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-3xl">
								<h2 className="text-2xl md:text-3xl font-bold mb-6 text-white font-poppins">
									Input infomation
								</h2>
								<div className="flex justify-center mt-6 mb-12 scale-75 transform md:scale-100 md:hover:scale-110 xl:scale-[1.2] xl:hover:scale-[1.3] md:pb-12 md:pt-12 duration-300 ease-in-out">
									<Cards
										number={state.number}
										expiry={state.expiry}
										cvc={state.cvc}
										name={state.name}
										focused={state.focus}
									/>
								</div>
								<div className="mt-4 grid grid-cols-1 gap-4 md:gap-6">
									<input
										data-aos="fade-left"
										type="text"
										name="RecipientName"
                                        value={user ? user.fullName : inputinformation.RecipientName}
										onChange={(event) =>
											setInputinformation({
												...inputinformation,
												RecipientName:
													event.target.value,
											})
										}
										className="form-control bg-gray-900 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:shadow-blue-400 focus:shadow-md transition-all duration-300 text-white "
										placeholder="Recipient name "
										required
									/>
									<input
										data-aos="fade-left"
										type="text"
										data-aos-delay="100"
										className="form-control bg-gray-900 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:shadow-blue-400 focus:shadow-md transition-all duration-300 text-white "
										placeholder="Gmail"
										name="Gmail"
                                        value={user ? user.email : inputinformation.Gmail}
										onChange={(event) =>
											setInputinformation({
												...inputinformation,
												Gmail: event.target.value,
											})
										}
										required
									/>
									<input
										data-aos="fade-left"
										data-aos-delay="200"
										type="number"
										name="Phone"
										value={inputinformation.Phone}
										onChange={(event) =>
											setInputinformation({
												...inputinformation,
												Phone: event.target.value,
											})
										}
										className="form-control bg-gray-900 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:shadow-blue-400 focus:shadow-md transition-all duration-300 text-white "
										placeholder="Phone number"
										required
									/>
									<div className="grid grid-cols-2 gap-4 ">
										<input
											data-aos="fade-left"
											data-aos-delay="400"
											type="text"
											className="form-control bg-gray-900 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none col-span-2 focus:ring-2 focus:shadow-blue-400 focus:shadow-md transition-all duration-300 text-white"
											placeholder="Search or enter your address"
											value={address}
											onChange={handleAddressInputChange}
											required
										/>
										<div className="col-span-1">
											<div className="md:hidden block">
												{distance !== null && (
													<div className=" p-4 text-white rounded-lg shadow-md">
														<p>
															Distance about:{" "}
															<br />
															<span className="text-blue-300">
																{distance.toFixed(
																	2
																)}{" "}
																km
															</span>
														</p>
													</div>
												)}
											</div>
											<div className="md:block hidden">
												{distance !== null && (
													<div className=" p-4 text-white rounded-lg shadow-md">
														<p>
															Distance about:
															<span className="text-blue-300 pl-3">
																{distance.toFixed(
																	2
																)}{" "}
																km
															</span>
														</p>
													</div>
												)}
											</div>
										</div>
										<div className="flex justify-end gap-9 mt-3 mr-3">
											<button
												onClick={ handleClick }
												className="text-white scale-[2]  hover:scale-[2.2] transition-all ease-in-out duration-300"
												title="	Receive at VKU"
											>
												<GiHomeGarage />
											</button>
											<button
												className="text-white scale-[2]  hover:scale-[2.2] transition-all ease-in-out duration-300"
												onClick={handleGetLocation}
												title="	Get Current Address"
											>
												<IoLocation />
											</button>
										</div>
									</div>
								</div>
								<div>
									<div
										data-aos="fade-right"
										className="flex gap-5 justify-end"
									>
										<button
											className="detail-button bg-white text-black mt-12 px-4 py-2 md:px-6 md:py-3 w-[320px] lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold text-sm md:text-base rounded-3xl text-center
										before:ease relative h-12 overflow-hidden border-white border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[290px] md:hover:before:-translate-x-[320px]

"
											onClick={() => toggleForm("visa")}
										>
											Enter card information
										</button>
									</div>
								</div>
							</div>
						)}
					</section>
				)}
			</div>
			{/* cart --------------*/}
			<section className="text-white relative md:mt-36 mt-12">
				<div className="container p-2 bg-gray-800 backdrop-blur-md rounded-3xl">
					<h2
						data-aos="fade-up"
							className="text-3xl font-bold mb-8 p-4 font-poppins"
					>
						Your Cart
					</h2>
					<div className="pt-0 px-5">
						{isLoading && isRefetching && <LoadingSpinner />}
						{!isLoading &&
							!isRefetching &&
							car &&
							car.length === 0 && (
								<div className="text-center text-xl text-white mt-24">
									Your cart is empty 🙄. Add some cars to your
									cart
								</div>
							)}
						{!isLoading && !isRefetching && car && (
								<div
								data-aos="fade-up"
								className="h-[510px] overflow-y-auto overflow-x-hidden"
							>

										<section
											className="mb-4"
											key={car._id}
										>
											<div className="flex flex-col md:flex-row bg-gradient-to-r from-white to-gray-400 hover:bg-gradient-to-r hover:from-gray-100 hover:to-white p-3 mb-4 rounded-2xl shadow-md h-auto w-full hover:bg-opacity-90">
												<div className="relative w-full flex items-center justify-center">
													<Link
														to={`/shop/product/${car._id}`}
													>
														<img
															src={car.images[0]}
															className="w-full h-auto md:h-[200px] bg-cover object-cover bg-center bg- rounded"
														/>
													</Link>
												</div>
												<div className="w-full md:w-[0.75] text-black">
													<div>
														<h2 className="text-2xl mb-5 pl-3 md:mt-0 mt-3 font-bold text-black">
															{car.brand}&nbsp;
															{car.car_model}
														</h2>
														<h3 className="line-clamp-2 h-[50px] pl-3 md:px-4 mt-3">
															{car.bio}
														</h3>
														<div className="hidden md:block">
															<div className="justify-end items-end h-full p-5 w-full gap-5 flex flex-col md:flex-row">
																<div className="mb-2 w-full md:w-[200px]">
																	<span className="text-[20px] font-bold text-blue-600">
																		${" "}
																		{(
																			Number(
																				car.price.replace(
																					/,/g,
																					""
																				)
																			) *
																			(quantities[
																				car
																					._id
																			] ||
																				1)
																		).toLocaleString()}
																	</span>
																</div>

																<div className="w-full justify-end flex text-black">
																	<div className="flex items-center hover:bg-gray-100 hover:bg-opacity-15 rounded-lg overflow-hidden w-full md:w-24">
																		<QuantityCounter
																			quantity={
																				quantities[
																					car
																						._id
																				] ||
																				1
																			}
																			onIncrease={() =>
																				increaseQuantity(
																					car
																				)
																			}
																			onDecrease={() =>
																				decreaseQuantity(
																					car
																				)
																			}
																		/>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="xl:hidden block">
													<div className="w-full justify-center flex">
														<hr className=" border-black w-1/2 border-1" />
													</div>
												</div>
												<div className="block md:hidden">
													<div className="ml-3 mt-4 md:ml-12 ">
														<div className="ml-0 md:ml-7 mb-2 text-black">
															<div className="flex items-center hover:bg-gray-100 hover:bg-opacity-15 rounded-lg overflow-hidden w-full md:w-24">
																<div className="pr-12">
																	Quantity:
																</div>
																<QuantityCounter
																	quantity={
																		quantities[
																			car
																				._id
																		] || 1
																	}
																	onIncrease={() =>
																		increaseQuantity(
																			car
																		)
																	}
																	onDecrease={() =>
																		decreaseQuantity(
																			car
																		)
																	}
																/>
															</div>
														</div>

														<div className="ml-0 md:ml-12 mb-2 w-full md:w-[100px] text-black">
															Total:
															<span className="pl-20 text-[18px] font-bold text-blue-600">
																$
																{(
																	Number(
																		car.price.replace(
																			/,/g,
																			""
																		)
																	) *
																	(quantities[
																		car._id
																	] || 1)
																).toLocaleString()}
															</span>
														</div>
													</div>
												</div>
												<div className="scale-100 justify-end flex">
													<div
														className="flex items-center justify-end w-[35px] h-[35px] rounded-full hover:bg-opacity-70 cursor-pointer p-2 shadow-black text-blackhover:bg-white transition-all duration-300 ease-in-out green-400  font-bold text-md md:text-basetext-center
						  before:ease relative overflow-hidden before:absolute before:right-0 before:top-0 before:h-12 before:w-4 before:translate-x-12 before:rotate-12 before:bg-red-500 before:opacity-50 before:duration-700 hover:shadow-red-500 font-poppins hover:before:-translate-x-[290px] md:hover:before:-translate-x-[49px]"
														title="Remove from cart"
													>
														{deletingItems[
															car._id
														] && <LoadingSpinner />}
														{!deletingItems[
															car._id
														] && (
															<MdDelete
																className="text-red-600 text-xl"
																onClick={() =>
																	handleDelete(
																		car._id
																	)
																}
															/>
														)}
													</div>
												</div>
											</div>
										</section>
								
								
							</div>
						)}
	<div data-aos="fade-right">
							<div className="hidden md:block">
								{distance !== null && (
									<div className=" p-4 text-white rounded-lg shadow-md w-full flex justify-end">
										<div>
											<p>
												VKU to {inputAddressValue}:{" "}
												<span className="text-blue-300 pl-3">
													{distance.toFixed(2)} km
												</span>
											</p>
											<p className="flex justify-end">
												Shipping Cost:{" "}
												<span className="text-blue-300 pl-3">
													${shippingCost?.toFixed(2)}
												</span>{" "}
											</p>
										</div>
									</div>
								)}
							</div>
							<div className="block md:hidden">
								{distance !== null && (
									<div className=" text-white rounded-lg shadow-md w-full flex justify-start">
										<div>
											<p>
												Distance about
												<span className="text-blue-300 pl-3">
													{distance.toFixed(2)} km
												</span>
											</p>
											<p className="flex ">
												Shipping Cost:{" "}
												<span className="text-blue-300 pl-3">
													${shippingCost?.toFixed(2)}
												</span>{" "}
											</p>
										</div>
									</div>
								)}
							</div>
							<div className="block md:hidden">
								<div className="flex justify-start pt-10 text-white font-bold text-2xl">
									{payMethod === "Visa" ? (
										<>
											<div>
												<span className="text-md items-center">
													Total Price(Deposit 40%):
												</span>
												<span>
													&nbsp; $
													{calculateTotalPrice()}
												</span>
											</div>
										</>
									) : (
										<span>
											Total Price: $
											{calculateTotalPrice()}
										</span>
									)}
								</div>
							</div>
							<div className="hidden md:block">
								<div className="flex justify-end pt-10 text-white font-bold text-2xl">
									{payMethod === "Visa" ? (
										<>
											{voucherPercent !== 0 ? (
												<div>
													<span className="text-md items-center">
														Total Price(Deposit
														40%): &nbsp;
													</span>
													<span className="line-through text-blue-500">
														${calculateTotalPrice()}
													</span>
													<span>
														&nbsp; $
														{calculateTotalPriceWithVoucher(
															voucherPercent,
															payMethod
														)}
													</span>
												</div>
											) : (
												<div>
													<span className="text-md items-center">
														Total Price(Deposit
														40%):
													</span>
													<span>
														&nbsp; $
														{calculateTotalPrice()}
													</span>
												</div>
											)}
										</>
									) : (
										<span>
											{voucherPercent !== 0 ? (
												<>
													<span className="text-md items-center">
														Total Price:&nbsp;
													</span>
													<span className="line-through text-blue-500">
														${calculateTotalPrice()}
													</span>
													<span>
														&nbsp; $
														{calculateTotalPriceWithVoucher(
															voucherPercent,
															payMethod
														)}
													</span>
												</>
											) : (
												<>
													<span className="text-md items-center">
														Total Price:
													</span>
													<span>
														&nbsp; $
														{calculateTotalPrice()}
													</span>
												</>
											)}
										</span>
									)}
								</div>
							</div>
							<div className="flex justify-end pb-4 pt-6 gap-3">
							{voucherPercent !== 0 ? (
								<div
									onClick={handlClickRemoveVoucher}
									className="detail-button bg-red-400 text-black px-4 py-2 md:px-6 md:py-3 w-[120px] text-xs lg:w-[200px] cursor-pointer lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white items-center font-bold sm:text-sm md:text-base rounded-3xl text-center relative h-12  overflow-hidden border-white border shadow-2xl before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[210px]"
								>
									Remove Voucher
								</div>
							) : (
								<div></div>
							)}
								<div
									className="detail-button bg-gray-400 text-black px-4 py-2 md:px-6 md:py-3 w-[120px] text-xs lg:w-[150px] cursor-pointer lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white items-center font-bold sm:text-sm md:text-base rounded-3xl text-center relative h-12  overflow-hidden border-white border shadow-2xl before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[210px]"
									onClick={() =>
										document
											.getElementById("Add_Voucher")
											.showModal()
									}
								>
									Voucher
								</div>

								{user && (
									<>
										<div className="md:block hidden">
											<div
												onClick={handleProceedToPayment}
												className="hover:cursor-pointer detail-button bg-white text-black px-4 py-2 md:px-6 w-full  text-xs lg:w-[250px] lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white font-bold sm:text-sm items-center md:text-base rounded-3xl text-center relative h-12  overflow-hidden border-white border shadow-2xl before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[290px]"
											>
												{isSendingMail ? (
													<LoadingSpinner />
												) : (
													"Proceed to Payment"
												)}
											</div>
										</div>
										<div className="justify-end">
											<div className="block md:hidden ">
												<div
													onClick={
														handleProceedToPayment
													}
													className="detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 w-full  text-xs lg:w-[250px] lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white font-bold sm:text-sm items-center md:text-base rounded-3xl text-center relative h-12  overflow-hidden border-white border shadow-2xl before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[210px]"
												>
													{isSendingMail ? (
														<LoadingSpinner />
													) : (
														"Proceed to Payment"
													)}
												</div>
											</div>
										</div>
									</>
								)}
							</div>
						</div>
						<div>
							<dialog id="Add_Voucher" className="modal">
								<div className="modal-box backdrop-blur-3xl bg-gray-100  shadow-gray-500 shadow-md bg-opacity-0 w-full h-full flex rounded-xl">
									<div className=" rounded-lg shadow-lg w-full">
                                        {/*
                                        <VoucherPopup />
                                        */}
                                            <div className="flex bg-gray-800 bg-opacity-50 backdrop-blur-xl text-black p-2 mb-4 rounded-2xl shadow-md w-full h-[200px]">
                                                {vouchers && vouchers.map((voucher) => (
                                                    <div
                                                        className="flex hover:cursor-pointer"
                                                        onClick={() => {
                                                            handleChooseVoucher(voucher)
                                                        }}
                                                    >
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
                                                        </div>
                                                ))}
                                            </div>
									</div>
								</div>
								<form
									method="dialog"
									className="modal-backdrop"
								>
									<button className="outline-none">
										Close
									</button>
								</form>
							</dialog>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default Payment;
