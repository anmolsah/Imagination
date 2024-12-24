import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Empower Your Creativity
      </h1>
      <p className="text-gray-500 mb-8">
        AI-Powered Tools for Boundless Innovation
      </p>

      {/* Content Section */}
      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        {/* Image */}
        <img
          src={assets.image1}
          className="w-80 xl:w-96 rounded-lg shadow-xl"
          alt="AI-generated visual"
        />

        {/* Description Content */}
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Empower Your Creativity with AI-Driven Image Generation
          </h2>
          <p className="text-gray-600 mb-4">
            Step into the future of design and storytelling with our AI-powered
            text-to-image generator. Whether you're an artist, marketer, or
            innovator, transform your wildest ideas into captivating visuals
            instantly. With our intuitive platform, the possibilities are as
            boundless as your imagination.
          </p>
          <p className="text-gray-600 mb-4">
            Craft professional-quality images from simple text prompts in
            seconds. Whether it's conceptual art, product mockups, or something
            completely abstract, our AI ensures stunning results every time.
            Imagine describing your vision and having it materialize before your
            eyes—effortlessly.
          </p>
          <p className="text-gray-600">
            Designed for both professionals and hobbyists, our tool utilizes
            cutting-edge AI algorithms to generate high-resolution visuals that
            meet your creative needs. It's the perfect companion for unleashing
            inspiration, saving time, and making your projects stand out.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
