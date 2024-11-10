import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { HiMenuAlt2 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ setOpenClose, openClose }) => {
    const navbarClasses = ({ isActive }) => isActive ? ' text-white font-bold flex items-center gap-2' : 'hover:text-white text-white transition-all duration-500 flex justify-between items-center font-semibold text-black opacity-50';

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
        <nav>
            <div className='2xl:mx-36 xl:max-28 lg:mx-8 flex justify-between items-center pt-2'>
                {/* Logo */}
                <div>
                    <Link to='/'>
                        <h2
                            className="text-white opacity-75 font-bold text-3xl md:text-4xl text-center mb-4 md:mb-0 mt-1 md:mt-0 cursor-pointer">shahadad.</h2>
                    </Link>
                </div>

                {/* Navigation menu */}

                <div>
                    <ul className='flex items-center'>
                        {
                            navbar.map((menu, index) => (
                                <NavLink
                                    onClick={setOpenClose(!openClose)}
                                    className={navbarClasses}
                                    title={menu?.title}
                                    to={menu?.link}
                                    key={index}
                                    end
                                >
                                    <h3 className={`text-sm md:text-lg origin-left whitespace-pre transition-transform duration-700 mx-4`}
                                    >{menu?.title}</h3>
                                </NavLink>
                            ))
                        }
                    </ul>
                </div>

                {/* Contact Button */}
                <div className="flex justify-between mx-3 md:mx-0">
                    <div className="text-white text-5xl md:hidden -ml-2">
                        {!openClose ?
                            <HiMenuAlt2 onClick={() => setOpenClose(!openClose)}></HiMenuAlt2>
                            :
                            <RxCross2 onClick={() => setOpenClose(!openClose)}></RxCross2>
                        }
                    </div>

                    <Link to="/contact">
                        <button
                            className="bg-white md:border-0 text-black opacity-75 hover:opacity-100 px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium flex items-center lg:text-xl text-lg hover:scale-110 hover:outline-dotted hover:bg-transparent hover:text-white transition-all"
                        >Hello <FaPaperPlane className="ml-2 lg:text-2xl text-xl"></FaPaperPlane></button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;