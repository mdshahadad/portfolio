import { IoIosArrowDroprightCircle } from "react-icons/io";
import { TbDeviceImacCode } from "react-icons/tb";
// import { FaHeadphones } from "react-icons/fa";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { TbSettingsCode } from "react-icons/tb";
import { HiCodeBracketSquare } from "react-icons/hi2";


const ServicesCard = ({ openModal, setOpenModal }) => {
    return (
        <div className="max-w-5xl mx-auto py-10">
            <div className="text-white grid grid-cols-2 gap-10 mt-12">
                <div className="flex justify-center">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in"
                        className="">
                        <div className="mb-10 bg-white hover:opacity-100 opacity-75 text-black px-16 py-12 rounded-xl w-[440px] hover:scale-110 hover:transition-all">
                            <h3
                                className="text-2xl font-medium">
                                <TbDeviceImacCode
                                    className="mr-2 text-7xl"
                                /> Basic Website Development
                            </h3>
                            <div className="mt-16 text-white flex justify-start gap-8">
                                <h4 onClick={() => setOpenModal(true)}
                                    className="flex items-center text-xl cursor-pointer px-4 py-2 rounded-full bg-black">View Details <IoIosArrowDroprightCircle className="text-3xl ml-2" /></h4>

                                {/* <h4 className="flex items-center text-xl cursor-pointer px-7 py-2 rounded-full  bg-black ">Contact <FaHeadphones className="text-3xl ml-2" /></h4> */}
                            </div>
                        </div>
                        <div className="mb-10 bg-white hover:opacity-100 opacity-75 text-black px-16 py-12 rounded-xl w-[440px] hover:scale-110 hover:transition-all">
                            <h3
                                className="text-2xl font-medium">
                                <BsFileEarmarkCodeFill
                                    className="mr-2 text-7xl"
                                /> Your Template Development
                            </h3>
                            <div className="mt-16 text-white flex justify-between gap-8">
                                <h4 className="flex items-center text-xl cursor-pointer px-4 py-2 rounded-full bg-black ">View Details <IoIosArrowDroprightCircle className="text-3xl ml-2" /></h4>

                                {/* <h4 className="flex items-center text-xl cursor-pointer px-7 py-2 rounded-full  bg-black ">Contact <FaHeadphones className="text-3xl ml-2" /></h4> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in"
                        className="">
                        <div className="mb-10 bg-white opacity-75 text-black px-16 py-12 rounded-xl w-[440px] hover:opacity-100 hover:scale-110 hover:transition-all">
                            <h3
                                className="text-2xl font-medium">
                                <TbSettingsCode
                                    className="mr-2 text-7xl"
                                /> Bug Fixing for Website
                            </h3>
                            <div className="mt-16 text-white flex justify-between gap-8">
                                <h4 className="flex items-center text-xl cursor-pointer px-4 py-2 rounded-full bg-black ">View Details <IoIosArrowDroprightCircle className="text-3xl ml-2" /></h4>

                                {/* <h4 className="flex items-center text-xl cursor-pointer px-7 py-2 rounded-full bg-black ">Contact <FaHeadphones className="text-3xl ml-2" /></h4> */}
                            </div>
                        </div>
                        <div className="mb-10 bg-white hover:opacity-100 opacity-75 text-black px-16 py-12 rounded-xl w-[440px] hover:scale-110 hover:transition-all">
                            <h3
                                className="text-2xl font-medium">
                                <HiCodeBracketSquare
                                    className="mr-2 text-7xl"
                                /> Customize Website
                            </h3>
                            <div className="mt-16 text-white flex justify-between gap-8">
                                <h4 className="flex items-center text-xl cursor-pointer px-4 py-2 rounded-full bg-black ">View Details <IoIosArrowDroprightCircle className="text-3xl ml-2" /></h4>

                                {/* <h4 className="flex items-center text-xl cursor-pointer px-7 py-2 rounded-full bg-black ">Contact <FaHeadphones className="text-3xl ml-2" /></h4> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;