import BannerImg from "./BannerImg";
import BannerText from "./BannerText";

const Banner = () => {
    return (
        <div className="relative md:h-screen md:mb-0 mb-56">
            <BannerImg></BannerImg>
            <BannerText></BannerText>
        </div>
    );
};

export default Banner;