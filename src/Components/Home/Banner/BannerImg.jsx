const BannerImg = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex justify-center overflow-y-hidden"
        >
            <div className="z-10 hover:z-0 flex justify-center md:mt-0 mt-10">
                <img className="xl:w-full lg:w-11/12 w-11/12" src={`https://i.postimg.cc/m2kyBhGV/Banner-Img-without-bg.png`} alt="" />
            </div>
        </div>
    );
};

export default BannerImg;