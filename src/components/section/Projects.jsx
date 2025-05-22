import { RevealonScroll } from "../RevealonScroll";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealonScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">My portfolio</h3>
              <p className="text-gray-400 mb-4">One-page site where you can navigate to all my projects, get info about me and get in touch</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind", "CSS", "JS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center mt-4 ">
                <a
                  href="https://fr1sb.github.io/myportfolio/"
                  className=" text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Delizioso</h3>
              <p className="text-gray-400 mb-4">Just a simple site , restaraunt using only CSS + HTML to show that I know a basic layout skills</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["CSS", "HTML"].map(
                  (tech) => (
                    <span
                      
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center mt-4 ">
                <a
                  href="https://fr1sb.github.io/Delizioso/"
                  className=" text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2"> Пример работы хз пока</h3>
              <p className="text-gray-400 mb-4">о чем проеект</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Technology", "Technology", "Technology", "Technology"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center mt-4 ">
                <a
                  href="#"
                  className=" text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2"> Пример работы хз пока</h3>
              <p className="text-gray-400 mb-4">о чем проеект</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Technology", "Technology", "Technology", "Technology"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center mt-4 ">
                <a
                  href="#"
                  className=" text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealonScroll>
    </section>
  );
};
