const SkillsCard = () => {
    return (
        <div className="text-white flex justify-between max-w-5xl mx-auto mt-80">
            <div className="opacity-75">
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    className="bg-white
             text-black rounded-xl px-16 py-16 uppercase">
                    <div>
                        <h3 className="text-center text-2xl font-semibold mb-8">Front End</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-5 text-center skills-style font-medium">
                        <p>html</p>
                        <p>css</p>
                        <p>javascript</p>
                        <p>react</p>
                        <p>tailwind</p>
                        <p>json</p>
                        <p>firebase</p>
                        <p>react router</p>
                    </div>
                </div>
            </div>
            <div className="opacity-75">
                <div
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    className="bg-white
             text-black rounded-xl px-[92.5px] py-24 uppercase">
                    <div>
                        <h3 className="text-center text-2xl font-semibold mb-8">back End</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-5 text-center skills-style font-medium">
                        <p>node js</p>
                        <p>express js</p>
                        <p>mongodb</p>
                        <p>rest api</p>
                        <p>jwt</p>
                        <p>crud</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;