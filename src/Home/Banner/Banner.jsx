import '../Home.css'

const Banner = ({ showMenu }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex justify-center overflow-y-hidden z-10"
        >
            {
                !showMenu &&
                <div  className="z-20 md:hover:z-10 lg:h-screen">
                    <img src="https://i.postimg.cc/FHk3HVM1/IMG-2036.png" alt="" />
                </div>
            }
        </div>
    );
};

export default Banner;