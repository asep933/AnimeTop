import getRecommendation from "@/api/getRecommendation";
import Anime from "../anime";

const AnimeList = async () => {
  const res = await getRecommendation();

  const datas = await res.data[0].entry;

  return (
    <div className="grid grid-cols-2 lg:flex">
      {datas
        .map((data) => {
          return (
            <div key={data.mal_id}>
              <Anime image={data.images.webp.image_url} title={data.title} />
            </div>
          );
        })
        .slice(0, 5)}
    </div>
  );
};

export default AnimeList;
