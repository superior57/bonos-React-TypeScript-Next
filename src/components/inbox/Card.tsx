import { useSelector } from "react-redux";
import { RootState } from "src/store";

import CircleLineIcon from "src/icons/circle-line";
import ClockIcon from "src/icons/clock";

export const CardHeader = ({children}) => <>
	<span className="text-sm font-semibold px-3 text-right" style={{
		lineHeight: '2rem',
		display: 'inherit'
	}}>{children}</span>
</>;


const CardTitle = ({theme, Name, SubName, Type, Background, SubBackground}) => <>
	<div className={`text-lg px-3 py-1 flex w-full justify-between items-center relative ${
				theme === "light" ? "text-white" : "#f7fafc"
	}`} style={{
		background: `${Background}`
	}}>
		<div className="">
			<p className={`font-semibold flex items-center`}>
				<span className="" style={{
					width: '18px',
					marginRight: "7px"
				}}>
					<CircleLineIcon color={theme === "dark" ? "#fff" : "#fff"} />
				</span>
				{Name}
			</p>
			<p className='' style={{
				marginLeft: '25px'
			}}>
				{SubName}
			</p>
		</div>
		<span className="absolute top-0 right-0 bottom-0 left-auto px-1 flex items-center text-right" style={{
			backgroundColor: `${SubBackground}`,
			maxWidth: '70px',
			lineHeight: '16px',

		}}>
			{Type}
		</span>
	</div>
</>;



const CardBody = ({ID, Title, Subtitle, TransactionID, FooterValue, FooterValue2}) => <>
	<div className="md:flex font-semibold text-lg flex-wrap">
		{
			ID && <>
				<span className="text-sm px-3 py-3" style={{
					lineHeight: '5px',
					fontWeight: 400
				}}>
					ID: {ID}
				</span>
			</>
		}
		{
			Title && <>
				<div className={`flex justify-between w-full ${TransactionID || ""}`}>
					<p className="px-3 py-1">
						{Title}
					</p>
					<p className="px-3 py-1 flex items-center text-right" style={{
						minWidth: '80px'
					}}>
						{Subtitle}
					</p>
				</div>
			</>
		}
		<span className={`text-sm px-3 py-3`} style={{
			lineHeight: '5px',
			fontWeight: 400
		}}>
			{TransactionID && <>
				Transaction ID: : {TransactionID}
			</>}
			
		</span>
		<div className="font-normal flex justify-between w-full" style={{
			fontWeight: 400
		}}>
			<p className="col-span-6 px-3 py-1">
				{FooterValue}
			</p>
			<p className="col-span-6 px-3 py-1 flex items-center justify-between">
				{
					FooterValue2.name && <>
						{FooterValue2.name}:
						<span className="pl-2">
						{FooterValue2.value}
						</span>
					</>
				}
			</p>
		</div>				
	</div>	
</>;

export default function Card({ data }) {
	const theme = useSelector((state: RootState) => state.theme.name);
	return <>
		<div
			className={`${
				theme === "dark" ? "text-white" : "text-black shadow-2xl"
            } border-none rounded-lg overflow-hidden`}
            style={{
                backgroundColor: `${theme === "dark" ? "#202837" : "#e2e8f0"}`,
            }}
		>
            <CardHeader>
				{data.time}
			</CardHeader>
			<CardTitle 
				theme={theme} 
				Name={data.name}
				SubName={data.sub_name}
				Type={data.type.name}
				Background={data.type.Background}
				SubBackground={data.type.SubBackground}
			/>
			<CardBody 
				ID={data.id}
				Title={data.title}
				Subtitle={<>
					{data.subtitle.value}
					{data.subtitle.type == "time" && <span className="pl-2">
					<ClockIcon color={theme === "dark" ? "#fff" : "#2D3748"}/>
					</span> }
				</>}
				TransactionID={data.trans_id}
				FooterValue={data.footer_value}
				FooterValue2={data.footer_value_2}
			/>            
			
		</div>
	</>;
}

