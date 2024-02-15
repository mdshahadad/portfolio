import { Link } from "react-router-dom";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";

const SocialIcons = () => {
    return (
        <div data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="200"
            className="fixed bottom-0 text-[#949090] md:text-[#bfbfbf] -right-14 md:-right-5 z-50">

            <Link to={`https://www.linkedin.com/in/shahadad/`}>
                <IoLogoLinkedin className="text-4xl hover:text-white"></IoLogoLinkedin>
            </Link>

            <Link to={`https://github.com/mdshahadad`}>
                <IoLogoGithub className="text-4xl mt-4 hover:text-white"></IoLogoGithub>
            </Link>
            
            <h4 className="rotate-90 mt-14 text-xl -translate-x-[37px] hover:text-white">Let's connect</h4>
            <div className="w-[2px] rounded-full mt-14 md:block h-28 md:bg-[#bfbfbf] hidden translate-x-[18px]"></div>
        </div>
    );
};

export default SocialIcons;