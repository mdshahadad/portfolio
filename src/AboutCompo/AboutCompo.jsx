import AboutMe from "../Home/AboutMeSection/AboutMe";
import Footer from "../Home/Footer.jsx/Footer";
import Navbar from "../Home/Navbar/Navbar";

const AboutCompo = () => {
    return (
        <div className="bg-black">
            <Navbar></Navbar>
            <AboutMe></AboutMe>
            <Footer></Footer>
        </div>
    );
};

export default AboutCompo;