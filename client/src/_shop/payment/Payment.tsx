import axios from "axios";
import { useEffect, useState } from "react";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";

const Payment = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all");
                const countryOptions = response.data.map((country) => ({
                    value: country.cca2,
                    label: country.name.common,
                })).sort((a, b) => a.label.localeCompare(b.label));
                setCountries(countryOptions);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };

        fetchCountries();
    }, []);

	return (
		<section className="text-white mt-44">
			<div className="container mx-auto p-10 bg-white bg-opacity-30 backdrop-blur-md rounded-3xl">
				<h2 className="text-2xl font-bold mb-4">Card Info</h2>
				<div>
					<div className="mb-4">
						<label className="block text-sm font-bold mb-2">
							Card Numbers
						</label>
						<div className="flex">
                        <input 
							type="text" 
							placeholder="1234 1234 1234 1234" 
							className="border border-white input input-bordered w-full max-w-xs" 
						/>
							<div className="flex items-center ml-2 space-x-3">
								<FaCcVisa size={30} />
								<FaCcMastercard size={30} />
							</div>
						</div>
					</div>
					<div className="mb-4">
						<label className="block  text-sm font-bold mb-2">
							Expired Day
						</label>
                        <input 
							type="text" 
							placeholder="MM/YY" 
							className="border border-white input input-bordered w-full max-w-xs" 
						/>
					</div>
					<div className="mb-4">
						<label className="block  text-sm font-bold mb-2">
							CVV
						</label>
                        <input 
							type="text" 
							placeholder="CVV" 
							className="border border-white input input-bordered w-full max-w-xs" 
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-sm font-bold mb-2" >
							Country
						</label>
						<select className="select select-bordered w-full max-w-xs rounded border-white">
                            {countries.map((country) => (
                                <option key={country.value} value={country.value}>
                                    {country.label}
                                </option>
                            ))}
						</select>
					</div>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Payment
					</button>
				</div>
			</div>
		</section>
	);
};

export default Payment;
