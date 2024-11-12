import Contact from "./Contact";
import ContactTitle from "./ContactTitle";

const ContactComponents = () => {
    return (
        <div>
            <div className="xl:pb-68 lg:pb-48">
                <ContactTitle></ContactTitle>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default ContactComponents;