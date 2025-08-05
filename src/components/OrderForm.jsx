import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import banner3 from "../assets/banner3.webp"; 

const OrderForm = () => {
  return (
    <section
      id="order"
      className="relative py-20 min-h-[600px] flex items-center bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${banner3})`,
      }}
    >
      
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center z-10">
        
      
        <div className="text-center md:text-left text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Place Your Order Now!
          </h2>
          <p className="text-gray-200 mb-6">
            Enjoy our fresh and delicious juices at your doorstep.  
            Fill in the form to place an order or call us directly for quick assistance.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="bg-green-600 text-white p-4 rounded-full text-3xl">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-gray-200">Quick Call</p>
              <p className="text-2xl font-bold text-white">+91 XXXXX XXXXX</p>
            </div>
          </div>
        </div>

        
        <form className="bg-black/40 backdrop-blur-sm p-8 rounded-xl shadow-lg space-y-5 text-white border border-green-500/30">
          <h3 className="text-2xl font-bold text-green-500 mb-4 text-center">
            Fill Your Order
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-green-500 rounded-lg bg-transparent focus:ring-2 focus:ring-green-500 outline-none placeholder-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-green-500 rounded-lg bg-transparent focus:ring-2 focus:ring-green-500 outline-none placeholder-gray-300"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border border-green-500 rounded-lg bg-transparent focus:ring-2 focus:ring-green-500 outline-none placeholder-gray-300"
          />
          <input
            type="text"
            placeholder="Juice Flavor"
            className="w-full p-3 border border-green-500 rounded-lg bg-transparent focus:ring-2 focus:ring-green-500 outline-none placeholder-gray-300"
          />
          <textarea
            placeholder="Delivery Address"
            rows="3"
            className="w-full p-3 border border-green-500 rounded-lg bg-transparent focus:ring-2 focus:ring-green-500 outline-none placeholder-gray-300"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg"
          >
            Order Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
