import React from "react";
import Header from "./comon/Header";
import LineAnalyticsChart from "./elementAnalytics/LineAnalytiscChart";
import PieAnalyticsChart from "./elementAnalytics/PieAnalyticsChart";
import PolygonAnalyticsChart from "./elementAnalytics/PolygonAnalyticsChart";
import BarAnalyticsChart from "./elementAnalytics/BarAnalyticsChart";
import AnalyticsTable from "./elementAnalytics/AnalyticsTable";


const Analytics = () => {
	return (
		<div>
			<Header title="Analytics" />
			<main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
				<div className="mb-8">
					{" "}
					<LineAnalyticsChart />
				</div>
			<div className="mb-8">
			<AnalyticsTable/> 
			</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
					<PieAnalyticsChart />
					<PolygonAnalyticsChart />
				</div>
				<div className="-z-10 mb-8">
			
				</div>
				<div className="mb-8">
					{" "}
					<BarAnalyticsChart />
				</div>
			</main>
		</div>
	);
};

export default Analytics;
