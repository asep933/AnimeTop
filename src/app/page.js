import getData from "@/api/getDataAnime";
import Hero from "@/components/hero";
import Title from "@/components/title";
import AnimeList from "@/components/recommendations";
import Popular from "@/components/popular";
import AllAnime from "@/components/AllAnime";

const Home = async () => {
  const res = await getData();

  const animList = await res.json();

  return (
    <>
      <Hero anime={animList} />
      <Title judul={"Popular"} link={"All View..."} path={"popular"} />
      <Popular />
      <Title judul={"Recommendations"} link={"All View..."} />
      <AnimeList />
      <Title judul={"All"} link={"All View..."} path={"all-anime"} />
      <AllAnime datas={animList} />
    </>
  );
};

export default Home;
