import ContactForm from "../Home/ContactSection/ContactForm";
import Navbar from "../Home/Navbar/Navbar";
import SocialIcons from "../Home/SocialIcons/SocialIcons";

const ContactComponents = () => {
    return (
        <div className="bg-black h-fit md:h-screen">
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto md:-mt-20">
                <ContactForm></ContactForm>
            </div>
            <SocialIcons></SocialIcons>
        </div>
    );
};

export default ContactComponents;