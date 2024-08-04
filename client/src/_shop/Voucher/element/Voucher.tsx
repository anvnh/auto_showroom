import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import SidebarVocher from "./SidebarVocher";
import { Toaster } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { Voucher15do } from "@/assets";
import AOS from "aos";
import "aos/dist/aos.css";
const Voucher = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-center",
		});
	}, []);
	return (
		<section className="xl:p-4 w-full sm:px-32">
			<div className="md:block hidden">
				<div className="flex w-full justify-end px-3">
					<div data-aos="fade-left" className="text-[16px] flex border border-white justify-between items-center p-2  rounded-xl">
						<input
							placeholder="Search"
							className="ml-2 bg-primary w-[220px] border-none focus:outline-none focus:border-none focus:ring-0"
							onChange={(e) => handleSearch(e.target.value)}
						/>
						<FaSearch
							className="w-4 h-4 text-white cursor-pointer"
							title="Search"
						/>
					</div>
				</div>
			</div>
			<div className="grid md:grid-cols-5 md:gap-32">
				<div className="w-full justify-center flex xl:pt-3">
					<div className="">
						<SidebarVocher />
					</div>
				</div>
				<div className="md:col-span-4 pt-12 md:pt-0 ss:px-32 sm:px-0">
					<div className="md:hidden block">
						<div className="flex w-full justify-center ss:justify-end md:justify-end mb-3">
							<div  data-aos="fade-left" className="text-[16px] flex border mb-4 border-white justify-between items-center p-2 rounded-xl">
								<input
									placeholder="Search"
									className="ml-2 bg-primary w-[200px] border-none focus:outline-none focus:border-none focus:ring-0"
								/>
								<FaSearch
									className="w-4 h-4 text-white cursor-pointer"
									title="Search"
								/>
							</div>
						</div>
					</div>
				
				

			
					<div className="text-white p-5 space-y-5 md:block hidden">
						<div>
							<Toaster
								position="top-center"
								reverseOrder={false}
							/>

							<div data-aos="fade-left" className="flex bg-gray-300 text-black p-4 mb-4 rounded-2xl shadow-md w-full h-[390px]">
								<div className="relative w-2/3 p-1 mr-4 flex items-center">
									<img
										src={Voucher15do}
										className="w-full h-auto shadow-xl shadow-black  rounded"
										alt="Voucher"
									/>
								</div>

								<div className="w-2/3 flex flex-col space-y-5">
									<div className="flex justify-end items-center">
										<div className="flex gap-3 bg-black p-2 bg-opacity-20 rounded-2xl">
											<MdDelete className="w-5 h-5 text-red-500 cursor-pointer" />
										</div>
									</div>
									<div className="font-bold flex gap-12">
										<div>Quantity:</div>
										<p>20</p>
									</div>
									<div className="flex gap-5">
										<div className="font-bold">
											Terms of Use:
										</div>
										<p>
											purchased at AAP showroom, total
											bill over $50,000
										</p>
									</div>
									<div className="flex gap-5">
										<div className="font-bold">
											Manufacture:
										</div>
										<p>8/4/2024</p>
									</div>
									<div className="flex gap-7">
										<div className="font-bold">
											Expiry Date:
										</div>
										<p>8/5/2024</p>
									</div>
								</div>
							</div>

							<div data-aos="fade-left" className="flex  bg-gray-300 text-black p-4 mb-4 rounded-2xl shadow-md w-full h-[390px]">
								<div className="relative w-2/3 p-1 mr-4 flex items-center">
									<img
										src={Voucher15do}
										className="w-full h-auto shadow-xl shadow-black  rounded"
										alt="Voucher"
									/>
								</div>

								<div className="w-2/3 flex flex-col space-y-5">
									<div className="flex justify-end items-center">
										<div className="flex gap-3 bg-black p-2 bg-opacity-20 rounded-2xl">
											<MdDelete className="w-5 h-5 text-red-500 cursor-pointer" />
										</div>
									</div>
									<div className="font-bold flex gap-12">
										<div>Quantity:</div>
										<p>20</p>
									</div>
									<div className="flex gap-5">
										<div className="font-bold">
											Terms of Use:
										</div>
										<p>
											purchased at AAP showroom, total
											bill over $50,000
										</p>
									</div>
									<div className="flex gap-5">
										<div className="font-bold">
											Manufacture:
										</div>
										<p>8/4/2024</p>
									</div>
									<div className="flex gap-7">
										<div className="font-bold">
											Expiry Date:
										</div>
										<p>8/5/2024</p>
									</div>
								</div>
							</div>

							<div  data-aos="fade-left" className="flex  bg-gray-300 text-black p-4 mb-4 rounded-2xl shadow-md w-full h-[390px]">
								<div className="relative w-2/3 p-1 mr-4 flex items-center">
									<img
										src={Voucher15do}
										className="w-full h-auto shadow-xl shadow-black  rounded"
										alt="Voucher"
									/>
								</div>

								<div className="w-2/3 flex flex-col space-y-5">
									<div className="flex justify-end items-center">
										<div className="flex gap-3 bg-black p-2 bg-opacity-20 rounded-2xl">
											<MdDelete className="w-5 h-5 text-red-500 cursor-pointer" />
										</div>
									</div>
									<div className="font-bold flex gap-12">
										<div>Quantity:</div>
										<p>20</p>
									</div>
									<div className="flex gap-5">
										<div className="font-bold">
											Terms of Use:
										</div>
										<p>
											purchased at AAP showroom, total
											bill over $50,000
										</p>
									</div>
									<div className="flex gap-5">
										<div className="font-bold">
											Manufacture:
										</div>
										<p>8/4/2024</p>
									</div>
									<div className="flex gap-7">
										<div className="font-bold">
											Expiry Date:
										</div>
										<p>8/5/2024</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
			
		</section>
	);
};

export default Voucher;
