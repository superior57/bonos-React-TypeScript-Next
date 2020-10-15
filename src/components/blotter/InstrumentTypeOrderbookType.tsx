import PieChart from "./PieChart";

const InstrumentTypeOrderbookType = () => {
	const labels = ["Bonds", "Type two", "Type three"];
	const labels2 = ["COB", "RFQ"];
	return (
		<div className="grid grid-cols-2">
			<div>
				<p className="font-semibold text-base mb-4 text-center lg:text-left">
					Instrument type
				</p>
				<PieChart height="200px" labels={labels} />
			</div>
			<div>
				<p className="font-semibold text-base mb-4 text-center lg:text-left">
					Orderbook Type
				</p>
				<PieChart height="200px" labels={labels2} />
			</div>
		</div>
	);
};

export default InstrumentTypeOrderbookType;
