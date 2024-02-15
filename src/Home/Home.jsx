import Navbar from "./Navbar/Navbar";
import './Home.css'
import Banner from "./Banner/Banner";
import BannerText from "./Banner/BannerText";
import SocialIcons from "./SocialIcons/SocialIcons";
import MouseScroll from "./MouseScroll/MouseScroll";
import { useState } from "react";
import AboutMe from "./AboutMeSection/AboutMe";
import Skills from "./MySkillsSection/Skills";

const Home = () => {
    const [showMenu, setShowMenu] = useState(false);
    console.log(showMenu);
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
            <div className="">
                {
                    !showMenu &&
                    <>
                        <AboutMe></AboutMe>
                        <Skills></Skills>
                    </>
                }
            </div>
        </div>
    );
};

export default Home;