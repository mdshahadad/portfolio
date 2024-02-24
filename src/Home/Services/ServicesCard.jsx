import { IoIosArrowDroprightCircle } from "react-icons/io";
import { TbDeviceImacCode } from "react-icons/tb";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { TbSettingsCode } from "react-icons/tb";
import { HiCodeBracketSquare } from "react-icons/hi2";


const ServicesCard = ({ setOpenModal }) => {
    return (
        <div className="md:max-w-5xl md:mx-auto py-10">
            <div className="text-white grid grid-cols-1 md:grid-cols-2 md:gap-10 mt-12">
                <div className="md:flex justify-center px-2">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in"
                        className="">
                        <div className="mb-4 md:mb-10 bg-white hover:opacity-100 opacity-75 text-black px-16 py-12 rounded-xl md:w-[440px] hover:md:scale-110 hover:transition-all">
                            <h3
                                className="text-xl md:text-2xl font-medium">
                                <TbDeviceImacCode
                                    className="mr-2 text-7xl"
                                /> Basic Website Development
                            </h3>
                            <div className="mt-16 text-white flex justify-start gap-8">
                                <h4 onClick={() => setOpenModal({ true: 'true', service: 'basic' })}
                                    className="flex items-center text-xl cursor-pointer px-4 py-2 rounded-full bg-black hover:bg-transparent hover:text-black font-medium border-2 border-black">View Details <IoIosArrowDroprightCircle className="text-3xl ml-2" /></h4>
                            </div>
                        </div>
                        <div className="mb-10 bg-white hover:opacity-100 opacity-75 text-black px-16 py-12 rounded-xl md:w-[440px] hover:md:scale-110 hover:transition-all">
                            <h3
                                className="text-xl md:text-2xl font-medium">
                                <BsFileEarmarkCodeFill
                                    className="mr-2 text-7xl"
                                /> Your Template Development
                            </h3>
                            <div className="mt-16 text-white flex justify-between gap-8">
                                <h4 onClick={() => setOpenModal({ true: 'true', service: 'template' })}
                                    className="flex items-center text-xl cursor-pointer px-4 py-2 rounded-full bg-black hover:bg-transparent hover:text-black font-medium border-2 border-black">View Details <IoIosArrowDroprightCircle className="text-3xl ml-2" /></h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:flex justify-center px-2">
                    <div
                        data-aos="fade-up"
                        // data-aos-offset="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in"
                        className="">
                        <div className="mb-2 lg:mb-10 bg-white opacity-75 text-black px-16 py-12 rounded-xl md:w-[440px] hover:opacity-100 hover:md:scale-110 hover:transition-all">
                            <h3
                                className="text-xl md:text-2xl font-medium">
                                <TbSettingsCode
                                    className="mr-2 text-7xl"
                                /> Bug Fixing for Website
                            </h3>
                            <div className="mt-16 text-white flex justify-between gap-8">
                                <h4 onClick={() => setOpenModal({ true: 'true', service: 'bug' })}
                                    className="flex items-center text-xl cursor-pointer px-4 py-2 rounded-full bg-black hover:bg-transparent hover:text-black font-medium border-2 border-black">View Details <IoIosArrowDroprightCircle className="text-3xl ml-2" /></h4>
                            </div>
                        </div>
                        <div className="mb-2 md:mb-10 bg-white hover:opacity-100 opacity-75 text-black px-16 py-12 rounded-xl md:w-[440px] hover:md:scale-110 hover:transition-all">
                            <h3
                                className="text-xl md:text-2xl font-medium">
                                <HiCodeBracketSquare
                                    className="mr-2 text-7xl"
                                /> Customize Website
                            </h3>
                            <div className="mt-16 text-white flex justify-between gap-8">
                                <h4 onClick={() => setOpenModal({ true: 'true', service: 'customize' })}
                                    className="flex items-center text-xl cursor-pointer px-4 py-2 rounded-full bg-black hover:bg-transparent hover:text-black font-medium border-2 border-black">View Details <IoIosArrowDroprightCircle className="text-3xl ml-2" /></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;