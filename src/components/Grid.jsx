import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loading from "./Loading";

const Grid = ({ images }) => {
  const [loaded, setLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-20 px-5 -mt-10 "
    >
      <div className="grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-5">
        {images.map((image, i) => (
          <motion.div variants={fadeIn("right", "tween", 0.5, 1)}>
            {/* <img key={image.id} src={image.src} alt={image.alt} /> */}
            {showLoading ? (
              <div className="loading-card">
                <Loading />
              </div>
            ) : (
              <LazyLoadImage
                key={image.id}
                src={image.src}
                onLoad={() => setLoaded(true)}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Grid;
