import { useSelector } from "react-redux";
import { RootState } from "src/store";

const VolumeTradeSize = () => {
	const theme = useSelector((state: RootState) => state.theme.name);

	return (
		<div
			className={`grid grid-cols-1 lg:grid-cols-2 border-b lg:border-b-0 lg:border-r pb-5 lg:pb-24 ${
				theme === "light" && "border-gray-800"
			}`}>
			<div>
				<p className="font-semibold text-sm">
					Daily Average Volume{" "}
					<span style={{ fontSize: "10px" }}>(Billions)</span>
				</p>
				<p className="font-bold text-4xl float-right">3.34</p>
			</div>
			<div className="px-0 md:px-4">
				<p className="font-semibold text-sm">
					Year to Date Volume{" "}
					<span style={{ fontSize: "10px" }}>(Billions)</span>
				</p>
				<p className="font-bold text-4xl float-right">100.20</p>
			</div>

			<div className="pt-6">
				<p className="font-semibold text-sm">
					Largest Trade{" "}
					<span style={{ fontSize: "10px" }}>(Millions)</span>
				</p>
				<p className="font-bold text-4xl float-right">102.50</p>
			</div>
			<div className="px-0 md:px-4 pt-6">
				<p className="font-semibold text-sm">
					Average Trade Size{" "}
					<span style={{ fontSize: "10px" }}>(Millions)</span>
				</p>
				<p className="font-bold text-4xl float-right">50.2</p>
			</div>
		</div>
	);
};

export default VolumeTradeSize;
