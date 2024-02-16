import { TbMailShare } from "react-icons/tb";
import { BsWhatsapp } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";


const ContactIcons = () => {
    return (
        <div className="flex justify-between max-w-4xl mx-auto">
            <div className="bg-white opacity-75 hover:opacity-100 hover:scale-105 transition-all px-8 py-5 rounded-xl w-60 cursor-pointer">
                <div className="flex justify-center">
                    <IoLogoLinkedin className="text-6xl mb-2" />
                </div>
                <div className="text-center">
                    <h4 className="text-center font-semibold text-lg">LinkedIn</h4>
                    <p>in/shahadad/</p>
                    <p className="flex items-center justify-center mt-8">Say Hello <FaPaperPlane className="ml-2 text-xl" /></p>
                </div>
            </div>
            <div className="bg-white opacity-75 hover:opacity-100 hover:scale-105 transition-all px-8 py-5 rounded-xl w-60 cursor-pointer">
                <div className="flex justify-center">
                    <BsWhatsapp className="text-6xl mb-2" />
                </div>
                <div className="text-center">
                    <h4>Whatsapp</h4>
                    <p>01690-103374</p>
                    <p className="flex items-center justify-center mt-8">Say Hello <FaPaperPlane className="ml-2 text-xl" /></p>
                </div>
            </div>
            <div className="bg-white opacity-75 hover:opacity-100 hover:scale-105 transition-all px-8 py-5 rounded-xl w-60 cursor-pointer">
                <div className="flex justify-center">
                    <TbMailShare className="text-6xl mb-2" />
                </div>
                <div className="text-center">
                    <h4>Email</h4>
                    <p>hello@shahadad.com</p>
                    <p className="flex items-center justify-center mt-8">Say Hello <FaPaperPlane className="ml-2 text-xl" /></p>
                </div>
            </div>
        </div>
    );
};

export default ContactIcons;