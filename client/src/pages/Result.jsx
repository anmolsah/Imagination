import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import "../dot.css";

const Result = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [image, setImage] = useState(assets.image9);

  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      const image = await generateImage(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  };

  return (
    <motion.form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center justify-center min-h-[90vh] py-6"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative mb-6">
        <img
          className="max-w-sm rounded-md shadow-gray-700 shadow-lg transition-all duration-300 ease-in-out"
          src={image}
          alt="Generated result"
        />
        {loading && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-pulse" />
        )}
      </div>

      {
        <div className={`flex items-center gap-2 ${!loading ? "hidden" : ""}`}>
          <div className="dot-flashing"></div>
        </div>
      }

      {!isImageLoaded && (
        <div className="flex items-center bg-gray-100 p-3 rounded-full w-full max-w-xl mt-8">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="flex-1 bg-gray-200 outline-none text-gray-700 placeholder-gray-500 px-4 py-2 rounded-full focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            type="text"
            placeholder="Describe what you want to generate"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-full ml-4 hover:bg-blue-700 transition-colors duration-200"
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => {
              setIsImageLoaded(false);
              setInput(""); // Clear input on generating another
            }}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors duration-200"
          >
            Generate Another
          </button>
          <a
            href={image}
            download
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
