import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import SearchBoxLayout from "src/components/Layout/SearchBoxLayout";
import UserEditModal from "./UserEditModal";


const fields = [
    {
        name: 'Email/Name ID',
        key: 'email'
    },
    {
        name: 'Telephone',
        key: 'phone'
    },
    {
        name: 'First Name',
        key: 'fname'
    },
    {
        name: 'Last Name',
        key: 'lname'
    },
    {
        name: 'Role',
        key: 'role'
    },
    {
        name: 'Type',
        key: 'type'
    }
];

export const UsersContent = ({data=[]}) => {
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
				+ ADD USER
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
			email: "ignatovar@gmailcom",
			phone: "5541303352",
			fname: "Ignacio",
			lname: "Tovar",
			role: "Admin",
			type: "Licenced",
		},
		{
			email: "ignatovar@gmailcom",
			phone: "5541303352",
			fname: "Ignacio",
			lname: "Tovar",
			role: "Admin",
			type: "Licenced",
		},
		{
			email: "ignatovar@gmailcom",
			phone: "5541303352",
			fname: "Ignacio",
			lname: "Tovar",
			role: "Admin",
			type: "Licenced",
		},
		{
			email: "ignatovar@gmailcom",
			phone: "5541303352",
			fname: "Ignacio",
			lname: "Tovar",
			role: "Admin",
			type: "Licenced",
		},
    ];
	
	return <>
		<SearchBoxLayout 
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
            <Modal 
                isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={{
					overlay: {
						backgroundColor: `${
							theme === "dark"
								? "rgba(0, 0, 0, 0.75)"
								: "rgba(255, 255, 255, 0.75)"
						}`,
					},
					content: {
						top: "50%",
						left: "50%",
						right: "auto",
						bottom: "auto",
						marginRight: "-50%",
						padding: "0px",
						border: "0px",
						background: "none",
						transform: "translate(-50%, -50%)",
					},
				}}>
                    <UserEditModal 
                        closeModal={closeModal}
                        data={data[0]}
                        title="User Edit"
                    />                
            </Modal>
		</SearchBoxLayout>
	</>
};
