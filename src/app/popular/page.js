import getTerpopuler from "@/api/getTerpopuler";
import Anime from "@/components/anime";

const AllPopuler = async () => {
  const res = await getTerpopuler();

  return (
    <>
      <div className="grid grid-cols-2 lg:flex pt-16 h-screen">
        {res.data
          .map((data) => {
            return (
              <div key={data.mal_id}>
                <Anime image={data.images.webp.image_url} title={data.title} />
              </div>
            );
          })
          .slice(0, 5)}
      </div>
    </>
  );
};

export default AllPopuler;
