import { NavLink } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import '../Home.css'
import { useState } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    console.log(showMenu);

    return (
        <div className="md:flex justify-between items-center max-w-7xl lg:mx-auto py-1">

            <h2 className="text-white opacity-75 font-bold text-4xl text-center mb-4 md:mb-0">shahadad.</h2>

            <div className="flex items-center">

                <div className={`text-white opacity-75 text-center md:mr-24 lg:mr-60`}>
                    <ul className={`md:flex nav-list absolute md:relative top-[116px] md:top-0 bg-white md:bg-transparent text-black md:text-white px-40 md:px-0 
                    ${!showMenu ?
                            "hidden"
                            :
                            ""}
                            `}>
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink>Projects</NavLink></li>
                        <li><NavLink>Service</NavLink></li>
                        <li><NavLink>Contact</NavLink></li>
                    </ul>
                </div>

                {/* ----------- Responsive Style ----------- */}
                <div className="flex justify-between mx-2 md:mx-0">
                    <div className="text-white text-5xl md:hidden">
                        {!showMenu ?
                            <HiMenuAlt2 onClick={() => setShowMenu(true)}></HiMenuAlt2>
                            :
                            <RxCross2 onClick={() => setShowMenu(false)}></RxCross2>
                        }
                    </div>

                    <button className="bg-white opacity-75 px-8 py-3 rounded-lg font-medium flex items-center text-lg ml-56 md:ml-0">Hello <FaPaperPlane className="ml-2"></FaPaperPlane></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;