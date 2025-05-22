import { RevealonScroll } from "../RevealonScroll";
export const About = () => {
  const frontendSkills = [
    "React",
    "Typescript",
    "Tailwindcss",
    "HTML",
    "CSS",
    "JavaScript",
  ];
  const backednSkills = ["Node.js", "MongoDB", "MySQL", "php"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealonScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with a strong foundation in both front-end
              and back-end technologies. I have a keen interest in creating
              dynamic and responsive web applications that provide exceptional
              user experiences. My journey in the tech world has equipped me
              with a diverse skill set, allowing me to tackle challenges across
              the entire development stack.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend </h3>
                <div className="flex flex-wrap gap-2">
                  {backednSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bachelor of Computer Science (BCompSc), Computer science</strong><br />Kazakh-British Technical University (2020-2024)
                </li>
                <li>System programming</li>
              </ul>
            </div>
          </div>
        </div>
      </RevealonScroll>
    </section>
  );
};
