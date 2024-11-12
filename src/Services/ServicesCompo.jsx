import Services from "../Home/Services/Services";
import ServicesTitle from "../Home/Services/ServicesTitle";

const ServicesCompo = () => {
    return (
        <div>
            <div className="lg:pb-56">
                <ServicesTitle></ServicesTitle>
            </div>
            <Services></Services>
        </div>
    );
};

export default ServicesCompo;