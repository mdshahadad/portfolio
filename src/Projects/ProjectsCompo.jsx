import Footer from "../Home/Footer.jsx/Footer";
import Navbar from "../Home/Navbar/Navbar";
import ProjectsCard from "../Home/Projects/ProjectsCard";

const ProjectsCompo = () => {
    return (
        <div className="bg-black">
            <Navbar></Navbar>
            <ProjectsCard></ProjectsCard>
            <Footer></Footer>
        </div>
    );
};

export default ProjectsCompo;