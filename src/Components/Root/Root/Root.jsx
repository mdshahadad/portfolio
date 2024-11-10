import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Root = () => {
    const [openClose, setOpenClose] = useState(false);

    return (
        <div className="bg-black h-screen">
            {/* <Navbar showMenu={showMenu} setShowMenu={setShowMenu}></Navbar> */}
            <Navbar setOpenClose={setOpenClose} openClose={openClose}></Navbar>
            
        </div>
    );
};

export default Root;