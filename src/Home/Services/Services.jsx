import ServicesCard from "./ServicesCard";
import ServicesTitle from "./ServicesTitle";

const Services = () => {
    return (
        <div className="bg-black">
            <div className="relative">
                <ServicesTitle></ServicesTitle>
            </div>
            <h3 className="text-white opacity-65 font-medium text-3xl text-center mt-60">Choose which service you want</h3>
            <ServicesCard></ServicesCard>
        </div>
    );
};

export default Services;