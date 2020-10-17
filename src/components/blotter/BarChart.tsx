import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { RootState } from "src/store";
import { Bar } from "react-chartjs-2";
import { getColor, toRGB } from "src/functions/colors";
import { random } from "src/functions/numbers";

const BarChart = ({
	height = 200,
	color1 = "bg-teal-500",
	color2 = "bg-blue-500",
}) => {
	const theme = useSelector((state: RootState) => state.theme.name);

	const { palettes, collapsed, layout } = useSelector((state: RootState) => state.theme.name);
	const { background } = { ...palettes };

	const key = `${layout}-${collapsed}-${background}`;

	const legend = {
		display: false,
	};

	const options = {
		tooltips: {
			mode: "index",
			intersect: false,
		},
		hover: {
			mode: "nearest",
			intersect: true,
		},
		animation: {
			duration: 1000,
		},
		maintainAspectRatio: false,
		layout: {
			padding: {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
			},
		},
		scales: {
			xAxes: [
				{
					stacked: true,
					ticks: {
						fontColor:
							theme === "dark"
								? getColor("text-gray-100")
								: getColor("text-gray-900"),
						min: 0,
						maxTicksLimit: 10,
					},
					gridLines: {
						drawBorder: false,
						display: false,
						color: "rgba(0, 0, 0, 0)",
					},
				},
			],
			yAxes: [
				{
					stacked: true,
					ticks: {
						fontColor:
							theme === "dark"
								? getColor("text-gray-100")
								: getColor("text-gray-900"),
						min: 0,
						maxTicksLimit: 10,
					},
					gridLines: {
						drawBorder: false,
						display: false,
						color: "rgba(0, 0, 0, 0)",
					},
				},
			],
		},
	};

	let randomData1 = Array.from(Array(24).keys()).map((i) => random(50, 100));
	let randomData2 = Array.from(Array(24).keys()).map((i) => random(50, 100));
	let defaultLabels = [
		...[
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		].map((i) => `${i} 2019`),
		...[
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		].map((i) => `${i} 2020`),
	];
	const [data1, setData1] = useState(randomData1);
	const [data2, setData2] = useState(randomData2);
	const [labels, setLabels] = useState(defaultLabels);

	const data = {
		labels: labels,
		datasets: [
			{
				label: "Sales",
				backgroundColor: toRGB(getColor(color1), 1),
				borderColor: toRGB(getColor(color1), 1),
				data: data1,
			},
			{
				label: "Conversions",
				backgroundColor: toRGB(getColor(color2), 1),
				borderColor: toRGB(getColor(color2), 1),
				data: data2,
			},
		],
	};

	return (
		<div className="flex">
			<div className="w-full mx-3 my-3">
				<div className="flex flex-col mb-4 widget-title w-full">
					<div className="title text-xs font-sm font-semibold font-poppins p-1">
						Daily Volume (Millions)
					</div>
				</div>
				<div style={{ height: height }}>
					<Bar
						key={key}
						data={data}
						height={height}
						options={options}
						legend={legend}
					/>
				</div>
			</div>
		</div>
	);
};

export default BarChart;
