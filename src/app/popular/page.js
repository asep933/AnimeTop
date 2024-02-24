import getTerpopuler from "@/api/getTerpopuler";
import Anime from "@/components/anime";

const AllPopuler = async () => {
  const res = await getTerpopuler();

  return (
    <>
      <div className="grid grid-cols-2 lg:flex lg:flex-wrap pt-16 lg:h-screen">
        {res.data.map((data) => {
          return (
            <div key={data.mal_id}>
              <Anime image={data.images.webp.image_url} title={data.title} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllPopuler;
