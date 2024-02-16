import SkillsCard from "./SkillsCard";
import SkillsTitle from "./SkillsTitle";

const Skills = () => {
    return (
        <div className="bg-black h-screen mb-20">
            <div className="relative">
                <SkillsTitle></SkillsTitle>
            </div>
            <h3 className="text-white opacity-65 font-medium text-3xl text-center mt-72 uppercase hover:opacity-100">which skills i have</h3>
            <SkillsCard></SkillsCard>
        </div>
    );
};

export default Skills;