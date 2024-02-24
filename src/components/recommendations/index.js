import getRecommendation from "@/api/getRecommendation";
import AnimeList from "../AnimeList";

const AnimeRecomendation = async () => {
  const res = await getRecommendation();

  const datas = await res.data[0].entry;

  return (
    <div className="flex px-8">
      <AnimeList api={datas} />
    </div>
  );
};

export default AnimeRecomendation;
