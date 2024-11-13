import ContactIcons from "./ContactIcons";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div className="2xl:max-w-7xl md:max-w-6xl mx-auto lg:-mt-0 md:-mt-20 xl:mx-auto lg:mx-10">
            <ContactForm></ContactForm>
            <ContactIcons></ContactIcons>
        </div>
    );
};

export default Contact;