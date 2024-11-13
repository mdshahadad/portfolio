import '../Components/Home/Home.css'

const AboutMeTitle = () => {
    return (
        <div data-aos="fade-down"
            data-aos-duration="2000" data-aos-easing="linear"
            // data-aos-delay="500"
            className="flex justify-center relative">
            <h1 className="text-strokeTitle title-position absolute md:block hidden md:-top-11 font-extrabold md:text-[110px] lg:text-[168px] xl:text-[180px] 2xl:text-[200px] z-0 hover:z-10">WHO AM I?</h1>

            <h1
                data-aos="fade-down"
                data-aos-duration="2000" data-aos-easing="linear"
                data-aos-delay="100"
                className='text-strokeTitle bannerText z-0 flex flex-col items-center md:hidden absolute bottom-10'>
                <p>WHO AM I?</p>
            </h1>
        </div>
    );
};

export default AboutMeTitle;