import '../Home.css'

const BannerText = () => {
    return (
        <div className="flex justify-center">
            <h1 className='lg:font-extrabold lg:text-[180px] text-strokeTitle bannerText z-10'>WEB DEVELOPER</h1>

            {/* <h1
                // data-aos="fade-down"
                // data-aos-duration="3000" data-aos-easing="linear"
                // data-aos-delay="500"
                className="md:text-[110px] md:top-48 lg:top-44 text-stroke z-10 hover:z-30 bannerText"
            > WEB DEVELOPER
            </h1> */}
        </div>
    );
};

export default BannerText;