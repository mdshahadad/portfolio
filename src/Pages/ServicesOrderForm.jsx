import { useLocation } from "react-router-dom";
import { FaTruckFast } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const ServicesOrderForm = () => {
    const location = useLocation();
    const { service } = location.state;
    console.log(service);

    const handleOrderService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const type = form.type.value;
        const message = form.message.value;

        const orderDetails = {
            name,
            email,
            type,
            message,
            service
        }
        console.log(orderDetails)

        fetch('https://shahadad.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    form.reset();
                    toast.success('Your Order Submitted', {
                        duration: 2000
                    })
                }
            })

    }

    return (
        <div className="bg-black h-screen">
            <div className="max-w-2xl mx-auto">

                <h3 className="text-white opacity-65 font-medium text-3xl mt-16 text-center uppercase hover:opacity-100">Order Your service here</h3>
                <p className="text-white text-center font-medium mt-4 text-lg uppercase">Let me help you</p>

                <div className="text-white mt-14">
                    <form onSubmit={handleOrderService} action="">
                        <div className="">
                            <div className="">
                                <div className="w-full">

                                    {/* name field */}
                                    <input
                                        name="name"
                                        className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" placeholder="Write your name" type="text" id="name"
                                        required />
                                </div>

                                <div className="w-full mt-4">

                                    {/* Email field */}
                                    <input
                                        name="email"
                                        className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" placeholder="Write your email" type="email" id="email"
                                        required />
                                </div>
                                <div className="w-full mt-4">

                                    {/* name field */}
                                    <input
                                        name="type"
                                        placeholder="Type: Like portfolio, restaurant & others"
                                        className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" type="text" id="type"
                                        required />
                                </div>
                                <div className="w-full mt-4">

                                    {/* text details area */}
                                    <textarea
                                        required className="w-full rounded-xl bg-transparent border-2 py-4 px-5 font-medium text-lg" name="message" id="" cols="30" rows="5" placeholder="Tell me what features you want and leave a message for me."></textarea>
                                </div>

                                <div className=" mt-4">
                                    {/* Submit button */}
                                    <button className="uppercase flex justify-center px-12 bg-white  opacity-75 py-6 text-black font-medium items-center rounded-xl text-xl hover:opacity-100 hover:scale-110 hover:bg-transparent hover:outline-dotted hover:text-white  transition duration-300 ease-in-out">Order Submit<FaTruckFast className="ml-2 text-4xl" />
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
                        }} />
                </div>
            </div>
        </div>
    );
};

export default ServicesOrderForm;