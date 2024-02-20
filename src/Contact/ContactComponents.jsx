import ContactForm from "../Home/ContactSection/ContactForm";
import Navbar from "../Home/Navbar/Navbar";

const ContactComponents = () => {
    return (
        <div className="bg-black h-screen">
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto -mt-20">
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default ContactComponents;