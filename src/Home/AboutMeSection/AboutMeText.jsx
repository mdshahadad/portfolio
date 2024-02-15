import { HiDocumentArrowDown } from "react-icons/hi2";

const AboutMeText = () => {
    return (
        <div className="">
            <div data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-delay="900"
                data-aos-easing="linear"
                className="z-20 md:hover:z-10 absolute bottom-0 right-52">
                <img className=" " src="https://i.postimg.cc/c4pMKW73/IMG-2118-1.png" alt="" />
            </div>
            <div
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="900"
                data-aos-easing="linear"
                className="absolute bottom-56 w-1/3 font-medium text-xl left-[420px]">
                <div className="space-y-5 hover:text-white hover:opacity-70 text-[#949090] opacity-85 ">
                    <h3><strong className="text-4xl">Assalamualaikum,</strong> Everyone.</h3>
                    <p className="leading-8">I am Md Shahadad Hossain, based in Bangladesh. I am student of Computer Science and Engineering. I am proficient at front end web technologies. I have been working for many months. I love building different kind of websites & love to doing work.</p>
                </div>

                <div className="">
                    <p className="text-base font-normal mt-10 mb-4 text-white opacity-75">---- Here is my Resume ----</p>
                    <button className="px-12 bg-white opacity-75 hover:opacity-100 font-medium text-black py-5 rounded-lg flex justify-center items-center">
                        Resume
                        <HiDocumentArrowDown className="text-2xl ml-2"></HiDocumentArrowDown>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutMeText;