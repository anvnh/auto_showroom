import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Cards from "react-credit-cards-2";

const Payment = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const totalPrice = searchParams.get("totalPrice");
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get(
                    "https://restcountries.com/v3.1/all"
                );
                const countryOptions = response.data
                    .map((country) => ({
                        value: country.cca2,
                        label: country.name.common,
                    }))
                    .sort((a, b) => a.label.localeCompare(b.label));
                setCountries(countryOptions);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };

        fetchCountries();
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

    return (
        <section className="text-black mt-10 md:mt-36">
            <div className="container mx-auto p-6 md:p-10 bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-3xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Payment Information</h2>
                <div className="flex justify-center mt-6 mb-12 scale-75 transform md:scale-100 md:hover:scale-110 xl:scale-1 xl:hover:scale-[1.5] md:pb-12 md:pt-12 duration-300 ease-in-out">
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
                        type="text"
                        name="number"
                        className="form-control bg-gray-100 p-2 rounded-lg"
                        placeholder="Card Number"
                        value={state.number}
                        maxLength={16}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        required
                    />
                    <input
                        type="text"
                        name="name"
                        className="form-control bg-gray-100 p-2 rounded-lg"
                        placeholder="Name on Card"
                        value={state.name}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        required
                    />
                    <div className="grid grid-cols-2 gap-4 ">
                        <input
                            type="text"
                            name="expiry"
                            className="form-control bg-gray-100 p-2 rounded-lg"
                            placeholder="Valid Thru (MM/YY)"
                            pattern="\d\d/\d\d"
                            value={state.expiry}
                            maxLength={4}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            required
                        />
                        <input
                            type="text"
                            name="cvc"
                            className="form-control bg-gray-100 p-2 rounded-lg"
                            placeholder="CVC"
                            pattern="\d{3,4}"
                            maxLength={3}
                            value={state.cvc}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            required
                        />
                        <select className="select col-span-2 bg-white select-bordered w-full rounded-lg border-gray-300">
                            {countries.map((country) => (
                                <option key={country.value} value={country.value}>
                                    {country.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                      	className="detail-button bg-white text-black mt-12 px-4 py-2 md:px-6 md:py-3 w-full lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold text-sm md:text-base rounded-3xl text-center
						  before:ease relative h-12 overflow-hidden border-gray-600 border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 font-poppins hover:before:-translate-x-[290px] md:hover:before:-translate-x-[720px]
						  "
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
