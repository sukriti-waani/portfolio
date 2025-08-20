import { getImageUrl } from "../../utilis";

export const Skills = () => {
  const skillsData = {
    Frontend: [
      { name: "HTML", icon: "html.png" },
      { name: "CSS", icon: "css.png" },
      { name: "JavaScript", icon: "javascript.png" },
      { name: "React JS", icon: "react.png" },
      { name: "Redux", icon: "redux.png" },
      { name: "Tailwind CSS", icon: "tailwind.png" },
      { name: "Bootstrap", icon: "bootstrap.png" },
    ],
    Backend: [
      { name: "Node JS", icon: "nodejs.png" },
      { name: "MySQL", icon: "mysql.png" },
      { name: "MongoDB", icon: "mongodb.png" },
      { name: "Express JS", icon: "express.png" },
    ],
    Languages: [
      { name: "C", icon: "c.png" },
      { name: "C++", icon: "cpp.png" },
      { name: "Java", icon: "java.png" },
      { name: "Python", icon: "python.png" },
      { name: "JavaScript", icon: "javascript.png" },
    ],
    Tools: [
      { name: "Git", icon: "git.png" },
      { name: "GitHub", icon: "github.png" },
      { name: "VS Code", icon: "vscode.png" },
      { name: "Netlify", icon: "netlify.png" },
      { name: "Figma", icon: "figma.png" },
      { name: "UiPath Studio", icon: "uipath.png" },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-[#030014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 relative" data-aos="fade-down">
          {/* Glowing Light Behind Title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#576cbc] opacity-20 blur-3xl rounded-full z-0"></div>

          <h2 className="relative text-4xl md:text-5xl font-bold text-white mb-4 z-10">
            My <span className="text-[#576cbc]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#576cbc] mx-auto rounded-full z-10 relative"></div>
          <p className="relative text-gray-400 mt-4 max-w-2xl mx-auto z-10">
            Technologies and tools I’ve mastered to build efficient and scalable
            web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(
            ([category, skills], categoryIndex) => (
              <div
                key={category}
                className="bg-[rgba(12,12,12,0.6)]/90 rounded-xl p-6 border border-[#fff] shadow-[0_0_15px_rgba(42,14,97,0.5)] transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[0_0_25px_rgba(42,14,97,0.7)]"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={categoryIndex * 100}
              >
                <h3
                  className="text-2xl font-semibold text-gray-200 mb-6"
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  {category}
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center gap-2"
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay={skillIndex * 50}
                    >
                      <div className="p-2 rounded-lg bg-[#0A0A0A] border border-[#2A0E61] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(42,14,97,0.5)]">
                        <img
                          src={getImageUrl(skill.icon)}
                          alt={skill.name}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span className="text-[#ADB7BE] text-xs text-center group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
