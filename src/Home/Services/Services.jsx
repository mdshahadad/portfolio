import ServicesCard from "./ServicesCard";
import ServicesTitle from "./ServicesTitle";

const Services = () => {
    return (
        <div className="bg-black mb-20">
            <div className="relative">
                <ServicesTitle></ServicesTitle>
            </div>
            <h3 className="text-white opacity-65 font-medium text-3xl text-center mt-72 uppercase">Choose services you want</h3>
            <ServicesCard></ServicesCard>
        </div>
    );
};

export default Services;