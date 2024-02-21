import Navbar from "./Navbar/Navbar";
import './Home.css'
import Banner from "./Banner/Banner";
import BannerText from "./Banner/BannerText";
import SocialIcons from "./SocialIcons/SocialIcons";
import MouseScroll from "./MouseScroll/MouseScroll";
import { useState } from "react";
import AboutMe from "./AboutMeSection/AboutMe";
import Skills from "./MySkillsSection/Skills";
import Services from "./Services/Services";
import Contact from "./ContactSection/Contact";
import Footer from "./Footer.jsx/Footer";
import Projects from "./Projects/Projects";
import FAQ from "./FAQSection/FAQ";
import ServicesTitle from "./Services/ServicesTitle";

const Home = () => {
    const [showMenu, setShowMenu] = useState(false);
    // console.log(showMenu);
    return (
        <div className="bg-black relative">
            <div className="relative z-30">
                <Navbar showMenu={showMenu} setShowMenu={setShowMenu}></Navbar>
                <Banner showMenu={showMenu}></Banner>
                <BannerText showMenu={showMenu}></BannerText>
                {!showMenu &&
                    <>
                        <SocialIcons></SocialIcons>
                        <MouseScroll></MouseScroll>
                    </>
                }
            </div>
            <div className="bg-black h-full">
                {
                    !showMenu &&
                    <>
                        <AboutMe></AboutMe>
                        {/* Service section */}
                        <div className="bg-black mb-20">
                            <div className="relative">
                                <ServicesTitle></ServicesTitle>
                            </div>
                            <h3 className="text-white opacity-65 font-medium text-3xl text-center mt-72 uppercase hover:opacity-100">Choose services you want</h3>
                            <Services></Services>
                        </div>
                        <Skills></Skills>
                        <Projects></Projects>
                        
                        <FAQ></FAQ>
                        <Contact></Contact>
                        <Footer></Footer>
                    </>
                }
            </div>
        </div>
    );
};

export default Home;