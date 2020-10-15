import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "src/store";
import ArrowDownIcon from "src/icons/arrow-down";
import ArrowRightRectIcon from "src/icons/arrow-right-rect";
import RectLineIcon from "src/icons/rectline";
import TableToolBar from "./TableToolbar";
import MoveButton from "./MoveButton";

const ExpandTableRowBody = ({ children, title, color, RowHeaderContent }) => {
	const theme = useSelector((state: RootState) => state.theme.name);

	const [expand, setExpand] = useState(true);

	const expandHandler = () => {
		setExpand(!expand);
	};


	return (
		<div
			className={`${
				theme === "dark" ? "text-white" : "text-black shadow-2xl"
			} border border-none overflow-hidden`}
			style={{
				backgroundColor: `${theme === "dark" ? "#202837" : "#e2e8f0"}`,
			}}>
			<div
				className="flex justify-between items-center h-12 font-semibold text-lg xl:text-lg px-5 cursor-pointer"
				onClick={expandHandler}>
				<div className="flex p-2 items-center">
					<label className="checkbox-container" style={{marginTop: '-10px'}}>
						<input
							type="checkbox"
							defaultChecked={false}
						/>
						<span className="checkmark"></span>
					</label>

					<p style={{
						color: color,
						marginRight: 8
					}}>{title}</p>

					<ArrowRightRectIcon color={theme === "dark" ? "#fff" : "#2D3748"} />
					<RectLineIcon color={theme === "dark" ? "#fff" : "#2D3748"} style={{marginLeft: '-8px'}} />
				</div>
				<div className="flex items-center">
					<MoveButton hidden={expand} marginRight="30px" />
					<ArrowDownIcon color={theme === "dark" ? "#fff" : "#2D3748"} />
				</div>
			</div>
			{
				expand && 
				<div>
					<div className="flex" style={{
						backgroundColor: `${
							theme === "dark" ? "#111621" : "#edf2f7"
						}`,
					}}>
						{RowHeaderContent}
						<div className={"table-row-body grid grid-cols-none md:grid-cols-12 justify-between border-0 md:border md:border-none px-0 items-center w-full"}>
							{children}					
						</div>
						<TableToolBar />
					</div>				
				</div>
			}
			
		</div>
	);
};

export default ExpandTableRowBody;
