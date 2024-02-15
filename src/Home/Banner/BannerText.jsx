import '../Home.css'

const BannerText = () => {
    return (
        <div className="flex z-10 justify-center">
            <h1
                data-aos="fade-down"
                data-aos-duration="3000" data-aos-easing="linear"
                data-aos-delay="500"
                className="font-extrabold text-[36px] md:text-[110px] lg:text-[170px] absolute top-32 md:40 lg:top-36 lg:left-[240px] text-stroke z-10 hover:z-30"
            > <span className=''>WEB </span>
                <span className=''>DEVELOPER</span>
            </h1>
        </div>
    );
};

export default BannerText;