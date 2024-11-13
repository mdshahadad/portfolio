import { IoIosArrowDroprightCircle } from "react-icons/io";
import { TbDeviceImacCode } from "react-icons/tb";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { TbSettingsCode } from "react-icons/tb";
import { HiCodeBracketSquare } from "react-icons/hi2";


const ServicesCard = ({ setOpenModal }) => {
    return (
        <div className="2xl:max-w-full md:max-w-5xl md:mx-auto py-10 2xl:mx-60">
            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="200"
                data-aos-easing="ease-in"
                className="text-white grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 2xl:gap-x-12 2xl:gap-y-12 lg:gap-y-16 mt-12 overflow-x-hidden md:overflow-x-visible">
                <div className="flex justify-center">
                    <div className="mb-4 md:mb-0 bg-white hover:opacity-100 opacity-75 text-black md:px-16 px-8 py-12 rounded-xl md:w-[440px] hover:md:scale-110  transition-all duration-500">
                        <h3
                            className="text-xl md:text-2xl font-medium">
                            <TbDeviceImacCode
                                className="mr-2 text-7xl"
                            /> Basic Website Development
                        </h3>
                        <div className="mt-16 text-white flex justify-start gap-8">
                            <h4 onClick={() => setOpenModal({ true: 'true', service: 'basic' })}
                                className="flex items-center text-xl cursor-pointer px-4 py-2 rounded-full bg-black hover:bg-transparent hover:text-black font-medium border-2 border-black transition-all duration-700">View Details <IoIosArrowDroprightCircle className="text-3xl ml-2" /></h4>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="mb-4 md:mb-0 bg-white hover:opacity-100 opacity-75 text-black md:px-16 px-8 py-12 rounded-xl md:w-[440px] hover:md:scale-110  transition-all duration-500">
                        <h3
                            className="text-xl md:text-2xl font-medium">
                            <BsFileEarmarkCodeFill
                                className="mr-2 text-7xl"
                            /> Your Template Development
                        </h3>
                        <div className="mt-16 text-white flex justify-between gap-8">
                            <h4 onClick={() => setOpenModal({ true: 'true', service: 'template' })}
                                className="flex items-center text-xl cursor-pointer px-4 py-2 rounded-full bg-black hover:bg-transparent hover:text-black font-medium border-2 border-black transition-all duration-700">View Details <IoIosArrowDroprightCircle className="text-3xl ml-2" /></h4>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="mb-4 md:mb-0 bg-white opacity-75 text-black md:px-16 px-8 py-12 rounded-xl md:w-[440px] hover:opacity-100 hover:md:scale-110 transition-all duration-500">
                        <h3
                            className="text-xl md:text-2xl font-medium">
                            <TbSettingsCode
                                className="mr-2 text-7xl"
                            /> Bug Fixing for Website
                        </h3>
                        <div className="mt-16 text-white flex justify-between gap-8">
                            <h4 onClick={() => setOpenModal({ true: 'true', service: 'bug' })}
                                className="flex items-center text-xl cursor-pointer px-4 py-2 rounded-full bg-black hover:bg-transparent hover:text-black font-medium border-2 border-black transition-all duration-700">View Details <IoIosArrowDroprightCircle className="text-3xl ml-2" /></h4>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center 2xl:col-span-3">
                    <div className="mb-4 md:mb-0 bg-white hover:opacity-100 opacity-75 text-black md:px-16 px-8 py-12 rounded-xl md:w-[440px] hover:md:scale-110 transition-all duration-500">
                        <h3
                            className="text-xl md:text-2xl font-medium">
                            <HiCodeBracketSquare
                                className="mr-2 text-7xl"
                            /> Customize Website
                        </h3>
                        <div className="mt-16 text-white flex justify-between gap-8">
                            <h4 onClick={() => setOpenModal({ true: 'true', service: 'customize' })}
                                className="flex items-center text-xl cursor-pointer px-4 py-2 rounded-full bg-black hover:bg-transparent hover:text-black font-medium border-2 border-black transition-all duration-700">View Details <IoIosArrowDroprightCircle className="text-3xl ml-2" /></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;