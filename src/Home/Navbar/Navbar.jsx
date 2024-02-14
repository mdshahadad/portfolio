import { NavLink } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import '../Home.css'
import { useState } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    console.log(showMenu)
    return (
        <div className="flex justify-between max-w-7xl mx-auto items-center py-2 relative overflow-x-visible">
            <h2 className="text-white opacity-75 font-bold text-4xl">shahadad.</h2>
            <div className="text-white text-5xl md:hidden">
                {
                    !showMenu ?
                        <HiMenuAlt3 onClick={() => setShowMenu(true)}></HiMenuAlt3>
                        :
                        <RxCross2 onClick={() => setShowMenu(false)}></RxCross2>
                }
            </div>
            <div className={`text-white opacity-75 text-center 
            ${showMenu == true ?
                    "nav-res absolute right-0 top-[50px] rounded-l-lg"
                    :
                    "absolute nav-res-hidden right-0 -top-[130px] rounded-l-lg "}
            md:block`}>
                <li><NavLink className="nav-list">Home</NavLink></li>
                <li><NavLink className="nav-list">About</NavLink></li>
                <li><NavLink className="nav-list">Projects</NavLink></li>
                <li><NavLink className="nav-list">Service</NavLink></li>
                <li><NavLink className="nav-list">Contact</NavLink></li>
            </div>
            {/* <button className="bg-white opacity-75 px-8 py-3 rounded-lg font-medium flex items-center text-lg">Hello <FaPaperPlane className="ml-2"></FaPaperPlane></button> */}
        </div>
    );
};

export default Navbar;