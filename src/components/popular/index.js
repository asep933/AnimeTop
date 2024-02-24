import AnimeList from "../AnimeList";
import Anime from "../anime";
import getTerpopuler from "@/api/getTerpopuler";

const Popular = async () => {
  const res = await getTerpopuler();

  return (
    <>
      <AnimeList api={res.data.slice(0, 5)} />
    </>
  );
};

export default Popular;
