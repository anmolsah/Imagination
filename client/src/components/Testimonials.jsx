import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-20 py-12 px-4"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Header Section */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
        Customer Testimonials
      </h1>
      <p className="text-gray-500 mb-10 text-center">
        Discover what our satisfied users have to say about their experiences.
      </p>

      {/* Testimonials Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/20 p-8 rounded-lg shadow-lg border w-full cursor-pointer hover:scale-[1.05] hover:shadow-2xl transition-transform duration-300"
          >
            <div className="flex flex-col items-center text-center">
              {/* Profile Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-16 h-16 shadow-md mb-4"
              />

              {/* User Information */}
              <h2 className="text-xl font-semibold">{testimonial.name}</h2>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>

              {/* Rating */}
              <div className="flex gap-1 my-3">
                {Array(testimonial.stars)
                  .fill("")
                  .map((_, idx) => (
                    <img
                      key={idx}
                      src={assets.rating_star}
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-gray-600 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
