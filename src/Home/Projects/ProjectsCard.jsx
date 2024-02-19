import { IoOpenOutline, IoLogoGithub } from "react-icons/io5";
import { Link } from "react-router-dom";


const ProjectsCard = () => {
    return (
        <div className=" mt-72 w-full h-svh max-w-7xl mx-auto">
            <div className="container gap-4 relative w-full">

                <div className="left bg-gray-400 p-2 absolute left-20 z-20 rounded-xl w-[580px] cursor-crosshair">
                    <img src={`https://i.postimg.cc/02Syk9PT/portfoliobanner.png`} alt="" className="rounded-xl hover:scale-150 transition ease-in-out duration-500 hover:border-2 hover:border-white" />
                </div>

                <div className="right bg-white opacity-80 px-5 py-10 absolute z-10 rounded-xl w-[380px] right-72">
                    <div className="flex justify-end">
                        <Link to="https://shahadad.netlify.app/">                        <IoOpenOutline className="text-5xl mr-2 cursor-pointer hover:scale-125 transition-all" />
                        </Link>
                        <Link to="https://github.com/mdshahadad/portfolio">                        <IoLogoGithub className="text-5xl mr-2 cursor-pointer hover:scale-125 transition-all" />
                        </Link>
                    </div>
                    <div className="mt-4 pl-6">
                        <h3 className="text-center font-bold text-2xl">PortFolio website with react</h3>
                        <p className="px-5 mt-4 text-center">A simple portfolio website for a junior web developer based on react js. Here i added banner img with fixed social icons, skills with hover effect, projects, services he offers with contact information.</p>
                        <div className="flex justify-evenly mt-4">
                            <p className="bg-black text-white px-2 rounded-md py-1">React js</p>
                            <p className="bg-black text-white px-2 rounded-md py-1">Router</p>
                            <p className="bg-black text-white px-2 rounded-md py-1">Tailwind</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container gap-4 relative w-full top-[500px]">

                <div className="left bg-gray-400 p-2 absolute right-72 z-20 rounded-xl w-[580px] cursor-crosshair">
                    <img src={`https://i.postimg.cc/02Syk9PT/portfoliobanner.png`} alt="" className="rounded-xl hover:scale-150 transition ease-in-out duration-500 hover:border-2 hover:border-white" />
                </div>

                <div className="right bg-white opacity-80 px-5 py-10 absolute z-10 rounded-xl w-[380px] left-20">
                    <div className="flex justify-start">
                        <Link to="https://shahadad.netlify.app/">                        <IoOpenOutline className="text-5xl mr-2 cursor-pointer hover:scale-125 transition-all" />
                        </Link>
                        <Link to="https://github.com/mdshahadad/portfolio">                        <IoLogoGithub className="text-5xl mr-2 cursor-pointer hover:scale-125 transition-all" />
                        </Link>
                    </div>
                    <div className="mt-4 pr-6">
                        <h3 className="text-center font-bold text-2xl">PortFolio website with react</h3>
                        <p className="px-5 mt-4 text-center">A simple portfolio website for a junior web developer based on react js. Here i added banner img with fixed social icons, skills with hover effect, projects, services he offers with contact information.</p>
                        <div className="flex justify-evenly mt-4">
                            <p className="bg-black text-white px-2 rounded-md py-1">React js</p>
                            <p className="bg-black text-white px-2 rounded-md py-1">Router</p>
                            <p className="bg-black text-white px-2 rounded-md py-1">Tailwind</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;