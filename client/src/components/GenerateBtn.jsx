import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import "../index.css";

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onClickHandler = () => {
    setIsLoading(true);

    setTimeout(() => {
      if (user) {
        navigate("/result");
      } else {
        setShowLogin(true);
      }
      scrollTo(0, 0);
      setIsLoading(false);
    }, 500);
  };

  return (
    <motion.div
      className="pb-16 text-center"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4 mb-6 md:mb-10">
        See the magic. Try now
      </h1>

      {/* Button */}
      <button
        onClick={onClickHandler}
        disabled={isLoading}
        className={`inline-flex items-center gap-2 px-10 py-4 rounded-full text-white bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 shadow-lg 
                    hover:shadow-xl hover:scale-105 transition-transform duration-500 ${
                      isLoading ? "opacity-60 cursor-not-allowed" : ""
                    }`}
        aria-label="Generate Images"
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <div className="loader w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
            Generating...
          </span>
        ) : (
          <>
            Generate Images{" "}
            <img className="h-6" src={assets.star_group} alt="Star Icon" />
          </>
        )}
      </button>
    </motion.div>
  );
};

export default GenerateBtn;
