import ContactForm from "./ContactForm";
import ContactIcons from "./ContactIcons";

const ContactDetails = () => {
    return (
        <div className="md:max-w-6xl md:mx-auto mt-14">
            <ContactIcons></ContactIcons>
            <ContactForm></ContactForm>
        </div>
    );
};

export default ContactDetails;