import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center my-20"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Tagline */}
      <motion.div
        className="text-orange-500 inline-flex items-center gap-2 bg-white px-6 py-1 rounded-full border border-gray-300 shadow-md"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="font-medium">Best text to image generator</p>
        <img src={assets.star_icon} alt="Star icon" />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-center mx-auto mt-10 text-4xl font-extrabold max-w-[300px] sm:text-6xl sm:max-w-[590px] text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.5 }}
      >
        Transform <span className="text-blue-500">words</span> to stunning{" "}
        <span className="text-orange-500">art</span>.
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 text-gray-600 text-sm sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Discover the power of AI to convert your imagination into breathtaking
        visuals. No design skills needed—just type and let the magic happen.
      </motion.p>

      {/* Generate Button */}
      <motion.button
        className="sm:text-lg text-white bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 w-auto mt-8 px-12 py-3 flex items-center gap-2 rounded-full shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
        onClick={onClickHandler}
      >
        Generate Images{" "}
        <img className="h-6" src={assets.star_group} alt="Star group icon" />
      </motion.button>

      {/* Sample Images */}
      <motion.div
        className="flex flex-wrap justify-center mt-16 gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {Array(6)
          .fill("")
          .map((_, index) => (
            <motion.img
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer w-20 sm:w-24 lg:w-28"
              key={index}
              src={index % 2 === 0 ? assets.bazzar : assets.badass}
              alt={`Sample ${index + 1}`}
              whileHover={{ scale: 1.05 }}
            />
          ))}
      </motion.div>

      {/* Footer Note */}
      <motion.p
        className="mt-2 text-neutral-600 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Generated images from{" "}
        <span className="bg-gradient-to-r font-bold from-blue-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          imagi
        </span>
        <span className="bg-gradient-to-r font-bold from-indigo-500 via-teal-500 to-blue-500 text-transparent bg-clip-text">
          NATION
        </span>
      </motion.p>
    </motion.div>
  );
};

export default Header;
