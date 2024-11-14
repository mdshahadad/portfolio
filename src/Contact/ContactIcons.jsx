import { TbMailShare } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";



const ContactIcons = () => {
    return (
        <div className="flex justify-center md:block">
            <div
                data-aos="fade-up"
                data-aos-duration="2500"
                data-aos-delay="500"
                className="grid xl:grid-cols-4 lg:grid-cols-3 md:max-w-6xl md:mx-auto lg:gap-y-10">
                <div className="flex justify-center">
                    <div className="bg-white opacity-75 hover:opacity-100 hover:scale-110 transition-all duration-700 px-8 py-5 rounded-xl md:w-64 cursor-pointer icon-card mb-5 md:mb-0 w-full">

                        <div className="flex justify-center">
                            <IoLogoLinkedin className="text-6xl mb-2 icon-color" />
                        </div>
                        <div className="text-center">
                            <h4 className="text-center font-semibold text-lg">LinkedIn</h4>
                            <p>in/shahadad/</p>
                            <div className="flex justify-center">
                                <Link to='https://www.linkedin.com/in/shahadad/'>
                                    <a
                                        href="https://www.linkedin.com/in/shahadad/"
                                        target="_blank"
                                        className="flex items-center text-lg cursor-pointer px-8 py-2 rounded-full bg-black text-white mt-8 hover:bg-transparent border-2 border-black transition-all duration-700 hover:text-black" >Say Hello <FaPaperPlane className="ml-2 text-xl" /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="bg-white opacity-75 hover:opacity-100 hover:scale-110 duration-700 transition-all px-8 py-5 rounded-xl w-64 cursor-pointer icon-card mb-5 md:mb-0">
                        <div className="flex justify-center">
                            <FaWhatsapp className="text-6xl mb-2 whatsapp" />
                        </div>
                        <div className="text-center">
                            <h4 className="text-center font-semibold text-lg">Whatsapp</h4>
                            <p>01690-103374</p>
                            <div className="flex justify-center">
                                <Link
                                >
                                    <a
                                        href=""
                                        className="flex items-center text-lg cursor-pointer px-8 py-2 rounded-full bg-black text-white mt-8 hover:bg-transparent border-2 border-black transition-all duration-700 hover:text-black" >Say Hello <FaPaperPlane className="ml-2 text-xl" /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="bg-white opacity-75 hover:opacity-100 hover:scale-110 duration-700 transition-all px-8 py-5 rounded-xl w-64 cursor-pointer icon-card mb-5 md:mb-0">
                        <div className="flex justify-center">
                            <FaTelegram className="text-6xl mb-2 telegram" />
                        </div>
                        <div className="text-center">
                            <h4 className="text-center font-semibold text-lg">Telegram</h4>
                            <p>mohammadshahadad</p>
                            <div className="flex justify-center">
                                <Link to={`https://t.me/mohammadshahadad`}>
                                    <a
                                        href=""
                                        className="flex items-center text-lg cursor-pointer px-8 py-2 rounded-full bg-black text-white mt-8  hover:bg-transparent border-2 border-black transition-all duration-700 hover:text-black" >Say Hello <FaPaperPlane className="ml-2 text-xl" /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center xl:col-span-1 lg:col-span-3">
                    <div className="bg-white opacity-75 hover:opacity-100 hover:scale-110 duration-700 transition-all px-8 py-5 rounded-xl w-64 cursor-pointer icon-card mb-5 md:mb-0 lg:col-span-3">
                        <div className="flex justify-center">
                            <TbMailShare className="text-6xl mb-2 email" />
                        </div>
                        <div className="text-center">
                            <h4 className="text-center font-semibold text-lg">Email</h4>
                            <p>hello@shahadad.com</p>
                            <div className="flex justify-center">
                                <a
                                    href="mailto:hello@shahadad.com"
                                    target="_blank"
                                    className="flex items-center text-lg cursor-pointer px-8 py-2 rounded-full bg-black text-white mt-8 hover:bg-transparent border-2 border-black transition-all duration-700 hover:text-black" >Say Hello <FaPaperPlane className="ml-2 text-xl" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactIcons;