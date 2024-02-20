import ContactForm from "../Home/ContactSection/ContactForm";
import Footer from "../Home/Footer.jsx/Footer";
import Navbar from "../Home/Navbar/Navbar";
import SocialIcons from "../Home/SocialIcons/SocialIcons";

const ContactComponents = () => {
    return (
        <div className="bg-black">
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto -mt-20">
                <ContactForm></ContactForm>
            </div>
            <SocialIcons></SocialIcons>
            <Footer></Footer>
        </div>
    );
};

export default ContactComponents;