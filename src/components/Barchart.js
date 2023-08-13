/** @format */

import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		month: "Jan",
		price: 40000,
	},
	{
		month: "Feb",
		price: 20000,
	},
	{
		month: "March",
		price: 10000,
	},
	{
		month: "April",
		price: 30000,
	},
	{
		month: "May",
		price: 8000,
	},
	{
		month: "June",
		price: 7000,
	},
	{
		month: "July",
		price: 42000,
	},
	{
		month: "Aug",
		price: 10000,
	},
	{
		month: "Sept",
		price: 30000,
	},
	{
		month: "Oct",
		price: 20000,
	},
	{
		month: "Nov",
		price: 90000,
	},
	{
		month: "Dec",
		price: 60000,
	},
];

export default function Chart() {
	return (
		<div className="adchart" style={{ width: "100%", height: 350 }}>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					width={600}
					// height={400}
					data={data}
					margin={{
						top: 20,
						right: 0,
						left: 0,
						bottom: 5,
					}}>
					{/* <Bar dataKey="price" fill="##e8edf9" /> */}
					<CartesianGrid vertical="" horizontal="" />
					<XAxis dataKey="month" style={{ fontSize: "13px" }} />
					<YAxis dataKey="price" style={{ fontSize: "12px" }} />
					<Bar dataKey="price" stackId="a" fill="#000000" className="xaxis" />
					<Bar dataKey="month" stackId="a" fill="#e8edf9" />
					{/* <Legend /> */}
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
