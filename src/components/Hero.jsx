import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import banner7 from '../assets/banner7.png';
import banner9 from '../assets/banner9.png' // Add your own images
import banner3 from '../assets/banner3.webp' // Add your own images

const slides = [
  {
    id: 1,
    title: 'Fresh & Healthy Juices',
    subtitle: '100% Natural Ingredients',
    description:
      'Discover our wide range of delicious and nutritious juices made from the freshest fruits and vegetables available and packed with essential vitamins and minerals.',
    image: banner7,
  },
  {
    id: 2,
    title: 'Detox & Cleanse',
    subtitle: 'Boost Your Immunity',
    description:
      'Our detox juices are packed with antioxidants to help cleanse your body and boost your immune system and overall health, naturally .',
    image: banner9,
  },
  {
    id: 3,
    title: 'Custom Blends',
    subtitle: 'Made Just For You',
    description:
      'Create your own unique juice blend tailored to your taste and nutritional needs, using our selection of fresh ingredients.',
    image: banner3,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden mt-16"
      ref={ref}
    >
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: slide.image ? `url(${slide.image})` : 'none',
              backgroundColor: slide.image ? 'transparent' : '#f0f0f0', // fallback color if no image
            }}
          />
        ))}

        {/* Slight Overlay to keep images vibrant */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            {slides[currentSlide].subtitle}
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-md">
            {slides[currentSlide].description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
          >
            Order Now
          </motion.button>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
