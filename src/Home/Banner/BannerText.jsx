import '../Home.css'

const BannerText = () => {
    return (
        <div className="flex z-10 justify-center">
            <h1
                data-aos="fade-down"
                data-aos-duration="3000" data-aos-easing="linear"
                data-aos-delay="500"
                className="font-extrabold md:text-5xl text-6xl lg:text-[170px] absolute top-56 lg:top-36 lg:left-[240px] text-stroke z-10 hover:z-30 md:flex"
            > <span className='text-center flex justify-center md:mr-10'>WEB </span>
                <span className=''>DEVELOPER</span>
            </h1>
        </div>
    );
};

export default BannerText;