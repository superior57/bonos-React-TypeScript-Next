import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "src/store";

import CloseIcon from "src/icons/close";

const EditWatchlistModal = ({ closeModal, data: { name, description } }) => {
	const theme = useSelector((state: RootState) => state.theme.name);

	const [state, setState] = useState({
		name,
		description,
	});

	const changeHandler = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const saveHandler = () => {
		console.log(state);
		closeModal();
	};

	return (
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
						EDIT WATCHLIST NAME AND DESCRIPTION
					</p>
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
				}}
				className="rounded-bl-lg rounded-br-lg px-5">
				<p className="text-lg font-semibold pb-3 pt-3">Name</p>
				<input
					type="text"
					value={state.name}
					name="name"
					onChange={changeHandler}
					className="outline-none text-xs font-semibold w-full p-4"
					style={{
						backgroundColor: `${
							theme === "dark" ? "#1A202C" : "#edf2f7"
						}`,
						color: `${theme === "dark" ? "#edf2f7" : "#1a202c"}`,
					}}
				/>
				<p className="text-lg font-semibold pb-3 pt-6">Description</p>

				<textarea
					rows={7}
					onChange={changeHandler}
					name="description"
					value={state.description}
					className="outline-none text-xs font-semibold w-full p-4"
					style={{
						backgroundColor: `${
							theme === "dark" ? "#1A202C" : "#edf2f7"
						}`,
						color: `${theme === "dark" ? "#edf2f7" : "#1a202c"}`,
						resize: "none",
					}}
				/>
				<div className="flex justify-end pb-8 cursor-pointer pt-6">
					<span
						className="px-8 py-3 font-semibold"
						style={{
							backgroundColor: "#48BB78",
							color: "#FFFFFF",
							borderRadius: "9px",
						}}
						onClick={saveHandler}>
						SAVE
					</span>
				</div>
			</div>
		</div>
	);
};

export default EditWatchlistModal;
