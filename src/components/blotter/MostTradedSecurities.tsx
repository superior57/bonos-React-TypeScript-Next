import { useSelector } from "react-redux";
import { RootState } from "src/store";

const MostTradedSecurities = () => {
	const theme = useSelector((state: RootState) => state.theme.name);

	return (
		<div
			className={`text-sm border-b lg:border-b-0 lg:border-r pr-0 lg:pr-8 pb-5 lg:pb-0 ${
				theme === "light" && "border-gray-800"
			}`}>
			<div
				className={`px-3 py-4 font-semibold ${
					theme === "dark" ? "bg-black-80" : "bg-gray-300"
				}`}>
				<p>Most Traded Securities</p>
			</div>
			<div className="h-56 font-bold overflow-y-auto">
				<div className="grid grid-cols-2 px-3 py-3">
					<p>Bono M 7.750% 13/11/42</p>
					<p className="text-right">10,000,000,000</p>
				</div>
				<div
					className={`grid grid-cols-2 px-3 py-3 ${
						theme === "dark" ? "bg-black-80" : "bg-gray-200"
					}`}>
					<p>Bono M 8.000% 05/09/24</p>
					<p className="text-right">5,000,000,000</p>
				</div>
				<div className="grid grid-cols-2 px-3 py-3">
					<p>Bono M 6.500% 10/06/21</p>
					<p className="text-right">3,500,000,000</p>
				</div>
				<div
					className={`grid grid-cols-2 px-3 py-3 ${
						theme === "dark" ? "bg-black-80" : "bg-gray-200"
					}`}>
					<p>Bono M 7.250% 09/12/21</p>
					<p className="text-right">3,200,000,000</p>
				</div>
				<div className="grid grid-cols-2 px-3 py-3">
					<p>Bono M 6.500% 10/06/21</p>
					<p className="text-right">3,500,000,000</p>
				</div>
				<div
					className={`grid grid-cols-2 px-3 py-3 ${
						theme === "dark" ? "bg-black-80" : "bg-gray-200"
					}`}>
					<p>Bono M 7.250% 09/12/21</p>
					<p className="text-right">3,200,000,000</p>
				</div>
				<div
					className={`grid grid-cols-2 px-3 py-3 ${
						theme === "dark" ? "bg-black-80" : "bg-gray-200"
					}`}>
					<p>Bono M 7.250% 09/12/21</p>
					<p className="text-right">3,200,000,000</p>
				</div>
				<div
					className={`grid grid-cols-2 px-3 py-3 ${
						theme === "dark" ? "bg-black-80" : "bg-gray-200"
					}`}>
					<p>Bono M 7.250% 09/12/21</p>
					<p className="text-right">3,200,000,000</p>
				</div>
				<div
					className={`grid grid-cols-2 px-3 py-3 ${
						theme === "dark" ? "bg-black-80" : "bg-gray-200"
					}`}>
					<p>Bono M 7.250% 09/12/21</p>
					<p className="text-right">3,200,000,000</p>
				</div>
				<div
					className={`grid grid-cols-2 px-3 py-3 ${
						theme === "dark" ? "bg-black-80" : "bg-gray-200"
					}`}>
					<p>Bono M 7.250% 09/12/21</p>
					<p className="text-right">3,200,000,000</p>
				</div>
			</div>
		</div>
	);
};

export default MostTradedSecurities;
