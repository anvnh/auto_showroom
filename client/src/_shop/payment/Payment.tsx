import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Cards from "react-credit-cards-2";
import AOS from "aos";
import "aos/dist/aos.css";
import mapboxgl from "mapbox-gl";

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

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setState((prev) => ({ ...prev, [name]: value }));
	};

	const handleInputFocus = (e) => {
		setState((prev) => ({ ...prev, focus: e.target.name }));
	};

	const map = useRef<mapboxgl.Map | null>(null);
	const [inputValue, setInputValue] = useState("");
	const [address, setAddress] = useState("");
	const [distance, setDistance] = useState<number | null>(null);
	const [currentLocation, setCurrentLocation] = useState("");

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
							setCurrentLocation(placeName); // Cập nhật vị trí hiện tại
							setInputValue(placeName); // Cập nhật giá trị input
							if (map.current) {
								map.current.setCenter([longitude, latitude]);
								map.current.setZoom(15);

								new mapboxgl.Marker({
									element: createMarkerElement(),
								})
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

	const handleCalculateDistance = () => {
		if (inputValue.trim()) {
			fetch(
				`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
					inputValue
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


	const handleAddressInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputValue(value);
		// Reset khoảng cách khi input trống
		if (!value.trim()) {
			setDistance(null);
		}
	};

	return (
		<section className="text-black mt-10 md:mt-36">
			<div className="container mx-auto p-6 md:p-10 bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-3xl">
				<h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
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
						<input
							data-aos="fade-left"
							data-aos-delay="400"
							type="text"
							name="cvc"
							className="form-control bg-gray-900 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none col-span-2 focus:ring-2 focus:shadow-blue-400 focus:shadow-md transition-all duration-300 text-white"
							placeholder="Search or enter your address"
							value={inputValue}
							onChange={handleAddressInputChange}
						
						/>
							<div className="col-span-1">
						{distance !== null && (
							<div className=" p-4 text-white rounded-lg shadow-md">
								<p>
									VKU to {inputValue}:{" "}
								<span className="text-blue-300">{distance.toFixed(2)} km</span>
								</p>
							</div>
						)}
					</div>
					<div className="flex justify-end gap-5">
						<button
						className="detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 w-full lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold text-sm md:text-base rounded-3xl text-center
							before:ease relative h-12 overflow-hidden border-white border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[290px] md:hover:before:-translate-x-[180px]"
							onClick={handleGetLocation}
						>
							Get Current Address
						</button>
						<button
							className="detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 w-[150px] lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold text-sm md:text-base rounded-3xl text-center
							before:ease relative h-12 overflow-hidden border-white border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[290px] md:hover:before:-translate-x-[180px]"
							onClick={handleCalculateDistance}
						>
							Select
						</button>
					</div>
					</div>
				
				</div>
				<div>
				<div data-aos="fade-right">
					<button
						className="detail-button bg-white text-black mt-12 px-4 py-2 md:px-6 md:py-3 w-full lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold text-sm md:text-base rounded-3xl text-center
							before:ease relative h-12 overflow-hidden border-white border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[290px] md:hover:before:-translate-x-[800px]
"
						type="submit"
					>
						Payment
					</button>
				</div>
			</div>
			</div>
		</section>
	);
};

export default Payment;
