// import React from 'react'
// import { assets } from '../assets/assets'
// import { motion } from 'framer-motion'

// const Description = () => {
//     return (
//         <motion.div
//             className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
//             initial={{ opacity: 0.2, y: 100 }}
//             transition={{ duration: 1 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}   
//         >
//             <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Create AI Images</h1>
//             <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>
//             <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
//                 <img src={assets.image1} className="w-80 xl:w-96 rounded-lg" alt="" />
//                 <div>
//                     <h2 className="text-3xl font-medium max-w-lg mb-4">Introducing the AI-Powered Text to Image Generator</h2>
//                     <p className=" text-gray-600 mb-4">
//                         Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
//                     </p>
//                     <p className=" text-gray-600">
//                         Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
//                     </p>
//                 </div>
//             </div>
//         </motion.div>
//     )
// }

// export default Description



import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

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
            <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Empower Your Creativity</h1>
            <p className="text-gray-500 mb-8">AI-Powered Tools for Boundless Innovation</p>

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
                        Step into the future of design and storytelling with our AI-powered text-to-image generator. Whether you're an artist, marketer, or innovator, transform your wildest ideas into captivating visuals instantly. With our intuitive platform, the possibilities are as boundless as your imagination.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Craft professional-quality images from simple text prompts in seconds. Whether it's conceptual art, product mockups, or something completely abstract, our AI ensures stunning results every time. Imagine describing your vision and having it materialize before your eyes—effortlessly.
                    </p>
                    <p className="text-gray-600">
                        Designed for both professionals and hobbyists, our tool utilizes cutting-edge AI algorithms to generate high-resolution visuals that meet your creative needs. It's the perfect companion for unleashing inspiration, saving time, and making your projects stand out.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Description;
