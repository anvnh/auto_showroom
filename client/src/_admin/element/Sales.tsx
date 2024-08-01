import { motion } from "framer-motion";

import { LockOpen, Users } from "lucide-react";
import Header from "./comon/Header";
import LineOverviewChart from "./elementOverview/LineOverviewChart";
import { MdDateRange } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import SalesTable from "./elementSales/SalesTable";

const Sales = () => {
	return (
		<div>
			<Header title="Sales" />
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
								<MdDateRange size={20} className="mr-2" />
								Discount campaign
							</span>
							<p className="mt-1 text-3xl font-semibold text-gray-100">
								27
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
								<LockOpen size={20} className="mr-2" />
								campaign is active
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
								<IoLockClosedOutline
									size={20}
									className="mr-2"
								/>
								Campaign Expired
							</span>
							<p className="mt-1 text-3xl font-semibold text-gray-100">
								7
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
								<Users size={20} className="mr-2" />
								Participants
							</span>
							<p className="mt-1 text-3xl font-semibold text-gray-100">
								1200
							</p>
						</div>
					</motion.div>
				</motion.div>

				<div className="mb-8">
					<SalesTable />
				</div>
				<LineOverviewChart />
			</main>
		</div>
	);
};

export default Sales;
