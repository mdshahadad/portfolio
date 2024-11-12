import AboutCompo from "../../AboutCompo/AboutCompo";
import ContactComponents from "../../Contact/ContactComponents";
import ProjectsCompo from "../../Projects/ProjectsCompo";
import ServicesCompo from "../../Services/ServicesCompo";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <section className="">
            <Banner></Banner>
            <AboutCompo></AboutCompo>
            <ProjectsCompo></ProjectsCompo>
            <ServicesCompo></ServicesCompo>
            <ContactComponents></ContactComponents>
        </section>
    );
};

export default Home;