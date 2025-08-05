import React from "react";
import juice from "../assets/juice.jpg"; // Add your own image

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image */}
        <div className="w-full h-full flex justify-center">
          <img
            src={juice} // <-- Put your about image here
            alt="Fresh Juice"
            className="rounded-xl shadow-lg max-h-[450px] object-cover"
          />
        </div>

        {/* Right Side: About Content */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl md:text-4xl font-bold text-green-700 mb-4 font-playwrite">
            Welcome to Zussioberry
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At Zussioberry, we are passionate about serving you the freshest, 
            most delicious juices made from 100% natural fruits and ingredients. 
            Our mission is to provide a healthy and refreshing experience in every sip.  
            <br /> <br />
            We support local farmers, ensure top-quality products, and believe 
            that health and taste can go hand in hand. Join us and explore 
            our wide range of fruit juices, smoothies, and shakes!
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
