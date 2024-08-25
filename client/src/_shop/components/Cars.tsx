import { Link } from "react-router-dom";
import { MdAddShoppingCart, MdArrowOutward, MdShoppingCart } from "react-icons/md";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { CiBookmark } from "react-icons/ci";
import { RiSpeedUpFill } from "react-icons/ri";
import { FaCogs, FaGasPump } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import AOS from "aos";
import "aos/dist/aos.css";
const Cars = () => {

	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-center",
		});
	}, []);
	const [loadingProductId, setLoadingProductId] = useState(null);

	const {mutate: addToCart, isPending,} = useMutation({
		mutationFn: async (productId) => {
			try {
				const response = await fetch(`/api/user/add/cart/${productId}`, {
					method: "POST",
				});
				const data = await response.json();

				if (!response.ok) {
					throw new Error(data.error || "Something went wrong!");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
		onSuccess: () => {
			toast.success("Product added to cart", {
				duration: 2000, 
			});

			setTimeout(() => { setLoadingProductId (null) });
		},
		onError: (error) => {
			// TODO
			// toast.error("Item already in cart", {
			// 	duration: 2000,
			// });
            toast.error(error.message);

			setTimeout(() => { setLoadingProductId (null) });
		}
    });

	const { data: products, isLoading, isRefetching} = useQuery({
		queryKey: ["products"],
		queryFn: async () => {
			try {
				// const response = await fetch("/api/car/get/find/mostRated");
				const response = await fetch("/api/car/find/mostRated");
				const data = await response.json();

				if (!response.ok) {
					throw new Error(data.message || "Something went wrong!");
				}

                console.log(data);

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

	const handleAddToCart = (productId) => {
		setLoadingProductId(productId);
		addToCart(productId);
	}

	return (
        <div>
            <section>
                <Toaster position="top-center" reverseOrder={false} />
                <div className="font-bold md:text-5xl text-3xl md:pl-48 pl-12 w-full flex pb-3 text-white">
                    <div data-aos="fade-up" className="">
                        Most rated cars
                    </div>
                </div>
                <div data-aos="fade-left" className="text-[18px] hover:text-blue-500 pb-4 duration-200 transition-all ease-in-out font-normal flex items-center justify-end pr-12 md:pr-56 hover:underline ss:pr-16 sm:pr-32 lg:pr-20 xl:pr-48">
                    <Link to="/shop/product">
                        View All
                    </Link>
                    <MdArrowOutward className="w-6 h-5 ml-1" />
                </div>
                <div className="justify-center items-center flex">
                    <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-10 md:px-20 ss:grid-cols-2 ">
                        {/* Map through products */}
                        {!isLoading && !isRefetching && products?.length === 0 && (
                            <p className="text-center my-4">
                                No products available
                            </p>
                        )}
                        {!isLoading &&
                            !isRefetching &&
                            products &&
                            products.map((product) => (
                                <div
                                    data-aos="fade-left"
                                    key={product._id}
                                    className="md:w-[350px] sm:w-[350px] w-[300px] rounded-3xl overflow-hidden border border-gray-900 shadow-lg bg-[#161B30]"
                                >
                                    <div className="relative">
                                        <img
                                            className="w-full h-48 object-cover"
                                            src={product.images[0]}
                                            alt="Car"
                                        />
                                        <button
                                            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-opacity-40 cursor-pointer"
                                            onClick={() =>
                                                handleAddToCart(product._id)
                                            }
                                            >
                                            <div className="flex">
                                                {loadingProductId === product._id ? (
                                                    <LoadingSpinner size="xs" />
                                                    ) : (
                                                        <MdAddShoppingCart className="text-2xl text-gray-700" />
                                                )}
                                            </div>
                                        </button>
                                    </div>
                                    <div className="p-4 text-white hover:bg-white hover:bg-opacity-10">
                                        <h2 className="text-xl font-bold line-clamp-1">
                                            {product.brand} {product.car_model}
                                        </h2>
                                        <p className="text-sm line-clamp-1">
                                            {product.bio}
                                        </p>
                                        <div className="flex items-center justify-between mt-4 text-white mx-3">
                                            <div className="items-center mr-4 w-1/3 line-clamp-1" title="Speed">
                                                <RiSpeedUpFill className="w-5 h-5 mr-1 " />
                                                {product.top_speed}km/h
                                            </div>
                                            <div className="items-center w-1/3 mr-4 line-clamp-1" title="Fuel type">
                                                <FaGasPump className="w-5 h-5 mr-1" />
                                                {product.fuel_type}
                                            </div>
                                            <div className="items-center w-1/3 mr-4 line-clamp-1" title="Transmission">
                                            <FaCogs className="w-5 h-5 mr-1" />
                                                {product.transmission}
                                            </div>
                                        </div>
                                        <div className="mt-4 flex justify-between items-center">
                                            <span className="text-2xl font-bold text-white">
                                                ${product.price}
                                            </span>
                                            <Link
                                                to={`/shop/product/${product._id}`}
                                                className="text-blue-500 flex "
                                                >
                                                View Details
                                                <MdArrowOutward className="w-5 h-5 ml-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
	);

};


export default Cars;
