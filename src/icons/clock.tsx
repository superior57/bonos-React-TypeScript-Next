const ClockIcon = ({ color }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="17.094" height="18.399" viewBox="0 0 17.094 18.399">
		<g id="reloj" transform="translate(0.094 0.597)">
			<g id="Ellipse_50" data-name="Ellipse 50" transform="translate(-0.094 0.803)" fill="none" stroke={color} strokeWidth="3">
			<circle cx="8.5" cy="8.5" r="8.5" stroke="none"/>
			<circle cx="8.5" cy="8.5" r="7" fill="none"/>
			</g>
			<line id="Line_61" data-name="Line 61" x1="2" y2="9" transform="translate(8.5)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="1"/>
			<line id="Line_62" data-name="Line 62" y1="4" x2="6" transform="translate(8.5 5)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="1"/>
		</g>
		</svg>
	);
};

export default ClockIcon;
