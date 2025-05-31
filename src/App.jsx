// Install fonts using:
// npm install @fontsource/roboto @fontsource/outfit

import React, { useEffect } from "react"; 
import styles from "./App.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import {About} from "./components/About/About";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animation should trigger once
    });
  }, []);

  return (
    <div className={styles.App}>
      <Navbar data-aos="zoom-in" />
      <Hero />
      <About />
    </div>
  );
}

export default App;
