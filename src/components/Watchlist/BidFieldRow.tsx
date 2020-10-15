import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { RootState } from "src/store";
import EditBidColumnModal from "./EditBidColumnModal";

const BidFieldRow = ({ data }) => {
	const theme = useSelector((state: RootState) => state.theme.name);

	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
			<div
				className={`font-semibold pr-8 ${
					theme === "dark" ? "text-white" : "text-black"
				}`}>
				<div
					className="flex justify-between items-center py-4 px-4 border border-none rounded-lg"
					style={{
						backgroundColor: `${
							theme === "dark" ? "#202837" : "#e2e8f0"
						}`,
					}}>
					<p>BID</p>

					<button
						className="px-4 rounded-md py-1"
						style={{
							backgroundColor: "#F56565",
							color: "#FFFFFF",
							borderRadius: "10px",
						}}
						onClick={openModal}>
						EDIT COLUMNS
					</button>
				</div>
				<div
					className={`border-b-2 mt-4 ${
						theme === "light" && "border-gray-500"
					}`}></div>
				<div
					className="flex justify-between px-5 border border-none rounded-lg"
					style={{
						backgroundColor: `${
							theme === "dark" ? "#2D3748" : "#f7fafc"
						}`,
					}}>
					<div className="mt-6">
						<h6>Price</h6>

						<div className="py-4">
							{data?.bid?.map(({ id, price }) => (
								<h6 key={id} className="py-1">
									{price}
								</h6>
							))}
						</div>
					</div>
					<div className="mt-6">
						<h6>Chg</h6>

						<div className="py-4">
							{data?.bid?.map(({ id, chgPrice }) => (
								<h6 key={id} className="py-1">
									{chgPrice}
								</h6>
							))}
						</div>
					</div>
					<div className="mt-6">
						<h6>Spread</h6>

						<div className="py-4">
							{data?.bid?.map(({ id, spread }) => (
								<h6 key={id} className="py-1">
									{spread}
								</h6>
							))}
						</div>
					</div>
					<div className="mt-6">
						<h6>Chg</h6>

						<div className="py-4">
							{data?.bid?.map(({ id, chgSpread }) => (
								<h6 key={id} className="py-1">
									{chgSpread}
								</h6>
							))}
						</div>
					</div>
					<div className="mt-6">
						<h6>DM</h6>

						<div className="py-4">
							{data?.bid?.map(({ id, dm }) => (
								<h6 key={id} className="py-1">
									{dm}
								</h6>
							))}
						</div>
					</div>
					<div className="mt-6">
						<h6>Chg</h6>

						<div className="py-4">
							{data?.bid?.map(({ id, chgDm }) => (
								<h6 key={id} className="py-1">
									{chgDm}
								</h6>
							))}
						</div>
					</div>
				</div>
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
				<EditBidColumnModal
					data={data}
					title="EDIT COLUMNS"
					closeModal={closeModal}
				/>
			</Modal>
		</>
	);
};

export default BidFieldRow;
