import ContactDetails from "./ContactDetails";
import ContactTitle from "./ContactTitle";

const Contact = () => {
    return (
        <div className="bg-black">
            <div className="relative">
                <ContactTitle></ContactTitle>
            </div>
            <h3 className="text-white opacity-65 font-medium text-3xl text-center mt-72 uppercase hover:opacity-100">WANT TO WORK WITH ME?</h3>
            <ContactDetails></ContactDetails>
        </div>
    );
};

export default Contact;