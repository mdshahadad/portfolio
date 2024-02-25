import AboutMeText from "./AboutMeText";
import AboutMeTitle from "./AboutMeTitle";

const AboutMe = () => {
    return (
        <div className="h-screen relative overflow-y-hidden">
            <AboutMeTitle></AboutMeTitle>
            <AboutMeText></AboutMeText>
        </div>
    );
};

export default AboutMe;