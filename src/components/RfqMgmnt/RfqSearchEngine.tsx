import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { RootState } from "src/store";

import SubmitResponseModal from "./SubmitResponseModal";
import FilterIcon from "src/icons/filter";
import CardRFQ from "./Card";
import SearchIcon from "src/icons/search";


const RfqsLiveFeeds = () => {
	const theme = useSelector((state: RootState) => state.theme.name);

	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	const datas = [
		{
			title: "PEMEX TIIE 28 + 100 bps 16/12/2024",
			headerColor: "#48BB78",
			buttonColor: "#F56565",
			values: [
				{
					name: "Time to exp",
					value: "120 min"
				},
				{
					name: "Trade Direction",
					value: "Buy"
				},
				{
					name: "Requested Notional ",
					value: "10,000,000"
				},
				{
					name: "Number of responses",
					value: "6"
				},
			]
		},
		{
			title: "PEMEX TIIE 28 + 100 bps 16/12/2024",
			headerColor: "#F56565",
			buttonColor: "#48BB78",
			values: [
				{
					name: "Time to exp",
					value: "120 min"
				},
				{
					name: "Trade Direction",
					value: "Buy"
				},
				{
					name: "Requested Notional ",
					value: "10,000,000"
				},
				{
					name: "Number of responses",
					value: "6"
				},
			]
		},
	]

	return (
		<div
			className={`${theme === "dark" ? "text-white" : "shadow-2xl"} border border-none rounded-lg overflow-hidden mb-5`} style={{
				backgroundColor: `${theme === "dark" ? "#2D3748" : "#fff"}`,
			}}>
				<div className="flex justify-between items-center px-5 h-16" style={{
					backgroundColor: `${theme === "dark" ? "#202837" : "#e2e8f0"}`
				}}>
					<p className="font-semibold text-xl">RFQ Search Engine</p>
				</div>

				<div className="relative flex px-4 py-3">
					<div
						className="absolute py-3"
						style={{ top: "17px", left: "33px" }}
						>
						<SearchIcon
							color={theme === "dark" ? "#fff" : "#2D3748"}
						/>
					</div>
					<input
						type="search"
						className={`py-3 pl-12 pr-3 w-full outline-none border-2 ${
							theme === "dark"
								? "border-black"
								: "border-gray-400"
						} rounded-full`}
						style={{
							backgroundColor: `${
								theme === "dark" ? "#2D3748" : "#edf2f7"
							}`,
							color: `${
								theme === "dark" ? "#A4B2C3" : "#2D3748"
							}`,
							border: "solid 1px #202837"
						}}
						placeholder="Search RFQ"
					/>
				</div>
				
				<div className="w-full px-3 py-3 overflow-y-auto" style={{
					maxHeight: 'calc(100vh - 70px)'
				}}>
					{
						datas.map(data => <>
							<CardRFQ data={data} />	
						</>)
					}
				</div>				
		</div>
	);
};

export default RfqsLiveFeeds;
