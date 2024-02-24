import getData from "@/api/getDataAnime";
import AnimeList from "@/components/AnimeList";

const Page = async () => {
  const res = await getData("anime");
  const datas = await res.json();

  return (
    <div className="pt-16">
      <AnimeList api={datas.data} />
    </div>
  );
};

export default Page;
