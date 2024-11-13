import Contact from "./Contact";
import ContactTitle from "./ContactTitle";

const ContactComponents = () => {
    return (
        <div>
            <div className="2xl:pb-72 xl:pb-60 lg:pb-48 pb-20">
                <ContactTitle></ContactTitle>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default ContactComponents;