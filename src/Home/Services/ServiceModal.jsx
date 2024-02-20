import { Modal } from "flowbite-react";
// import { HiMiniArrowRightCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";


const ServiceModal = ({ openModal, setOpenModal }) => {
    console.log(openModal.id);

    return (
        <div>
            <Modal show={openModal} onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6 text-center">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">Details Cominggggggggggggggggggg
                        </p>
                        <p>{openModal.id}</p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Please Waitttttttttttttttttttt
                        </p>
                    </div>
                </Modal.Body>
                <div className="flex justify-end px-16 py-10">
                    <Link to={`/services/order`} state={{ details: openModal.id }}>
                        <button
                            className="flex items-center text-xl cursor-pointer px-8 py-2 rounded-full bg-black text-white text-center hover:bg-transparent hover:text-black border-2 border-black font-medium transition-all">Order Service <FaCartPlus className="text-4xl ml-2 mt-1" /></button>
                    </Link>
                </div>
            </Modal>
        </div>
    );
};

export default ServiceModal;