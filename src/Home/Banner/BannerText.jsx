import '../Home.css'

const BannerText = () => {
    return (
        <div className="flex">
            <h1
                data-aos="fade-right"
                data-aos-duration="3000" data-aos-easing="linear"
                data-aos-delay="500"
                className="font-extrabold text-[170px] absolute top-36 left-[240px] text-stroke z-10 hover:z-30">WEB DEVELOPER</h1>
        </div>
    );
};

export default BannerText;