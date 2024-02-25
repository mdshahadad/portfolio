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
        <div className="pb-20">
            <h3 className="text-white opacity-65 font-medium text-3xl text-center mt-32 uppercase hover:opacity-100">have a questions or need a website?</h3>
            <p className="text-white text-center font-medium mt-4 text-lg uppercase">Let me help you</p>
            <div className="text-white mt-14 px-2 md:px-0">
                <form onSubmit={handleContactForm} action="">
                    <div className="md:flex md:justify-between md:gap-10">
                        <div className="w-full">

                            {/* name field */}
                            <input
                                name="name"
                                className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" placeholder="Write your name" type="text" id="name"
                                required />
                        </div>
                        <div className="w-full mt-4 md:mt-0">

                            {/* Email field */}
                            <input
                                name="email"
                                className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" placeholder="Write your email" type="email" id="email"
                                required />
                        </div>
                    </div>

                    <div className="md:flex items-end justify-between mt-4 md:mt-8">
                        <div className="w-full">

                            {/* text details area */}
                            <textarea
                                required className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" name="message" id="" cols="30" rows="10" placeholder="Tell me what you want to say in details"></textarea>
                        </div>
                        <div className="mx-2 md:w-1/3 md:ml-10 mb-1">
                            <div className="">
                                <p className="uppercase text-base font-medium text-white opacity-75">Do you need fresh brand new Website for you or your business? OR are you face any problem with your existing website? <br /> Just write a message in details and send me. Inshaa allah I will reach you by Email.</p>

                                {/* Submit button */}
                                <button className="uppercase flex justify-center px-12 bg-white  opacity-75 py-6 text-black font-medium items-center rounded-xl text-xl hover:opacity-100 hover:scale-110 hover:bg-transparent hover:outline-dotted hover:text-white  transition duration-300 ease-in-out mt-[52px]">send message <FaPaperPlane className="ml-2 text-2xl" />
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