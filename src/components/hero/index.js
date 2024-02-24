"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import PrevImage from "@/components/PrevButton";
import NextImage from "@/components/NextButton";
import Card from "../Card";

const Hero = ({ anime }) => {
  const [indexImage, setIndexImage] = useState(10);

  useEffect(() => {
    try {
      setInterval(() => {
        setIndexImage((index) => {
          return index > 15 ? (index = 10) : index + 1;
        });
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div
      className={`h-[50vh] lg:h-screen bg-slate-600 overflow-hidden flex relative`}
    >
      <div className="absolute top-[50%] left-4 z-20">
        <PrevImage count={indexImage} setCount={setIndexImage} />
      </div>

      <div className="absolute top-[50%] right-4 z-20">
        <NextImage count={indexImage} setCount={setIndexImage} />
      </div>

      <Card
        title={anime.data[indexImage].title}
        rating={anime.data[indexImage].rating}
        score={anime.data[indexImage].score}
        rank={anime.data[indexImage].rank}
      />

      <div className="hidden lg:block w-full h-screen bg-opacity-30 absolute backdrop-blur-md"></div>

      <Image
        className="object-top lg:object-center object-cover w-full h-auto hover:scale-110"
        src={anime.data[indexImage].images.jpg.large_image_url}
        alt="image anime"
        width={350}
        height={350}
      />
    </div>
  );
};

export default Hero;
