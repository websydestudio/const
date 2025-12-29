import { ArrowUpRight } from "lucide-react";

export function Navigation() {
  return (
<nav className="fixed top-0 left-0 right-0 bg-[#F5F5F5]/95 dark:bg-[#3A3A3C]/95 backdrop-blur-sm z-50 px-4 sm:px-6 py-4 border-b border-[#A8A8AA]/20">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">MHC</span>
          </div>
          <div className="font-montserrat font-bold text-xl text-gray-900 dark:text-white">
            MY HOME CONSTRUCTIONS
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="font-onest font-medium text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            className="font-onest font-medium text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-200"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="font-onest font-medium text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-200"
          >
            Portfolio
          </a>
          <a
            href="#services"
            className="font-onest font-medium text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-200"
          >
            Services
          </a>
          <a
            href="#contact"
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-onest font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            Contact Us
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1">
          <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300"></div>
          <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300"></div>
          <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300"></div>
        </button>
      </div>
    </nav>
  );
}
