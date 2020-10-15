import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

import CircleLineIcon from "src/icons/circle-line";
import ClockIcon from "src/icons/clock";
import TriangularReversedIcon from "src/icons/triangular-reversed";

import LineChart from "src/components/LineChart";

import { CardHeader } from "./Card"; 

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
			// maxWidth: '70px',
			lineHeight: '16px',

		}}>
			{Type}
		</span>
	</div>
</>;

const CardBody = ({theme,Title, Value}) => {

	return <>
		<div className="md:flex font-semibold text-lg flex-wrap px-3 py-3 ">
			<div className="flex w-full justify-between px-3">
				<div className="" style={{
					fontSize: 15
				}}>
					<p className="mb-3">{Title}</p>
					<p className="">Watchlist: Short Bonds</p>
				</div>
				<div className="flex items-center" style={{
					fontSize: 25
				}}>
					<span className="mr-3">
						<TriangularReversedIcon color={theme === "dark" ? "#fff" : "#fff"}/>
					</span>
					<span>
						{Value}
					</span>
				</div>			
			</div>	
			<div className="cardbody w-full mb-5">
				<LineChart 
					width={500}
					height={250}
				/>
			</div>
			<div className="flex md:grid md:grid-cols-12 w-full md:justify-end">
				<div className="md:col-span-5">

				</div>
				<div className="md:col-span-7 w-full">
					<select
						className="py-2 px-2 text-sm font-bold w-full rounded mb-3"
						style={{
							backgroundColor: `${
								theme === "dark" ? "#1A202C" : "#edf2f7"
							}`,
						}}>
						<option value="0">Yield</option>
						<option value="1">Price</option>
						<option value="2">Spread</option>
						<option value="3">National</option>
					</select>
					<select
						className="py-2 px-2 text-sm font-bold w-full rounded mb-3"
						style={{
							backgroundColor: `${
								theme === "dark" ? "#1A202C" : "#edf2f7"
							}`,
						}}>
						<option value="0">Yield</option>
						<option value="1">Price</option>
						<option value="2">Spread</option>
						<option value="3">National</option>
					</select>
					<select
						className="py-2 px-2 text-sm font-bold w-full rounded"
						style={{
							backgroundColor: `${
								theme === "dark" ? "#1A202C" : "#edf2f7"
							}`,
						}}>
						<option value="0">Yield</option>
						<option value="1">Price</option>
						<option value="2">Spread</option>
						<option value="3">National</option>
					</select>
				</div>
			</div>	
		</div>	
	</>;
};

export default function Card2({ data }) {
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
				theme={theme}
				Title={data.title}
				Value={data.value}
			/>            
			
		</div>
	</>;
}
