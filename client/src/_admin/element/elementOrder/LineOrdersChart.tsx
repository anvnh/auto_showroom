import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from "recharts";
import { motion } from "framer-motion";

const salesData = [
	{ name: "Jul", orders: 400 },
	{ name: "Aug", orders: 300 },
	{ name: "Sep", orders: 500 },
	{ name: "Oct", orders: 400 },
	{ name: "Nov", orders: 500 },
	{ name: "Dec", orders: 700 },
	{ name: "Jan", orders: 600 },
	{ name: "Feb", orders: 500 },
	{ name: "Mar", orders: 600 },
	{ name: "Apr", orders: 600 },
	{ name: "May", orders: 100 },
	{ name: "Jun", orders: 500 },
];

const LineUsersChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Number of people ordering</h2>

			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={salesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey={"name"} stroke='#9ca3af' />
						<YAxis stroke='#9ca3af' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey='orders'
							stroke='#6366F1'
							strokeWidth={2}
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default LineUsersChart;
