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

export const InstitutionContent = ({}) => {
	const theme = useSelector((state: RootState) => state.theme.name);

	return <>
	<SearchBoxLayout 
			className="flex justify-between items-center font-semibold text-lg xl:text-lg py-3 px-3 md:flex-no-wrap flex-wrap"
			headerButtonGroup={""}
		>
		<div className="px-6 py-5">
			<InnerCard 
				title="USER ID: 23255223XD"
			>
				<div className="w-full flex flex-wrap md:flex-no-wrap">
					<div className="pr-6 mb-3">
						<p className="px-2 pb-6 text-sm font-semibold">Institution Info</p>
						<div className="w-40">
							<Avatar />
						</div>
					</div>
					<div className="w-full grid grid-cols-none lg:grid-cols-12">					
						<div className="w-full lg:col-span-5">
						<Input label="Name" className="mb-3" />
						<Input label="Type" className="mb-3" />
						<Input label="RFC" className="mb-3" />
						<Input label="Telephone" className="mb-3" />
						</div>
					</div>
				</div>
			</InnerCard>
			<InnerCard title="USER ID: 23255223XD">
				<div className="w-full flex flex-wrap md:flex-no-wrap">
					<div className="pr-6">
						<p className="px-2 pb-6 text-sm font-semibold">Location</p>
						<div className="w-40">
						</div>
					</div>
					<div className="grid grid-cols-none md:grid-cols-12">
						<div className="md:col-span-5">
							<div className="w-full flex mb-3">
								<Input label="Country" className="mr-5" />
								<Input label="State" />							
							</div>			
							<div className="w-full flex mb-3">
								<Input label="Municipality" className="mr-5" />
								<Input label="City" />							
							</div>	
							<Input label="Street Address 1" className="mb-3" />		
							<Input label="Street Address 2" className="mb-3" />		
							<div className="w-full flex mb-3">
								<Input label="Zipcode" className="mr-5" />
								<div className="w-full"></div>					
							</div>	
						</div>
					</div>
				</div>
			</InnerCard>
			<InnerCard title="Login and Security">
				<div className="w-full flex flex-wrap md:flex-no-wrap">
					<div className="pr-6">
						<p className="px-2 pb-6 text-sm font-semibold">Account Information</p>
						<div className="w-40">
						</div>
					</div>
					<div className="w-full grid grid-cols-none md:grid-cols-12">
						<div className="md:col-span-5">		
							<div className="w-full block">
								<p className="text-sm mb-3">Contact ID:</p>		
								<p className="text-sm mb-3">Date:</p>	
								<p className="text-sm mb-3">Licence Type:</p>	
								<p className="text-sm mb-3">Users Allowed:</p>		
							</div>			
						</div>
					</div>
				</div>
			</InnerCard>
		</div>
	</SearchBoxLayout>
	</>
};