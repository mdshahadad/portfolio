import MouseScroll from "./MouseScroll/MouseScroll";
import Skills from "./MySkillsSection/Skills";
import Contact from "./ContactSection/Contact";
import Footer from "./Footer.jsx/Footer";
import Projects from "./Projects/Projects";
import './Home.css'

const Home = () => {
    return (
        <div className="">
            <MouseScroll></MouseScroll>
            <Skills></Skills>
            <Projects></Projects>
            {/* <FAQ></FAQ> */}
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;