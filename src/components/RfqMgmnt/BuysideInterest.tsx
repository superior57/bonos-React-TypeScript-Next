import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useSelector } from "react-redux";

import { RootState } from "src/store";

const BuysideInterest = () => {
	const theme = useSelector((state: RootState) => state.theme.name);

	const items = [
		{ size: "64", color: "bg-red-500" },
		{ size: "56", color: "bg-green-500" },
		{ size: "6", color: "bg-red-500" },
		{ size: "20", color: "bg-green-500" },
		{ size: "12", color: "bg-green-500" },
		{ size: "10", color: "bg-red-500" },
		{ size: "10", color: "bg-red-500" },
		{ size: "56", color: "bg-green-500" },
		{ size: "10", color: "bg-green-500" },
		{ size: "16", color: "bg-green-500" },
		{ size: "56", color: "bg-red-500" },
		{ size: "24", color: "bg-red-500" },
	];

	return (
		<div
			className={`${
				theme === "dark"
					? "text-white bg-black"
					: "text-black shadow-2xl"
			} border border-none rounded-lg overflow-hidden`}
			style={{
				backgroundColor: `${theme === "light" ? "#e2e8f0" : ""}`,
			}}>
			<div className="h-16"></div>
			<div
				style={{
					backgroundColor: `${
						theme === "dark" ? "#2D3748" : "#f7fafc"
					}`,
				}}>
				<div className="px-5 py-5">
					<ResponsiveMasonry
						columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
						<Masonry>
							{items.map((item, i) => (
								<div
									className={`flex justify-center items-center my-2 mr-2 h-${item.size} ${item.color}`}
									key={i}>
									Bond name
								</div>
							))}
						</Masonry>
					</ResponsiveMasonry>
				</div>
			</div>
		</div>
	);
};

export default BuysideInterest;
