import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { RootState } from "src/store";

import SubmitResponseModal from "./SubmitResponseModal";
import FilterIcon from "src/icons/filter";
import CardRFQ from "./Card";
import DropdownButton from "src/components/DropdownButton";

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

	const SearchItems = [
		"Mbonos",
		'BONDS',
		'CETES',
		'CEBURES',
		'Fiduciary CEBURES',
	];

	return (
		<div
			className={`${theme === "dark" ? "text-white" : "shadow-2xl"} border border-none rounded-lg overflow-hidden mb-5`} style={{
				backgroundColor: `${theme === "dark" ? "#2D3748" : "#fff"}`,
			}}>
				<div className="flex justify-between items-center px-5 h-16" style={{
					backgroundColor: `${theme === "dark" ? "#202837" : "#e2e8f0"}`
				}}>
					<p className="font-semibold text-xl">RFQs Live Feeds</p>
					<DropdownButton
						buttonContent={<FilterIcon color={theme === "dark" ? "#fff" : "#2D3748"} />}
						style={{
							right: 0
						}}
					>
						<div className="w-full rounded-lg shadow-2xl mt-2" style={{
							backgroundColor: `${theme == "dark" ? "#505256" : "#edf2f7"}`,
							width: "200px"
						}}>
							<div className="w-full bg-gray-800 font-semibold text-lg py-3 px-3" style={{
								backgroundColor: `${theme == "dark" ? "#202837" : "#e2e8f0"}`
							}}>
								<p>Show only</p>
							</div>
							<div className="w-full px-3 py-3" style={{
								fontSize: '16px'
							}}>
								{
									SearchItems.map(item => <>
									<div className="w-full flex items-center mb-5">
										<label className="checkbox-container" style={{marginTop: '-10px'}}>
											<input
												type="checkbox"
												defaultChecked={false}
											/>
											<span className="checkmark"></span>
										</label>
										<p>{item}</p>
									</div>
									</>)
								}
								<button
									className="font-semibold text-xs px-2 py-3 rounded-lg w-full"
									style={{ backgroundColor: `#48BB78` }}
									>
									APPLY
								</button>							
							</div>							
						</div>
					</DropdownButton>
				</div>
				<div className="w-full px-3 py-3 overflow-y-auto" style={{
					maxHeight: '100vh'
				}}>
					{
						datas.map(data => <>
							<CardRFQ data={data} />	
						</>)
					}
				</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={{
					overlay: {
						backgroundColor: `${
							theme === "dark"
								? "rgba(0, 0, 0, 0.75)"
								: "rgba(255, 255, 255, 0.75)"
						}`,
					},
					content: {
						top: "50%",
						left: "50%",
						right: "auto",
						bottom: "auto",
						marginRight: "-50%",
						padding: "0px",
						border: "0px",
						background: "none",
						transform: "translate(-50%, -50%)",
					},
				}}>
				<SubmitResponseModal closeModal={closeModal} />
			</Modal>
		</div>
	);
};

export default RfqsLiveFeeds;
