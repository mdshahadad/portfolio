import AboutMe from "./AboutMe";
import AboutMeTitle from "./AboutMeTitle";

const AboutCompo = () => {
    return (
        <div className="2xl:mt-16 xl:mt-36 lg:mt-32 md:mt-10 mt-0">
            <AboutMeTitle></AboutMeTitle>
            <AboutMe></AboutMe>
        </div>
    );
};

export default AboutCompo;