import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const userData = [
	{
		id: 1,
		name: "Mescedes BenZ",
		quantity: "20",
        sold: "5",
		status: "stocking",
	},
	{
        id: 2,
		name: "Kia A5",
		quantity: "4",
        sold: "4",
		status: "out of stock",
	},
	{
        id: 3,
		name: "Audi A10",
		quantity: "23",
        sold: "5",
		status: "stocking",
	},
	{
        id: 4,
		name: "Audi A5",
		quantity: "75",
        sold: "75",
		status: "out of stock",
	},
	{
        id: 5,
		name: "Mescedes AMG",
		quantity: "67",
        sold: "42",
		status: "stocking",
	},
];

const AnalyticsTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredUsers, setFilteredUsers] = useState(userData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = userData.filter(
			(user) =>
				user.name.toLowerCase().includes(term)
		);
		setFilteredUsers(filtered);
	};

	return (
		<motion.div
			className="bg-gray-800  bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-xl font-semibold text-gray-100">Product</h2>
				<div className="relative">
					<input
						type="text"
						placeholder="Search users..."
						className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 w-36 md:w-72 focus:ring-blue-500"
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search
						className="absolute left-3 top-2.5 text-gray-400"
						size={18}
					/>
				</div>
			</div>

			<div className="overflow-x-auto">
				<div className="max-h-60 overflow-y-auto">
					<table className="min-w-full divide-y divide-gray-700">
						<thead>
							<tr className="md:space-x-24">
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
									Name
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
									Quantity
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
									Sold
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
									Status
								</th>
							</tr>
						</thead>

						<tbody className="divide-y divide-gray-700 space-y-4">
							{filteredUsers.map((user) => (
								<motion.tr
									key={user.id}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
									className="md:space-x-24"
								>
									<td className="px-6 py-4 whitespace-nowrap flex">
										<div className="flex items-center">
											<div className="ml-4">
												<div className="text-sm font-medium text-gray-100">
													{user.name}
												</div>
											</div>
										</div>
									</td>

									<td className="px-6 py-4 whitespace-nowrap flex">
										<div className="text-sm text-gray-300">
											{user.quantity}
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap flex">
										<span className="px-2 inline-flex text-xs leading-5 font-semibold  text-blue-100">
											{user.sold}
										</span>
									</td>

									<td className="px-6 py-4 whitespace-nowrap flex">
										<span
											className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
												user.status === "stocking"
													? "bg-green-800 text-green-100"
													: "bg-red-800 text-red-100"
											}`}
										>
											{user.status}
										</span>
									</td>
								</motion.tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</motion.div>
	);
};
export default AnalyticsTable;
