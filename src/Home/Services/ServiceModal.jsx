import { Button, Modal } from "flowbite-react";
import { FaHeadphones } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const ServiceModal = ({ openModal, setOpenModal }) => {

    const handleOrder = () => {
        console.log('Clicked')
    }

    return (
        <div>
            <Modal show={openModal} onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6 text-center">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">Details Cominggggggggggggggggggg
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Please Waitttttttttttttttttttt
                        </p>
                    </div>
                </Modal.Body>
                <div className="flex justify-end px-16 py-10">
                    <h4 
                    onClick={handleOrder}
                    className="flex items-center text-2xl cursor-pointer px-16 py-4 rounded-full  bg-black text-white text-center ">Contact <FaHeadphones className="text-3xl ml-2" /></h4>
                </div>
            </Modal>
        </div>
    );
};

export default ServiceModal;