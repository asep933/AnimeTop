import Anime from "@/components/anime";
import getData from "@/api/getDataAnime";

const Page = async () => {
  const res = await getData();
  const datas = await res.json();

  return (
    <div className="grid grid-cols-2 lg:flex lg:flex-wrap pt-16 h-screen">
      {datas.data.map((data) => {
        return (
          <div key={data.mal_id}>
            <Anime image={data.images.webp.image_url} title={data.title} />
          </div>
        );
      })}
    </div>
  );
};

export default Page;
