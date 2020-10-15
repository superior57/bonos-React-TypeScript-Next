import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "src/store";
import MoveIcon from "src/icons/move-pointer";

const MoveButton = ({hidden, marginRight}) => {
	const theme = useSelector((state: RootState) => state.theme.name);

return <>{
	!hidden && <p style={{
		marginRight: `${marginRight}`,
		cursor: 'move'
	}}>
		<MoveIcon color={theme === "dark" ? "#fff" : "#2D3748"} />
	</p>
}</>
};

export default MoveButton;
