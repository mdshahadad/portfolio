import AboutMe from "../Home/AboutMeSection/AboutMe";
import Footer from "../Home/Footer.jsx/Footer";
import SocialIcons from "../Home/SocialIcons/SocialIcons";

const AboutCompo = () => {
    return (
        <div>
            <div className="mt-8">
                <AboutMe></AboutMe>
            </div>
            <SocialIcons></SocialIcons>
            <Footer></Footer>
        </div>
    );
};

export default AboutCompo;