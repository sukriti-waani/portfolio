export const About = () => {
  return (
    <section id="about" className="py-20 bg-[#030014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 relative" data-aos="fade-down">
          {/* Glowing Light Behind Title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#576cbc] opacity-20 blur-3xl rounded-full z-0"></div>
          <h2 className="relative text-4xl md:text-5xl font-bold text-white mb-4 z-10">
            About <span className="text-[#576cbc]">Me</span>
          </h2>
        </div>

        {/* Introductory Paragraph */}
        <div
          className="max-w-3xl mx-auto text-center text-white mb-14"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-lg leading-relaxed">
            I’m a third-year B.Tech Computer Science Engineering student
            passionate about continuous learning, problem-solving, and
            innovation in technology.
            <br />
            I’m currently strengthening my skills in Data Structures and
            Algorithms (DSA) while building full stack web applications using
            the MERN Stack (MongoDB, Express.js, React.js, Node.js). Alongside
            development, I focus on UI/UX design, creating user-friendly and
            visually appealing digital experiences.
            <br />
            Recently, I’ve also explored Robotic Process Automation (RPA) using
            UiPath, building bots to automate tasks like deadline reminders and
            workflow management. This has fueled my interest in combining
            software development with automation to deliver smarter solutions.
            <br />I enjoy building real-world applications, collaborating on
            tech-driven projects, contributing to open-source, and seeking
            internship opportunities to gain practical exposure while
            continuously exploring new technologies.
          </p>
        </div>

        {/* Skills Cards */}
        {/* <div className={styles.content}>
          <ul className={styles.aboutItems}>
            <li
              className={styles.aboutItem}
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <img src={getImageUrl("program.png")} alt="Program icon" />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  I build pixel-perfect, lightning-fast web interfaces that fuse
                  aesthetic design with efficient engineering. I transform
                  complex UI challenges into elegant, reusable
                  components—prioritizing speed, accessibility, and seamless
                  cross-device experiences.
                </p>
              </div>
            </li>

            <li
              className={styles.aboutItem}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <img src={getImageUrl("database.png")} alt="Database icon" />
              <div className={styles.aboutItemText}>
                <h3>Databases</h3>
                <p>
                  I have hands-on experience with both SQL and NoSQL databases
                  like MySQL and MongoDB. From designing normalized schemas to
                  implementing real-world data operations, I ensure data is
                  structured, secure, and efficiently retrievable.
                </p>
              </div>
            </li>

            {/* ✅ New Backend Section */}
        {/* <li
              className={styles.aboutItem}
              data-aos="fade-right"
              data-aos-duration="1100"
              data-aos-delay="300"
            >
              <img src={getImageUrl("backend.png")} alt="Backend icon" />
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  I specialize in building scalable and secure server-side
                  applications using Node.js and Express.js. From designing
                  RESTful APIs to managing authentication, middleware, and
                  server logic, I ensure smooth integration between the frontend
                  and backend. I focus on performance, security, and
                  maintainability.
                </p>
              </div>
            </li>

            <li
              className={styles.aboutItem}
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <img src={getImageUrl("UI.png")} alt="UI icon" />
              <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>
                  With a passion for clean and intuitive design, I create
                  landing pages and user interfaces that enhance user
                  engagement. I apply modern UI/UX principles, wireframing, and
                  tools like Figma to deliver seamless digital experiences.
                </p>
              </div>
            </li>
          </ul>
        </div> */}
      </div>
    </section>
  );
};
