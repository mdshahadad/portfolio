import { IoOpenOutline, IoLogoGithub } from "react-icons/io5";
import { Link } from "react-router-dom";


const ProjectsCard = ({ project }) => {
    const { details, github, image, liveLink, title } = project;
    return (
        <div className="md:mb-48 mt-24 md:w-full md:h-[200px] max-w-7xl mx-auto relative">
            <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1800"
                data-aos-delay="500"
                className="projects-card relative md:w-full md:flex flex-col md:items-center md:justify-center mx-2 md:mx-0">

                <div className="right bg-white opacity-80 px-4 md:px-5 py-10 z-10 rounded-xl hover:z-30 hover:opacity-100 hover:scale-125 transition ease-linear duration-700 md:mr-[450px] mx-10 lg:mr-[530px] md:mx-0 xl:h-80 lg:h-[300px]">

                    <div className="flex justify-start">
                        <Link to={liveLink}>
                            <IoOpenOutline className="2xl:text-4xl xl:text-3xl lg:text-2xl ml-2 cursor-pointer hover:scale-125 transition-all" />
                        </Link>
                        <Link to={github}>
                            <IoLogoGithub className="2xl:text-4xl xl:text-3xl lg:text-2xl ml-2 cursor-pointer hover:scale-125 transition-all" />
                        </Link>
                    </div>
                    <div className="mt-4 md:pr-6 pb-8 md:pb-0">
                        <h3 className="text-center font-bold text-lg md:text-2xl">{title}</h3>
                        <p className="md:px-5 mt-4 text-sm text-center">{details}</p>
                    </div>

                </div>

                <div className="left p-2 z-20 rounded-xl cursor-crosshair absolute -mt-12 md:mt-0 lg:ml-[340px] md:ml-[400px]">
                    <img src={image} alt="" className="rounded-xl hover:scale-125 transition-all ease-in-out duration-1000" />
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;