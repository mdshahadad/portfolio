import Footer from "../Home/Footer.jsx/Footer";
import Navbar from "../Home/Navbar/Navbar";
import Services from "../Home/Services/Services";

const ServicesCompo = () => {
    return (
        <div className="bg-black">
            <Navbar></Navbar>
            <h3 className="text-white opacity-65 font-medium text-3xl text-center mt-12 uppercase hover:opacity-100">Choose services you want</h3>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default ServicesCompo;