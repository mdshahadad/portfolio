import ContactDetails from "./ContactDetails";
import ContactTitle from "./ContactTitle";

const Contact = () => {
    return (
        <div className="bg-black">
            <div className="relative">
                <ContactTitle></ContactTitle>
            </div>
            <h3 className="text-white opacity-65 font-medium text-3xl text-center mt-72 uppercase hover:opacity-100">WANT TO WORK WITH ME?</h3>
            <p className="text-white text-center font-medium mt-4 text-lg uppercase">Let's connect with me</p>
            <ContactDetails></ContactDetails>
        </div>
    );
};

export default Contact;