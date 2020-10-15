import React from "react";
import CircleIcon from "src/icons/circle";
import * as Icon from "react-feather";
import { HomeIcon } from "src/icons/navigation";
import Item1Icon from "src/icons/navigation/item-1";
import Item2Icon from "src/icons/navigation/item-2";
import Item3Icon from "src/icons/navigation/item-3";
import Item4Icon from "src/icons/navigation/item-4";

export const navigation = [
	{
		title: "",
		items: [
			{
				url: "/",
				icon: <Icon.Home size={20} />,
				icon_c: <HomeIcon color="#F56565" />, 
				title: "Home page",
				items: [],
			},
			{
				url: "/fixed-rate",
				icon: <CircleIcon color="#FFFFFF" />,
				icon_c: <Item1Icon color="#ED8936" />, 
				title: "BONDS",
				items: [],
			},
			{
				url: "/screener",
				icon: <CircleIcon color="#F56565" />,
				icon_c: <Item2Icon color="#ECC94B" />, 
				title: "SCREENER",
				items: [],
			},			
			{
				url: "/watchlist",
				icon: <CircleIcon color="#ED8936" />,
				icon_c: <Item3Icon color="#48BB78" />, 
				title: "MY WATCHLISTS",
				items: [],
			},
			{
				url: "/blotter/orders",
				icon: <CircleIcon color="#ECC94B" />,
				icon_c: <Item4Icon color="#38B2AC" />, 
				title: "TRADE BLOTTER",
				items: [],
			},
			{
				url: "/multitrader",
				icon: <CircleIcon color="#48BB78" />,
				icon_c: <HomeIcon color="#F56565" />, 
				title: "MULTITRADER",
				items: [],
			},
			{
				url: "/rfq-mgmnt",
				icon: <CircleIcon color="#38B2AC" />,
				icon_c: <HomeIcon color="#F56565" />, 
				title: "RFQ MANAGER",
				items: [],
			},
			{
				url: "/inbox",
				icon: <CircleIcon color="#1D7280" />,
				icon_c: <HomeIcon color="#F56565" />, 
				title: "INBOX",
				items: [],
			},
			{
				url: "/settings",
				icon: <CircleIcon color="#085461" />,
				icon_c: <HomeIcon color="#F56565" />, 
				title: "SETTINGS",
				items: [],
			},
		],
	},
];
