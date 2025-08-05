import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLeaf, FaHeartbeat, FaAppleAlt } from 'react-icons/fa';
import { GiOrange, GiStrawberry } from 'react-icons/gi';

const Details = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <FaLeaf className="text-4xl text-primary" />,
      title: "Fresh Ingredients",
      description: "We use only the freshest fruits and vegetables sourced from local farms."
    },
    {
      icon: <FaHeartbeat className="text-4xl text-primary" />,
      title: "Healthy Options",
      description: "Our juices are packed with vitamins and nutrients to boost your health."
    },
    {
      icon: <FaAppleAlt className="text-4xl text-primary" />,
      title: "No Added Sugar",
      description: "All our juices are 100% natural with no added sugars or preservatives."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Top Left Fruit Decoration */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={inView ? { opacity: 0.2, x: 0, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-0 left-0 text-primary-light z-0"
      >
        <GiOrange className="text-8xl md:text-9xl opacity-1 text-green-600" />
      </motion.div>

      {/* Bottom Right Fruit Decoration */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={inView ? { opacity: 0.2, x: 0, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-0 right-0 text-primary-light z-0"
      >
        <GiStrawberry className="text-8xl md:text-9xl opacity-1 text-green-600" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-4xl font-bold text-green-600 mb-4 font-playwrite">Nature Goodness In Every Sip</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are committed to providing the highest quality juices made from organic ingredients to help you lead a healthier lifestyle.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-white p-8 rounded-lg shadow-md hover:shadow-lg text-center transition-all duration-300 ${inView ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}
            >
              <div className="flex justify-center mb-4 text-green-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;