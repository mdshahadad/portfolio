import Navbar from "./Navbar/Navbar";
import './Home.css'

const Home = () => {
    return (
        <div className="bg-black w-full">
            <Navbar></Navbar>
            <div
                className="relative">
                <div
                    data-aos="fade-up"
                    data-aos-duration="1400"
                    data-aos-delay="50"
                    className="flex justify-center mt-8"
                >
                    <img className="z-20 hover:z-10" src="https://i.postimg.cc/FHk3HVM1/IMG-2036.png" alt="" />
                </div>

                <div className="flex justify-center fill-slate-50 py-0">
                    <h1
                        data-aos="fade-right"
                        data-aos-duration="3000" data-aos-easing="linear"
                        data-aos-delay="1000"
                        className="font-extrabold text-[170px] absolute top-32 text-stroke z-10 hover:z-30">WEB DEVELOPER</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;