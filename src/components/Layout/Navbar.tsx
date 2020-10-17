import React, { useState, useEffect } from "react";
import { Settings, Menu, Sun, Moon } from "react-feather";
import Link from "next/link";
import { ProfileDropDown } from "./DropDownWidget";
import { Search } from "./Search";
import { useSelector, useDispatch } from "react-redux";
import { useTypedSelector, AppDispatch } from "src/store";
import { darkTheme, lightTheme, setCollapsed } from "src/store/theme";
import { RootState } from "src/store";

export const Navbar = () => {
  const theme = useTypedSelector((state : RootState) => state.theme);
  const state = useSelector((state: RootState) => state);

  const { collapsed } = state.theme.palettes;
  // const [currentheme, setTheme] = useState("light");
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") dispatch(lightTheme(""));
    else dispatch(darkTheme(""));
  }, []);
  const toggleTheme = () => {
    // const currentTheme = localStorage.getItem("theme");
    if (theme.name === "light") {
      dispatch(darkTheme(""));
      // setTheme("dark");
    } else {
      dispatch(lightTheme(""));
      // setTheme("light");
    }
  };
  const toggleCollapsed = () => {
    // console.log(collapsed);
    dispatch( setCollapsed(!collapsed));
  };
  return (
    <div className="navbar navbar-1">
      <div className="navbar-inner w-full flex items-center justify-start">
        <button className="mx-4" onClick={toggleCollapsed}>
          <Menu size={20} />
        </button>
        <Search />
        <span className="ltr:ml-auto rtl:mr-auto"></span>
        <ProfileDropDown />
        {/* <Link href="/pages/login-1">
              <a className="btn btn-default flex lg:hidden">Logout</a>
            </Link> */}

        <Link href="/pages/login">
          <a className="btn btn-default hidden lg:flex">Logout</a>
        </Link>
        <button
          className="btn-transparent flex items-center justify-center h-16 w-8 pl-2 lg:pl-0"
          onClick={toggleTheme}
        >
          {theme.name === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="btn-transparent flex items-center justify-center h-16 w-8 pl-2 lg:pl-0">
          <Settings size={18} />
        </button>
      </div>
    </div>
  );
};
