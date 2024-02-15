import AboutMeText from "./AboutMeText";
import AboutMeTitle from "./AboutMeTitle";

const AboutMe = () => {
    return (
        <div className="h-screen bg-black relative overflow-y-hidden">
            <AboutMeTitle></AboutMeTitle>
            <AboutMeText></AboutMeText>
        </div>
    );
};

export default AboutMe;