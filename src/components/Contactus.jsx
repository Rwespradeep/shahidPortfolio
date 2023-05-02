import React from "react";

const Contactus = () => {
  return (
    <div className="h-screen">
      <h1 className="font-figtree text-4xl ml-28 text-[#4F4F4F] ">
        CONTACT US
      </h1>
      <div className="bg-[url('./contact_images/contact_cover2.webp')] bg-no-repeat bg-cover h-[650px]">
        {/* writeme card */}
        <div className="w-[450px] h-[370px] border-2 border-black ml-28 mt-16 p-15 relative top-32 bg-white">
          <h2 className="ml-16 mt-10 font-oswald text-3xl font-light text-black">
            WRITE ME
          </h2>
          <div className="flex flex-col w-80 ml-16 p-2 font-figtree text-[#4F4F4F]">
            <input
              className="mt-5 border-b-2 border-gray-500 outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="my-5 border-b-2 border-gray-500 outline-none"
              type="text"
              placeholder="Email"
            />
            <input
              type="text"
              className="border-b-2 border-gray-500 outline-none"
              placeholder="Message"
            />
            <button className="mt-6 font-oswald text-white p-2 bg-gray-950">
              SEND
            </button>
          </div>
        </div>

        <div className="font-figtree text-white flex flex-col absolute right-8">
          <h1>8179016122</h1>
          <h1>shahidkhan@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
