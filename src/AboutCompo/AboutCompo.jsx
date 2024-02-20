import AboutMe from "../Home/AboutMeSection/AboutMe";
import Footer from "../Home/Footer.jsx/Footer";
import Navbar from "../Home/Navbar/Navbar";
import SocialIcons from "../Home/SocialIcons/SocialIcons";

const AboutCompo = () => {
    return (
        <div className="bg-black">
            <Navbar></Navbar>
            <AboutMe></AboutMe>
            <SocialIcons></SocialIcons>
            <Footer></Footer>
        </div>
    );
};

export default AboutCompo;