import SkillsCard from "./SkillsCard";
import SkillsTitle from "./SkillsTitle";

const Skills = () => {
    return (
        <div className="bg-black h-screen">
            <div className="relative">
                <SkillsTitle></SkillsTitle>
            </div>
            <SkillsCard></SkillsCard>
        </div>
    );
};

export default Skills;