import React from "react";
import { CircularBadge } from "../Badge";
import { useSelector } from "react-redux";
import { isMobile } from "react-device-detect";

const Item = ({ icon, title, badge, icon_c }) => {
  const {collapsed} = useSelector(state => state.theme.palettes);

  return <>
    {/* {
      icon
    } */}
    {
      !isMobile ? !collapsed ? icon : icon_c : icon
    }
    {
      !isMobile ? !collapsed && <span>{title}</span> : <span>{title}</span>
    }
    {badge && (
      <CircularBadge size="sm" color={badge.color}>
        {badge.text}
      </CircularBadge>
    )}
  </>;
};

export default Item;
