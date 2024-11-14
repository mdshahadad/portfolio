import Contact from "./Contact";
import ContactTitle from "./ContactTitle";

const ContactComponents = () => {
    return (
        <div className="xl:mt-20 lg:mt-20 md:mt-10 mt-0">
            <div className="2xl:pb-72 xl:pb-60 lg:pb-48 pb-20">
                <ContactTitle></ContactTitle>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default ContactComponents;