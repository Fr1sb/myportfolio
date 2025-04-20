import { RevealonScroll } from "../RevealonScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealonScroll>
        <div className="text-center z-10 px-4 ">
          <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right mb-6">
            Hi, Im Vladislav
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm full-stack developer with a passion for creating dynamic and
            responsive web applications. I have a strong foundation in both
            front-end and back-end technologies, allowing me to build complete
            solutions that deliver exceptional user experiences.
          </p>
          <div className="flex justify-center space-x-4 ">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-transalte-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-transalte-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/20"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealonScroll>
    </section>
  );
};
