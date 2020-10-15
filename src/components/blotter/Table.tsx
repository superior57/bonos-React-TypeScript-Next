import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import DataTable from "src/components/blotter/DataTable";
import SearchIcon from "src/icons/search";
import Navbar from "src/components/blotter/Navbar";

const Table = () => {
	const theme = useSelector((state: RootState) => state.theme.name);

	// const columns = useMemo(
	// 	() => [
	// 		{
	// 			Header: "Name",
	// 			columns: [
	// 				{
	// 					Header: "ISIN",
	// 					accessor: "isin",
	// 				},
	// 				{
	// 					Header: "Security Name",
	// 					accessor: "securityName",
	// 				},
	// 				{
	// 					Header: "Order ID",
	// 					accessor: "orderID",
	// 				},
	// 				{
	// 					Header: "Orderbook",
	// 					accessor: "orderBook",
	// 				},
	// 				{
	// 					Header: "Direction",
	// 					accessor: "direction",
	// 				},
	// 				{
	// 					Header: "Number of Securities",
	// 					accessor: "numberOfSecurities",
	// 				},
	// 				{
	// 					Header: "Nominal Amount",
	// 					accessor: "nominalAmount",
	// 				},
	// 				{
	// 					Header: "Price",
	// 					accessor: "price",
	// 				},
	// 				{
	// 					Header: "Yield",
	// 					accessor: "yield",
	// 				},
	// 				{
	// 					Header: "Spread",
	// 					accessor: "spread",
	// 				},
	// 				{
	// 					Header: "% Alloc.",
	// 					accessor: "alloc",
	// 				},
	// 				{
	// 					Header: "Status",
	// 					accessor: "status",
	// 				},
	// 			],
	// 		},
	// 	],
	// 	[]
	// );

	// const data = useMemo(() => makeData(100000), []);

	return (
		<>
			<Navbar nbb="history" />

			{/*
			 * =======================================================
			 * Searchbar & Action Area Start
			 * =======================================================
			 */}
			<div className="grid grid-cols-1 sm:grid-cols-2  mt-6 px-8">
				<div className="relative flex">
					<div
						className="absolute"
						style={{ top: "19px", left: "24px" }}>
						<SearchIcon
							color={theme === "dark" ? "#fff" : "#2D3748"}
						/>
					</div>
					<input
						type="search"
						className={`py-4 pl-12 pr-3 outline-none rounded-full ${
							theme === "light" ? "placeholder-gray-800" : ""
						}`}
						style={{
							backgroundColor: `${
								theme === "dark" ? "#2D3748" : "#edf2f7"
							}`,
							width: "367px",
						}}
						placeholder="Search"
					/>
				</div>
				<div className="flex justify-center sm:justify-end mt-5 sm:mt-0">
					<button
						className="px-2 sm:px-4 py-3 sm:py-4 font-semibold rounded-lg w-32"
						style={{
							backgroundColor: "#F56565",
							color: "#FFFFFF",
						}}>
						ACTIONS
					</button>
				</div>
			</div>
			{/*
			 * =======================================================
			 * Searchbar & Action Area End
			 * =======================================================
			 */}

			{/**
				<DataTable columns={columns} data={data} />
			*/}
		</>
	);
};

export default Table;
