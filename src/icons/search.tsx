const SearchIcon = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="15.914"
			height="15.914"
			viewBox="0 0 15.914 15.914">
			<g
				id="Group_40"
				data-name="Group 40"
				transform="translate(-303 -24)">
				<g
					id="Ellipse_2"
					data-name="Ellipse 2"
					transform="translate(303 24)"
					fill="none"
					stroke={color}
					strokeWidth="2">
					<circle cx="6.5" cy="6.5" r="6.5" stroke="none" />
					<circle cx="6.5" cy="6.5" r="5.5" fill="none" />
				</g>
				<line
					id="Line_5"
					data-name="Line 5"
					x2="4"
					y2="4"
					transform="translate(313.5 34.5)"
					fill={color}
					stroke={color}
					strokeLinecap="round"
					strokeWidth="2"
				/>
			</g>
		</svg>
	);
};

export default SearchIcon;
