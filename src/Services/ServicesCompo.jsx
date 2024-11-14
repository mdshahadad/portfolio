import Services from "../Home/Services/Services";
import ServicesTitle from "../Home/Services/ServicesTitle";

const ServicesCompo = () => {
    return (
        <div className="xl:mt-32 lg:mt-20 md:mt-10 mt-0">
            <div className="xl:pb-56 lg:pb-28 pb-20">
                <ServicesTitle></ServicesTitle>
            </div>
            <Services></Services>
        </div>
    );
};

export default ServicesCompo;