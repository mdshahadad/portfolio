import Services from "../Home/Services/Services";
import ServicesTitle from "../Home/Services/ServicesTitle";
import SocialIcons from "../Home/SocialIcons/SocialIcons";

const ServicesCompo = () => {
    return (
        <div>
            <div className="lg:pb-56">
                <ServicesTitle></ServicesTitle>
            </div>
            <Services></Services>
            <SocialIcons></SocialIcons>
        </div>
    );
};

export default ServicesCompo;