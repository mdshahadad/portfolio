// import { useState } from "react";

import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
    // const [focused, setFocused] = useState(false);

    return (
        <div className="pb-20">
            <h3 className="text-white opacity-65 font-medium text-3xl text-center mt-40 uppercase hover:opacity-100">Need help for your website?</h3>
            <div className="text-white mt-14">
                <form action="">
                    <div className="flex justify-between gap-10">
                        <div className="w-full">
                            <label htmlFor="name">Name</label>
                            <input
                                // onFocus={() => setFocused(!focused)}
                                // onBlur={() => setFocused(!focused)}
                                className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" placeholder="Write your name" type="text" name="name" id="name" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email">Name</label>
                            <input
                                // onFocus={() => setFocused(!focused)}
                                // onBlur={() => setFocused(!focused)}
                                className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" placeholder="Email: hello@shahadad.com" type="text" name="name" id="email" />
                        </div>
                    </div>
                    <div className="flex items-end justify-between mt-8">
                        <div className="w-full">
                            <label htmlFor="project" className="uppercase font-medium">say in details</label>
                            <textarea className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" name="project" id="" cols="30" rows="10" placeholder="Tell me what you want to say in details"></textarea>
                        </div>
                        <div className="w-1/3 ml-10 mb-1">
                            <div className="">
                                <p className="uppercase text-base font-medium text-white opacity-75 leading-7">if you face any problem with your website or you want to make a fresh brand new website for your or your business just say in details and send the messages. i will reach you with your email</p>
                                <button className="uppercase flex justify-center px-12 bg-white  opacity-75 py-6 text-black font-medium items-center rounded-xl text-xl hover:opacity-100 hover:scale-110 hover:bg-transparent hover:border-2 hover:text-white transition-all mt-[52px]">send message <FaPaperPlane className="ml-2 text-2xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;