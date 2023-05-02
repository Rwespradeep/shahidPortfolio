import React, { useEffect, useState } from "react";
import Grid from "./Grid";

const defaultimages = [
  {
    id: 1,
    src: "./grid_images/grid_1.webp",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "./grid_images/grid_2.webp",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "./grid_images/grid_3.webp",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "./grid_images/grid_4.webp",
    alt: "Image 4",
  },
  {
    id: 5,
    src: "./grid_images/grid_5.webp",
    alt: "Image 5",
  },
  {
    id: 6,
    src: "./grid_images/grid_6.webp",
    alt: "Image 6",
  },
];

const portrait_images = [
  {
    id: 1,
    src: "./grid_images/portraits/Portrait_1.webp",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "./grid_images/portraits/Portrait_2.webp",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "./grid_images/portraits/Portrait_3.webp",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "./grid_images/portraits/Portrait_4.webp",
    alt: "Image 4",
  },
  {
    id: 5,
    src: "./grid_images/portraits/Portrait_5.webp",
    alt: "Image 5",
  },
  {
    id: 6,
    src: "./grid_images/portraits/Portrait_6.webp",
    alt: "Image 6",
  },
];

const landscape_images = [
  {
    id: 1,
    src: "./grid_images/landscapes/landscape_1.webp",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "./grid_images/landscapes/landscape_2.webp",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "./grid_images/landscapes/landscape_3.webp",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "./grid_images/landscapes/landscape_4.webp",
    alt: "Image 4",
  },
  {
    id: 5,
    src: "./grid_images/landscapes/landscape_5.webp",
    alt: "Image 5",
  },
  {
    id: 6,
    src: "./grid_images/landscapes/landscape_6.webp",
    alt: "Image 6",
  },
];

const event_images = [
  {
    id: 1,
    src: "./grid_images/event_images/event_1.webp",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "./grid_images/event_images/event_2.webp",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "./grid_images/event_images/event_3.webp",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "./grid_images/event_images/event_4.webp",
    alt: "Image 4",
  },
  {
    id: 5,
    src: "./grid_images/event_images/event_5.webp",
    alt: "Image 5",
  },
  {
    id: 6,
    src: "./grid_images/event_images/event_6.webp",
    alt: "Image 6",
  },
];
const Portfolio = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(defaultimages);
  }, []);

  const handlePortraits = () => {
    setImages(portrait_images);
  };
  const handleLandscapes = () => {
    setImages(landscape_images);
  };
  const handleEvents = () => {
    setImages(event_images);
  };
  return (
    <>
      {/* navbar */}
      <div className="flex justify-between text-[#4F4F4F]">
        <div className="p-8 m-8 ml-16">
          <h1 className="font-figtree text-5xl">PORTFOLIO</h1>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-between gap-32 p-12 m-7 mr-12 font-oswald text-xl">
            <h2
              className="cursor-pointer hover:text-cyan-950 hover:scale-105 transition-all ease-out duration-500"
              onClick={handlePortraits}
            >
              PORTRAITS
            </h2>
            <h2
              className="cursor-pointer hover:text-cyan-950 hover:scale-105 transition-all ease-out duration-500"
              onClick={handleLandscapes}
            >
              LANDSCAPES
            </h2>
            <h2
              className="cursor-pointer hover:text-cyan-950 hover:scale-105 transition-all ease-out duration-500"
              onClick={handleEvents}
            >
              EVENTS
            </h2>
          </div>
        </div>
      </div>

      {/* grid */}
      <Grid images={images} />

      {/* see all button */}
      <p className="text-[#4F4F4F] font-oswald text-2xl tracking-wider text-center mt-2 p-2 cursor-pointer">
        SEE ALL{" "}
        <span>
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </p>
    </>
  );
};

export default Portfolio;
