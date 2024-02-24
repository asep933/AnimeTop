"use client";

import Anime from "@/components/anime";
import { useRouter } from "next/navigation";

const AnimeList = ({ api }) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 lg:flex lg:flex-wrap">
      {api.map((data) => {
        return (
          <button
            key={data.mal_id}
            cursor="pointer"
            onClick={() => router.push(`/description/${data.mal_id}`)}
          >
            <Anime image={data.images.webp.image_url} title={data.title} />
          </button>
        );
      })}
    </div>
  );
};

export default AnimeList;
