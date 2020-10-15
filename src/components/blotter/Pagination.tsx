import React from "react";

export const PageWithText = ({ color, children, active = false, onClick }) => {
	if (active)
		return (
			<button
				onClick={onClick}
				className={`btn btn-default btn-${color}`}>
				{children}
			</button>
		);
	return (
		<button onClick={onClick} className="btn btn-default btn-default-color">
			{children}
		</button>
	);
};

export const Active = ({ color, page, onClick }) => (
	<button onClick={onClick} className={`btn btn-circle btn-${color}`}>
		{page}
	</button>
);

export const Inactive = ({ page, onClick }) => (
	<button onClick={onClick} className="btn btn-circle btn-default-color">
		{page}
	</button>
);

export const Page = ({ color, page, active = false, onClick }) => {
	if (active) return <Active onClick={onClick} page={page} color={color} />;
	return <Inactive onClick={onClick} page={page} color={color} />;
};

export const Pagination = ({ color, items, active, onClick }) => (
	<>
		{items.map((i) => (
			<Page
				onClick={onClick}
				color={color}
				page={i + 1}
				active={i + 1 === 5 ? true : false}
				key={i}
			/>
		))}
	</>
);

export const PaginationWithText = ({
	color = "text-default",
	items,
	active,
}) => (
	<div className="flex flex-wrap items-center justify-start children-x-2 pagination">
		<PageWithText onClick={() => null} color={color}>
			Previous
		</PageWithText>
		<Pagination
			onClick={() => null}
			color={color}
			items={items}
			active={active}
		/>
		<PageWithText onClick={() => null} color={color}>
			Next
		</PageWithText>
	</div>
);
