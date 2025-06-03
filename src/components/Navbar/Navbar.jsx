import React, { useState } from "react"; 
import { getImageUrl } from "../../utilis"; // Import a utility function to get image URLs

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track if mobile menu is open or closed

  return (
    <nav
      className="
        w-full z-50
        bg-gradient-to-tr from-primary via-dark to-bg
        shadow-2xl
        px-10 py-5
        flex justify-between items-center
        bg-[#030014]
      "
    >
      {/* Navbar container with full width, high z-index, background gradient, shadow, padding, flex layout */}

      {/* Title / Logo - clicking it navigates to homepage */}
      <a
        href="/"
        className="flex items-center gap-2 text-2xl font-bold text-white transition-colors duration-300"
      >
        <img
          src={getImageUrl("logo.png")}
          alt="logo"
          className="h-12 w-17 ml-8 object-contain"
        />
      </a>

      {/* Menu container */}
      <div className="relative">
        {/* Hamburger menu button for small screens (hidden on medium and above) */}
        <img
          className="block md:hidden cursor-pointer h-8 w-8 text-white"
          src={menuOpen ? getImageUrl("close.png") : getImageUrl("menu.png")} // Shows close icon if menu is open, else menu icon
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)} // Toggles menu open/close state on click
        />

        {/* Navigation menu items */}
        <ul
          className={`
            absolute right-0 top-full mt-2 bg-gradient-to-tr from-primary via-dark to-bg rounded-lg shadow-2xl
            md:static md:flex md:gap-6 md:bg-transparent md:shadow-none md:mt-0 md:rounded-none
            ${
              menuOpen
                ? "flex flex-col w-48 p-4 gap-3"
                : "hidden md:flex md:flex-row md:items-center"
            }
          `}
          onClick={() => setMenuOpen(false)} // Closes menu when any menu item is clicked (mainly for mobile)
        >
          {/* Map over menu items array and generate <li> and <a> for each */}
          {["about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`} // Link to section ID on the page
                className="
                  block px-3 py-2
                  text-lg font-bold text-text
                  hover:underline
                  transition
                  transform hover:-translate-y-0.5  
                  text-white
                "
              >
                {/* Capitalize first letter of menu item */}
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
