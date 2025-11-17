import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-gradient-to-b text-white py-16 pb-6">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-raleway text-3xl font-semibold mb-4">TahirFolio</h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Crafting digital experiences through clean code and intuitive design. 
              Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white  rounded-full  transition-colors">
                <Github className='text-black' size={20} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full transition-colors">
                <Linkedin className='text-black' size={20} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full transition-colors">
                <Mail className='text-black' size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#CDFF00]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <span 
                  onClick={() => scrollToSection("home")} 
                  className="text-gray-300 hover:text-[#c9f31d] transition-colors cursor-pointer"
                >
                  Home
                </span>
              </li>
              <li>
                <span 
                  onClick={() => scrollToSection("stats")} 
                  className="text-gray-300 hover:text-[#c9f31d] transition-colors cursor-pointer"
                >
                  About
                </span>
              </li>
              <li>
                <span 
                  onClick={() => scrollToSection("portfolio")} 
                  className="text-gray-300 hover:text-[#c9f31d] transition-colors cursor-pointer"
                >
                  Portfolio
                </span>
              </li>
              <li>
                <span 
                  onClick={() => scrollToSection("contact")} 
                  className="text-gray-300 hover:text-[#c9f31d] transition-colors cursor-pointer"
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white" />
                <span className="text-gray-300">tahir@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-white" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-white" />
                <span className="text-gray-300">Your Location</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm text-center">
            © 2024 TahirFolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
