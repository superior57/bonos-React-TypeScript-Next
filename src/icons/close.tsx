const CloseIcon = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14.828"
			height="14.828"
			viewBox="0 0 14.828 14.828">
			<g
				id="Group_89"
				data-name="Group 89"
				transform="translate(1.414 1.414)">
				<line
					id="Line_19"
					data-name="Line 19"
					x2="12"
					y2="12"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeWidth="2"
				/>
				<line
					id="Line_20"
					data-name="Line 20"
					x1="12"
					y2="12"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeWidth="2"
				/>
			</g>
		</svg>
	);
};

export default CloseIcon;
