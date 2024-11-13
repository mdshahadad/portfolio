const ContactTitle = () => {
    return (
        <div
            // data-aos="fade-down"
            // data-aos-duration="1000"
            // data-aos-easing="linear"
            className="flex justify-center relative">

            {/* <h1
                className=" title-position absolute z-10 hover:z-20 md:-top-10 font-extrabold md:text-[110px] lg:text-[200px] uppercase"
            >LET'S TALK</h1> */}
            <h1 className="text-strokeTitle text-white absolute top-0 font-extrabold xl:text-[200px] lg:text-[168px] md:text-[110px] md:block hidden">LET'S TALK</h1>

            <h1
                data-aos="fade-down"
                data-aos-duration="2000" data-aos-easing="linear"
                data-aos-delay="100"
                style={{ fontSize: '65px' }}
                className='text-strokeTitle bannerText z-0 flex flex-col items-center md:hidden absolute bottom-10 uppercase'>LET'S TALK
            </h1>
        </div>
    );
};

export default ContactTitle;