import '../Components/Home/Home.css'

const ProjectsTitle = () => {
    return (
        <div
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-easing="linear"
            className="flex justify-center relative">

            {/* <h1
                className="text-strokeTitle title-position absolute z-0 hover:z-30 md:-top-10 font-extrabold uppercase title-style lg:text-[5px]"
            >What i did?</h1> */}
            <h1 className="text-strokeTitle title-position absolute md:-top-10 font-extrabold md:text-[110px] lg:text-[148px] xl:text-[180px] 2xl:text-[200px] z-0 hover:z-10 uppercase md:block hidden">What i did?</h1>

            <h1
                data-aos="fade-down"
                data-aos-duration="2000" data-aos-easing="linear"
                data-aos-delay="100"
                style={{fontSize: '58px'}}
                className='text-strokeTitle bannerText z-0 flex flex-col items-center md:hidden absolute bottom-10 uppercase'>What i did?
            </h1>
        </div>
    );
};

export default ProjectsTitle;