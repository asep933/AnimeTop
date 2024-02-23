const Card = ({ title, rating, score, rank }) => {
  return (
    <div
      className="w-36 h-auto text-black bg-slate-200
    bg-opacity-70 lg:center-element-lg center-element z-20 p-4 lg:w-1/2 lg:h-1/2 flex flex-col
    lg:text-xl text-base"
    >
      <h1 className="font-semibold">Title</h1>
      {title}

      <h2 className="font-semibold">Rating</h2>
      {rating}

      <h2 className="font-semibold">Score</h2>
      {score}

      <h2 className="font-semibold">Rank</h2>
      {rank}
    </div>
  );
};

export default Card;
