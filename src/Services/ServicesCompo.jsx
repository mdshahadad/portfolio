import Footer from "../Home/Footer.jsx/Footer";
import Services from "../Home/Services/Services";
import ServicesTitle from "../Home/Services/ServicesTitle";
import SocialIcons from "../Home/SocialIcons/SocialIcons";

const ServicesCompo = () => {
    return (
        <div>
            <div className="bg-black mt-10">
                <div className="relative">
                    <ServicesTitle></ServicesTitle>
                </div>
                <h3 className="text-white opacity-65 font-medium text-3xl text-center mt-64 uppercase hover:opacity-100">Choose services you want</h3>
                <Services></Services>
            </div>
            <SocialIcons></SocialIcons>
        </div>
    );
};

export default ServicesCompo;