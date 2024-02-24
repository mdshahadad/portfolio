import { useEffect, useState } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectsTitle from "./ProjectsTitle";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`https://shahadad.vercel.app/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="mb-20 relative">
            <div className="relative">
                <ProjectsTitle></ProjectsTitle>
            </div>
            <h3 className="text-white font-medium text-2xl md:text-3xl text-center mt-28 md:mt-72 uppercase hover:opacity-100">Projects I made before</h3>
            {
                projects.map(project => <ProjectsCard project={project} key={project._id}></ProjectsCard>)
            }

            <div className="flex justify-center">
                <Link to="/projects">
                    <button
                        className="text-black bg-white opacity-75 uppercase mt-[100px] px-14 py-7 rounded-2xl font-medium hover:bg-transparent hover:text-white hover:scale-110  hover:outline-dotted
                flex items-center text-xl transition duration-300 ease-in-out">
                        Show More
                        <HiMiniArrowRightCircle className="text-4xl ml-2" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Projects;