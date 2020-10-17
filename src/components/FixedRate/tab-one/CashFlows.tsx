import { useSelector } from "react-redux";
import ExpandLayout from "src/components/Layout/ExpandLayout";
import { RootState } from "src/store";

const CashFlows = () => {
	const theme = useSelector((state: RootState) => state.theme.name);

	return (
		<ExpandLayout title="Cash Flows">
			{/*
			 * =======================================================
			 * 1st Part Start
			 * =======================================================
			 */}
			<div className="flex justify-between px-5 py-3">
				<p className="py-3 font-semibold">WAL/Remaining Life</p>
				<p className="py-3 font-normal text-sm">6.567</p>
			</div>
			<p className="font-semibold text-lg px-5 py-1">
				Optional Redemption
			</p>
			<div className="grid grid-cols-2 px-5">
				<p className="py-2 font-semibold">Type</p>
				<p className="py-2 font-normal text-sm text-right">
					30 day average
				</p>

				<p className="py-2 font-semibold">Est. Price</p>
				<p className="py-2 font-normal text-sm text-right">108.960</p>
			</div>
			<p className="font-semibold text-lg px-5 py-2">Call structure</p>
			<div className="flex justify-between px-5 font-semibold text-base">
				<p className="py-2">Date</p>
				<p className="py-2">Call Price</p>
			</div>

			<div className="border border-white mx-5 border-gray-400"></div>

			<div className="flex justify-between font-normal text-sm mx-5">
				<p className="py-2">[ Date ]</p>
				<p className="py-2">[ Price ]</p>
			</div>
			{/*
			 * =======================================================
			 * 1st Part End
			 * =======================================================
			 */}

			{/*
			 * =======================================================
			 * 2nd Part Start
			 * =======================================================
			 */}
			<p className="font-semibold text-lg px-5 py-1">
				Regular Future Cash Flows
			</p>
			<div className="flex justify-between mx-5 font-semibold text-sm">
				<p className="py-2 ">Date</p>
				<p className="py-2">Amortization</p>
				<p className="py-2">Interest</p>
			</div>

			<div className="border border-white mx-5 border-gray-400"></div>

			<div 
				className={`w-full h-40 overflow-y-auto`} 
			 	style={{
					 backgroundColor: `${theme == "dark" ? "#262F3F" : "#e2e8f0"}`
				 }}
			>
				<div className="flex justify-between mx-5 text-sm">
					<p className="py-2 font-bold">1/02/2024</p>
					<p className="py-2 font-normal">0%</p>
					<p className="py-2 font-normal">4.009056</p>
				</div>
				<div className="flex justify-between mx-5 text-sm">
					<p className="py-2 font-bold">1/02/2024</p>
					<p className="py-2 font-normal">0%</p>
					<p className="py-2 font-normal">4.009056</p>
				</div>
				<div className="flex justify-between mx-5 text-sm">
					<p className="py-2 font-bold">1/02/2024</p>
					<p className="py-2 font-normal">0%</p>
					<p className="py-2 font-normal">4.009056</p>
				</div>
				<div className="flex justify-between mx-5 text-sm">
					<p className="py-2 font-bold">1/02/2024</p>
					<p className="py-2 font-normal">0%</p>
					<p className="py-2 font-normal">4.009056</p>
				</div>
				<div className="flex justify-between mx-5 text-sm">
					<p className="py-2 font-bold">1/02/2024</p>
					<p className="py-2 font-normal">0%</p>
					<p className="py-2 font-normal">4.009056</p>
				</div>
				<div className="flex justify-between mx-5 text-sm">
					<p className="py-2 font-bold">1/02/2024</p>
					<p className="py-2 font-normal">0%</p>
					<p className="py-2 font-normal">4.009056</p>
				</div>
			</div>
			{/*
			 * =======================================================
			 * 2nd Part End
			 * =======================================================
			 */}
		</ExpandLayout>
	);
};

export default CashFlows;
