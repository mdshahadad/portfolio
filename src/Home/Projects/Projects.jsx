import ProjectsCard from "./ProjectsCard";
import ProjectsTitle from "./ProjectsTitle";

const Projects = () => {
    return (
        <div className="bg-black h-fit mb-20">
            <div className="relative">
                <ProjectsTitle></ProjectsTitle>
            </div>
            <h3 className="text-white font-medium text-3xl text-center mt-72 uppercase hover:opacity-100">Projects I made before</h3>
            <ProjectsCard></ProjectsCard>
        </div>
    );
};

export default Projects;