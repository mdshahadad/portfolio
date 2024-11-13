import { Link } from "react-router-dom";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

const SocialIcons = () => {
    return (
        <div data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="200"
            className="fixed bottom-0 text-[#949090] md:text-[#bfbfbf] xl:-right-14 lg:-right-8 md:-right-5 z-40 md:block hidden"
        >

            <Link to={`https://www.linkedin.com/in/shahadad/`}>
                <IoLogoLinkedin className="text-4xl md:text-5xl hover:text-white z-50"></IoLogoLinkedin>
            </Link>

            <Link to={`https://github.com/mdshahadad`}>
                <IoLogoGithub className="text-4xl md:text-5xl mt-4 hover:text-white"></IoLogoGithub>
            </Link>

            <h4 className="rotate-90 mt-14 text-xl -translate-x-[38px] md:-translate-x-[32px] hover:text-white">Let's connect</h4>
            <div className="w-[2px] rounded-full mt-14 block h-14 md:h-28 md:bg-[#bfbfbf] bg-[#bfbfbf] translate-x-4 md:translate-x-[22px]"></div>
        </div>
    );
};

export default SocialIcons;