import { FaPaperPlane, FaPenNib } from 'react-icons/fa';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ openClose, setOpenClose }) => {

    const navbarClasses = ({ isActive }) => isActive ? ' text-white font-bold flex items-center gap-2' : 'hover:text-white text-white transition-all duration-500 flex justify-between items-center font-semibold text-black opacity-50';

    const navbar = [
        {
            link: '/', title: "Home"
        },
        {
            link: '/about', title: "About"
        },
        {
            link: '/skill', title: "Skill"
        },
        {
            link: '/project', title: "Project"
        },

        {
            link: '/service', title: "Service"
        },
        {
            link: '/contact', title: "Contact"
        },

    ]


    return (
        <nav className=''>
            <div className='2xl:mx-36 xl:max-28 lg:mx-8 md:flex justify-between items-center pt-4'>
                {/* Logo */}
                <div className='2xl:w-1/12'>
                    <Link to='/'>
                        <h2
                            className="text-white opacity-75 font-bold text-3xl md:text-4xl text-center mb-4 md:mb-0 mt-1 md:mt-0 cursor-pointer">shahadad.</h2>
                    </Link>
                </div>
                {/* Navigation menu */}

                <div className='2xl:w-1/4'>
                    <ul className={`md:flex hidden`}>

                        {
                            navbar.map((menu, index) => (
                                <NavLink
                                    className={navbarClasses}
                                    title={menu?.title}
                                    to={menu?.link}
                                    key={index}
                                    end
                                >
                                    <h3 className={`text-sm md:text-lg origin-left whitespace-pre transition-transform duration-700 xl:mx-4 mx-2
                                    ${openClose === true ? "text-black text-lg" : ""}`}
                                    >{menu?.title}</h3>
                                </NavLink>
                            ))
                        }
                    </ul>
                </div>


                <div className='md:hidden block'>
                    <ul className={`md:bg-transparent bg-white w-full md:pt-0 pt-5 transition-all duration-700 md:h-0 h-screen space-y-4 md:pl-0 px-5 fixed
                            ${openClose === true ? "left-0 top-0 absolute z-10" : "absolute -left-[450px] top-0 z-10"}`}>

                        <div className='flex justify-between items-center'>
                            <div>
                                <Link to='/'>
                                    <h2
                                        className="text-gray-500 font-bold text-3xl md:text-4xl mb-4 md:mb-0 mt-1 md:mt-0 cursor-pointer">shahadad.</h2>
                                </Link>
                            </div>

                            <div className=''>
                                <button><RxCross2 onClick={() => setOpenClose(!openClose)} className='text-5xl md:hidden' /> </button>
                            </div>
                        </div>



                        <div className='space-y-2'>
                            {
                                navbar.map((menu, index) => (
                                    <NavLink
                                        onClick={() => setOpenClose(!openClose)}
                                        className={navbarClasses}
                                        title={menu?.title}
                                        to={menu?.link}
                                        key={index}
                                        end
                                    >
                                        <h3 className={`text-sm md:text-lg origin-left whitespace-pre transition-transform duration-700 mx-4
                                    ${openClose === true ? "text-black text-xl" : ""}`}
                                        >{menu?.title}</h3>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </ul>
                </div>

                {/* Contact Button */}
                <div className="flex justify-between mx-3 md:mx-0 2xl:w-2/12">
                    <div className="text-white text-5xl md:hidden -ml-2">
                        {!openClose &&
                            <HiMenuAlt2 onClick={() => setOpenClose(!openClose)}></HiMenuAlt2>
                        }
                    </div>

                    <div className='flex items-center justify-between md:w-full'>
                        <div className='flex justify-around'>
                            <Link
                                to={`https://blog.shahadad.com/`}
                                target='_blank'
                                className="bg-white md:border-0 text-black opacity-75 hover:opacity-100 px-6 py-2 md:px-8 lg:py-4 md:py-3 rounded-lg font-medium flex items-center lg:text-xl text-lg hover:scale-110 hover:outline-dotted hover:bg-transparent hover:text-white transition-all duration-500 xl:mr-4 mr-2"
                            >Blog <FaPenNib
                                className="ml-2 lg:text-2xl text-xl"
                            ></FaPenNib> </Link>

                            <Link to="/contact">
                                <button
                                    className="bg-white md:border-0 text-black opacity-75 hover:opacity-100 px-6 py-2 md:px-8 lg:py-4 md:py-3 rounded-lg font-medium flex items-center lg:text-xl text-lg hover:scale-110 hover:outline-dotted hover:bg-transparent hover:text-white transition-all duration-500"
                                >Hello <FaPaperPlane
                                    className="ml-2 lg:text-2xl text-xl"
                                ></FaPaperPlane></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;