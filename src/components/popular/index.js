import Anime from "../anime";
import getTerpopuler from "@/api/getTerpopuler";

const Popular = async () => {
  const res = await getTerpopuler();

  return (
    <>
      <div className="lg:flex grid grid-cols-2">
        {res.data
          .map((data) => {
            return (
              <div key={data.mal_id}>
                <Anime image={data.images.webp.image_url} title={data.title} />
              </div>
            );
          })
          .slice(5, 10)}
      </div>
    </>
  );
};

export default Popular;
