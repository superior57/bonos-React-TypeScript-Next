import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import SearchBoxLayout from "src/components/Layout/SearchBoxLayout";
import Modal from "react-modal";
import RoleEditModal from "./RoleEditModal";
import { RoleEditContent } from "./RoleEditContent";


const fields = [
    {
        name: 'Name',
        key: 'name'
    },
    {
        name: 'Description',
        key: 'description'
    },
    {
        name: 'Users',
        key: 'users'
    }
];

export const RolesContent = ({data=[]}) => {
	const theme = useSelector((state: RootState) => state.theme.name);

	const [modalIsOpen, setModalIsOpen] = useState(false);
	
	const handleEdit = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    }

	const headerButtonGroup = <>
		<div className="btn-group py-3 justify-end flex w-full">	
				<button
				className="px-2 sm:px-4 py-3 sm:py-2 font-semibold rounded-lg mr-2"
				style={{
					backgroundColor: "#F56565",
					color: "#FFFFFF",
				}}
				//   onClick={}
				>
				+ ADD ROLE
				</button>

				<button
					className="px-2 sm:px-4 py-3 sm:py-2 font-semibold rounded-lg mr-2"
					style={{
					backgroundColor: "#F56565",
					color: "#FFFFFF",
					}}
					>
					ACTIONS
				</button>
		</div>	
	</>;	

	data = [
		{
			name: "Admin",
			description: "Can control all the aspects of the account",
			users: "1"
		},
		{
			name: "Admin",
			description: "Can control all the aspects of the account",
			users: "1"
		},
		{
			name: "Admin",
			description: "Can control all the aspects of the account",
			users: "1"
		},
		{
			name: "Admin",
			description: "Can control all the aspects of the account",
			users: "1"
		},
	];

	
	return <>
		{
			!modalIsOpen ? <SearchBoxLayout 
			className="flex justify-between items-center font-semibold text-lg xl:text-lg py-3 px-3 md:flex-no-wrap flex-wrap"
			headerButtonGroup={headerButtonGroup}
			filterIcon={true}
		>
			<div className="px-6 py-5 overflow-x-auto w-full">
				<table className="table no-border striped rounded-lg" style={{
					lineHeight: '25px',
					fontSize: '14px'
				}}>
					<thead>
						<tr>
                            <th>
                                <label className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        defaultChecked={false}
                                    />
                                    <span className={`${theme == "dark" ? "checkmark" : "checkmark-dark"}`}></span>
                                </label>
                            </th>
							{fields.map((field, i) => (                                
                                <th key={i}>{field.name}</th>
							))}
                            <th style={{
                                textAlign: "right"
                            }}>
                                <button
                                    className="rounded-full px-2 font-bold"
                                    style={{
                                        backgroundColor: "#F56565",
                                        color: "#FFFFFF",
                                        fontSize: "14px",
                                        lineHeight: "23px",
                                    }}
                                    >
                                    +
                                </button>
                            </th>
						</tr>
					</thead>
					<tbody>
					{data.map((rowData, i) => (
						<tr key={i}>
                            <td>
                                <label className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        defaultChecked={false}
                                    />
                                    <span className={`${theme == "dark" ? "checkmark" : "checkmark-dark"}`}></span>
                                </label>
                            </td>
                            {fields.map((field, j) => (
                                <td key={j}>{rowData[field.key]}</td>
                            ))}
                            <td className="text-center">
                                <button
                                    className="rounded-full px-2"
                                    style={{
                                        backgroundColor: "#F56565",
                                        color: "#FFFFFF",
                                        fontSize: "12px",
                                        lineHeight: "16px"
									}}
									onClick={handleEdit}
                                    >
                                    EDIT
                                </button>
                            </td>
						</tr>
					))}
					</tbody>
				</table>
			</div>			
		</SearchBoxLayout> : <RoleEditContent />
		}
	</>
};
