import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../../Home/Footer.jsx/Footer";
import SocialIcons from "../../../Home/SocialIcons/SocialIcons";

const Root = () => {
    const [openClose, setOpenClose] = useState(false)
    return (
        <div className="bg-black">
            <Navbar openClose={openClose} setOpenClose={setOpenClose}></Navbar>
            {
                !openClose &&
                <Outlet></Outlet>
            }
            <SocialIcons></SocialIcons>
            <Footer></Footer>
        </div>
    );
};

export default Root;