import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import SearchIcon from "src/icons/search";
import SearchBoxLayout from "src/components/Layout/SearchBoxLayout";


const InnerCard = ({title="", children}) => {
	const theme = useSelector((state: RootState) => state.theme.name);
	return <>
		<div className="w-full">
			<div className={`w-full px-8 py-2 ${theme == "dark" ? "bg-gray-900" : "bg-gray-300"}`}>
				<p>{title}</p>
			</div>
			<div className="w-full px-5 py-5">
				{children}
			</div>
		</div>
	</>;
}

const Avatar = () => <>
	<div className="w-full h-40 bg-white">

	</div>
</>;

const Input = ({className="", label="", defaultValue="", }) => {
	const theme = useSelector((state: RootState) => state.theme.name);
	const [value, setValue] = useState();
	const onChange = (e) => {
		setValue(e.target.value);
	}

	return <>
		<div className={`w-full ${className}`}>
			<p className="text-sm p-1">{label}</p>
			<div className="flex">
				<input
					type="text"
					value={value || defaultValue}
					name="name"
					onChange={onChange}
					className="outline-none text-xs font-semibold w-full p-2 rounded-l"
					style={{
						backgroundColor: `${
							theme === "dark" ? "#1A202C" : "#edf2f7"
						}`,
						color: `${theme === "dark" ? "#edf2f7" : "#1a202c"}`,
					}}
				/>
				<span					
					className="outline-none text-xs font-semibold p-2 pl-0 rounded-r text-right"
					style={{
						backgroundColor: `${
							theme === "dark" ? "#1A202C" : "#edf2f7"
						}`,
						color: `${theme === "dark" ? "#edf2f7" : "#1a202c"}`,
					}}
				>108.554</span>
			</div>
		</div>
	</>
}

export const RoleEditContent = ({}) => {
	const theme = useSelector((state: RootState) => state.theme.name);

	return <>
	<SearchBoxLayout 
			className="flex justify-between items-center font-semibold text-lg xl:text-lg py-3 px-3 md:flex-no-wrap flex-wrap"
			headerButtonGroup={""}
		>
		<div className="px-6 py-5">
			<InnerCard title="User Permissions">
				<div className="w-full flex flex-wrap md:flex-no-wrap">
					<div className="block text-right pl-6">
						<p className="text-sm mb-3">Can trade?</p>		
						<p className="text-sm mb-3">Security type that can be traded?</p>	
						<p className="text-sm mb-3">Orderbook that can be used</p>	
						<p className="text-sm mb-3">Settlement selection</p>		
						<p className="text-sm mb-3">Max volume per order</p>		
					</div>
				</div>
			</InnerCard>
			<InnerCard title="User Account Permissions">
				<div className="w-full flex flex-wrap md:flex-no-wrap">
					<div className="block text-right pl-6 h-32">		
					</div>
				</div>
			</InnerCard>
			<InnerCard title="User Account Permissions">
				<div className="w-full flex flex-wrap md:flex-no-wrap">
					<div className="block text-right pl-6 h-32">		
					</div>
				</div>
			</InnerCard>
		</div>
	</SearchBoxLayout>
	</>
};