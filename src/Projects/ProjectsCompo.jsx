import ProjectsTitle from "./ProjectsTitle";
import Projects from "./Projects";

const ProjectsCompo = () => {
    return (
        <div className="">
            <div className="xl:pb-56 lg:pb-32 pb-20">
                <ProjectsTitle></ProjectsTitle>
            </div>
            <Projects></Projects>
        </div>
    );
};

export default ProjectsCompo;