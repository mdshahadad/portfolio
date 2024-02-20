import Navbar from "../Home/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { FaTruckFast } from "react-icons/fa6";


const ServicesOrderForm = () => {
    const location = useLocation();
    console.log(location)
    const { details } = location.state;
    console.log(details);

    return (
        <div className="bg-black h-screen">
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto">

                <h3 className="text-white opacity-65 font-medium text-3xl mt-16 text-center uppercase hover:opacity-100">Order Your service here</h3>
                <p className="text-white text-center font-medium mt-4 text-lg uppercase">Let me help you</p>

                <div className="text-white mt-14">
                    <form action="">
                        <div className="flex justify-between gap-5">
                            <div className="w-full">

                                {/* name field */}
                                <input
                                    name="name"
                                    className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" placeholder="Write your name" type="text" id="name"
                                    required />
                            </div>

                            <div className="w-full">

                                {/* Email field */}
                                <input
                                    name="email"
                                    className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" placeholder="Write your email" type="email" id="email"
                                    required />
                            </div>
                            <div className="w-full">

                                {/* name field */}
                                <input
                                    name="type"
                                    placeholder="Type: Like portfolio, restaurant & others"
                                    className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" type="text" id="name"
                                    required />
                            </div>
                        </div>
                        <div className="flex items-end justify-between mt-8">
                            <div className="w-full">

                                {/* text details area */}
                                <textarea
                                    required className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" name="message" id="" cols="30" rows="10" placeholder="Tell me what you want to say in details"></textarea>
                            </div>
                            <div className="w-1/3 ml-10 mb-1">
                                <div className="">
                                    <p className="uppercase text-base font-medium text-white opacity-75">Text</p>

                                    {/* Submit button */}
                                    <button className="uppercase flex justify-center px-12 bg-white  opacity-75 py-6 text-black font-medium items-center rounded-xl text-xl hover:opacity-100 hover:scale-110 hover:bg-transparent hover:outline-dotted hover:text-white  transition duration-300 ease-in-out mt-[52px]">Order Submit<FaTruckFast className="ml-2 text-4xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServicesOrderForm;