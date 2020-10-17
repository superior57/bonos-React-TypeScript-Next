import React, { useState } from "react";
import Link from "next/link";
import Item from "./Item";
import { useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import { RootState } from "src/store";

export const List = ({ items }) => {
  const [hidden, setHidden] = useState(true);
  const {collapsed} = useSelector((state:RootState) => state.theme.palettes);

  return (
    <ul className={`list-none ${!isMobile ? !collapsed ? "px-4" : "px-3" : "px-4"} `}>
      <li
        className={`relative ${items.items.length > 0 ? "right-arrow" : ""} ${
          hidden ? "" : "is-open"
        }`}
      >
        {items.items.length === 0 && (
          <Link href={items.url}>
            <a className="list-item children-x-2">
              <Item {...items} />
            </a>
          </Link>
        )}

        {items.items.length > 0 && (
          <button
            className="list-item children-x-2"
            onClick={() => setHidden(!hidden)}
          >
            <Item {...items} />
          </button>
        )}

        {items.items.length > 0 && (
          <ul className={`list-none accordion ${hidden ? "" : "open"}`}>
            {items.items.map((item, k) => (
              <li key={k}>
                <Link href={item.url}>
                  <a className="list-item children-x-2 block">{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};
