import getData from "@/api/getDataAnime";
import Hero from "@/components/hero";
import Title from "@/components/title";
import Popular from "@/components/popular";
import AllAnime from "@/components/AllAnime";
import AnimeRecomendation from "@/components/recommendations";

const Page = async () => {
  const res = await getData("anime");

  const animList = await res.json();

  return (
    <>
      <section>
        <Hero anime={animList} />
      </section>

      <main>
        <Title judul={"Popular"} link={"All View..."} path={"popular"} />
        <Popular />
        <Title judul={"Recommendations"} />
        <AnimeRecomendation />
        <Title judul={"All"} link={"All View..."} path={"all-anime"} />
        <AllAnime datas={animList} />
      </main>
    </>
  );
};

export default Page;
