"use client";

// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Anime = ({ image, title }) => {
  return (
    <div className="w-full p-0 m-0">
      <div className="flex px-4 py-3">
        <div className="bg-slate-600 w-56 h-72 overflow-hidden lg:h-80 shadow-lg text-base lg:text-lg">
          <div className="overflow-hidden m-0 p-0">
            <Image
              className="max-h-64 object-cover pb-2 hover:scale-110 transition-all ease-in-out"
              src={image}
              alt="image anime"
              width={350}
              height={350}
            />
          </div>
          <h3 className="px-2">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Anime;
