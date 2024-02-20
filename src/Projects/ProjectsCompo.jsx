import Footer from "../Home/Footer.jsx/Footer";
import Navbar from "../Home/Navbar/Navbar";
import ProjectsCard from "../Home/Projects/ProjectsCard";
import SocialIcons from "../Home/SocialIcons/SocialIcons";

const ProjectsCompo = () => {
    return (
        <div className="bg-black">
            <Navbar></Navbar>
            <ProjectsCard></ProjectsCard>
            <SocialIcons></SocialIcons>
            <Footer></Footer>
        </div>
    );
};

export default ProjectsCompo;