import React from "react";
import Header from "./comon/Header";
import { motion } from "framer-motion";
import { IoLockClosedOutline } from "react-icons/io5";
import LineOrdersChart from "./elementOrder/LineOrdersChart";

import OrdersTable from "./elementOrder/OrdersTable";
import { FaBox } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineDownloadDone } from "react-icons/md";
const Orders = () => {
	return (
		<div>
			<Header title="Orders" />
			<main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
				<motion.div
					className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<motion.div
						className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
						whileHover={{
							y: -5,
							boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
						}}
					>
						<div className="px-4 py-5 sm:p-6">
							<span className="flex items-center text-sm font-medium text-gray-400">
								<FaBox size={20} className="mr-2" />
								Order
							</span>
							<p className="mt-1 text-3xl font-semibold text-gray-100">
								250
							</p>
						</div>
					</motion.div>
					<motion.div
						className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
						whileHover={{
							y: -5,
							boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
						}}
					>
						<div className="px-4 py-5 sm:p-6">
							<span className="flex items-center text-sm font-medium text-gray-400">
								<LiaShippingFastSolid
									size={20}
									className="mr-2"
								/>
								undelivered order
							</span>
							<p className="mt-1 text-3xl font-semibold text-gray-100">
								20
							</p>
						</div>
					</motion.div>
					<motion.div
						className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
						whileHover={{
							y: -5,
							boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
						}}
					>
						<div className="px-4 py-5 sm:p-6">
							<span className="flex items-center text-sm font-medium text-gray-400">
								<MdOutlineDownloadDone
									size={20}
									className="mr-2"
								/>
								Order Delivered
							</span>
							<p className="mt-1 text-3xl font-semibold text-gray-100">
								200
							</p>
						</div>
					</motion.div>
					<motion.div
						className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
						whileHover={{
							y: -5,
							boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
						}}
					>
						<div className="px-4 py-5 sm:p-6">
							<span className="flex items-center text-sm font-medium text-gray-400">
								<GrMoney size={20} className="mr-2" />
								the total amount
							</span>
							<p className="mt-1 text-3xl font-semibold text-gray-100">
								$99200
							</p>
						</div>
					</motion.div>
				</motion.div>

				<div className="mb-8">
					<OrdersTable />
				</div>
			
					<LineOrdersChart />
				
			
			</main>
		</div>
	);
};

export default Orders;
