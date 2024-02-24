import Image from "next/image";

const DescriptionAnime = ({
  image,
  title,
  type,
  episodes,
  status,
  score,
  rank,
  year,
  popularity,
  synopsis,
}) => {
  return (
    <>
      <div className="pt-16 w-full flex gap-2 justify-around lg:text-md lg:justify-normal">
        <div
          className="bg-slate-600 max-w-40 lg:max-w-64 h-auto lg:w-full rounded-md 
      overflow-hidden lg:flex drop-shadow-lg"
        >
          <Image
            className="object-contain drop-shadow-md"
            src={image}
            alt="image aniume"
            width={300}
            height={300}
          />
        </div>

        <div className="flex flex-col text-sm ml-4 lg:text-lg">
          <h1 className="font-semibold mb-1 text-base lg:text-4xl lg:mb-8">
            {title}
          </h1>
          <p>{type}</p>
          <p>{episodes} episodes</p>
          <p>{status}</p>
          <p>Score: {score}</p>
          <p>Rank: {rank}</p>
          <p>Year: {year}</p>
        </div>
      </div>

      <p className="py-4">{synopsis}</p>
    </>
  );
};

export default DescriptionAnime;
