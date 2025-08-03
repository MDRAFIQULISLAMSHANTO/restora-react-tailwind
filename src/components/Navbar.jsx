import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

import { motion } from "framer-motion";

const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Adjust for fixed nav height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav 
     /* initial={{opacity: 0.8, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once: true}}
            transition={{duration: 0.3, delay: 0.2}} */
    className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
        <img src={logo} alt="logo" width={80} height={22} />
        <div className="hidden space-x-6 lg:flex ">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className={`text-sm ${
                index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""
              } hover:opacity-50`}
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className="block text-[F7EBC8]
              p-4 uppercase tracking-tighter"
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}  
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
