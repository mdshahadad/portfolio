import { Link } from "react-router-dom";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";

const SocialIcons = () => {
    return (
        <div className="fixed bottom-0 text-white -right-5">
            <Link to={`https://www.linkedin.com/in/shahadad/`}>
                <IoLogoLinkedin className="text-4xl"></IoLogoLinkedin>
            </Link>
            <Link to={`https://github.com/mdshahadad`}>
                <IoLogoGithub className="text-4xl mt-4"></IoLogoGithub>
            </Link>
            <h4 className="rotate-90 mt-14 text-xl -translate-x-8 ">Lets connect</h4>
            <div className="w-[2px] rounded-full mt-14 block h-28 bg-white translate-x-5"></div>
        </div>
    );
};

export default SocialIcons;