import { useState } from "react";
import ServiceModal from "./ServiceModal";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [openModal, setOpenModal] = useState(false);
    console.log(openModal)

    return (
        <div>
            <ServicesCard setOpenModal={setOpenModal} openModal={openModal}></ServicesCard>
            <ServiceModal setOpenModal={setOpenModal} openModal={openModal}></ServiceModal>
        </div>
    );
};

export default Services;