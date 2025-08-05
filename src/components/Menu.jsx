import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import tail1 from "../assets/tail1.png"; 
import tail2 from "../assets/tail2.png"; 
import tail3 from "../assets/tail3.avif"; 
import tail6 from "../assets/tail6.png"; 
import tail8 from "../assets/tail8.png";

const Menu = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    { img: tail1, title: "10+", description: "Signature Cocktails" },
    { img: tail2, title: "15+", description: "Fresh Juices" },
    { img: tail6, title: "20+", description: "Seasonal Specials" },
    { img: tail8, title: "20+", description: "Creamy Shakes" },
  ];

  return (
    <section id="special" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 md:pr-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 mb-6 leading-tight font-playwrite">
              Explore Our Full Menu
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Discover our wide selection of handcrafted beverages made with premium ingredients
            </p>

            {/* Enhanced 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="flex items-center p-5 gap-6">
                    {/* Larger Image with hover effect */}
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src={feature.img}
                        alt={feature.title}
                        className="w-28 h-28 object-contain"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold text-green-700 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-lg font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-md"
            >
              <img
                src={tail3}
                alt="Special Menu"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Seasonal Special</h3>
                  <p className="text-gray-200">Try our limited edition summer blends</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Menu;