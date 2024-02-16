import { useState } from "react";
import ServiceModal from "./ServiceModal";
import ServicesCard from "./ServicesCard";
import ServicesTitle from "./ServicesTitle";

const Services = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="bg-black mb-20">
            <div className="relative">
                <ServicesTitle></ServicesTitle>
            </div>
            <h3 className="text-white opacity-65 font-medium text-3xl text-center mt-72 uppercase hover:opacity-100">Choose services you want</h3>
            <ServicesCard setOpenModal={setOpenModal} openModal={openModal}></ServicesCard>
            <ServiceModal setOpenModal={setOpenModal} openModal={openModal}></ServiceModal>
        </div>
    );
};

export default Services;