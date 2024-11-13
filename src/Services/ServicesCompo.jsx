import Services from "../Home/Services/Services";
import ServicesTitle from "../Home/Services/ServicesTitle";

const ServicesCompo = () => {
    return (
        <div>
            <div className="xl:pb-56 lg:pb-28 pb-20">
                <ServicesTitle></ServicesTitle>
            </div>
            <Services></Services>
        </div>
    );
};

export default ServicesCompo;