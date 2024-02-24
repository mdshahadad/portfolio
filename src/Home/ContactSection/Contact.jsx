import ContactDetails from "./ContactDetails";
import ContactTitle from "./ContactTitle";

const Contact = () => {
    return (
        <div className="bg-black mt-12">
            <div className="relative">
                <ContactTitle></ContactTitle>
            </div>
            <h3 className="text-white opacity-65 font-medium text-2xl md:text-3xl text-center mt-28 md:mt-72 uppercase hover:opacity-100">WANT TO WORK WITH ME?</h3>
            <p className="text-white text-center font-medium mt-4 text-sm md:text-lg uppercase">Let's connect with me</p>
            <ContactDetails></ContactDetails>
        </div>
    );
};

export default Contact;