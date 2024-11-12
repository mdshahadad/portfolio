import ContactIcons from "./ContactIcons";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div className="max-w-6xl mx-auto md:-mt-20">
            <ContactForm></ContactForm>
            <ContactIcons></ContactIcons>
        </div>
    );
};

export default Contact;