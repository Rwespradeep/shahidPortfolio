import React from "react";

const Aboutme = () => {
  return (
    <div className="flex relative h-screen top-[200px] left-28">
      <div className="w-1/2 flex-1 text-[#4F4F4F]">
        <img
          className="w-[600px]"
          src="./aboutme_images/about_me1.webp"
          alt="aboutme_image"
        />
      </div>
      <div className="w-1/2 flex-1 text-[#4F4F4F]">
        <h1
          className="font-figtree text-4xl tracking-wider m-1
        "
        >
          ABOUT ME
        </h1>
        <p className="font-oswald text-lg font-light tracking-widest pt-8 m-2">
          NATURE ITSELF INSPIRES ME
        </p>
        <div className="w-[550px]">
          <p className="font-figtree text-lg text-justify p-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
