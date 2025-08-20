import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { getImageUrl } from "../../utilis";

// Frontend Projects
const frontendProjects = [
  {
    title: "E-Commerce Website",
    imageSrc: getImageUrl("ecommerce.png"),
    description: [
      "Built with React and Vite, featuring a fully responsive layout.",
      "Includes interactive UI components, product listings, and category navigation.",
      "Mimics a real shopping experience to showcase frontend development skills.",
    ],
    skills: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    demo: "https://astounding-pegasus-81f8dc.netlify.app",
    source: "https://github.com/sukriti-waani/ecommerce-website",
  },
  {
    title: "Food Delivery Website",
    imageSrc: getImageUrl("food.png"),
    description: [
      "Sections: Home, About, Products, Reviews, and FAQ with smooth navigation.",
      "Responsive UI built with HTML, CSS, JavaScript, and Bootstrap.",
      "Focused on real-world usability and modern design patterns.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demo: "https://guileless-dieffenbachia-f750c8.netlify.app",
    source: "https://github.com/sukriti-waani/food_delivery_website",
  },
  {
    title: "Myntra Functional Clone",
    imageSrc: getImageUrl("myntra.png"),
    description: [
      "Recreates Myntra’s UI with functional filtering, search, and product update features.",
      "Uses core JavaScript for real-time DOM manipulation without frameworks.",
      "Demonstrates ability to build scalable, interactive web UIs from scratch.",
    ],
    skills: ["HTML", "CSS", "JavaScript"],
    demo: "https://stellar-mochi-a54a9c.netlify.app",
    source: "https://github.com/sukriti-waani/Myntra_Functional_Clone",
  },
  {
    title: "Weather App",
    imageSrc: getImageUrl("weather.png"),
    description: [
      "Fetches and displays real-time weather data using a public API.",
      "Handles user input and updates UI dynamically based on location or city.",
      "Highlights skills in API integration and clean UI design.",
    ],
    skills: ["HTML", "CSS", "API", "JavaScript"],
    demo: "https://loquacious-dieffenbachia-6165a8.netlify.app",
    source: "https://github.com/sukriti-waani/weather_app",
  },
  {
    title: "Todo App List",
    imageSrc: getImageUrl("todo.png"),
    description: [
      "Built using React with Context API for centralized state management.",
      "Persists data in localStorage using useEffect, even after page refresh.",
      "Add, edit, and delete tasks — scalable, no prop drilling required.",
    ],
    skills: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    demo: "https://loquacious-dieffenbachia-6165a8.netlify.app",
    source:
      "https://github.com/sukriti-waani/React/tree/main/10todoContextLocal",
  },
];

// Backend Projects
const backendProjects = [
  {
    title: "Blogging Application",
    imageSrc: getImageUrl("blogging.png"),
    description: [
      "A full-featured blogging application with user authentication, CRUD operations for posts, and comment management.",
      "Built with Node.js and Express.js, ensuring scalability and modular architecture.",
      "Integrated MongoDB for secure data storage and retrieval.",
      "Demonstrates backend skills in RESTful API design, authentication, and database operations.",
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
    source: "https://github.com/sukriti-waani/blogging_application",
  },
  {
    title: "URL Shortener",
    imageSrc: getImageUrl("shortUrl.png"),
    description: [
      "A backend service that transforms long URLs into short, shareable links.",
      "Built using Node.js, Express.js, and MongoDB, it generates unique identifiers and redirects users to the original URLs via a clean RESTful API.",
      "This project demonstrates expertise in backend routing, unique ID generation, data persistence, and URL redirection logic—key components of a modern URL shortener system.",
    ],
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Unique ID Generation",
    ],
    source: "https://github.com/sukriti-waani/NodeJS/tree/main/Short-Url",
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Helper component to render projects
  const renderProjects = (projects) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-[#0A0A0A] rounded-xl overflow-hidden cursor-pointer group relative border border-transparent hover:border-[#576cbc] hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.03 }}
          onClick={() => setSelectedProject(project)}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* Project Info */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#576cbc] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {project.description.join(" ")}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 text-xs rounded-full bg-[#1A1A1A] text-gray-300 border border-[#2A0E61]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-[#030014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 relative" data-aos="fade-down">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#576cbc] opacity-20 blur-3xl rounded-full z-0"></div>
          <h2 className="relative text-4xl md:text-5xl font-bold text-white mb-4 z-10">
            My <span className="text-[#576cbc]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#576cbc] mx-auto rounded-full z-10 relative"></div>
          <p className="relative text-gray-400 mt-4 max-w-2xl mx-auto z-10">
            A showcase of the projects I have worked on, highlighting my skills
            and experience in various technologies.
          </p>
        </div>

        {/* Frontend Projects */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">
            Frontend <span className="text-[#576cbc]">Projects</span>
          </h3>
        </div>
        {renderProjects(frontendProjects)}

        {/* Backend Projects */}
        <div className="text-center mb-10 mt-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">
            Backend <span className="text-[#576cbc]">Projects</span>
          </h3>
        </div>
        {renderProjects(backendProjects)}

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-80"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#0A0A0A] rounded-xl overflow-hidden max-w-4xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedProject.imageSrc}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
                    {selectedProject.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {selectedProject.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-[#1A1A1A] text-gray-300 border border-[#2A0E61]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a
                    href={selectedProject.source}
                    className="px-6 py-2 border border-[#576cbc] text-[#576cbc] rounded-full hover:bg-[#576cbc] hover:text-white transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
