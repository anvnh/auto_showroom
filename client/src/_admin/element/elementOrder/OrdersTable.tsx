import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const OrdersData = [
	{
		id: 1,
		nameUser: "Hoàng An",
		nameProduct: "Mescedes BenZ",
		address: "Quận Ngũ Hành Sơn,Đà Nẵng",
		phonenumber: "0374123205",
		email: "an@gmail.com",
		status: "delivered",
		totalamount: "$34530",
	},
	{
		id: 2,
		nameUser: "Tuấn Anh",
		nameProduct: "Mescedes AMG",
		address: "Hải Phong, Quảng Trị",
		phonenumber: "0374123205",
		email: "anh@gmail.com",
		status: "delivered",
		totalamount: "$65400",
	},
	{
		id: 3,
		nameUser: "Hoàng Phát",
		nameProduct: "Audi A5",
		address: "Quận 5, Hồ Chí Minh",
		phonenumber: "0374123205",
		email: "phat@gmail.com",
		status: "not delivery",
		totalamount: "$2340",
	},
	{
		id: 4,
		nameUser: "Lâm",
		nameProduct: "Audi A9",
		address: "Quận Ngũ Hành Sơn,Đà Nẵng",
		phonenumber: "0374123205",
		email: "lam@gmal.com",
		status: "not delivery",
		totalamount: "$45500",
	},
	{
		id: 5,
		nameUser: "Phong",
		nameProduct: "Lamboghini Premium",
		address: "Quận 8, Hồ Chí Minh",
		phonenumber: "0374123205",
		email: "phong@gmail.com",
		status: "delivered",
		totalamount: "$23250",
	},
	{
		id: 6,
		nameUser: "Hy",
		nameProduct: "Kia A5",
		address: "Quận Ngũ Hành Sơn,Đà Nẵng",
		phonenumber: "0374123205",
		email: "hy@gmail.com",
		status: "not delivery",
		totalamount: "$34500",
	},
    {
		id: 6,
		nameUser: "Hy",
		nameProduct: "Kia A5",
		address: "Quận Ngũ Hành Sơn,Đà Nẵng",
		phonenumber: "0374123205",
		email: "hy@gmail.com",
		status: "delivered",
		totalamount: "$34500",
	},
    {
		id: 6,
		nameUser: "Hy",
		nameProduct: "Kia A5",
		address: "Quận Ngũ Hành Sơn,Đà Nẵng",
		phonenumber: "0374123205",
		email: "hy@gmail.com",
		status: "not delivery",
		totalamount: "$34500",
	},
    {
		id: 6,
		nameUser: "Hy",
		nameProduct: "Kia A5",
		address: "Quận Ngũ Hành Sơn,Đà Nẵng",
		phonenumber: "0374123205",
		email: "hy@gmail.com",
		status: "delivered",
		totalamount: "$34500",
	},
];

const OrdersTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredUsers, setFilteredUsers] = useState(OrdersData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = OrdersData.filter(
			(user) =>
				user.nameUser.toLowerCase().includes(term) ||
				user.status.toLowerCase().includes(term)
		);
		setFilteredUsers(filtered);
	};

	return (
		<motion.div
			className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-xl font-semibold text-gray-100">Orders</h2>
				<div className="relative">
					<input
						type="text"
						placeholder="Search users..."
						className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 w-36 md:w-72  focus:outline-none focus:ring-2 focus:ring-blue-500"
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
				<div className="max-h-[600px] overflow-y-auto">
					{" "}
					{/* Thêm lớp này để kích hoạt cuộn dọc */}
					<table className="min-w-full divide-y divide-gray-700">
						<thead>
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
									Name user
								</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
									Name Product
								</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
									Address
								</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
									Phone Number
								</th>
                    
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
									Email
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
									Status
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
									Total amount
								</th>
							</tr>
						</thead>

						<tbody className="divide-y divide-gray-700">
							{filteredUsers.map((user) => (
								<motion.tr
									key={user.id}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
								>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<div className="flex-shrink-0 h-10 w-10">
												<div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
													{user.nameUser.charAt(0)}
												</div>
											</div>
											<div className="ml-4">
												<div className="text-sm font-medium text-gray-100">
													{user.nameUser}
												</div>
											</div>
										</div>
									</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm text-gray-300">
											{user.nameProduct}
										</div>
									</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm text-gray-300">
											{user.address}
										</div>
									</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm text-gray-300">
											{user.phonenumber}
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm text-gray-300">
											{user.email}
										</div>
									</td>

									<td className="px-6 py-4 whitespace-nowrap">
										<span
											className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
												user.status === "delivered"
													? "bg-green-800 text-green-100"
													: "bg-red-800 text-red-100"
											}`}
										>
											{user.status}
										</span>
									</td>

									<td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm text-gray-300">
											{user.totalamount}
										</div>
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
export default OrdersTable;
