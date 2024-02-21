import ContactForm from "../Home/ContactSection/ContactForm";
import Navbar from "../Home/Navbar/Navbar";
import SocialIcons from "../Home/SocialIcons/SocialIcons";

const ContactComponents = () => {
    return (
        <div className="bg-black h-screen">
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto -mt-20">
                <ContactForm></ContactForm>
            </div>
            <SocialIcons></SocialIcons>
        </div>
    );
};

export default ContactComponents;