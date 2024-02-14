import { NavLink } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import '../Home.css'
import { useState } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    console.log(showMenu)
    return (
        <div className="block md:flex md:justify-between max-w-7xl md:mx-auto items-center py-2 relative overflow-x-visible">
            <h2 className="text-white opacity-75 font-bold text-4xl text-center mb-4 md:mb-0">shahadad.</h2>

            <div className={`text-white opacity-75 text-center 
            ${showMenu == true ?
                    "nav-res absolute -left-2 top-[105px] rounded-r-lg"
                    :
                    "absolute nav-res-hidden -left-[130px] top-[105px] rounded-r-lg "}
            md:block md:top-0`}>
                <li><NavLink className="nav-list">Home</NavLink></li>
                <li><NavLink className="nav-list">About</NavLink></li>
                <li><NavLink className="nav-list">Projects</NavLink></li>
                <li><NavLink className="nav-list">Service</NavLink></li>
                <li><NavLink className="nav-list">Contact</NavLink></li>
            </div>

            <div className="flex justify-between mx-2">
                <div className="text-white text-5xl md:hidden">
                    {
                        !showMenu ?
                            <HiMenuAlt2 onClick={() => setShowMenu(true)}></HiMenuAlt2>
                            :
                            <RxCross2 onClick={() => setShowMenu(false)}></RxCross2>
                    }
                </div>
                <button className="bg-white opacity-75 px-8 py-3 rounded-lg font-medium flex items-center text-lg">Hello <FaPaperPlane className="ml-2"></FaPaperPlane></button>
            </div>
        </div>
    );
};

export default Navbar;