import React, { useEffect, useState } from "react";
import { slideIn, staggerContainer } from "../motion";
import { motion } from "framer-motion";

const images = [
  {
    id: 1,
    src: "./hero_images/hero_image1.webp",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "./hero_images/hero_image2.webp",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "./hero_images/hero_image4.webp",
    alt: "Image 4",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative"
    >
      <motion.div
        variants={slideIn("right", "tween", 0.5, 0.5)}
        className="flex"
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`w-full ${activeIndex === index ? "block" : "hidden"}`}
          >
            <img
              className={`w-screen object-cover max-h-screen transition-opacity duration-5000 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              src={image.src}
              alt={image.alt}
              style={{
                zIndex: index === activeIndex ? 1 : 0,
              }}
            />
          </div>
        ))}
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-2 ${
              activeIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Carousel;
