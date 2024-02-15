import { NavLink } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import '../Home.css'
// import { useState } from "react";

const Navbar = ({ showMenu, setShowMenu }) => {
    const handleHello = () => {
        console.log('Cliked')
    }

    return (
        <div className="md:flex justify-between items-center max-w-7xl lg:mx-auto py-1">

            <h2 className="text-white opacity-75 font-bold text-3xl md:text-4xl text-center mb-4 md:mb-0 mt-1 md:mt-0">shahadad.</h2>

            <div className="md:flex md:items-center">

                <div className={`text-white opacity-75 text-center
                md:mr-24 lg:mr-60`}>
                    <ul className={`md:flex nav-list absolute md:relative top-[116px] md:top-0 bg-white text-black md:bg-transparent
                     md:text-white w-full
                    ${!showMenu ?
                            "hidden"
                            :
                            ""
                        }
                            `}>
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink>Projects</NavLink></li>
                        <li><NavLink>Service</NavLink></li>
                        <li><NavLink>Contact</NavLink></li>
                    </ul>
                </div>

                {/* ----------- Responsive Style ----------- */}
                <div className="flex justify-between mx-3 md:mx-0">
                    <div className="text-white text-5xl md:hidden -ml-2">
                        {!showMenu ?
                            <HiMenuAlt2 onClick={() => setShowMenu(true)}></HiMenuAlt2>
                            :
                            <RxCross2 onClick={() => setShowMenu(false)}></RxCross2>
                        }
                    </div>

                    <button onClick={handleHello}
                        className="bg-white opacity-75 hover:opacity-75 px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium flex items-center text-lg"
                    >Hello <FaPaperPlane className="ml-2"></FaPaperPlane></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;