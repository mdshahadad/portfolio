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
                className='lg:font-extrabold xl:text-[180px] lg:text-[116px] xl:mx-0 lg:mx-4 text-strokeTitle bannerText z-0 hover:z-10 md:block hidden absolute top-36'>WEB DEVELOPER</h1>

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
                data-aos-delay="500"
                className='absolute xl:top-[420px] lg:top-80 xl:left-56 lg:left-12 space-y-5 z-20'>
                <p
                    className='text-white text-xl font-semibold text-start'>Building Strong, Reliable Foundations for <br className='xl:hidden' /> Your Business</p>
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