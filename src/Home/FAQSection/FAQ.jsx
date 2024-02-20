import { FaPaperPlane } from "react-icons/fa";
import FAQDetails from "./FAQDetails";
import FAQTitle from "./FAQTitle";
import { Link } from "react-router-dom";

const FAQ = () => {
    return (
        <div className="">
            <div className="mb-20">
                <div className="relative">
                    <FAQTitle></FAQTitle>
                </div>
                <h3 className="text-white font-medium text-3xl text-center mt-72 uppercase hover:opacity-100">All your answer is here</h3>
                <FAQDetails></FAQDetails>
            </div>
            <div>
                <h3 className="text-white font-medium text-3xl text-center mt-32 uppercase hover:opacity-100">Have more questions?</h3>
                <div className="flex justify-center">
                    <Link to='/contact'>
                        <button className="uppercase flex justify-center px-12 bg-white  opacity-75 py-6 text-black font-medium items-center rounded-xl text-xl hover:opacity-100 hover:scale-110 hover:bg-transparent hover:outline-dotted hover:text-white  transition duration-300 ease-in-out mt-[52px]">ASk me<FaPaperPlane className="ml-2 text-2xl" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FAQ;