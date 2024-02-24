import AnimeList from "../AnimeList";

const AllAnime = async ({ datas }) => {
  return <AnimeList api={datas.data.slice(0, 5)} />;
};

export default AllAnime;
