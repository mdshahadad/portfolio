import Contact from "./Contact";
import ContactTitle from "./ContactTitle";

const ContactComponents = () => {
    return (
        <div>
            <div className="lg:pb-64">
                <ContactTitle></ContactTitle>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default ContactComponents;