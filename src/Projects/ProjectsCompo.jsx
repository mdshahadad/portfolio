import ProjectsTitle from "./ProjectsTitle";
import Projects from "./Projects";

const ProjectsCompo = () => {
    return (
        <div className="xl:mt-28 lg:mt-20 md:mt-10 mt-0">
            <div className="xl:pb-56 lg:pb-32 pb-20">
                <ProjectsTitle></ProjectsTitle>
            </div>
            <Projects></Projects>
        </div>
    );
};

export default ProjectsCompo;