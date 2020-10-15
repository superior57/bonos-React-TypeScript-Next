
const VerticalDivider = ({direction}) => {

	return <div className="border-b lg:border-b-0 md:border-r md:my-8" style={{
		position: 'absolute',
		right: `${direction == 'right' ? 0 : 'auto'}`,
		left: `${direction == 'left' ? 0 : 'auto'}`,
		top: 0,
		bottom: 0,
		borderColor: '#707070',
	}}>
	</div>
};

export default VerticalDivider;