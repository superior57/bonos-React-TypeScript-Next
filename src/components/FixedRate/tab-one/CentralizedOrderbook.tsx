import { useSelector } from "react-redux";
import { RootState } from "src/store";

import ExpandLayout from "src/components/Layout/ExpandLayout";

const CentralizedOrderbook = () => {
	const theme = useSelector((state: RootState) => state.theme.name);

	return (
		<ExpandLayout title="Centralized Orderbook">
			{/*
			 * =======================================================
			 * BID Part Start
			 * =======================================================
			 */}

			<p
				className={`font-semibold text-lg px-5 py-1 ${
					theme === "light" ? "text-white" : "#f7fafc"
				}`}
				style={{ backgroundColor: "#48BB78" }}>
				BID
			</p>
			<div
				style={{
					backgroundColor: `${
						theme === "dark" ? "#2D3748" : "#f7fafc"
					}`,
				}}
				className="pb-10">
				<div className="grid grid-cols-2 text-center py-3 font-semibold text-sm">
					<div className="grid grid-cols-3">
						<p>Clean Price</p>
						<p>Dirty Price</p>
						<p>Yield</p>
					</div>
					<div className="grid grid-cols-3">
						<p>Ispread</p>
						<p>Volume</p>
						<p>Notional</p>
					</div>
				</div>

				<div
					className="mx-5 border border-none rounded-lg"
					style={{
						backgroundColor: `${
							theme === "dark" ? "#2D3748" : "#f7fafc"
						}`,
					}}>
					<div className={`grid grid-cols-1 lg:grid-cols-2 text-center pt-3 pb-1 font-normal text-sm rounded-lg ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`}>
						<div className="grid grid-cols-3">
							{/* Clean Price Values */}
							<div>
								<p>108.450</p>
								<p className="py-2">108.460</p>
								<p>108.500</p>
								<p className="py-2">108.550</p>
							</div>
							{/* Dirty Price Values */}
							<div>
								<p>108.934</p>
								<p className="py-2">108.944</p>
								<p>108.985</p>
								<p className="py-2">109.035</p>
							</div>
							{/* Yield Values */}
							<div>
								<p>6.221%</p>
								<p className="py-2">6.219%</p>
								<p>6.211%</p>
								<p className="py-2">6.202%</p>
							</div>
						</div>
						<div className="grid grid-cols-3">
							{/* Ispread Values */}
							<div>
								<p>60.08</p>
								<p className="py-2">59.90</p>
								<p>59.11</p>
								<p className="py-2">58.15</p>
							</div>
							{/* Volume Values */}
							<div>
								<p>50,000</p>
								<p className="py-2">15,000</p>
								<p>150,000</p>
								<p className="py-2">10,000</p>
							</div>
							{/* Notional Values */}
							<div>
								<p>5,000,000</p>
								<p className="py-2">1,500,000</p>
								<p>15,000,000</p>
								<p className="py-2">1,000,000</p>
							</div>
						</div>
					</div>
				</div>
				<p className="font-semibold text-sm px-5 py-3">Market Order</p>

				<div className="flex px-5">
					<input
						type="text"
						placeholder="Volume"
						className="py-1 pl-6 text-sm font-normal w-32 mr-4 rounded"
						style={{
							backgroundColor: `${
								theme === "dark" ? "#202837" : "#edf2f7"
							}`,
						}}
					/>

					<p className="mr-4">or</p>
					<input
						type="text"
						placeholder="Notional"
						className="py-1 pl-6 text-sm font-normal w-32 mr-4 rounded"
						style={{
							backgroundColor: `${
								theme === "dark" ? "#202837" : "#edf2f7"
							}`,
						}}
					/>

					<button
						className={`px-8 py-1 border border-none rounded-lg font-semibold text-xs mr-4 ${
							theme === "light" ? "text-white" : "#f7fafc"
						}`}
						style={{ backgroundColor: "#38B2AC" }}>
						BYE
					</button>
					<button
						className={`px-8 py-1 border border-none rounded-lg font-semibold text-xs mr-4 ${
							theme === "light" ? "text-white" : "#f7fafc"
						}`}
						style={{ backgroundColor: "#F56565" }}>
						SELL
					</button>
				</div>
			</div>

			{/*
			 * =======================================================
			 * BID Part End
			 * =======================================================
			 */}

			{/*
			 * =======================================================
			 * ASK Part Start
			 * =======================================================
			 */}

			<p
				className={`font-semibold text-lg px-5 py-1 ${
					theme === "light" ? "text-white" : "#f7fafc"
				}`}
				style={{ backgroundColor: "#F56565" }}>
				ASK
			</p>
			<div
				style={{
					backgroundColor: `${
						theme === "dark" ? "#2D3748" : "#f7fafc"
					}`,
				}}
				className="pb-5">
				<div className="grid grid-cols-2 text-center py-3 font-semibold text-sm">
					<div className="grid grid-cols-3">
						<p>Clean Price</p>
						<p>Dirty Price</p>
						<p>Yield</p>
					</div>
					<div className="grid grid-cols-3">
						<p>Ispread</p>
						<p>Volume</p>
						<p>Notional</p>
					</div>
				</div>

				<div
					className="mx-5 border border-none rounded-lg"
					style={{
						backgroundColor: `${
							theme === "dark" ? "#2D3748" : "#f7fafc"
						}`,
					}}>
					<div className={`grid grid-cols-1 lg:grid-cols-2 text-center pt-3 pb-1 font-normal text-sm rounded-lg ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`}>
						<div className="grid grid-cols-3">
							{/* Clean Price Values */}
							<div>
								<p>108.450</p>
								<p className="py-2">108.460</p>
								<p>108.500</p>
								<p className="py-2">108.550</p>
							</div>
							{/* Dirty Price Values */}
							<div>
								<p>108.934</p>
								<p className="py-2">108.944</p>
								<p>108.985</p>
								<p className="py-2">109.035</p>
							</div>
							{/* Yield Values */}
							<div>
								<p>6.221%</p>
								<p className="py-2">6.219%</p>
								<p>6.211%</p>
								<p className="py-2">6.202%</p>
							</div>
						</div>
						<div className="grid grid-cols-3">
							{/* Ispread Values */}
							<div>
								<p>60.08</p>
								<p className="py-2">59.90</p>
								<p>59.11</p>
								<p className="py-2">58.15</p>
							</div>
							{/* Volume Values */}
							<div>
								<p>50,000</p>
								<p className="py-2">15,000</p>
								<p>150,000</p>
								<p className="py-2">10,000</p>
							</div>
							{/* Notional Values */}
							<div>
								<p>5,000,000</p>
								<p className="py-2">1,500,000</p>
								<p>15,000,000</p>
								<p className="py-2">1,000,000</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*
			 * =======================================================
			 * ASK Part End
			 * =======================================================
			 */}
		</ExpandLayout>
	);
};

export default CentralizedOrderbook;
