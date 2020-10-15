import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";

import { RootState } from "src/store";

import EditIcon from "src/icons/edit";
import DeleteIcon from "src/icons/delete";

export const SingleWatchlist = ({ data }) => {
	const router = useRouter();

	const theme = useSelector((state: RootState) => state.theme.name);



	return (
<div className={theme === "dark" ? "text-white" : "text-black"}>
			<div
				className="h-16 px-5 flex justify-between items-center rounded-tl-lg rounded-tr-lg"
				style={{
					backgroundColor: `${
						theme === "dark" ? "#202837" : "#e2e8f0"
					}`,
				}}>
				<div className="flex items-center">
					<h3 className="pr-4 text-lg font-semibold">Test</h3>
					
				</div>
			</div>

			<div
				style={{
					backgroundColor: `${
						theme === "dark" ? "#2D3748" : "#f7fafc"
					}`,
				}}
				className="rounded-bl-lg rounded-br-lg">
				<p className="px-8 text-lg font-normal py-8">
					Test
				</p>
				<div className="flex justify-end pb-6 px-6 cursor-pointer">

				</div>
			</div>

		</div>
	);
};
