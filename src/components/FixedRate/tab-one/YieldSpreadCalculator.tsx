import { useSelector } from "react-redux";
import { useState } from "react";

import { RootState } from "src/store";
import ExpandLayout from "src/components/Layout/ExpandLayout";
import Modal from "react-modal";
import CloseIcon from "src/icons/close";


const ModalContent1 = ({closeModal, title}) => {
	const theme = useSelector((state: RootState) => state.theme.name);


	const datas = [
		{
			name: "Security",
			value: <p className="w-full text-sm py-3 pr-5 text-right">Kexim 7.930% 2026</p>
		},
		{
			name: "Number of Securities",
			value: <p className="w-full  text-sm py-3 pr-5 text-right">500,000</p>
		},
		{
			name: "Notional  Amount",
			value: <p className="w-full text-sm py-3 pr-5 text-right">54,530,483.38</p>
		},
		{
			name: "Anonymous",
			value: <div className="" style={{minWidth: "150px"}}>
				<select
					className={`w-full py-2 px-2 text-sm rounded text-right ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`} >
					<option value="0">Yes</option>
					<option value="1">No</option>
				</select>
			</div>
		},
		{
			name: "Direction",
			value: <div className="" style={{minWidth: "150px"}}>
				<select
					className={`w-full py-2 px-2 text-sm rounded text-right text-white`} style={{
						backgroundColor: `#48BB78`
					}}>
					<option value="0">Buy</option>
					<option value="1">Sell</option>
				</select>
			</div>
		},
		{
			name: "Expiration Date",
			value: <div className="" style={{minWidth: "150px"}}>
				<select
					className={`w-full py-2 px-2 text-sm rounded text-right ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`} >
					<option value="0">31/08/2020</option>
					<option value="1">31/08/2020</option>
				</select>
			</div>
		},
		{
			name: "Expiration Time",
			value: <div className="" style={{minWidth: "150px"}}>
				<select
					className={`w-full py-2 px-2 text-sm rounded text-right ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`} >
					<option value="0">18:10</option>
					<option value="1">18:10</option>
				</select>
			</div>
		},
		{
			name: "Settlement instruction",
			value: <div className="w-full" style={{minWidth: "150px"}}>
				<select
					className={`w-full py-2 px-2 text-sm rounded text-right ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`} >
					<option value="0">Select Settlement Instructions</option>
					<option value="1">Select Settlement Instructions</option>
				</select>
			</div>
		},
	];

	const Counterparties = [
		"Banorte",
		"Santander",
		"actinver",
		"BCP",
		"ACCIVAL",
		"Banamex"
	];

	const CounterSpan = ({label}) => <>
		<span className="px-5 py-2 rounded-full text-sm uppercase mb-2 text-white" style={{
			backgroundColor: "#F56565"
		}}>
			{label}
		</span>
	</>;

	return <>
		<div
			className={theme === "dark" ? "text-white" : "text-black"}
			style={{ width: "456px" }}>
			<div
				className="h-16 px-5 flex justify-between items-center rounded-tl-lg rounded-tr-lg"
				style={{
					backgroundColor: `${
						theme === "dark" ? "#202837" : "#e2e8f0"
					}`,
				}}>
				<div className="flex items-center">
					<p className="pr-4 text-lg font-semibold">{title}</p>
				</div>
				<span className="cursor-pointer" onClick={closeModal}>
					<CloseIcon color={theme === "dark" ? "#fff" : "#2D3748"} />
				</span>
			</div>

			<div
				style={{
					backgroundColor: `${
						theme === "dark" ? "#2D3748" : "#f7fafc"
					}`,
					maxHeight: 'calc(100vh - 200px)'
				}}
				className="rounded-bl-lg rounded-br-lg px-5 pt-2 pb-5 overflow-y-auto">
					<div className="w-full mb-10">
					{
						datas.map(data => <>
							<div className="w-full flex justify-between items-center" style={{
								borderBottom: "solid 1px #262F3F"
							}}>
								<p className="w-full font-semibold text-sm py-3">{data.name}</p>
								{data.value}						
							</div>		
						</>)
					}
					</div>
					<p className="w-full p-2">Counterparties</p>
					<div className="w-full flex mb-10">
						<div className="w-full flex mr-5 flex-wrap">
							<span className={`w-full px-3 py-2 text-lg text-center mb-1 ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`}>Available</span>
							<div className={`w-full h-64 block px-3 py-5 overflow-y-auto ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`}>
								{
									Counterparties.map(counter => 
										<div className="w-full flex">
											<CounterSpan 
												label={counter}
											/>
										</div>
									)
								}
							</div>							
						</div>
						<div className="w-full flex flex-wrap">
							<span className={`w-full px-3 py-2 text-lg text-center mb-1 ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`}>Selected</span>
							<div className={`w-full h-64 flex flex-wrap ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`}>
							</div>							
						</div>						
					</div>
					<div className="w-full flex justify-center">
						<button
							className="px-8 font-semibold py-3 rounded-lg mr-5"
							style={{
								backgroundColor: "#38B2AC",
								color: "#FFFFFF"
							}}>
							SUBMIT RFQ
						</button>		
						<button
							className="px-8 font-semibold py-3 rounded-lg"
							style={{
								backgroundColor: "#F56565",
								color: "#FFFFFF"
							}}>
							CANCEL
						</button>					
					</div>
			</div>
			
		</div>
	</>;
}

const ModalContentBuy = ({closeModal, title}) => {
	const theme = useSelector((state: RootState) => state.theme.name);


	const datas = [
		{
			name: "Security",
			value: <p className="w-full text-sm py-3 text-right">Kexim 7.930% 2026</p>
		},
		{
			name: "Order Direction",
			value: <p className="w-full  text-sm py-3 text-right">Buy</p>
		},
		{
			name: "Volume",
			value: <p className="w-full text-sm py-3 text-right">500,000</p>
		},
		{
			name: "Nominal Amount",
			value: <p className="w-full text-sm py-3 text-right">54,530,483.38</p>
		},
		{
			name: "Trade Amount",
			value: <p className="w-full text-sm py-3 text-right">54,530,483.38</p>
		},
		{
			name: "Fee",
			value: <p className="w-full text-sm py-3 text-right">15,000.00</p>
		},
		{
			name: "VAT",
			value: <p className="w-full text-sm py-3 text-right">2,400</p>
		},
		{
			name: "Invoice",
			value: <p className="w-full text-sm py-3 text-right">54,547,833.38</p>
		},
		{
			name: "Clean Price",
			value: <p className="w-full text-sm py-3 text-right">108.554</p>
		},
		{
			name: "Dirty Price",
			value: <p className="w-full text-sm py-3 text-right">109.061</p>
		},
		{
			name: "Expiration Time",
			value: <div className="" style={{minWidth: "150px"}}>
				<select
					className={`w-full py-2 px-2 text-sm rounded text-right ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`} >
					<option value="0">31/08/2020</option>
					<option value="1">31/08/2020</option>
				</select>
			</div>
		},
	];

	return <>
		<div
			className={theme === "dark" ? "text-white" : "text-black"}
			style={{ width: "456px" }}>
			<div
				className="px-5 py-3 flex justify-between items-center rounded-tl-lg rounded-tr-lg"
				style={{
					backgroundColor: `${
						theme === "dark" ? "#48BB78" : "#48BB78"
					}`,
				}}>
				<div className="flex items-center">
					<p className="pr-4 text-lg font-semibold">{title}</p>
				</div>
				<span className="cursor-pointer" onClick={closeModal}>
					<CloseIcon color={theme === "dark" ? "#fff" : "#2D3748"} />
				</span>
			</div>

			<div
				style={{
					backgroundColor: `${
						theme === "dark" ? "#2D3748" : "#f7fafc"
					}`,
					maxHeight: 'calc(100vh - 200px)'
				}}
				className="rounded-bl-lg rounded-br-lg px-5 pt-2 pb-5 overflow-y-auto">
					<div className="w-full mb-3">
					{
						datas.map(data => <>
							<div className="w-full flex justify-between items-center" style={{
								borderBottom: "solid 1px #262F3F"
							}}>
								<p className="w-full font-semibold text-sm py-3">{data.name}</p>
								{data.value}						
							</div>		
						</>)
					}						
					</div>
					<div className="w-full mb-5">
						<div className="w-full mb-1">
							<label className="checkbox-container font-semibold">
								<input
									type="checkbox"
									defaultChecked={false}
								/>
								<span className={`${theme == "dark" ? "checkmark" : "checkmark-dark"}`}></span>
								Fixed Price
							</label>
						</div>
						<div className="w-full mb-1">
							<label className="checkbox-container font-semibold">
								<input
									type="checkbox"
									defaultChecked={false}
								/>
								<span className={`${theme == "dark" ? "checkmark" : "checkmark-dark"}`}></span>
								Fixed Spread or Discount Margin
							</label>
						</div>
						<div className="w-full flex items-center">
							<p className="mr-10 font-semibold text-sm py-3">Fixed ispread</p>
							<p className={`text-sm px-3 py-1 rounded-lg ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`} style={{color:"#F56565"}}>0.00</p>				
						</div>	
						<div className="w-full flex items-center">
							<p className="w-full font-semibold text-sm py-3">Use for Settlement</p>
							<div className="w-full" style={{minWidth: "150px"}}>
								<select
									className={`w-full py-2 px-2 text-sm rounded text-right ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`} >
									<option value="0">Benchmark</option>
									<option value="1">Benchmark</option>
								</select>
							</div>
						</div>
						<div className="w-full flex items-center">
							<p className="w-full font-semibold text-sm py-3">Refresh Price Every</p>
							<div className="w-full" style={{minWidth: "150px"}}>
								<select
									className={`py-2 px-2 text-sm rounded text-right ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`} >
									<option value="0">30 Mins</option>
									<option value="1">30 Mins</option>
								</select>
							</div>
						</div>
					</div>	

					<div className="w-full flex justify-center">
						<button
							className="px-8 font-semibold py-3 rounded-lg mr-5"
							style={{
								backgroundColor: "#38B2AC",
								color: "#FFFFFF"
							}}>
							SUBMIT RFQ
						</button>		
						<button
							className="px-8 font-semibold py-3 rounded-lg"
							style={{
								backgroundColor: "#F56565",
								color: "#FFFFFF"
							}}>
							CANCEL
						</button>					
					</div>
			</div>
			
		</div>
	</>;
}


const YieldSpreadCalculator = () => {
	const theme = useSelector((state: RootState) => state.theme.name);

	const [state, setState] = useState({
		isModalOpen: false,
		modalName: ""
	});

	const openModal = (modalName) => {
		var curState = {...state};
		curState.isModalOpen = true;
		curState.modalName = modalName;
		setState(curState);
	};

	const closeModal = () => {
		var curState = {...state};
		curState.isModalOpen = false;
		setState(curState);
	};

	const datas_calc = [
		{
			name: "Price",
			value: "108.554"
		},
		{
			name: "Yield",
			value: "6.200%"
		},
		{
			name: "Spread",
			value: "58.00"
		},
		{
			name: "Ispread",
			value: "55.00"
		},
		{
			name: "Settlement",
			value: "29/08/20"
		},
	];

	const datas_calc2 = [
		{
			name: "Volume",
			value: "500,000"
		},
		{
			name: "Notional",
			value: "54,530,483.38"
		},
		{
			name: "MXN",
			value: "54,530,483.38"
		},
	];

	return (
		<ExpandLayout title="Yield-Spread Calculator">
			{/*
			 * =======================================================
			 * 1st Part Start
			 * =======================================================
			 */}
			<div
				className="grid grid-cols-1 md:grid-cols-3 py-8 px-5 gap-5"
				style={{
					backgroundColor: `${
						theme === "dark" ? "#2D3748" : "#f7fafc"
					}`,
				}}>
				<div className="w-full">
					{
						datas_calc.map(data => <>
							<div className="w-full flex py-1">
								<p className="py-2" style={{width: '55%'}}>{data.name}</p>
								<p className={`px-2 py-2 font-semibold rounded text-right ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`} style={{width: '45%'}}>{data.value}</p>
							</div>
						</>)
					}
				</div>
				<div className="w-full font-semibold text-sm border border-none rounded-lg col-span-1">
					<div
						className="border border-none rounded-lg py-3"
						style={{
							backgroundColor: `${
								theme === "dark" ? "#202837" : "#e2e8f0"
							}`,
						}}>
						<div className="mb-2 px-4">
							<p>Dirty Price</p>
							<p
								className="font-bold text-center"
								style={{ fontSize: "42px" }}>
								109.061
							</p>
						</div>
						<div className="flex justify-between px-4 py-1">
							<p>Interest Accrual Date</p>
							<p>06/08/20</p>
						</div>
						<div className="flex justify-between px-4 py-1">
							<p>Coupon Days</p>
							<p>23 D</p>
						</div>
						<div className="flex justify-between px-4 py-1">
							<p>Accrued Int</p>
							<p>0.506639</p>
						</div>
					</div>

					<button
						className={`py-3 border border-none rounded-lg w-full mt-3 ${
							theme === "light" ? "text-white" : ""
						}`}
						style={{ backgroundColor: "#48BB78" }}
						onClick={() => openModal("rfq")}
						>
						CALCULATE
					</button>
				</div>
				<div className="font-semibold text-sm">
					<p className="pb-2">Benchmark</p>

					<select
						className={`py-2 px-2 text-sm font-bold w-full mb-2 ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`}>
						<option value="0">Bono M 5.750% 03/2025</option>
						<option value="1">Bono M 5.750% 03/2025</option>
					</select>

					<div className="w-full mb-3 flex-wrap">
						<p className="w-full pb-2">Benchmark Yield</p>
						<div className="w-full flex">
							<p className={`px-3 py-2 rounded font-semibold ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`}>5.620%</p>
						</div>
					</div>

					<div className="flex justify-between px-1 mb-2" style={{borderBottom: "solid 1px #262F3F"}}>
						<p className="pb-2 font-light text-base font-semibold">
							Ispread Tenor
						</p>
						<p className="pb-2 font-normal text-sm">6.0028</p>
					</div>
					<div className="flex justify-between px-1" style={{borderBottom: "solid 1px #262F3F"}}>
						<p className="pb-2 font-light text-base font-semibold">
							Ispread Curve
						</p>
						<p className="pb-2 font-normal text-sm">5.650%</p>
					</div>
				</div>
			</div>

			{/*
			 * =======================================================
			 * 1st Part End
			 * =======================================================
			 */}

			<div style={{ backgroundColor: "#2D3748" }}>
				<div className="border border-white mx-5 border-gray-400"></div>
			</div>

			{/*
			 * =======================================================
			 * 2nd Part Start
			 * =======================================================
			 */}
			<div
				className="grid grid-cols-2 xl:grid-cols-3 py-8 px-5 gap-5"
				style={{
					backgroundColor: `${
						theme === "dark" ? "#2D3748" : "#f7fafc"
					}`,
				}}>
				<div className="w-full">
					{
						datas_calc2.map(data => <>
							<div className="w-full flex py-1">
								<p className="w-full py-2">{data.name}</p>
								<p className={`w-full px-2 py-2 font-semibold rounded text-right ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`}>{data.value}</p>
							</div>
						</>)
					}
				</div>
				<div className="gap-5 font-semibold text-sm">
					<div className="flex justify-between py-3">
						<p>Fee</p>
						<p>15,000.00</p>
					</div>
					<div className="flex justify-between py-5">
						<p>VAT</p>
						<p>2,400.00</p>
					</div>
					<div className="flex justify-between py-4">
						<p>Invoice</p>
						<p>54,547,833.38</p>
					</div>
				</div>
				<div>
					<div className="flex justify-between">
						<p className="w-full font-bold text-sm py-2">MXN/MXN</p>
						<p className={`px-2 py-2 text-sm font-semibold rounded text-right ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`} style={{width: "30%"}}>1</p>
					</div>
					<div className="flex justify-between items-end lg:items-center h-32">
						<div>
							<button
								className={`px-5 py-2 border border-none rounded-lg ${
									theme === "light" ? "text-white" : ""
								}`}
								style={{ backgroundColor: "#48BB78" }}
								onClick={() => openModal("buy")}
								>
								BUY
							</button>
						</div>
						<div>
							<button
								className={`px-5 py-2 border border-none rounded-lg ${
									theme === "light" ? "text-white" : ""
								}`}
								style={{ backgroundColor: "#F56565" }}>
								SELL
							</button>
						</div>

						<div>
							<button
								className={`px-5 py-2 border border-none rounded-lg ${
									theme === "light" ? "text-white" : ""
								}`}
								style={{ backgroundColor: "#38B2AC" }}>
								RFQ
							</button>
						</div>
					</div>
				</div>
			</div>
			{/*
			 * =======================================================
			 * 2nd Part End
			 * =======================================================
			 */}
			 <Modal
				isOpen={state.isModalOpen}
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
						transform: "translate(-50%, -50%)"
					},
				}}>
					{
						state.modalName == "rfq" && <ModalContent1 title="RFQ" closeModal={closeModal} />						
					}			
					{
						state.modalName == "buy" && <ModalContentBuy title="Buy" closeModal={closeModal} />
					}
			</Modal>
		</ExpandLayout>
	);
};

export default YieldSpreadCalculator;
