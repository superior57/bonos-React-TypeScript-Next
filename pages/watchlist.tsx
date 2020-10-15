import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";

import { RootState } from "src/store";
import SearchIcon from "src/icons/search";
import FilterIcon from "src/icons/filter";
import watchlist from "src/data/watchlist";
import WatchlistModal from "src/components/Watchlist/WatchlistModal";

import { SingleWatchlist } from "src/components/Watchlist/SingleWatchlist";
import { UnderlinedTabs } from "src/components/Tabs";
import { Layout } from "src/components/Layout/Layout";

const TabOne = () => {
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
			<div className="grid grid-cols-1 sm:grid-cols-2 mr-10 mt-12 mb-12">
				<div className="relative flex">
					<div
						className="absolute"
						style={{ top: "19px", left: "24px" }}>
						<SearchIcon
							color={theme === "dark" ? "#fff" : "#2D3748"}
						/>
					</div>
					<input
						type="search"
						className={`py-4 pl-12 pr-3 outline-none rounded-full ${
							theme === "light" ? "placeholder-gray-800" : ""
						}`}
						style={{
							backgroundColor: `${
								theme === "dark" ? "#2D3748" : "#edf2f7"
							}`,
							width: "367px",
						}}
						placeholder="Search by name"
					/>
					<div className="mt-4 ml-8">
						<FilterIcon
							color={theme === "dark" ? "#fff" : "#2D3748"}
						/>
					</div>
				</div>
				<div className="flex justify-center sm:justify-end mt-5 sm:mt-0">
					<button
						className="px-2 sm:px-4 py-3 sm:py-4 font-semibold rounded-lg w-40 mr-3"
						style={{
							backgroundColor: "#F56565",
							color: "#FFFFFF",
						}}
					>
						SAVE WORKSPACE
					</button>
					<button
						className="px-2 sm:px-4 py-3 sm:py-4 font-semibold rounded-lg w-40"
						style={{
							backgroundColor: "#F56565",
							color: "#FFFFFF",
						}}
						onClick={openModal}>
						ADD WATCHLIST
					</button>
				</div>
			</div>

			<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
				{watchlist.map((item) => (
					<div className="pr-8 mb-4" key={item.id}>
						<SingleWatchlist data={item} />
					</div>
				))}
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
				<WatchlistModal
					data={{
						name: "",
						description: ""
					}}
					title="ADD WATCHLIST"
					closeModal={closeModal}
				/>
			</Modal>
		</>
	);
};

const NewTab = () => <h3>New Tab...</h3>;

const tabs = [
	{
		index: 0,
		title: "MY WATCHLISTS",
		active: true,
		content: <TabOne />,
	},
	{
		index: 1,
		title: "WATCHLIST 1",
		active: false,
		content: <NewTab />,
	},
];

const WatchlistsPage = () => {
	return (
		<Layout>
			<div className="flex flex-wrap">
				<div className="w-full">
					<UnderlinedTabs tabs={tabs} />
				</div>
			</div>
		</Layout>
	);
};

export default WatchlistsPage;
