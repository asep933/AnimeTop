import DescriptionAnime from "@/components/DescriptionAnime";
import getById from "@/api/getById";

const Description = async ({ params }) => {
  const res = await getById(params.id);

  const dataAnime = await res.json();

  return (
    <>
      <div className="px-4 w-full lg:h-screen">
        <DescriptionAnime
          image={dataAnime.data.images.webp.image_url}
          title={dataAnime.data.title}
          type={dataAnime.data.type}
          episodes={dataAnime.data.episodes}
          status={dataAnime.data.status}
          score={dataAnime.data.score}
          rank={dataAnime.data.rank}
          year={dataAnime.data.year}
          popularity={dataAnime.data.popularity}
          synopsis={dataAnime.data.synopsis}
        />
      </div>
    </>
  );
};

export default Description;
