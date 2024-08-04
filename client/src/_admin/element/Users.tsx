import React from 'react'

import { motion } from "framer-motion";
import { BarChart2 } from "lucide-react";
import LineUsersChart from './elementUsers/LineUsersChart';
import PieUsersChart  from './elementUsers/PieUsersChart ';
import UsersTable from './elementUsers/UsersTable';
import Header from './comon/Header';
import { useQuery } from '@tanstack/react-query';
const Users = () => {
	const {
		data: users,
		isLoading,
		refetch,
		isRefetching,
	} = useQuery({
		queryKey: ["usersProfile"],
		queryFn: async () => {
			try {
				const res = await fetch(`/api/user/profile/all`);
				const data = await res.json();
				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

	// const currentDate = new Date();

	// const newUsers = users?.filter((user) => {
	// 	const accountCreationDate = new Date(user.createdAt);
	// 	const oneMonthAgo = new Date();
	// 	oneMonthAgo.setMonth(currentDate.getMonth() - 1);
	// 	return accountCreationDate >= oneMonthAgo;
	// });

	// const startOfPeriod = new Date();
	// startOfPeriod.setMonth(currentDate.getMonth() - 1);

	// const usersAtStartOfPeriod = users?.filter(user => {
	// 	const accountCreationDate = new Date(user.createdAt);
	// 	return accountCreationDate <= startOfPeriod;
	// });

	// const churnedUsers = usersAtStartOfPeriod?.filter(user => {
	// 	const lastLoginDate = new Date(user.lastLogin);
	// 	return lastLoginDate < startOfPeriod;
	// });

	// const churnRate =
	// 	usersAtStartOfPeriod.length > 0
	// 		? (churnedUsers.length / usersAtStartOfPeriod.length) * 100
	// 		: 0;

	// const activeThreshold = new Date();
	// activeThreshold.setMonth(currentDate.getMonth() - 1);

	// const activeUsers = users?.filter((user) => {
	// 	const lastLoginDate = new Date(user.lastLogin);
	// 	return lastLoginDate >= activeThreshold;
	// });

	const currentDate = new Date();

	// Define the threshold for new users (e.g., one month ago)
	const oneMonthAgo = new Date();
	oneMonthAgo.setMonth(currentDate.getMonth() - 1);

	// Filter new users who created their account within the last month
	const newUsers =
		users?.filter((user) => {
			const accountCreationDate = new Date(user.createdAt);
			return accountCreationDate >= oneMonthAgo;
		}) || [];

	// Define the start of the period (e.g., one month ago)
	const startOfPeriod = new Date();
	startOfPeriod.setMonth(currentDate.getMonth() - 1);

	// Filter users who were active at the start of the period
	const usersAtStartOfPeriod =
		users?.filter((user) => {
			const accountCreationDate = new Date(user.createdAt);
			return accountCreationDate <= startOfPeriod;
		}) || [];

	// Filter users who have churned (e.g., last login date is before the start of the period)
	const churnedUsers =
		usersAtStartOfPeriod?.filter((user) => {
			const lastLoginDate = new Date(user.lastLogin);
			return lastLoginDate < startOfPeriod;
		}) || [];

	// Calculate churn rate
	const churnRate =
		usersAtStartOfPeriod.length > 0
			? (churnedUsers.length / usersAtStartOfPeriod.length) * 100
			: 0;

	// Define the threshold for active users (e.g., one month ago)
	const activeThreshold = new Date();
	activeThreshold.setMonth(currentDate.getMonth() - 1);

	// Filter users who have logged in within the last month
	const activeUsers =
		users?.filter((user) => {
			const lastLoginDate = new Date(user.lastLogin);
			return lastLoginDate >= activeThreshold;
		}) || [];

	return (
		<div>
			<Header title="Users" />
			<main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
				{/* STATS */}
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
								<BarChart2 size={20} className="mr-2" />
								Total Users
							</span>
							{!isLoading && !isRefetching && users && (
								<p className="mt-1 text-3xl font-semibold text-gray-100">
									{users.length}
								</p>
							)}
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
								<BarChart2 size={20} className="mr-2" />
								New Users
							</span>
							{!isLoading && !isRefetching && users && (
								<p className="mt-1 text-3xl font-semibold text-gray-100">
									{newUsers.length}
								</p>
							)}
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
								<BarChart2 size={20} className="mr-2" />
								Active Users
							</span>
							<p className="mt-1 text-3xl font-semibold text-gray-100">
								{activeUsers?.length}
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
								<BarChart2 size={20} className="mr-2" />
								Churn Rate
							</span>
							<p className="mt-1 text-3xl font-semibold text-gray-100">
								{churnRate.toFixed(2)}%
							</p>
						</div>
					</motion.div>
				</motion.div>
				<motion.div className="mb-8">
					<UsersTable />
				</motion.div>

				{/* CHARTS */}

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<LineUsersChart />
					<PieUsersChart />
				</div>
			</main>
		</div>
	);
}

export default Users
