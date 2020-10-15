import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "src/store";
import ArrowDownIcon from "src/icons/arrow-down";

const ExpandLayout = ({ children, title }) => {
	const theme = useSelector((state: RootState) => state.theme.name);

	const [expand, setExpand] = useState(true);

	const expandHandler = () => {
		setExpand(!expand);
	};

	return (
		<div
			className={`${
				theme === "dark" ? "text-white" : "text-black shadow-2xl"
			} border border-none rounded-lg overflow-hidden`}
			style={{
				backgroundColor: `${theme === "dark" ? "#202837" : "#e2e8f0"}`,
			}}>
			<div
				className="flex justify-between items-center h-12 lg:h-16 font-semibold text-lg xl:text-lg px-5 cursor-pointer"
				onClick={expandHandler}>
				<p>{title}</p>
				<ArrowDownIcon color={theme === "dark" ? "#fff" : "#2D3748"} />
			</div>

			<div className={!expand && "hidden"}>
				<div
					style={{
						backgroundColor: `${
							theme === "dark" ? "#2D3748" : "#f7fafc"
						}`,
					}}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default ExpandLayout;
