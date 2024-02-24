import { ArrowLeft } from "phosphor-react";

const PrevImage = ({ count, setCount }) => {
  const handlePrev = () => {
    setCount(count - 1);
    if (count < 10) setCount(15);
  };

  return (
    <>
      <button
        onClick={() => handlePrev()}
        className="p-4 bg-aksen rounded-full px-4 scale-75 lg:scale-100 bg-opacity-70"
      >
        <ArrowLeft size={30} />
      </button>
    </>
  );
};

export default PrevImage;
