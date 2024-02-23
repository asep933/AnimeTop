import Anime from "../anime";

const AllAnime = async ({ datas }) => {
  return (
    <div className="grid grid-cols-2 lg:flex">
      {datas.data
        .map((data) => {
          return (
            <div key={data.mal_id}>
              <Anime image={data.images.webp.image_url} title={data.title} />
            </div>
          );
        })
        .slice(0, 5)}
    </div>
  );
};

export default AllAnime;
