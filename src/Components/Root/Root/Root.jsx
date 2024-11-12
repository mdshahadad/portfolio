import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
    const [openClose, setOpenClose] = useState(false)
    return (
        <div className="bg-black">
            <Navbar openClose={openClose} setOpenClose={setOpenClose}></Navbar>
            {
                !openClose &&
                <Outlet></Outlet>
            }
        </div>
    );
};

export default Root;