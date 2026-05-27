const About = ({ darkMode, setDarkMode }) => {
    return (
        <section className="px-4 py-12.5">
            <div className={`max-w-275 mx-auto p-7.5 rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.1)]
                            text-center animate-slideUp ${darkMode ? "bg-[#1E1E1E]" : "bg-white"}
                            transition-all duration-400`}>
                <h2 className="text-primary text-3xl font-bold mb-5">About Us</h2>

                <p className="md:text-lg leading-[1.7]">
                    She Can Foundation is a youth-driven NGO dedicated to creating
                    opportunities, spreading awareness, and generating positive social
                    impact through education, digital initiatives, and community-driven
                    programs.
                </p>

                <div className="my-7.5 overflow-hidden rounded-[15px]">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                        alt="Students Learning"
                        className="max-h-100 w-full object-cover hover:scale-[1.05]
                                   transition-[scale] duration-500"
                    />
                </div>

                <div className="mt-6.25">
                    <button className="btn bg-primary hover:bg-[#5148E5] hover:-translate-y-1
                    text-white transition-all duration-300">
                        Join Us
                    </button>
                    <button
                        className="btn bg-[#222] text-white"
                        onClick={() => {
                            setDarkMode(!darkMode);
                            localStorage.setItem("darkMode", JSON.stringify(!darkMode));
                        }}
                    >
                        Dark Mode
                    </button>
                </div>
            </div>
        </section>
    )
}

export default About;