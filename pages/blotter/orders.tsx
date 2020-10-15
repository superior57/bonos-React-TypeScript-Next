import { Layout } from "src/components/Layout/Layout";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

import ExpandLayout from "src/components/Layout/ExpandLayout";
import DateRange from "src/components/blotter/DateRange";
import BarChart from "src/components/blotter/BarChart";
import VolumeTradeSize from "src/components/blotter/VolumeTradeSize";
import MostTradedSecurities from "src/components/blotter/MostTradedSecurities";
import InstrumentTypeOrderbookType from "src/components/blotter/InstrumentTypeOrderbookType";
import Table from "src/components/blotter/Table";
import Rectangle from "src/icons/rectangle";
import CircleIcon from "src/icons/circle";

const OrdersPage = () => {
	const theme = useSelector((state: RootState) => state.theme.name);

	return (
		<Layout>
			<div
				className="inline-block pb-3 mb-3"
				style={{ borderBottom: "3px solid #ECC94B" }}>
				<div className="flex font-bold text-xl items-center">
					<CircleIcon color="#ECC94B" />
					<p className="ml-3 text-black" style={{ color: "#ECC94B" }}>
						{" "}
						Trade Blotter
					</p>
				</div>
			</div>

			<ExpandLayout title="Activity Dashboard">
				<div className="grid grid-cols-1 md:grid-cols-12">
					<div className="col-span-auto md:col-span-5">
						<DateRange />
					</div>
					<div
						className="mx-5 px-5 py-5 col-span-auto md:col-span-1"
						style={{
							backgroundColor: `${
								theme === "dark" ? "#1A202C" : "#edf2f7"
							}`,
						}}>
						<div className="flex">
							<Rectangle color="#38B2AC" />{" "}
							<p
								className={`font-normal text-sm ml-3 ${
									theme === "light"
										? "text-black"
										: "text-white"
								}`}>
								COB
							</p>
						</div>
						<div className="flex">
							<Rectangle color="#3C8ACB" />{" "}
							<p
								className={`font-normal text-sm ml-3 ${
									theme === "light"
										? "text-black"
										: "text-white"
								}`}>
								RFQ
							</p>
						</div>
					</div>
					<div className="mr-2 col-span-auto md:col-span-6">
						<BarChart />
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 px-5 py-8">
					<div className="p-4">
						<VolumeTradeSize />
					</div>
					<div className="p-4">
						<MostTradedSecurities />
					</div>
					<div className="p-4">
						<InstrumentTypeOrderbookType />
					</div>
				</div>

				<Table />
			</ExpandLayout>
		</Layout>
	);
};

export default OrdersPage;
