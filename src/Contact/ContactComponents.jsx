import ContactForm from "../Home/ContactSection/ContactForm";
import Footer from "../Home/Footer.jsx/Footer";
import Navbar from "../Home/Navbar/Navbar";

const ContactComponents = () => {
    return (
        <div className="bg-black">
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto -mt-20">
                <ContactForm></ContactForm>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactComponents;