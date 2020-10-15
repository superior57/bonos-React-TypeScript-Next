import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "src/store";
import { Search } from "./Search";
import FilterIcon from "src/icons/filter";



const SearchBoxLayout = ({ children, headerButtonGroup, style={}, className="", filterIcon=false }) => {
	const theme = useSelector((state: RootState) => state.theme.name);
	return (
		<div
			className={`${
				theme === "dark" ? "text-white" : "text-black shadow-2xl"
			} border border-none rounded-lg overflow-hidden`}
			style={{
				...{
				backgroundColor: `${theme === "dark" ? "#202837" : "#e2e8f0"}`,
				},
				...style
			}}>
			<div className={className ? className : "py-3 px-3 flex"}>
				<div className="w-full flex items-center">
					<Search />
					{
						filterIcon && <>
							<span>
								<FilterIcon color={theme === "dark" ? "#fff" : "#2D3748"} />
							</span>
						</>
					}
				</div>
				{headerButtonGroup}
			</div>
			<div>
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

export default SearchBoxLayout;
