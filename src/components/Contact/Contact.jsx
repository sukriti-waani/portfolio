import React from "react";
import { motion } from "framer-motion";
import { getImageUrl } from "../../utilis";

export const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "linkedin.png",
      url: "https://www.linkedin.com/in/sukriti-waani-5802a1313/",
      color: "#0077B5",
    },
    {
      name: "GitHub",
      icon: "github.png",
      url: "https://github.com/sukriti-waani",
      color: "#333",
    },
    {
      name: "Email",
      icon: "email.png",
      url: "mailto:sukritiwaani200@gmail.com",
      color: "#EA4335",
    },
    {
      name: "Whatsapp",
      icon: "whatsapp.png",
      url: "https://wa.me/9341263470?text=Hi%20Sukriti%2C%20I%20saw%20your%20portfolio!",
      color: "#EA4335",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-[#030014]"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-[#576cbc]">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-[#576cbc] mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0A0A0A] p-8 rounded-xl border border-[#2A0E61] shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#1A1A1A] border border-[#2A0E61] rounded-lg text-white focus:outline-none focus:border-[#576cbc] transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-[#1A1A1A] border border-[#2A0E61] rounded-lg text-white focus:outline-none focus:border-[#576cbc] transition-colors"
                  placeholder="Enter your Email"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 bg-[#1A1A1A] border border-[#2A0E61] rounded-lg text-white focus:outline-none focus:border-[#576cbc] transition-colors h-32"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#576cbc] text-white rounded-lg hover:bg-[#19376d] transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">
                Connect With Me
              </h3>
              <p className="text-gray-400">
                Choose your preferred way to get in touch
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-[#1A1A1A] rounded-lg border border-[#2A0E61] hover:border-[#576cbc] group transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img
                    src={getImageUrl(link.icon)}
                    alt={link.name}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>

            <div
              className="p-6 bg-[#1A1A1A] rounded-lg border border-[#2A0E61] text-center"
              data-aos="fade-up"
            >
              <h4 className="text-xl font-semibold text-white mb-2">
                Quick Response
              </h4>
              <p className="text-gray-400">
                I typically respond within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
