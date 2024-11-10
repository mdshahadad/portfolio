import profile from '../../../../public/images/profile.png'

const BannerImg = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex justify-center overflow-y-hidden z-10"
        >
            <div className="z-20 md:hover:z-10">
                {/* <img src={profile} alt="" /> */}
                {/* {`${profile ? profile || 'https://i.postimg.cc/FHk3HVM1/IMG-2036.png' : 'https://i.postimg.cc/FHk3HVM1/IMG-2036.png'}   `} */}
            </div>
        </div>
    );
};

export default BannerImg;