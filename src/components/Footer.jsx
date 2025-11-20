import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const { ref, isInView } = useScrollAnimation();

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
      <div ref={ref} className="max-w-[1300px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-raleway text-3xl font-semibold mb-4">TahirFolio</h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Crafting digital experiences through clean code and intuitive design.
              Let's build something amazing together.
            </p>
            <motion.div
              className="flex gap-4"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-2 bg-white rounded-full transition-colors"
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className='text-black' size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#CDFF00]">Quick Links</h3>
            <motion.ul
              className="space-y-2"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.4
                  }
                }
              }}
            >
              {[
                { id: "home", label: "Home" },
                { id: "stats", label: "About" },
                { id: "portfolio", label: "Portfolio" },
                { id: "contact", label: "Contact" }
              ].map((link) => (
                <motion.li
                  key={link.id}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <motion.span
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-[#c9f31d] transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <motion.div
              className="space-y-3"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5
                  }
                }
              }}
            >
              {[
                { icon: Mail, text: "tahir@example.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "Your Location" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 5 }}
                >
                  <contact.icon size={18} className="text-white" />
                  <span className="text-gray-300">{contact.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400 text-sm text-center">
            © 2024 TahirFolio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
