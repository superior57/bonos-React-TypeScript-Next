import { useState } from "react";

import CloseIcon from "src/icons/close";

const EditBidColumnModal = ({ closeModal, title }) => {
	const [state, setState] = useState({
		price: false,
		spread: false,
		dm: false,
	});

	const priceHandler = () => {
		setState({ price: !state.price });
	};
	const spreadHandler = () => {
		setState({ spread: !state.spread });
	};
	const dmHandler = () => {
		setState({ dm: !state.dm });
	};

	return (
		<div className="text-white" style={{ width: "240px" }}>
			<div
				className="h-16 px-5 flex justify-between items-center rounded-tl-lg rounded-tr-lg"
				style={{ backgroundColor: "#202837" }}>
				<div className="flex items-center">
					<p className="pr-4 text-lg font-semibold">{title}</p>
				</div>
				<span className="cursor-pointer" onClick={closeModal}>
					<CloseIcon />
				</span>
			</div>

			<div
				style={{ backgroundColor: "#2D3748" }}
				className="rounded-bl-lg rounded-br-lg px-5 pb-2 pt-4">
				<label className="checkbox-container">
					Price{" "}
					<input
						type="checkbox"
						name="price"
						checked={state.price}
						onChange={priceHandler}
					/>
					<span className="checkmark"></span>
				</label>
				<label className="checkbox-container">
					Spread{" "}
					<input
						type="checkbox"
						name="spread"
						checked={state.spread}
						onChange={spreadHandler}
					/>
					<span className="checkmark"></span>
				</label>
				<label className="checkbox-container">
					Discount Margin{" "}
					<input
						type="checkbox"
						name="dm"
						checked={state.dm}
						onChange={dmHandler}
					/>
					<span className="checkmark"></span>
				</label>
			</div>
		</div>
	);
};

export default EditBidColumnModal;
