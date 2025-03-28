"use client";
import { useState, useEffect } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Detect the scroll position and toggle sticky class
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Main Content Wrapper */}
      <main className={`transition-all duration-500 ${isSticky ? 'pt-16' : 'pt-72'}`}>
        {/* Content below the header */}
        <div className="content">
          {/* Your content goes here */}
         
        </div>
      </main>

      <header
        className={`fixed top-0 left-0 right-0 w-full transition-all duration-500 ease-in-out z-50 ${
          isSticky ? 'bg-black h-16 shadow-xl' : 'bg-gray-900 h-72 shadow-2xl'
        }`}
      >
        <div className="text-center pt-16">
          <h1
            className={`text-white text-4xl font-light transition-all duration-300 ${
              isSticky ? 'transform scale-0 opacity-0' : 'scale-100 opacity-100'
            }`}
          >
            Header Title
          </h1>
        </div>
        <nav
          className={`absolute bottom-0 w-full h-16 flex items-center justify-center transition-all duration-500 ${
            isSticky ? 'bg-black bg-opacity-90 shadow-xl' : 'bg-black bg-opacity-50'
          }`}
        >
          <a
            href="#home"
            className="text-white py-2 px-4 hover:shadow-2xl hover:bg-white hover:text-black rounded-lg transition-all duration-300 ease-in-out mx-2"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white py-2 px-4 hover:shadow-2xl hover:bg-white hover:text-black rounded-lg transition-all duration-300 ease-in-out mx-2"
          >
            About
          </a>
          <a
            href="#services"
            className="text-white py-2 px-4 hover:shadow-2xl hover:bg-white hover:text-black rounded-lg transition-all duration-300 ease-in-out mx-2"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-white py-2 px-4 hover:shadow-2xl hover:bg-white hover:text-black rounded-lg transition-all duration-300 ease-in-out mx-2"
          >
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
