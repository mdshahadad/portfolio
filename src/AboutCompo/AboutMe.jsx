import { HiDocumentArrowDown } from "react-icons/hi2";

const AboutMe = () => {
    const handleDownload = () => {

        fetch("shahadad_resume.pdf")
            .then((response) => {
                console.log(response)
                response.blob()
                    .then((blob) => {
                        console.log(blob)

                        // Creating new object of PDF file
                        const fileURL =
                            window.URL.createObjectURL(blob);
                        console.log(fileURL)

                        // // Setting various property values
                        let alink = document.createElement("a");
                        alink.href = fileURL;
                        alink.download = "shahadad_resume.pdf";
                        alink.click();
                    });
            });
    }

    return (
        <div className="h-screen relative overflow-y-hidden">
            <div
                data-aos="fade-left"
                data-aos-duration="1800"
                // data-aos-delay="200"
                data-aos-easing="linear"
                className="absolute 2xl:top-28 xl:top-24 md:top-28 md:right-60 right-0">
                <img className="opacity-25 hover:opacity-100 transition duration-1000 z-10 hover:z-0" src="https://i.postimg.cc/c4pMKW73/IMG-2118-1.png" alt="" />
            </div>
            <div
                data-aos="fade-right"
                data-aos-duration="1800"
                // data-aos-delay="200"
                data-aos-easing="linear"
                className="absolute 2xl:bottom-48 xl:bottom-12 lg:bottom-10 md:bottom-56 bottom-28 2xl:w-2/6 xl:w-3/6 lg:w-4/6 md:w-1/3 font-medium text-xl md:mx-0 mx-4 2xl:left-96 xl:left-60 lg:left-20 md:left-[350px] z-20">
                <div className="space-y-5 hover:text-white md:text-[#ffffff] text-white md:opacity-75">
                    <h3><strong className="text-2xl md:text-4xl">Assalamualaikum,</strong> Everyone.</h3>
                    <p className="md:leading-8 leading-6">I am Md Shahadad Hossain, based in Bangladesh. I am student of Computer Science and Engineering. I am proficient at front end web technologies. I have been working for years. I love building strong, reliable websites & love to doing work.</p>
                </div>

                <div className="md:mt-10 mt-4">
                    {/* <p className="text-base font-normal md:mt-10 mb-1 md:mb-4 text-white opacity-75">Download My Resume</p> */}

                    <button
                        onClick={handleDownload}
                        className="lg:px-14 md:px-12 px-10 bg-white opacity-75 hover:opacity-100 font-bold text-black md:py-5 py-4 rounded-lg flex justify-center items-center
                    hover:bg-transparent hover:text-white
                    hover:outline-dotted text-xl uppercase hover:scale-110 transition-all duration-700">
                        Resume
                        <HiDocumentArrowDown className="text-4xl ml-2"></HiDocumentArrowDown>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;