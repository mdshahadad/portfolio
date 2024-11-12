import '../Home.css'

const BannerText = () => {
    return (
        <div className="flex justify-center z-0 hover:z-10">
            <h1
                data-aos="fade-down"
                data-aos-duration="2000" data-aos-easing="linear"
                data-aos-delay="100"
                className='lg:font-extrabold lg:text-[180px] text-strokeTitle bannerText z-0 md:block hidden absolute top-36'>WEB DEVELOPER</h1>

            {/* <h1
                data-aos="fade-down"
                data-aos-duration="2000" data-aos-easing="linear"
                data-aos-delay="100"
                className='lg:font-extrabold lg:text-[180px] text-strokeTitle bannerText z-0 lg:mt-24 flex flex-col items-center md:hidden'>
                <p>WEB</p>
                <p>DEVELOPER</p>
            </h1> */}
            <div>
                <p
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                    data-aos-easing="linear"
                    data-aos-delay="200"
                    className='text-white md:mt-[350px] mt-72 text-3xl font-semibold text-center'>Building Strong, Reliable Foundations for Your Business</p>
            </div>
        </div>
    );
};

export default BannerText;