import queryAnime from "@/api/queryAnime";
import AnimeList from "@/components/AnimeList";

const Search = async ({ params }) => {
  const { slug } = params;
  const res = await queryAnime(`${slug}`);
  const searchAnime = await res.data;

  return (
    <div className="pt-16">
      <AnimeList api={searchAnime} />
    </div>
  );
};

export default Search;
