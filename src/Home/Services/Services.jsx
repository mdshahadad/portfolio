import { useState } from "react";
import ServiceModal from "./ServiceModal";
import ServicesCard from "./ServicesCard";
// import ServicesTitle from "./ServicesTitle";

const Services = () => {
    const [openModal, setOpenModal] = useState({});
    console.log(openModal)

    return (
        <div>
            <ServicesCard setOpenModal={setOpenModal} openModal={openModal}></ServicesCard>
            <ServiceModal setOpenModal={setOpenModal} openModal={openModal}></ServiceModal>
        </div>
    );
};

export default Services;