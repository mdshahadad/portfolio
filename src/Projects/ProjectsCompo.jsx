import { useEffect, useState } from "react";
import Footer from "../Home/Footer.jsx/Footer";
import ProjectsCard from "../Home/Projects/ProjectsCard";
import ProjectsTitle from "../Home/Projects/ProjectsTitle";
import SocialIcons from "../Home/SocialIcons/SocialIcons";
import { HiMiniArrowRightCircle } from "react-icons/hi2";

const ProjectsCompo = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`https://shahadad.vercel.app/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div>
            <div className="relative mt-8">
                <ProjectsTitle></ProjectsTitle>
            </div>
            <h3 className="text-white font-medium text-3xl text-center mt-72 uppercase hover:opacity-100">Projects I made before</h3>
            {
                projects.map(project => <ProjectsCard project={project} key={project._id}></ProjectsCard>)
            }
            <div className="flex justify-center">
                <button
                    className="text-black bg-white opacity-75 uppercase mt-[100px] px-14 py-7 rounded-2xl font-medium hover:bg-transparent hover:text-white hover:scale-110  hover:outline-dotted
                flex items-center text-xl transition duration-300 ease-in-out">
                    Show More
                    <HiMiniArrowRightCircle className="text-4xl ml-2" />
                </button>
            </div>
            <SocialIcons></SocialIcons>
            <Footer></Footer>
        </div>
    );
};

export default ProjectsCompo;