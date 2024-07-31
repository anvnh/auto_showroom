import React from "react";
import { logo } from "../../assets";
import { Link } from "react-router-dom";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import { FaUser } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
const Header = ({ title }) => {
	const { data: authUser, isLoading } = useQuery({
		// use queryKey to give a unique name to the query and refer to it later
		queryKey: ["authUser"],
		queryFn: async () => {
			try {
				const res = await fetch("/api/auth/me");
				const data = await res.json();
				if (data.error) return null;
				if (!res.ok) {
					throw new Error(data.message || "Something went wrong");
				}
				// console.log("authUser is here: ", data);
				return data;
			} catch (error) {
				throw new Error(error.message);
			}
		},
		retry: false,
	});
	return (
		<header className="bg-gray-800 bg-opacity-50 backdrop-blur-md flex shadow-lg border-b border-gray-700">
			<div className="flex p-3 w-full">
				<Link to="/">
					<div className="h-full flex items-center justify-start">
						<img src={logo} className="w-12 h-auto" />
					</div>
				</Link>
				<div className="items-center justify-center flex w-full ">
					<h1 className="text-3xl font-semibold text-gray-100">
						{title}
					</h1>
				</div>
				<ul className="list-none flex pr-3 justify-end items-center flex-1">
					{isLoading && <LoadingSpinner />}
					{!isLoading && (
						<Link to={`${authUser ? "/social" : "/social/login"}`}>
							<div className="avatar placeholder w-[30px] xl:w-full h-auto">
								<div className="bg-[#C9C6C6] w-10 rounded-3xl text-black">
									{authUser ? (
										<img src={authUser.profileImg} />
									) : (
										<FaUser />
									)}
								</div>
							</div>
						</Link>
					)}
				</ul>
			</div>
		</header>
	);
};

export default Header;
