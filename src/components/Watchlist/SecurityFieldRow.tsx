import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { RootState } from "src/store";

import EditSecurityFieldColumnModal from "./EditSecurityFieldColumnModal";

const SecurityFieldRow = ({ data }) => {
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
					<p>Security Fields</p>

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
					<div className="mt-6 hidden">
						<h6>ISIN</h6>

						<div className="py-4 ">
							{data?.securityFields?.map(({ id, isin }) => (
								<h6 key={id} className="py-1">
									{isin}
								</h6>
							))}
						</div>
					</div>
					<div className="mt-6">
						<h6>Col 1</h6>

						<div className="py-4">
							{data?.securityFields?.map(({ id, col1 }) => (
								<h6 key={id} className="py-1">
									{col1}
								</h6>
							))}
						</div>
					</div>
					<div className="mt-6">
						<h6>Col 2</h6>

						<div className="py-4">
							{data?.securityFields?.map(({ id, col2 }) => (
								<h6 key={id} className="py-1">
									{col2}
								</h6>
							))}
						</div>
					</div>
					<div className="mt-6">
						<h6>Col 3</h6>

						<div className="py-4">
							{data?.securityFields?.map(({ id, col3 }) => (
								<h6 key={id} className="py-1">
									{col3}
								</h6>
							))}
						</div>
					</div>
					<div className="mt-6">
						<h6>Col 4</h6>

						<div className="py-4">
							{data?.securityFields?.map(({ id, col4 }) => (
								<h6 key={id} className="py-1">
									{col4}
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
				<EditSecurityFieldColumnModal
					data={data}
					title="EDIT COLUMNS"
					closeModal={closeModal}
				/>
			</Modal>
		</>
	);
};

export default SecurityFieldRow;
