import { useEffect, useState } from "react";
import ProjectsCard from "./ProjectsCard";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [showMore, setShowMore] = useState(false);
    console.log(projects)

    useEffect(() => {
        fetch(`https://shahadad.vercel.app/projects`)
            .then(res => res.json())
            .then(data => {
                data.reverse();
                console.log(data)
                setProjects(data)
            })
    }, []);

    const visibleProjects = showMore === true ? projects : projects.slice(0, 2);
    // console.log(visibleProjects.length);

    const handleShowMoreAndLess = () => {
        setShowMore(!showMore);
    }


    return (
        <div className="mb-20 relative">

            <div
                data-aos="fade-up"
                data-aos-duration="3000"
            >
                <h3 className="text-white opacity-75 font-medium md:text-3xl text-xl text-center mt-16 uppercase hover:opacity-100">Projects I made before</h3>
                <p className="text-white text-center font-medium mt-4 text-lg uppercase">Let me show you</p>
            </div>

            <div className="-mt-44 md:-mt-0">
                {
                    visibleProjects.map(project => <ProjectsCard project={project} key={project._id}></ProjectsCard>)
                }
            </div>

            <div className="flex justify-center relative">
                <button
                    onClick={handleShowMoreAndLess}
                    className="text-black bg-white opacity-75 uppercase px-16 py-5 rounded-2xl font-medium hover:bg-transparent hover:text-white hover:scale-110  hover:outline-dotted flex items-center text-xl transition duration-300 ease-in-out">
                    {
                        showMore === true ? "Show Less" : "Show More"
                    }
                    <HiMiniArrowRightCircle className="text-4xl ml-2" />
                </button>
            </div>
        </div>
    );
};

export default Projects;