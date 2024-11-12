import { FaHandsHelping } from 'react-icons/fa';
import '../Home.css'
import { Link } from 'react-router-dom';

const BannerText = () => {
    return (
        <div className="flex justify-center">
            <h1
                data-aos="fade-down"
                data-aos-duration="2000" data-aos-easing="linear"
                data-aos-delay="100"
                className='lg:font-extrabold lg:text-[180px] text-strokeTitle bannerText z-0 hover:z-10 md:block hidden absolute top-36'>WEB DEVELOPER</h1>

            {/* <h1
                data-aos="fade-down"
                data-aos-duration="2000" data-aos-easing="linear"
                data-aos-delay="100"
                className='lg:font-extrabold lg:text-[180px] text-strokeTitle bannerText z-0 lg:mt-24 flex flex-col items-center md:hidden'>
                <p>WEB</p>
                <p>DEVELOPER</p>
            </h1> */}
            <div

                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-easing="linear"
                data-aos-delay="1000"
                className='absolute top-16 left-56 space-y-4'>
                <p
                    className='text-white md:mt-[350px] mt-72 text-xl font-semibold text-center'>Building Strong, Reliable Foundations for Your Business</p>
                <div>
                    <Link to="/contact">
                        <button className='bg-white opacity-75 text-black font-semibold text-xl px-8 flex items-center py-4 rounded-lg hover:opacity-100 hover:bg-transparent hover:text-white hover:outline-dotted transition-all duration-200 hover:scale-105'>Let's Handshake
                            <FaHandsHelping className='text-4xl ml-2' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerText;