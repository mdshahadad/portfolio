import SocialIcons from "../Home/SocialIcons/SocialIcons";
import Contact from "./Contact";
import ContactTitle from "./ContactTitle";

const ContactComponents = () => {
    return (
        <div>
            <div className="lg:pb-64">
                <ContactTitle></ContactTitle>
            </div>
            <Contact></Contact>
            <SocialIcons></SocialIcons>
        </div>
    );
};

export default ContactComponents;