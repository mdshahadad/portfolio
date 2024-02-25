import { Outlet } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import { useState } from "react";

const Root = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="bg-black">
            <div className="z-30">
                <Navbar showMenu={showMenu} setShowMenu={setShowMenu}></Navbar>
            </div>
            {
                !showMenu &&
                <Outlet></Outlet>
            }
        </div>
    );
};

export default Root;