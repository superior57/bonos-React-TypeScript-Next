import React, { useState } from "react";
import CircleIcon from "src/icons/circle";
import PropTypes from "prop-types";
import { toASCII } from "punycode";



export const SettingTabs = ({ tabs, lineColor="" }) => {
    const [openTab, setOpenTab] = React.useState(0);
    const [hovered, setHovered] = useState(
        tabs.map(() => false)
    );

	return (
		<div className="flex flex-wrap flex-col w-full tabs">
			<div className="flex flex-nowrap flex-row children-x-2 overflow-x-auto w-full">
			<div
				className="inline-block pb-3 mb-3"
				// style={{ borderBottom: "3px solid #ED8936" }}
			>
				<div className="flex font-bold text-xl items-center">
				<CircleIcon color="#ED8936" />
				<p className="ml-3 text-black" style={{ color: "#ED8936" }}>
					SETTINGS
				</p>
				</div>
			</div>
				{tabs.map((tab, key) => (
					<div key={key} className="flex-none">
						<button
							onClick={() => {
								setOpenTab(tab.index);
							}}
							className={
								openTab === tab.index
									? "tab tab-underline tab-active"
									: "tab tab-underline"
							}
                            type="button"
                            onMouseEnter={() => {
                                hovered != tab.index && setHovered(tab.index);
                            }}
                            onMouseLeave={() => {
                                hovered == tab.index && setHovered(-1);
                            }}
                            style={{
                                borderColor: hovered === tab.index || openTab === tab.index ? lineColor : ""
                            }}                                                        
						>
							{tab.title}
						</button>
					</div>
				))}
			</div>
			{tabs.map((tab, key) => (
				<div
					key={key}
					className={`tab-content ${
						openTab !== tab.index ? "hidden" : "block"
					}`}>
					{tab.content}
				</div>
			))}
		</div>
	);
};

SettingTabs.propTypes = {
	tabs: PropTypes.arrayOf(
		PropTypes.shape({
			index: PropTypes.number,
			content: PropTypes.element,
			title: PropTypes.any,
		})
	).isRequired,
};