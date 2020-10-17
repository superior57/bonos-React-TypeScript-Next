import { useState, useEffect, useReducer, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

const DropdownButton = ({children, buttonContent, style={}}) => {
	const [isShowMenu, setIsShowDropmenu] = useState(false);
	const theme = useSelector((state: RootState) => state.theme.name);
	const dropdown = useRef(null);
	
	useEffect(() => {
		const handleClickOutside = (event) => {
			console.log(dropdown);
			if(dropdown.current) {
				if (dropdown.current.contains(event.target)) {
					return false;
				} else {
					setIsShowDropmenu(false);
				}
			}		
			
		};
		
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdown]);
  
	return <>
	  <div  className="btn-dropdown">
		<div className="dropbtn" onClick={() => setIsShowDropmenu(!isShowMenu)}>
			{buttonContent}			
		</div>	
		
		{
		  isShowMenu && <>			
			<div ref={dropdown} className="btn-dropdown-content rounded-lg" style={style}>
				{children}
			</div>
		  </>        
		}
	  </div>
	</>
  }

  export default DropdownButton;