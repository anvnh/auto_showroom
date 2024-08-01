import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const campaignData = [
	{ name: "Jul", campaign: 5 },
	{ name: "Aug", campaign: 8 },
	{ name: "Sep", campaign: 5 },
	{ name: "Oct", campaign: 5 },
	{ name: "Nov", campaign: 8 },
	{ name: "Dec", campaign: 1 },
	{ name: "Jan", campaign: 3 },
	{ name: "Feb", campaign: 6 },
	{ name: "Mar", campaign: 8 },
	{ name: "Apr", campaign: 10 },
	{ name: "May", campaign: 4 },
	{ name: "Jun", campaign: 12 },
]
const LineOverviewChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl md:p-6 border p-4 border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Number of campaigns created</h2>

			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={campaignData}>
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
							dataKey='campaign'
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
export default LineOverviewChart;