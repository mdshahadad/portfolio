import { useState } from "react";
// import Navbar from "../Navbar/Navbar";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="bg-black h-screen">
            {/* <Navbar></Navbar> */}
            {/* <Navbar></Navbar> */}
            <Navbar></Navbar>
            {/* {
                !showMenu &&
                <Outlet></Outlet>
            } */}

            {/* <div className="z-30">
                <Navbar showMenu={showMenu} setShowMenu={setShowMenu}></Navbar>
            </div>
            <Outlet></Outlet>
            {
                !showMenu &&
                <Outlet></Outlet>
            } */}
        </div>
    );
};

export default Root;