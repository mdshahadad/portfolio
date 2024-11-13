import BannerImg from "./BannerImg";
import BannerText from "./BannerText";

const Banner = () => {
    return (
        <div className="relative md:h-screen mb-64">
            <BannerImg></BannerImg>
            <BannerText></BannerText>
        </div>
    );
};

export default Banner;