import Banner from "./Banner/Banner";
import BannerText from "./Banner/BannerText";
import SocialIcons from "./SocialIcons/SocialIcons";
import MouseScroll from "./MouseScroll/MouseScroll";
import AboutMe from "./AboutMeSection/AboutMe";
import Skills from "./MySkillsSection/Skills";
import Services from "./Services/Services";
import Contact from "./ContactSection/Contact";
import Footer from "./Footer.jsx/Footer";
import Projects from "./Projects/Projects";
import FAQ from "./FAQSection/FAQ";
import ServicesTitle from "./Services/ServicesTitle";
import './Home.css'

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <BannerText></BannerText>
            <SocialIcons></SocialIcons>
            <MouseScroll></MouseScroll>
            <AboutMe></AboutMe>
            <div className="relative">
                <ServicesTitle></ServicesTitle>
            </div>
            <h3 className="text-white opacity-65 font-medium text-xl md:text-3xl text-center mt-28 md:mt-72 uppercase hover:opacity-100">Choose services you want</h3>
            <Services></Services>
            <Skills></Skills>
            <Projects></Projects>
            <FAQ></FAQ>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;