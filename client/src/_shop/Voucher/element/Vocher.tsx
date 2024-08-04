import React from "react";
import { FaSearch } from "react-icons/fa";
import SidebarVocher from "./SidebarVocher";
import { Toaster } from "react-hot-toast";

const Vocher = () => {
	return (
		<section className="xl:p-4 w-full sm:px-32">
			<div className="md:block hidden">
				<div className="flex w-full justify-end px-3">
					<div className="text-[16px] flex border border-white justify-between items-center p-2  rounded-xl">
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
				<div className="w-full justify-center flex">
					<div className="">
						<SidebarVocher />
					</div>
				</div>
				<div className="md:col-span-4 pt-12 md:pt-3 ss:px-32 sm:px-0">
					<div className="md:hidden block">
						<div className="flex w-full justify-center ss:justify-end md:justify-end mb-3">
							<div className="text-[16px] flex border mb-4 border-white justify-between items-center p-2 rounded-xl">
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
                    <div className="w-full bg-white text-black">
                            
                </div>
				</div>
   

				<div></div>
			</div>
		</section>
	);
};

export default Vocher;
