import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    name: "light",
    colors: [
      "gray",
      "red",
      "orange",
      "yellow",
      "green",
      "teal",
      "blue",
      "indigo",
      "purple",
      "pink",
    ],
    palettes: {
      background: "white",
      logo: "white",
      leftSidebar: "white",
      rightSidebar: "white",
      navbar: "white",
      topNavigation: "white",
      collapsed: false
    },
    leftSidebar: {
      showButtonText: true,
      showSectionTitle: true,
      showLogo: true,
      showCard: true,
      showAccountLinks: false,
      showProjects: true,
      showTags: true,
      card: 1,
    },
  },
  reducers: {
    lightTheme: (state, action) => {
      state.palettes = {
        background: "white",
        logo: "bg-indigo-700",
        leftSidebar: "bg-gray-100",
        rightSidebar: "white",
        navbar: "bg-gray-100",
        topNavigation: "bg-gray-100",
        collapsed: false
      };
      state.name = "light";
      localStorage.setItem("theme", "light");
    },

    darkTheme: (state, action) => {
      state.palettes = {
        background: "bg-gray-900",
        logo: "bg-gray-800",
        leftSidebar: "bg-gray-800",
        rightSidebar: "white",
        navbar: "bg-gray-900",
        topNavigation: "bg-gray-900",
        collapsed: false
      };
      state.name = "dark";
      localStorage.setItem("theme", "dark");
    },
    setCollapsed: (state, action) => {
      state.palettes.collapsed = action.payload;
    }
  },
});

export const { darkTheme, lightTheme, setCollapsed } = themeSlice.actions;
