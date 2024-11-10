import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="bg-black h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;