import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-gray-800">
          Mariel
        </a>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-700 font-medium gap-6 lg:gab-8 rounded-full px-12 py-3 bg-white">
        <li><a href="#home" className="hover:text-blue-500 transition font-serif">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500 transition">About me</a></li>
          <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
        </ul>
        <div>
        <div className="flex items-center gap-5">
 
  <button>
    <img src="/asset/moon.png" alt="Moon icon" className="w-6" />
  </button>
  <a
    href="#contact"
    className="hidden lg:flex items-center gap-3 px-5 py-2.5 border border-gray-500 rounded-full"
  >
    <span>Contact</span>
    <img src="/asset/right.png" alt="Arrow icon" className="w-3 h-3" />
  </a>
</div>

</div>



      </nav>
    </header>
  );
};

export default Navbar;
