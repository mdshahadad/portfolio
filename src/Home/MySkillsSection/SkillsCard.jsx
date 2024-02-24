import { BsFillCheckCircleFill } from "react-icons/bs";


const SkillsCard = () => {
    return (
        <div className="text-white md:flex justify-between md:max-w-5xl md:mx-auto mt-20 px-5 overflow-x-hidden md:overflow-visible">
            <div

                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                className="cursor-pointer">
                <div
                    className="bg-white opacity-75
             text-black rounded-xl px-4 md:px-16 py-16 uppercase hover:opacity-100 hover:scale-105 hover:transition-all mb-5 md:mb-0">
                    <div>
                        <h3 className="text-center text-2xl font-semibold mb-8">Front End</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-2 md:gap-5 skills-style font-medium">
                        <p><BsFillCheckCircleFill className="mr-2" />html</p>
                        <p><BsFillCheckCircleFill className="mr-2" />javascript</p>
                        <p><BsFillCheckCircleFill className="mr-2" />css</p>
                        <p><BsFillCheckCircleFill className="mr-2" />react</p>
                        <p><BsFillCheckCircleFill className="mr-2" />tailwind</p>
                        <p><BsFillCheckCircleFill className="mr-2" />react router</p>
                        <p><BsFillCheckCircleFill className="mr-2" />bootstrap</p>
                        <p><BsFillCheckCircleFill className="mr-2" />json</p>
                    </div>
                </div>
            </div>
            <div
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                className="cursor-pointer">
                <div
                    className="bg-white opacity-75
             text-black rounded-xl px-[18px] md:px-[92.5px] py-16 md:py-24 uppercase hover:opacity-100 hover:scale-105 hover:transition-all">
                    <div>
                        <h3 className="text-center text-2xl font-semibold mb-8">back End</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-2 md:gap-5 skills-style font-medium">
                        <p><BsFillCheckCircleFill className="mr-2" />node js</p>
                        <p><BsFillCheckCircleFill className="mr-2" />firebase</p>
                        <p><BsFillCheckCircleFill className="mr-2" />express js</p>
                        <p><BsFillCheckCircleFill className="mr-2" />rest api</p>
                        <p><BsFillCheckCircleFill className="mr-2" />mongodb</p>
                        <p><BsFillCheckCircleFill className="mr-2" />jwt</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;