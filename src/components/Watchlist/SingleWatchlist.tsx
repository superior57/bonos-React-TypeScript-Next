import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";

import { RootState } from "src/store";

import EditIcon from "src/icons/edit";
import DeleteIcon from "src/icons/delete";
import EditWatchlistModal from "./EditWatchlistModal";
import CloseIcon from "src/icons/close";

export const SingleWatchlist = ({ data }) => {
	const router = useRouter();

	const theme = useSelector((state: RootState) => state.theme.name);

	const [modalIsOpen, setIsOpen] = useState(false);
	const [modalIsDelete, setIsModalDelete] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	const openModalDelete = () => {
		setIsModalDelete(true);
	};

	const closeModalDelete = () => {
		setIsModalDelete(false);
	};

	return (
		<div className={theme === "dark" ? "text-white" : "text-black"}>
			<div
				className="h-16 px-5 flex justify-between items-center rounded-tl-lg rounded-tr-lg"
				style={{
					backgroundColor: `${
						theme === "dark" ? "#202837" : "#e2e8f0"
					}`,
				}}>
				<div className="flex items-center">
					<h3 className="pr-4 text-lg font-semibold">{data.name}</h3>					
				</div>
				<div className="flex items-end">
					<span className="cursor-pointer mr-3" onClick={openModal}>
						<EditIcon
							color={theme === "dark" ? "#fff" : "#2D3748"}
						/>
					</span>
					<span className="cursor-pointer" onClick={openModalDelete}>				
						<DeleteIcon color={theme === "dark" ? "#fff" : "#2D3748"} />
					</span>
				</div>
			</div>

			<div
				style={{
					backgroundColor: `${
						theme === "dark" ? "#2D3748" : "#f7fafc"
					}`,
				}}
				className="rounded-bl-lg rounded-br-lg">
				<p className="px-8 text-lg font-normal py-8">
					{data.description}
				</p>
				<div className="flex justify-end pb-6 px-6 cursor-pointer">
					<span
						className="px-4 py-2 font-semibold"
						style={{
							backgroundColor: "#F56565",
							color: "#FFFFFF",
							borderRadius: "80px",
						}}
						onClick={() => router.push("/see-more-watchlist")}>
						SEE MORE
					</span>
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
				<EditWatchlistModal data={data} closeModal={closeModal} />
			</Modal>
			<Modal
				isOpen={modalIsDelete}
				onRequestClose={closeModalDelete}
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
								<p className="pr-4 text-lg font-semibold">
									DELETE WATCHLIST
								</p>
							</div>
							<span className="cursor-pointer" onClick={closeModalDelete}>
								<CloseIcon color={theme === "dark" ? "#fff" : "#2D3748"} />
							</span>
						</div>

						<div
							style={{
								backgroundColor: `${
									theme === "dark" ? "#2D3748" : "#f7fafc"
								}`,
							}}
							className="rounded-bl-lg rounded-br-lg px-5">
							<p className="text-center pb-3 pt-3">
							Are you sure you want to delete this Watchlist?
							</p>
							

							
							<div className="flex justify-center pb-8 cursor-pointer pt-6">
								<span
									className="px-8 py-3 font-semibold mr-5"
									style={{
										backgroundColor: "#48BB78",
										color: "#FFFFFF",
										borderRadius: "9px",
									}}
									// onClick={}
									>
									PROCEED
								</span>
								<span
									className="px-8 py-3 font-semibold"
									style={{
										backgroundColor: '#F56565',
										color: "#FFFFFF",
										borderRadius: "9px",
									}}
									onClick={closeModalDelete}
									>
									CANCEL
								</span>
							</div>
						</div>
					</div>
					
			</Modal>
		</div>
	);
};
