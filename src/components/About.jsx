import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import juice from "../assets/juice.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 bg-white" id="about" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full h-full flex justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            src={juice}
            alt="Fresh Juice"
            className="rounded-xl shadow-lg max-h-[500px] object-cover"
          />
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 mb-6 leading-tight font-playwrite">
            Welcome to Zuisobbery
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At Zussioberry, we are passionate about serving you the freshest,
            most delicious juices made from 100% natural fruits and ingredients.
            Our mission is to provide a healthy and refreshing experience in every sip.
            <br /><br />
            We support local farmers, ensure top-quality products, and believe
            that health and taste can go hand in hand. Join us and explore
            our wide range of fruit juices, smoothies, and shakes!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
          >
            View More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
