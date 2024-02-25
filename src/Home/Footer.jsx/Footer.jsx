import { TbDeviceImacCode, TbMailShare } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaHeadphones, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { LuCopyright } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { GoFileDirectoryFill } from "react-icons/go";



const Footer = () => {
    return (
        <div className="w-full bg-white opacity-75 text-center py-20 mt-12">
            <div className="md:max-w-4xl md:mx-auto">
                <div className="mb-8 md:mb-16">
                    <h2 className="opacity-75 font-bold text-4xl md:text-7xl text-center mb-2 mt-1 md:mt-0 hover:opacity-100">shahadad.</h2>
                    <p className="font-medium text-xs md:text-xl">A Junior Web Developer In Town</p>
                </div>
                <div className="md:flex md:justify-between md:mt-5">
                    <div>
                        <ul className="flex justify-center md:justify-between font-medium text-lg">
                            <li className="mx-2 md:mr-4 text-xl md:text-2xl">
                                <div className="flex justify-center">
                                    <GoFileDirectoryFill className="text-5xl mb-2 hidden md:block" />
                                </div>
                                <NavLink to='/projects'>Projects</NavLink>
                            </li>
                            <li className="mx-2 md:mr-4 text-xl md:text-2xl">
                                <div className="flex justify-center">
                                    <TbDeviceImacCode className="text-5xl mb-2 hidden md:block" />
                                </div>
                                <NavLink to='/services'>Services</NavLink>
                            </li>
                            <li className="mx-2 md:mr-4 text-xl  md:text-2xl">
                                <div className="flex justify-center">
                                    <FaHeadphones className="text-5xl mb-2 hidden md:block" />
                                </div>
                                <NavLink to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex justify-center md:justify-normal mt-8 md:mt-0">
                            <div>
                                <Link to={`https://www.linkedin.com/in/shahadad/`}>
                                    <IoLogoLinkedin className="text-4xl md:text-5xl md:mr-3 mx-2 cursor-pointer hover:text-[#0A6BCA]" />
                                </Link>
                            </div>
                            <div>
                                <Link to={`https://github.com/mdshahadad`}>
                                    <IoLogoGithub className="text-4xl md:text-5xl md:mr-3 mx-2 cursor-pointer" />
                                </Link>
                            </div>
                            <div>
                                <FaTelegram className="text-4xl md:text-5xl md:mr-3 mx-2 cursor-pointer hover:text-[#2a9cd4]" />
                            </div>
                            <div>
                                <FaWhatsapp className="text-4xl md:text-5xl md:mr-3 mx-2 cursor-pointer hover:text-[#2bb741]" />
                            </div>
                            <div className="">
                                <TbMailShare className="text-4xl md:text-5xl md:mr-3 mx-2 cursor-pointer hover:text-[#ea3f41]" />
                            </div>
                        </div>

                        <h4 className="text-center font-medium text-lg md:text-xl mt-4 flex items-center justify-center">Say Hello To Me <FaPaperPlane className="ml-2" /></h4>
                    </div>
                </div>
                <div className="mt-12 font-medium text-base md:text-xl flex justify-center">
                    <p className="flex items-center">
                        <LuCopyright className="mr-2" />
                        Copyright Mohammad Shahadad Hossain
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;