import AboutMe from "./AboutMe";
import SocialIcons from "../Home/SocialIcons/SocialIcons";
import AboutMeTitle from "./AboutMeTitle";

const AboutCompo = () => {
    return (
        <div>
            <div className="mt-8">
                <AboutMeTitle></AboutMeTitle>
                <AboutMe></AboutMe>
            </div>
            <SocialIcons></SocialIcons>
        </div>
    );
};

export default AboutCompo;