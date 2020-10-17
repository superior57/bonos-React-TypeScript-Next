import { useSelector } from "react-redux";
import { RootState } from "src/store";

const CardRFQ = ({data={}}) => {
	const theme = useSelector((state: RootState) => state.theme.name);
	const { headerColor, title, buttonColor, values } = data;

	return <>
		<div className={`${theme == "dark" ? "" : "bg-gray-300 shadow-2xl"} rounded-lg rounded-t-none mb-5`} style={{
			backgroundColor: `${theme == "dark" ? "#202837" : ""}`
		}}>
			<div className="w-full py-2 px-3" style={{
				backgroundColor: `${headerColor}`,
				color: "#FFF"
			}}>
				<p>{title}</p>
			</div>
			<div className="w-full px-3 py-3">
				{
					values.map(value => <>
					<div className="w-full flex py-3" style={{
                        borderTop: 'solid 1px #262F3F'
                    }}>
						<span className="w-full font-semibold text-sm">{value.name}</span>
						<span className="w-full font-normal text-sm text-right">{value.value}</span>
					</div>
					</>)
				}
			</div>
			<button
				className={`font-semibold text-xs px-2 py-2 rounded-lg mx-3 my-3 ${
					theme === "light" ? "text-white" : ""
				}`}
				style={{ backgroundColor: `${buttonColor}` }}
				// onClick={openModal}
				>
				SUBMIT RESPONSE
			</button>
		</div>		
	</>;
};

export default CardRFQ;