import { IoOpenOutline, IoLogoGithub } from "react-icons/io5";
import { Link } from "react-router-dom";


const ProjectsCard = ({ project }) => {
    const { details, github, image, liveLink, title } = project;
    return (
        <div className="mt-72 md:w-full md:h-[200px] max-w-7xl mx-auto">
            <div className="">
                <div
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1200"
                    className="container gap-4 projects-card relative w-full">

                    <div className="left bg-gray-400 p-2 absolute z-20 rounded-xl cursor-crosshair">
                        <img src={image} alt="" className="rounded-xl hover:scale-150 transition ease-in-out duration-700 hover:border-2 hover:border-white" />
                    </div>

                    <div className="right bg-white opacity-80 px-5 py-10 absolute z-10 rounded-xl hover:z-30 hover:opacity-100 hover:scale-110 transition ease-linear duration-300">
                        <div className="flex justify-start">
                            <Link to={liveLink}>                        <IoOpenOutline className="text-5xl ml-2 cursor-pointer hover:scale-125 transition-all" />
                            </Link>
                            <Link to={github}>                        <IoLogoGithub className="text-5xl ml-2 cursor-pointer hover:scale-125 transition-all" />
                            </Link>
                        </div>
                        <div className="mt-4 pr-6">
                            <h3 className="text-center font-bold text-2xl">{title}</h3>
                            <p className="px-5 mt-4 text-center">{details}</p>
                            {/* <div className="flex justify-evenly mt-4 text-sm">
                                <p className="bg-black text-white px-2 rounded-md py-1">React js</p>
                                <p className="bg-black text-white px-2 rounded-md py-1">Router</p>
                                <p className="bg-black text-white px-2 rounded-md py-1">Tailwind</p>
                                <p className="bg-black text-white px-2 rounded-md py-1">Tailwind</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;