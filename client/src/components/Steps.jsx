import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "framer-motion";

const Steps = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-32 px-5"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-gray-800">
        How It Works
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Transform Words Into Stunning Images with Ease
      </p>

      {/* Steps Container */}
      <div className="space-y-6 w-full max-w-3xl">
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-6 p-5 bg-gradient-to-r from-blue-100 via-blue-50 to-white rounded-lg shadow-lg border hover:scale-[1.05] hover:shadow-2xl transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Icon */}
            <img
              width={50}
              src={item.icon}
              alt={`${item.title} icon`}
              className="flex-shrink-0"
            />
            {/* Content */}
            <div>
              <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
              <p className="text-gray-600 mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
