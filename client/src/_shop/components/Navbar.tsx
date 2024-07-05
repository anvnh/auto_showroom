import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "@/assets/logo.png";

import "aos/dist/aos.css";
import AOS from "aos";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
const Navbar = () => {
	useEffect(() => {
		AOS.init({
			duration: 600,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);

	const {data: authUser, isLoading } = useQuery({
        // use queryKey to give a unique name to the query and refer to it later
        queryKey: ['authUser'],
        queryFn: async () => {
            try {
                const res = await fetch('/api/auth/me');
                const data = await res.json();
                if(data.error) return null;
                if (!res.ok) {
                    throw new Error(data.message || 'Something went wrong');
                }
                console.log("authUser is here: ", data);
                return data;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        retry: false,
    })

	return (
		<div
			className={`z-50 top-0 w-full font-poppins transition-transform duration-300 backdrop-blur-md}`}
		>
			<nav className="w-full flex pt-3 pb-2 justify-between items-center navbar md:px-12.5 px-8 bg-opacity-70 z-50">
				<ul className="list-none sm:flex hidden justify-start items-center flex-1">
					<li className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10 ml-5">
                        <Link to="/">
                            <div className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:text-gray-300 duration-300 select-none">
                                Home
                            </div>
                        </Link>
						<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
					</li>
					<li className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10">
						<div className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:text-gray-300 duration-300 select-none">
							Listings
						</div>
						<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
					</li>

					<li className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10">
						<div className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:text-gray-300 duration-300 select-none">
							Service
						</div>
						<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
					</li>

					<li className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10">
						<div className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:text-gray-300 duration-300 select-none">
							About
						</div>
						<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
					</li>

					<li className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10">
						<div className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1  hover:text-gray-300 duration-300 select-none">
							About Us
						</div>
						<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
					</li>
				</ul>

				<ul>
                    <img src={logo} alt="logo" className="w-16" />
				</ul>

				<ul className="list-none sm:flex hidden justify-end items-center flex-1">
					{/* TODO */}
					<Link to="">
						<MdOutlineShoppingCart className="text-white text-3xl mr-10" />
					</Link>
					<Link to={`${authUser ? "/social" : "/social/login"}`}>
						<div className="avatar placeholder">
							<div className="bg-[#C9C6C6] w-10 rounded-3xl text-black">
								{authUser ? <img src={authUser.profileImg} /> : <FaUser />}
							</div>
						</div>
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
