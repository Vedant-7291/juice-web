import React from "react";
import { FaLeaf, FaAppleAlt, FaTruck } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaLeaf className="text-green-600 text-5xl mb-4" />,
    title: "100% Natural",
    description:
      "Our juices are made from completely natural ingredients without any artificial flavors or preservatives.",
  },
  {
    id: 2,
    icon: <FaAppleAlt className="text-green-600 text-5xl mb-4" />,
    title: "Super Fresh",
    description:
      "We source fresh fruits daily to ensure every glass of juice is full of vitamins and nutrients.",
  },
  {
    id: 3,
    icon: <FaTruck className="text-green-600 text-5xl mb-4" />,
    title: "Locally Supported",
    description:
      "We support local farmers by buying fruits directly, helping the community grow with us.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all bg-green-50"
            >
              {feature.icon}
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
