import Navbar from "./Navbar/Navbar";
import './Home.css'
import Banner from "./Banner/Banner";
import BannerText from "./Banner/BannerText";
import SocialIcons from "./SocialIcons/SocialIcons";
import MouseScroll from "./MouseScroll/MouseScroll";

const Home = () => {
    return (
        <div className="bg-black">
            <Navbar></Navbar>
            <div className="relative">
                <Banner></Banner>
                <BannerText></BannerText>
                {/* <SocialIcons></SocialIcons>
                <MouseScroll></MouseScroll> */}
            </div>
        </div>
    );
};

export default Home;