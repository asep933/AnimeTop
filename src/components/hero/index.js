"use client";

import Image from "next/image";
import { useState } from "react";
import PrevImage from "@/components/PrevButton";
import NextImage from "@/components/NextButton";
import Card from "../Card";

const Hero = ({ anime }) => {
  const [indexImage, setIndexImage] = useState(10);

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
        title={anime.data[indexImage].title_japanese}
        rating={anime.data[indexImage].rating}
        score={anime.data[indexImage].score}
        rank={anime.data[indexImage].rank}
      />

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
