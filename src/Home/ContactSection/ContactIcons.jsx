import { TbMailShare } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";



const ContactIcons = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex justify-between max-w-6xl mx-auto">
            <div className="bg-white opacity-75 hover:opacity-100 hover:scale-105 transition-all px-8 py-5 rounded-xl w-64 cursor-pointer icon-card">
                <div className="flex justify-center">
                    <IoLogoLinkedin className="text-6xl mb-2 icon-color" />
                </div>
                <div className="text-center">
                    <h4 className="text-center font-semibold text-lg">LinkedIn</h4>
                    <p>in/shahadad/</p>
                    <div className="flex justify-center">
                        <Link to='https://www.linkedin.com/in/shahadad/'>
                            <button className="flex items-center text-lg cursor-pointer px-8 py-2 rounded-full bg-black text-white mt-8 hover:font-medium hover:bg-transparent border-2 border-black hover:text-black" >Say Hello <FaPaperPlane className="ml-2 text-xl" /></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white opacity-75 hover:opacity-100 hover:scale-105 transition-all px-8 py-5 rounded-xl w-64 cursor-pointer icon-card">
                <div className="flex justify-center">
                    <FaWhatsapp className="text-6xl mb-2 whatsapp" />
                </div>
                <div className="text-center">
                    <h4 className="text-center font-semibold text-lg">Whatsapp</h4>
                    <p>01690-103374</p>
                    <div className="flex justify-center">
                        <Link>
                            <button className="flex items-center text-lg cursor-pointer px-8 py-2 rounded-full bg-black text-white mt-8 hover:font-medium hover:bg-transparent border-2 border-black hover:text-black" >Say Hello <FaPaperPlane className="ml-2 text-xl" /></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white opacity-75 hover:opacity-100 hover:scale-105 transition-all px-8 py-5 rounded-xl w-64 cursor-pointer icon-card">
                <div className="flex justify-center">
                    <FaTelegram className="text-6xl mb-2 telegram" />
                </div>
                <div className="text-center">
                    <h4 className="text-center font-semibold text-lg">Telegram</h4>
                    <p>mohammadshahadad</p>
                    <div className="flex justify-center">
                        <Link>
                            <button className="flex items-center text-lg cursor-pointer px-8 py-2 rounded-full bg-black text-white mt-8 hover:font-medium hover:bg-transparent border-2 border-black hover:text-black" >Say Hello <FaPaperPlane className="ml-2 text-xl" /></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white opacity-75 hover:opacity-100 hover:scale-105 transition-all px-8 py-5 rounded-xl w-64 cursor-pointer icon-card">
                <div className="flex justify-center">
                    <TbMailShare className="text-6xl mb-2 email" />
                </div>
                <div className="text-center">
                    <h4 className="text-center font-semibold text-lg">Email</h4>
                    <p>hello@shahadad.com</p>
                    <div className="flex justify-center">
                        <Link>
                            <button className="flex items-center text-lg cursor-pointer px-8 py-2 rounded-full bg-black text-white mt-8 hover:font-medium hover:bg-transparent border-2 border-black hover:text-black" >Say Hello <FaPaperPlane className="ml-2 text-xl" /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactIcons;