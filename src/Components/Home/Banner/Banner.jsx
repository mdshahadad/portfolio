import BannerImg from "./BannerImg";
import BannerText from "./BannerText";

const Banner = () => {
    return (
        <div className="relative h-screen">
            <BannerImg></BannerImg>
            <BannerText></BannerText>
        </div>
    );
};

export default Banner;