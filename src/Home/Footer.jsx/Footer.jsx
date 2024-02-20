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
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <h2 className="opacity-75 font-bold text-4xl md:text-7xl text-center mb-8 md:mb-2 mt-1 md:mt-0 hover:opacity-100">shahadad.</h2>
                    <p className="font-medium text-xl up">A Junior Web Developer In Town</p>
                </div>
                <div className="flex justify-between mt-5">
                    <div>
                        <ul className="flex justify-between font-medium text-lg">
                            <li className="mr-4 text-2xl">
                                <div className="flex justify-center">
                                    <GoFileDirectoryFill className="text-5xl mb-2" />
                                </div>
                                <NavLink to='/projects'>Projects</NavLink></li>
                            <li className="mr-4 text-2xl">
                                <div className="flex justify-center">
                                    <TbDeviceImacCode className="text-5xl mb-2" />
                                </div>
                                <NavLink to='/services'>Services</NavLink></li>
                            <li className="mr-4  text-2xl">
                                <div className="flex justify-center">
                                    <FaHeadphones className="text-5xl mb-2" />
                                </div>
                                <NavLink to='/contact'>Contact</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex">
                            <div>
                                <Link to={`https://www.linkedin.com/in/shahadad/`}>
                                    <IoLogoLinkedin className="text-5xl mr-3 cursor-pointer hover:text-[#0A6BCA]" />
                                </Link>
                            </div>
                            <div>
                                <Link to={`https://github.com/mdshahadad`}>
                                    <IoLogoGithub className="text-5xl mr-3 cursor-pointer" />
                                </Link>
                            </div>
                            <div>
                                <FaTelegram className="text-5xl mr-3 cursor-pointer hover:text-[#2a9cd4]" />
                            </div>
                            <div>
                                <FaWhatsapp className="text-5xl mr-3 cursor-pointer hover:text-[#2bb741]" />
                            </div>
                            <div>
                                <TbMailShare className="text-5xl mr-3 cursor-pointer hover:text-[#ea3f41]" />
                            </div>
                        </div>

                        <h4 className="text-center font-medium text-xl mt-4 flex items-center justify-center">Say Hello To Me <FaPaperPlane className="ml-2" /></h4>
                    </div>
                </div>
                <div className="mt-12 font-medium text-xl flex justify-center">
                    <p className="flex items-center"> <LuCopyright className="mt-1 mr-2" />
                        Copyright Mohammad Shahadad Hossain</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;