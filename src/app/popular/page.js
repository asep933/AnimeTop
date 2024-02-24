import getTerpopuler from "@/api/getTerpopuler";
import AnimeList from "@/components/AnimeList";

const AllPopuler = async () => {
  const res = await getTerpopuler();

  return (
    <div className="pt-16">
      <AnimeList api={res.data} />
    </div>
  );
};

export default AllPopuler;
