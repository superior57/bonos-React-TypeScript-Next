import { useState, useEffect } from "react";
import { current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

import SmartTableRow from "src/components/SmartTable/SmartTableRow";

const SmartTable = ({data}) => {
	const theme = useSelector((state: RootState) => state.theme.name);

	const [rowdata, setRowdata] = useState(data);
	const [dragged, setDragged] = useState(null);
	const [over, setOver] = useState(null);

	useEffect(() => {
		
	});

	const handleDragStart = (e) => {
		setDragged(e.target);
	};

	const handleDragEnd = (e) => {
		dragged.style.display = 'block';
		if(over) {			
			var curdata = [...rowdata];
			var from = dragged.id;
			var to = over.id;
			curdata.splice(to, 0, curdata.splice(from, 1)[0]);
			setRowdata(curdata);	
			over.classList.remove("drag-up");
			over.classList.remove("drag-down");		
		}
		dragged.classList.remove("drag-up");
		dragged.classList.remove("drag-down");		
	};
	
	const handleDragOver = (e) => {
		e.preventDefault();
		dragged.style.display = "none";

		if (e.target.id) {
            const dgIndex = dragged.id;
			const taIndex = e.target.id;
			const animateName = dgIndex > taIndex ? "drag-up" : "drag-down";

			if (over && e.target.id !== over.id) {
				over.classList.remove("drag-up", "drag-down");
			}
			
			if (!e.target.classList.contains(animateName)) {
				e.target.classList.add(animateName);
				setOver(e.target);
			}
        }		
	};

	return (
		<div
			className={`font-semibold items-center px-5 py-5 ${
				theme === "dark" ? "text-white" : "text-black"
			}`}
			onDragOver={handleDragOver}
		>
			{(rowdata) && (				
              rowdata.map((row, index) => (
				<SmartTableRow
					data={row}
					key={index}
					id={index}
					handleDragStart={handleDragStart}
					handleDragEnd={handleDragEnd}
				/>
              ))
            )}
		</div>
	);
};

export default SmartTable;
