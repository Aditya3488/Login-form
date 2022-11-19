import { CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Contact from "./Contact";
import Home from "./Home";
const Layout = (props) => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Outlet />
    </>
  );
};
export default Layout;
