import toast, { Toaster } from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {

    const handleContactForm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const clientDetails = {
            name,
            email,
            message
        }
        console.log(clientDetails);

        fetch('https://shahadad.vercel.app/inbox', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(clientDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset();
                    toast.success('Message Send', {
                        duration: 2000
                    })
                }
            });
    }

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="pb-20">
            <h3 className="text-white opacity-75 font-medium text-3xl text-center mt-16 uppercase hover:opacity-100">need website for your business?</h3>
            <p className="text-white text-center font-medium mt-4 text-lg uppercase">Let me help you</p>
            <div className="text-white mt-14 px-2 md:px-0">
                <form onSubmit={handleContactForm} action="">
                    <div className="flex justify-between gap-10">
                        <div className="md:flex flex-col md:justify-between w-full space-y-5">
                            <div className="w-full">

                                {/* name field */}
                                <input
                                    name="name"
                                    className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" placeholder="Type Name" type="text" id="name"
                                    required />
                            </div>
                            <div className="w-full md:mt-0">

                                {/* Email field */}
                                <input
                                    name="email"
                                    className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" placeholder="Type Email" type="email" id="email"
                                    required />
                            </div>
                            <div className="w-full md:mt-0">

                                {/* Number field */}
                                <input
                                    name="number"
                                    className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" placeholder="Type Number" type="number" id="number"
                                    required />
                            </div>
                            <div>
                                <p className="uppercase text-base font-medium text-white opacity-75">Do you need brand new Website for you or your business?  <br /> are you facing any problem with your existing website? <br /> <br /> Just write a message in details and send me. Inshaa allah I will reach you by Email or Phone.</p>
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-start">
                            <div className="w-full">

                                {/* text details area */}
                                <textarea
                                    required className="w-full rounded-xl bg-transparent border-2 px-5 font-medium text-lg" name="message" id="" cols="" rows="6" placeholder="Type what you want"></textarea>
                            </div>
                            <div className="w-full">

                                {/* Submit button */}
                                <button className="uppercase flex justify-center px-12 bg-white opacity-75 py-5 text-black font-medium items-center rounded-xl text-xl hover:opacity-100 hover:scale-105 hover:bg-transparent hover:outline-dotted hover:text-white transition duration-700 ease-in-out mt-[52px] w-full">send message <FaPaperPlane className="ml-2 text-2xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <Toaster
                    toastOptions={{
                        style: {
                            marginTop: '50px',
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default ContactForm;