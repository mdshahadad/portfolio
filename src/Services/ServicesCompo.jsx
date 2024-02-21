import Footer from "../Home/Footer.jsx/Footer";
import Navbar from "../Home/Navbar/Navbar";
import Services from "../Home/Services/Services";
import ServicesTitle from "../Home/Services/ServicesTitle";
import SocialIcons from "../Home/SocialIcons/SocialIcons";

const ServicesCompo = () => {
    return (
        <div className="bg-black">
            <Navbar></Navbar>
            <div className="bg-black mt-8">
                <div className="relative">
                    <ServicesTitle></ServicesTitle>
                </div>
                <h3 className="text-white opacity-65 font-medium text-3xl text-center mt-64 uppercase hover:opacity-100">Choose services you want</h3>
                <Services></Services>
            </div>
            <SocialIcons></SocialIcons>
            <Footer></Footer>
        </div>
    );
};

export default ServicesCompo;