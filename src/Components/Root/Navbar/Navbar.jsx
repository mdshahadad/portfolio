import { Link, NavLink } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import '../../Home/Home.css'
// import { useState } from "react";

const Navbar = ({ showMenu, setShowMenu }) => {

    const navbarClasses = ({ isActive }) => isActive ? ' text-blue-400 font-bold flex items-center gap-2' : 'hover:text-white text-white transition-all duration-700 flex justify-between items-center gap-2 font-semibold text-black';

    const navbar = [
        {
            link: '/', title: "Home"
        },
        {
            link: '/projects', title: "Projects"
        },
        {
            link: '/about', title: "About"
        },
        {
            link: '/service', title: "Service"
        },
        {
            link: '/contact', title: "Contact"
        },

    ]

    return (
        <div className="md:flex md:justify-between md:items-center py-1 lg:max-w-6xl lg:mx-auto">

            <Link to='/'>
                <h2
                    className="text-white opacity-75 font-bold text-3xl md:text-4xl text-center mb-4 md:mb-0 mt-1 md:mt-0 cursor-pointer">shahadad.</h2>
            </Link>

            <div className="md:flex md:justify-center md:items-center">

                <div className={`text-white opacity-75 text-center
                md:mr-24 lg:mr-60`}>

                    {/* <ul className='lg:flex justify-center gap-8 space-y-2'>
                        {
                            navbar.map((nav, index) => (
                                <NavLink
                                    onClick={() => setShowMenu(!showMenu)}
                                    className={navbarClasses}
                                    title={nav?.title}
                                    to={nav?.link}
                                    key={index}
                                    end
                                >
                                    {nav?.icon}
                                    <h3 className={` text-sm md:text-lg origin-left whitespace-pre transition-transform duration-700`}
                                    >{nav?.title}</h3>
                                </NavLink>
                            ))
                        }
                    </ul> */}

                    <ul onClick={() => setShowMenu(false)}
                        className={`md:flex nav-list md:relative top-[112px] md:top-0 bg-gray-800 transition-all md:bg-transparent z-50 md:text-white w-full ${!showMenu ? "hidden" : " h-fit md:py-0 py-12 text-lg font-medium transition-all"} `}>

                        {
                            navbar.map((nav, index) => (
                                <NavLink
                                    onClick={() => setShowMenu(!showMenu)}
                                    className={navbarClasses}
                                    title={nav?.title}
                                    to={nav?.link}
                                    key={index}
                                    end
                                >
                                    {nav?.icon}
                                    <h3 className={`text-sm md:text-lg origin-left whitespace-pre transition-transform duration-700 mx-4`}
                                    >{nav?.title}</h3>
                                </NavLink>
                            ))
                        }

                        {/* <li><NavLink className={`text-white`} to="/">Home</NavLink></li>
                        <li><NavLink className={`text-white`} to="/about">About</NavLink></li>
                        <li><NavLink className={`text-white`} to="/projects">Projects</NavLink></li>
                        <li><NavLink className={`text-white`} to="/services">Service</NavLink></li>
                        <li><NavLink className={`text-white`} to="/contact">Contact</NavLink></li> */}

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

                    <Link to="/contact">
                        <button
                            className="bg-white md:border-0 text-black opacity-75 hover:opacity-100 px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium flex items-center lg:text-xl text-lg hover:scale-110 hover:outline-dotted hover:bg-transparent hover:text-white transition-all"
                        >Hello <FaPaperPlane className="ml-2 lg:text-2xl text-xl"></FaPaperPlane></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;