import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet
import AppNavbar from "./Navbar"; // Import Navbar
import Footer from "./Footer"; // Import Footer

const Layout = () => {
  return (
    <>
      <AppNavbar />  {/* This will render Navbar */}
      <main>
        <Outlet /> {/* This will render the matched child route */}
      </main>
      <Footer />  {/* This will render Footer */}
    </>
  );
};

export default Layout;