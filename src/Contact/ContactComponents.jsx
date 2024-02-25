import ContactForm from "../Home/ContactSection/ContactForm";
import SocialIcons from "../Home/SocialIcons/SocialIcons";

const ContactComponents = () => {
    return (
        <div className="h-fit md:h-screen">
            <div className="max-w-6xl mx-auto md:-mt-20">
                <ContactForm></ContactForm>
            </div>
            <SocialIcons></SocialIcons>
        </div>
    );
};

export default ContactComponents;