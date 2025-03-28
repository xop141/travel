"use client";
import { Facebook,Instagram,Twitter  } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 flex flex-col gap-[20px]">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2025 Your Company Name. All rights reserved.</p>
        <div className="mt-4">
          <a href="#home" className="mx-3 hover:text-yellow-500">
            Home
          </a>
          <a href="#about" className="mx-3 hover:text-yellow-500">
            About
          </a>
          <a href="#services" className="mx-3 hover:text-yellow-500">
            Services
          </a>
          <a href="#contact" className="mx-3 hover:text-yellow-500">
            Contact
          </a>
        </div>
        
        
      </div>
      <div className='flex justify-center gap-[10px]'>
        <Facebook className='hover:text-yellow-500'/>
        <Instagram  className='hover:text-yellow-500'/>
        <Twitter  className='hover:text-yellow-500'/>
        </div>
    </footer>
  );
};

export default Footer;
