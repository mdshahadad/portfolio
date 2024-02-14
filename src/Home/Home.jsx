import Navbar from "./Navbar/Navbar";
import './Home.css'

const Home = () => {
    return (
        <div className="bg-[#010101]">
            <Navbar></Navbar>
            <div className="relative">
                <div className="flex justify-center mt-8">
                    <img className="z-20 hover:z-10" src="https://i.postimg.cc/FHk3HVM1/IMG-2036.png" alt="" />
                </div>
                <div className="flex justify-center fill-slate-50 ">
                    <h1 className="text-white font-extrabold text-[170px] absolute top-32 text-stroke z-10 hover:z-30">WEB DEVELOPER</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;