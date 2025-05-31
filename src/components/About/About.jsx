import React from "react";
import { getImageUrl } from "../../utilis";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section
      className={styles.container}
      id="about"
      data-aos="fade-up"               // Animate section on scroll
      data-aos-duration="1000"
    >
      <h2 className={styles.title} data-aos="fade-down" data-aos-duration="1000">
        About
      </h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("img3.jpg")}
          alt="Me sitting with a Laptop"
          className={styles.aboutImage}
          data-aos="zoom-in"             // Zoom in animation for image
          data-aos-duration="1000"
        />
        <ul className={styles.aboutItems}>
          <li
            className={styles.aboutItem}
            data-aos="fade-right"          // Slide right animation for item
            data-aos-duration="800"
          >
            <img src={getImageUrl("program.png")} alt="Program icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with experience in developing responsive and optimized sites.
              </p>
            </div>
          </li>
          <li
            className={styles.aboutItem}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"           // Delay for staggered animation
          >
            <img src={getImageUrl("database.png")} alt="Database icon" />
            <div className={styles.aboutItemText}>
              <h3>Databases</h3>
              <p>
                I have learned and worked with SQL and MongoDB to manage and organize data efficiently.
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
                I have learned UI design and created landing pages, enhancing my skills in designing user-friendly and visually appealing interfaces.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
