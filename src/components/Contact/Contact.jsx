import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-[#030014] via-[#0a0a22] to-[#1f1f3a] px-6 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 relative" data-aos="fade-down">
          {/* Glowing Light Behind Title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#576cbc] opacity-20 blur-3xl rounded-full z-0"></div>

          <h2 className="relative text-4xl md:text-5xl font-bold text-white mb-4 z-10">
            Contact <span className="text-[#576cbc]">Me</span>
          </h2>

          <div
            className="
          bg-gradient-to-br from-[#e5e5e5] to-[#cfd9e0] 
          rounded-3xl
          shadow-[10px_18px_30px_#a3b1c6,10px_10px_30px_#effffff]
          flex flex-col justify-center items-center p-12
          max-w-md w-full text-center
          dark:bg-gray-900
        "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h1 className="text-4xl font-extrabold mb-10 text-[#030014] dark:text-white">
              Login
            </h1>

            {/* Username Input */}
            <input
              type="text"
              placeholder="Username"
              className="
            bg-[#e5e5e5] dark:bg-gray-800 
            rounded-2xl
            shadow-[inset_10px_10px_20px_#a3b1ce,inset_-10px_-10px_20px_#ffffff]
            px-8 py-5 mb-8 w-full outline-none placeholder-gray-500 text-lg
            transition-all duration-300 focus:ring-2 focus:ring-[#576cbc] hover:ring-2 hover:ring-[#576cbc]
            dark:placeholder-gray-400 dark:text-white
          "
              data-aos="fade-up"
              data-aos-duration="1000"
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="
            bg-[#e5e5e5] dark:bg-gray-800
            rounded-2xl
            shadow-[inset_10px_10px_20px_#a3b1ce,inset_-10px_-10px_20px_#ffffff]
            px-8 py-5 mb-10 w-full outline-none placeholder-gray-500 text-lg
            transition-all duration-300 focus:ring-2 focus:ring-[#576cbc] hover:ring-2 hover:ring-[#576cbc]
            dark:placeholder-gray-400 dark:text-white
          "
              data-aos="fade-up"
              data-aos-duration="1200"
            />

            {/* Sign In Button */}
            <button
              className="
            bg-[#576cbc] 
            rounded-2xl
            px-10 py-5 text-xl font-semibold cursor-pointer
            text-white
            shadow-lg
            hover:bg-[#41589c] 
            transition-all duration-300
            hover:ring-4 hover:ring-[#576cbc]/70
            focus:outline-none focus:ring-4 focus:ring-[#576cbc]/70
          "
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
