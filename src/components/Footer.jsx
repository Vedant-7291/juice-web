import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer 
      id="contact"
      className="relative text-white"
      ref={ref}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {/* About */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Juice<span className="text-primary">Bar</span></h3>
              <p className="mb-4">
                We're dedicated to providing the freshest, healthiest juices made from organic ingredients.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-green-300 transition-colors duration-300">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-green-300 transition-colors duration-300">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-white hover:text-green-300 transition-colors duration-300">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-white hover:text-green-300 transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white hover:text-green-300 transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#menu" className="text-white hover:text-green-300 transition-colors duration-300">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#special" className="text-white hover:text-green-300 transition-colors duration-300">
                    Special
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white hover:text-green-300 transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="group flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-primary group-hover:text-green-300 transition-colors duration-300" />
                  <span className="text-white group-hover:text-green-300 transition-colors duration-300">
                    123 Juice Street, City, Country
                  </span>
                </li>
                <li className="group flex items-start">
                  <FaPhone className="mt-1 mr-3 text-primary group-hover:text-green-300 transition-colors duration-300" />
                  <span className="text-white group-hover:text-green-300 transition-colors duration-300">
                    +1 234 567 890
                  </span>
                </li>
                <li className="group flex items-start">
                  <FaEnvelope className="mt-1 mr-3 text-primary group-hover:text-green-300 transition-colors duration-300" />
                  <span className="text-white group-hover:text-green-300 transition-colors duration-300">
                    info@juicebar.com
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Hours */}
            <div>
              <h4 className="text-xl font-bold mb-4">Opening Hours</h4>
              <ul className="space-y-3">
                <li className="group flex justify-between">
                  <span className="text-white group-hover:text-green-300 transition-colors duration-300">
                    Monday - Friday
                  </span>
                  <span className="text-white group-hover:text-green-300 transition-colors duration-300">
                    8:00 - 20:00
                  </span>
                </li>
                <li className="group flex justify-between">
                  <span className="text-white group-hover:text-green-300 transition-colors duration-300">
                    Saturday
                  </span>
                  <span className="text-white group-hover:text-green-300 transition-colors duration-300">
                    9:00 - 18:00
                  </span>
                </li>
                <li className="group flex justify-between">
                  <span className="text-white group-hover:text-green-300 transition-colors duration-300">
                    Sunday
                  </span>
                  <span className="text-white group-hover:text-green-300 transition-colors duration-300">
                    10:00 - 16:00
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-gray-700 mt-12 pt-8 text-center"
          >
            <p className="text-white hover:text-green-300 transition-colors duration-300">
              &copy; {new Date().getFullYear()} Zussioberry. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;