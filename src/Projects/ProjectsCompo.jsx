import ProjectsTitle from "./ProjectsTitle";
import SocialIcons from "../Home/SocialIcons/SocialIcons";
import Projects from "./Projects";

const ProjectsCompo = () => {
    return (
        <div className="">
            <div className="lg:pb-56">
                <ProjectsTitle></ProjectsTitle>
            </div>
            <Projects></Projects>
            <SocialIcons></SocialIcons>
        </div>
    );
};

export default ProjectsCompo;