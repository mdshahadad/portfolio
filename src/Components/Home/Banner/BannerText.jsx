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
                className='lg:font-extrabold 2xl:text-[180px] xl:text-[140px] lg:text-[116px] xl:mx-0 lg:mx-4 text-strokeTitle bannerText z-0 hover:z-10 absolute md:block hidden lg:top-36 top-0'>WEB DEVELOPER</h1>

            <h1
                data-aos="fade-down"
                data-aos-duration="2000" data-aos-easing="linear"
                data-aos-delay="100"
                className='text-strokeTitle bannerText z-0 flex flex-col items-center md:hidden absolute'>
                <p>WEB</p>
                <p>DEVELOPER</p>
            </h1>
            <div

                data-aos="fade-up"
                data-aos-duration="2200"
                data-aos-easing="linear"
                // data-aos-delay="500"
                className='absolute 2xl:top-[420px] xl:top-[380px] lg:top-[340px] top-[380px] 2xl:left-56 xl:left-36 lg:left-12 space-y-5 z-20'>
                <p
                    className='text-white md:text-xl text-lg font-semibold md:text-start text-center'>Building Strong, Reliable Foundations for <br className='xl:hidden' /> Your Business</p>
                <div className='md:block flex justify-center'>
                    <Link to="/contact">
                        <button className='bg-white opacity-75 text-black font-semibold text-xl md:px-10 px-8 flex items-center md:py-5 py-4 rounded-lg hover:opacity-100 hover:bg-transparent hover:text-white hover:outline-dotted transition-all duration-500 hover:scale-105'>Let's Handshake
                            <FaHandsHelping className='text-4xl ml-2' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerText;