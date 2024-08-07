import React from "react";

import { MdDateRange } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { IoIosSpeedometer } from "react-icons/io";
import CarDataFetcher from "../common/CarDataFetcher";
import { useParams } from "react-router-dom";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
const OverView = () => {
	const ID = useParams();
	const carId = ID.id;

	return (
		<div className="w-full h-full justify-center items-center flex md:px-56 text-white sm:px-36 px-5">
			<div className="w-auto h-auto p-10 rounded-2xl border border-white">
				<h1 className="md:text-4xl text-center font-syncopate font-bold">
					Overview
				</h1>

				<hr className="w-full border-white border-opacity-30 relative top-3 py-3" />

				<CarDataFetcher carId={carId}>
					{({ car, isLoading, refetch, isRefetching }) => {
						if (isLoading) return <LoadingSpinner />;
						if (!car) return <div>No car data</div>;
						return (
							<div>
								<div className="hidden xl:block">
									<div className="grid grid-cols-2 pt-5">
										<div className="justify-start items-center flex">
											<div className="grid grid-cols-2 gap-8 text-2xl ">
												<div className="flex">
													<MdDateRange className="w-7 h-auto" />
													<p className="pl-5 relative">
														{car.production_year}
													</p>
												</div>
												<div className="flex ">
													<IoIosSpeedometer className="w-7 h-auto" />
													<p className="pl-5 relative">
														{car.top_speed} km/h
													</p>
												</div>

												<div className="flex ">
													<FaCarAlt className="w-7 h-auto" />
													<p className="pl-5 relative">
														{car.seat_capacity}{" "}
														seats
													</p>
												</div>
												<div className="flex ">
													<TbRosetteDiscountCheckFilled className="w-7 h-auto" />
													<p className="pl-5 relative">
														Warranting in{" "}
														{car.warranty}
													</p>
												</div>
											</div>
										</div>
										<div className="flex">
											<div className="h-full w-px"></div>
											<div className="justify-end items-center flex text-xl pl-12">
												{car.bio}
											</div>
										</div>
									</div>
								</div>
								<div className="block xl:hidden">
									<div className="justify-start items-center flex">
										<div className="grid grid-cols-2 gap-2 text-sm ">
											<div className="flex">
												<MdDateRange className="w-5 h-auto" />
												<p className="pl-5 relative">
													{car.production_year}
												</p>
											</div>
											<div className="flex ">
												<IoIosSpeedometer className="w-5 h-auto" />
												<p className="pl-5 relative">
													{car.top_speed} km/h
												</p>
											</div>

											<div className="flex ">
												<FaCarAlt className="w-5 h-auto" />
												<p className="pl-5 relative">
													{car.seat_capacity} seats
												</p>
											</div>
											<div className="flex ">
												<TbRosetteDiscountCheckFilled className="w-5 h-auto" />
												<p className="pl-5 relative">
													Warranting in {car.warranty}
												</p>
											</div>

											<div className="justify-end col-span-2 pt-5 items-center flex text-sm">
												{car.bio}
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					}}
				</CarDataFetcher>
			</div>
		</div>
	);
};

export default OverView;
