import { HiDocumentArrowDown } from "react-icons/hi2";

const AboutMeText = () => {

    const handleDownload = () => {

        // const resumePath = '../../../public/shahadad_resume.pdf';

        // const link = document.createElement('a');
        // link.href = resumePath;
        // link.download = "shahadad_resume.pdf";
        // console.log(link)
        // link.click();

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
        <div className="">
            <div data-aos="fade-left"
                data-aos-duration="1000"
                // data-aos-delay="200"
                data-aos-easing="linear"
                className="z-20 md:hover:z-10 absolute top-20 md:top-28 right-0 md:right-60">
                <img className="opacity-25" src="https://i.postimg.cc/c4pMKW73/IMG-2118-1.png" alt="" />
            </div>
            <div
                data-aos="fade-right"
                data-aos-duration="1000"
                // data-aos-delay="200"
                data-aos-easing="linear"
                className="absolute bottom-10 md:bottom-56 w-3/4 md:w-1/3 font-medium text-xl left-8 md:left-[350px] z-20">
                <div className="space-y-5 hover:text-white md:text-[#ffffff] text-white md:opacity-75">
                    <h3><strong className="text-2xl md:text-4xl">Assalamualaikum,</strong> Everyone.</h3>
                    <p className="md:leading-8 leading-6">I am Md Shahadad Hossain, based in Bangladesh. I am student of Computer Science and Engineering. I am proficient at front end web technologies. I have been working for many months. I love building different kind of websites & love to doing work.</p>
                </div>

                <div className="">
                    <p className="text-base font-normal mt-4 md:mt-10 mb-1 md:mb-4 text-white opacity-75">Download My Resume</p>

                    <button
                        onClick={handleDownload}
                        className="md:px-12 px-10 md:bg-white border-2 md:border-0 opacity-75 hover:opacity-100 font-bold md:text-black text-white
                    md:py-5 py-4 rounded-lg flex justify-center items-center
                    hover:bg-transparent hover:text-white
                    hover:outline-dotted text-xl uppercase hover:scale-110 transition-all">
                        Resume
                        <HiDocumentArrowDown className="text-4xl ml-2"></HiDocumentArrowDown>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutMeText;