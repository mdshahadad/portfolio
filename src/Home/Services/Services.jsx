import { useState } from "react";
import ServiceModal from "./ServiceModal";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="linear">
                <h3
                    className="text-white opacity-65 font-medium text-3xl text-center mt-16 uppercase hover:opacity-100">Choose services you want</h3>
                <p className="text-white text-center font-medium mt-4 text-lg uppercase">Let's make website for you</p>
            </div>
            <ServicesCard setOpenModal={setOpenModal} openModal={openModal}></ServicesCard>
            <ServiceModal setOpenModal={setOpenModal} openModal={openModal}></ServiceModal>
        </div>
    );
};

export default Services;