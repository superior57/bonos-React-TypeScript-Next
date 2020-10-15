import CloseIcon from "src/icons/close";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

const SubmitResponseModal = ({ closeModal }) => {
	const theme = useSelector((state: RootState) => state.theme.name);

	return (
		<div className="bg-black text-white w-10/12 lg:w-6/12 mx-auto border border-black rounded-lg">
			<div className="flex justify-between items-center h-12 lg:h-16 font-semibold text-base xl:text-2xl px-5">
				<p>
					{" "}
					RFQ Response: PMX FRN TIIE28 + 100 2024 [Floating Rate Note]
				</p>
				<div onClick={closeModal} className="cursor-pointer">
					<CloseIcon color={theme === "dark" ? "#fff" : "#2D3748"} />
				</div>
			</div>

			{/*
			 * =======================================================
			 * 1st Part Start
			 * =======================================================
			 */}
			<div
				className="grid grid-cols-1 md:grid-cols-3 py-8 px-5 gap-5"
				style={{ backgroundColor: "#2D3748" }}>
				<div className="grid grid-cols-2 gap-5 items-center font-semibold text-sm">
					<p>Price</p>
					<input
						type="text"
						className="bg-black py-1 px-2 text-xl font-bold"
					/>

					<p>Yield</p>
					<input
						type="text"
						className="bg-black py-1 px-2 text-xl font-bold"
					/>

					<p>Spread</p>
					<input
						type="text"
						className="bg-black py-1 px-2 text-xl font-bold"
					/>

					<p>Settlement</p>
					<input
						type="text"
						className="bg-black py-1 px-2 text-xl font-bold"
					/>
				</div>
				<div className="gap-5 w-full md:h-48 h-40 bg-black font-semibold text-sm p-4 border border-black rounded-lg">
					<div className="mb-4">
						<p>Dirty Price</p>
						<p className="font-bold" style={{ fontSize: "29px" }}>
							99.206
						</p>
					</div>
					<div className="flex">
						<p className="mr-6">Coupon Days</p>
						<p>1 D</p>
					</div>
					<div className="flex">
						<p className="mr-10">Accrued Int</p>
						<p>0.0238</p>
					</div>
				</div>
				<div className="font-semibold text-sm">
					<p className="pb-2">Benchmark</p>

					<select className="bg-black py-1 px-2 text-sm font-bold w-32 mb-2">
						<option value="0">Select</option>
						<option value="1">Audi</option>
						<option value="2">BMW</option>
						<option value="3">Citroen</option>
					</select>

					<p className="pb-2">Benchmark Yd</p>
					<input
						type="text"
						className="bg-black py-1 px-2 text-xl font-bold w-20 mb-2"
					/>

					<p className="pb-2">Benchmark CPN</p>
					<input
						type="text"
						className="bg-black py-1 px-2 text-xl font-bold w-20"
					/>
				</div>
			</div>

			{/*
			 * =======================================================
			 * 1st Part End
			 * =======================================================
			 */}

			<div style={{ backgroundColor: "#2D3748" }}>
				<div className="border border-white mx-5"></div>
			</div>

			{/*
			 * =======================================================
			 * 2nd Part Start
			 * =======================================================
			 */}
			<div
				className="grid grid-cols-2 lg:grid-cols-4 py-8 px-5 gap-5"
				style={{ backgroundColor: "#2D3748" }}>
				<div className="grid grid-cols-2 gap-5 items-center font-bold text-sm">
					<p>Amount</p>
					<input
						type="text"
						className="bg-black py-1 px-2 text-xl font-bold"
					/>

					<p>Notional</p>
					<input
						type="text"
						className="bg-black py-1 px-2 text-xl font-bold"
					/>

					<p>MXN</p>
					<input
						type="text"
						className="bg-black py-1 px-2 text-xl font-bold"
					/>
				</div>
				<div className="gap-5 font-semibold text-sm">
					<div className="flex justify-between py-5">
						<p>Fee</p>
						<p>29.761839</p>
					</div>
					<div className="flex justify-between py-5">
						<p>VAT</p>
						<p>4.7618942</p>
					</div>
					<div className="flex justify-between py-5">
						<p>Invoice</p>
						<p>99241</p>
					</div>
				</div>
				<div className="grid grid-cols-2 col-span-2">
					<div className="flex font-bold text-sm justify-between mr-3 lg:mr-0 mt-5">
						<p>UDI/MXN</p>
						<p>1</p>
					</div>
					<div className="grid self-end">
						<button
							className="px-6 py-3 border border-none rounded-lg"
							style={{ backgroundColor: "#48BB78" }}
							onClick={closeModal}>
							SUBMIT RESPONSE
						</button>
						<button
							className="px-4 py-3 border border-none rounded-lg mt-3"
							style={{ backgroundColor: "#F56565" }}
							onClick={closeModal}>
							CANCEL SUBMISSION
						</button>
					</div>
				</div>
			</div>
			{/*
			 * =======================================================
			 * 2nd Part End
			 * =======================================================
			 */}
		</div>
	);
};

export default SubmitResponseModal;
