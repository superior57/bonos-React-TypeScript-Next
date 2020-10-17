import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { List } from "./List";
import { navigation } from "./navigation";
import Link from "next/link";
import Logo from "./logo.svg";
import LogoCollapsed from "./logo-sm.svg";
import { User } from "./User";
import { connectAdvanced, useSelector } from "react-redux";
import { theme } from "tailwind.config";
import { isMobile } from "react-device-detect";
import { setCollapsed } from "src/store/theme";
import { AppDispatch } from "src/store";
import { RootState } from "src/store";

export const SideBar = () => {
	const leftSidebarRef = React.createRef<HTMLDivElement>();
	const state = useSelector((state: RootState) => state);
	const screenMD = Number((theme.screens.md).replace("px", ""));
	const dispatch : AppDispatch = useDispatch();

	const { collapsed } = state.theme.palettes;
	// console.log(collapsed);

	useEffect(() => {
		const handleClickOutside = (event) => {			
			if (leftSidebarRef.current.contains(event.target)) {				
				return false;
			} else {
				if(isMobile) dispatch(setCollapsed(false));
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [leftSidebarRef]);

	

	return <>
		<div
			ref={leftSidebarRef}
			className={`left-sidebar left-sidebar-1 text-sm`}>
			<div>
				<div>
					<div className={`flex flex-col`}>
						<div className={`logo h-16 flex flex-row items-center uppercase font-bold text-lg tracking-wider justify-between ${!isMobile ? !collapsed ? "px-4" : "px-3" : "px-4"}`}>
							<Link href="/">
								<a className="flex flex-row items-center justify-start children-x-1">
									{
										!isMobile ? <>
										{
											!collapsed ? <Logo /> : <LogoCollapsed />
										}
										</> :  <Logo />
									}
								</a>
							</Link>
						</div>
						{
							!isMobile ? !collapsed && <div className="user-card">
								<User />
							</div> : <User />
						}
					</div>
					{navigation.map((menu, i) => (
						<div className="flex flex-col" key={i}>
							<div className="uppercase font-bold text-xs tracking-wider p-4">
								{menu.title}
							</div>

							<div className="flex flex-col">
								{menu.items.map((items, j) => (
									<List key={j} items={items} />
								))}
							</div>
						</div>
					))}
					{/* <Projects /> */}
					{/* <Tags /> */}
				</div>
			</div>
		</div>
		
	</>
};
