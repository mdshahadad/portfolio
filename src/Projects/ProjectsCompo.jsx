import { useEffect, useState } from "react";
import Footer from "../Home/Footer.jsx/Footer";
import ProjectsCard from "../Home/Projects/ProjectsCard";
import ProjectsTitle from "../Home/Projects/ProjectsTitle";
import SocialIcons from "../Home/SocialIcons/SocialIcons";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ProjectsCompo = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`https://shahadad.vercel.app/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="">
            <div className="relative">
                <ProjectsTitle></ProjectsTitle>
            </div>
            <h3 className="text-white font-medium text-xl md:text-3xl text-center mt-24 md:mt-72 uppercase hover:opacity-100">Projects I made before</h3>
            <div className="-mt-44">
                {
                    projects.map(project => <ProjectsCard project={project} key={project._id}></ProjectsCard>)
                }
            </div>

            <div className="flex justify-center">
                <Link to="/projects">
                    <button
                        className="text-black bg-white opacity-75 uppercase mt-[240px] px-14 py-7 rounded-2xl font-medium hover:bg-transparent hover:text-white hover:scale-110  hover:outline-dotted flex items-center text-xl transition duration-300 ease-in-out">
                        Show More
                        <HiMiniArrowRightCircle className="text-4xl ml-2" />
                    </button>
                </Link>
            </div>
            <SocialIcons></SocialIcons>
        </div>
    );
};

export default ProjectsCompo;