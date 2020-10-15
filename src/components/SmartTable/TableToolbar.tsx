import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "src/store";
import TrashIcon from "src/icons/trash";
import MoveButton from "./MoveButton";

const TableToolbar = () => {
	const theme = useSelector((state: RootState) => state.theme.name);

	const [expand, setExpand] = useState(true);

	return (		
		<div style={{
			minWidth: '50px',
			maxWidth: '50px',
			marginLeft: 'auto'
		}}>
			<div className="" style={{
				width: '100%',
				textAlign: '-webkit-center',
				paddingTop: '20px'
			}}>
				<p className="mt-4 mb-5">
					<TrashIcon color={theme === "dark" ? "#fff" : "#2D3748"} />
				</p>
				<MoveButton hidden={false} marginRight={0} />
			</div>	
		</div>
	);
};

export default TableToolbar;
