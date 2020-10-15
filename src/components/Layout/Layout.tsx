import React, { FC, Fragment } from "react";
import { Navbar } from "./Navbar";
import { SideBar } from "./SideBar";
import Head from "next/head";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

export const Layout: FC = ({ children }) => {
	const theme = useSelector((state: RootState) => state.theme);
	
	return (
		<Wrapper {...theme.palettes}>
			<Navbar />
			<SideBar />
			<div className="main w-full">
				<div className="py-20 px-4 min-h-screen">{children}</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = ({
	name = "mTrade",
	layout = "layout-1",
	direction = "ltr",
	collapsed = false,
	background,
	navbar,
	logo,
	leftSidebar,
	rightSidebar,
	topNavigation,
	children,
}) => (
	<Fragment>
		<Head>
			<title>{name}</title>
		</Head>
		<div
			data-layout={layout}
			data-direction={direction}
			data-collapsed={collapsed}
			data-background={background}
			data-navbar={navbar}
			data-logo={logo}
			data-left-sidebar={leftSidebar}
			data-right-sidebar={rightSidebar}
			data-top-navigation={topNavigation}>
			{children}
		</div>
	</Fragment>
);
