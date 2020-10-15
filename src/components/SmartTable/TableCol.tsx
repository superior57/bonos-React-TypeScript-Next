import { useSelector } from "react-redux";
import { RootState } from "src/store";

import TableRowBody from "./ExpandTableRowBody";

const TableCol = ({children, colSpan=1, className=""}) => {
	const theme = useSelector((state: RootState) => state.theme.name);

	var classes = "md:flex justify-between px-0 md:px-4 py-0 md:py-5 items-center px-6 py-6";
	classes += ` col-span-6 md:col-span-${colSpan} `;
	classes += className;

	return (			

			<div
				// className={`md:flex justify-between px-0 md:px-6 py-0 md:py-5 items-center px-6 py-6 col-span-${colSpan}`}
				className={classes}
				style={{
					backgroundColor: `${
						theme === "dark" ? "#111621" : "#edf2f7"
					}`,
					position: 'relative',
					height: '100%',
					alignItems: 'flex-start'
				}}>
				{children}								
			</div>
	);
};

export default TableCol;
