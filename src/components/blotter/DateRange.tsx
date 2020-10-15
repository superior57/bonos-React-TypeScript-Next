import DatePicker from "react-datepicker";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

const DateRange = () => {
	const theme = useSelector((state: RootState) => state.theme.name);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	return (
		<div>
			<p className="my-3 px-5 font-semibold text-sm">Date Range</p>
			<div className="grid grid-cols-1 lg:grid-cols-2 items-between ml-5 my-2 text-sm">
				<div>
					<DatePicker
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						peekNextMonth
						showMonthDropdown
						showYearDropdown
						dropdownMode="select"
						className={`p-2 w-56 rounded-lg ${
							theme === "dark"
								? "text-white bg-black-80"
								: "text-black bg-gray-200"
						}`}
					/>
				</div>
				<div className="pt-5 lg:pt-0">
					<DatePicker
						selected={endDate}
						onChange={(date) => setEndDate(date)}
						peekNextMonth
						showMonthDropdown
						showYearDropdown
						dropdownMode="select"
						className={`p-2 w-56 rounded-lg ${
							theme === "dark"
								? "text-white bg-black-80"
								: "text-black bg-gray-200"
						}`}
					/>
				</div>
			</div>

			<div className="mx-5 mb-4">
				<p className="my-3 font-semibold text-sm">Date Range</p>

				<select
					className="py-2 px-2 text-sm font-bold w-full"
					style={{
						backgroundColor: `${
							theme === "dark" ? "#1A202C" : "#edf2f7"
						}`,
					}}>
					<option value="0">Daily</option>
					<option value="1">Daily</option>
					<option value="2">Daily</option>
					<option value="3">Daily</option>
				</select>
			</div>

			<div className="mb-4 mx-5">
				<p className="my-3 font-semibold text-sm">Visualize</p>

				<select
					className="py-2 px-2 text-sm font-bold w-full"
					style={{
						backgroundColor: `${
							theme === "dark" ? "#1A202C" : "#edf2f7"
						}`,
					}}>
					<option value="0">Orderbook Type</option>
					<option value="1">Orderbook Type</option>
					<option value="2">Orderbook Type</option>
					<option value="3">Orderbook Type</option>
				</select>
			</div>
		</div>
	);
};

export default DateRange;
