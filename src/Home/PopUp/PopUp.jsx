import { useEffect, useState } from "react";

const PopUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const showPopupTimeout = setTimeout(() => {
            setIsVisible(true);
        }, 10000); // Show popup after 10 seconds

        const hidePopupTimeout = setTimeout(() => {
            setIsVisible(false);
        }, 20000); // Hide popup after 20 seconds

        return () => {
            clearTimeout(showPopupTimeout);
            clearTimeout(hidePopupTimeout);
        };
    }, []);

    return (
        <div style={{ display: isVisible ? 'block' : 'none' }}>
            {/* Your popup content goes here */}
            <div className="bg-white text-black">Popup Content</div>
        </div>
    );
};

export default PopUp;