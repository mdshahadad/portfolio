import '../Home.css'

const BannerText = ({ showMenu }) => {
    return (
        <div className="flex z-0 justify-center">
            {
                !showMenu &&
                <h1
                    data-aos="fade-down"
                    data-aos-duration="3000" data-aos-easing="linear"
                    data-aos-delay="500"
                    className="font-extrabold md:text-[110px] lg:text-[180px] md:top-48 lg:top-44 text-stroke z-10 hover:z-30 bannerText"
                > WEB DEVELOPER
                </h1>
            }
        </div>
    );
};

export default BannerText;