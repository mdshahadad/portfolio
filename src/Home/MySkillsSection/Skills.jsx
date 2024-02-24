import SkillsCard from "./SkillsCard";
import SkillsTitle from "./SkillsTitle";

const Skills = () => {
    return (
        <div className="bg-black h-fit mb-20">
            <div className="relative">
                <SkillsTitle></SkillsTitle>
            </div>
            <h3 className="text-white opacity-65 font-medium text-2xl md:text-3xl text-center mt-28 md:mt-72 uppercase hover:opacity-100">which skills i have</h3>
            <SkillsCard></SkillsCard>
        </div>
    );
};

export default Skills;