import Footer from "../Home/Footer.jsx/Footer";
import Navbar from "../Home/Navbar/Navbar";
import ProjectsCard from "../Home/Projects/ProjectsCard";
import ProjectsTitle from "../Home/Projects/ProjectsTitle";
import SocialIcons from "../Home/SocialIcons/SocialIcons";

const ProjectsCompo = () => {
    return (
        <div className="bg-black">
            <Navbar></Navbar>
            <div className="relative mt-8">
                <ProjectsTitle></ProjectsTitle>
            </div>
            <h3 className="text-white font-medium text-3xl text-center mt-72 uppercase hover:opacity-100">Projects I made before</h3>
            <ProjectsCard></ProjectsCard>
            <SocialIcons></SocialIcons>
            <Footer></Footer>
        </div>
    );
};

export default ProjectsCompo;