import SkillsCard from "./SkillsCard";
import SkillsTitle from "./SkillsTitle";

const Skills = () => {
    return (
        <div className="bg-black h-screen">
            <div className="relative">
                <SkillsTitle></SkillsTitle>
            </div>
            <h3 className="text-white opacity-65 font-medium text-3xl text-center mt-72 uppercase">which skills i have</h3>
            <SkillsCard></SkillsCard>
        </div>
    );
};

export default Skills;