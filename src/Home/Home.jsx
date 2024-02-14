import Navbar from "./Navbar/Navbar";
import './Home.css'
import Banner from "./Banner/Banner";
import BannerText from "./Banner/BannerText";
import SocialIcons from "./SocialIcons/SocialIcons";

const Home = () => {
    return (
        <div className="bg-black">
            <Navbar></Navbar>
            <div>
                <Banner></Banner>
                <BannerText></BannerText>
                <SocialIcons></SocialIcons>
            </div>
        </div>
    );
};

export default Home;