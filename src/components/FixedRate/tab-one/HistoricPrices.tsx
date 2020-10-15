import { useSelector } from "react-redux";
import { RootState } from "src/store";

import LineChart from "src/components/LineChart";
import ExpandLayout from "src/components/Layout/ExpandLayout";

const HistoricPrices = () => {
	const theme = useSelector((state: RootState) => state.theme.name);

	return (
		<ExpandLayout title="Historic Prices">
			{/*
			 * =======================================================
			 * 1st Part Start
			 * =======================================================
			 */}

			<div className="w-ful px-3">
				<select
					className="py-2 px-5 mt-4 text-sm font-bold w-full border border-none rounded"
					style={{
						backgroundColor: `${
							theme === "dark" ? "#1A202C" : "#edf2f7"
						}`,
					}}>
					<option value="0">Select</option>
					<option value="1">Audi</option>
					<option value="2">BMW</option>
					<option value="3">Citroen</option>
				</select>

				<select
					className="py-2 px-5 mt-4 text-sm font-bold w-full border border-none rounded"
					style={{
						backgroundColor: `${
							theme === "dark" ? "#1A202C" : "#edf2f7"
						}`,
					}}>
					<option value="0">Select</option>
					<option value="1">Audi</option>
					<option value="2">BMW</option>
					<option value="3">Citroen</option>
				</select>

				<select
					className="py-2 px-5 mt-4 text-sm font-bold w-full border border-none rounded"
					style={{
						backgroundColor: `${
							theme === "dark" ? "#1A202C" : "#edf2f7"
						}`,
					}}>
					<option value="0">Select</option>
					<option value="1">Audi</option>
					<option value="2">BMW</option>
					<option value="3">Citroen</option>
				</select>
			</div>

			{/*
			 * =======================================================
			 * 1st Part End
			 * =======================================================
			 */}

			{/*
			 * =======================================================
			 * 2nd Part
			 * =======================================================
			 */}
			<div className="py-5">
				<LineChart />
			</div>
		</ExpandLayout>
	);
};

export default HistoricPrices;
