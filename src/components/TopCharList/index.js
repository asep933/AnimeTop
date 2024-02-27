"use client";

import Anime from "@/components/anime";
import { useRouter } from "next/navigation";

const TopCharList = ({ api }) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center">
      {api.map((data) => {
        return (
          <div key={data.mal_id}>
            <Anime image={data.images.webp.image_url} title={data.name} />
          </div>
        );
      })}
    </div>
  );
};

export default TopCharList;
