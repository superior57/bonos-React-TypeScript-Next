import React, { useState, useEffect } from "react";
import { Settings } from "react-feather";
import Link from "next/link";
import * as Icon from "react-feather";
import { CircularBadge } from "../Badge";

export const ProfileDropDown = () => {
  const [hidden, setHidden] = useState(true);

  const buttonRef = React.createRef<HTMLButtonElement>();
  const dropdownRef = React.createRef<HTMLDivElement>();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        hidden ||
        buttonRef.current.contains(event.target) ||
        dropdownRef.current.contains(event.target)
      ) {
        return false;
      }
      setHidden(!hidden);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, buttonRef]);

  const items = [
    {
      url: "/",
      icon: <Icon.Mail size={16} />,
      name: "Inbox",
      badge: true,
      badgeNumber: 2,
      badgeColor: "red",
    },
    {
      url: "/",
      icon: <Icon.Star size={16} />,
      iconColor: "default",
      name: "Messages",
      badge: true,
      badgeNumber: 3,
      badgeColor: "indigo",
    },
    {
      url: "/extras/user-profile",
      icon: <Icon.User size={16} />,
      name: "Profile",
      badge: false,
    },
    {
      url: "/pages/logout",
      icon: <Icon.LogIn size={16} />,
      name: "Logout",
      badge: false,
    },
  ];
  return (
    <div className="flex items-center justify-center h-16 w-8 mx-2">
      <div className="relative">
        <button
          ref={buttonRef}
          className="flex h-16 w-8 rounded-full ml-2 relative"
          onClick={() => setHidden(!hidden)}
        >
          <span className="absolute top-0 left-0 pt-4">
            <img
              className="h-8 w-8 rounded-full shadow"
              src="/assets/m1.png"
              alt={"Shoaib"}
            />
            <span
              className="absolute badge badge-sm badge-circle badge-red"
              style={{ top: 10, right: -4 }}
            >
              2
            </span>
          </span>
        </button>
        <div
          ref={dropdownRef}
          className={`navbar-dropdown dropdown ${
            "ltr" === "ltr" ? "dropdown-right" : "dropdown-left"
          } w-48 ${hidden ? "" : "open"}`}
        >
          <div className="w-48 dropdown-content">
            <div className="navbar-dropdown-title dropdown-title">
              My account
            </div>
            <div className="flex flex-col w-full">
              {items.map((item, i) => (
                <Link href="/" key={i}>
                  <a className="w-full flex items-center justify-start px-4 py-2 text-sm children-x-2">
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="ltr:ml-auto rtl:mr-auto">
                        <CircularBadge size="sm" color={item.badgeColor}>
                          {item.badgeNumber}
                        </CircularBadge>
                      </span>
                    )}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
