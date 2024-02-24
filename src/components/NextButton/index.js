import { ArrowRight } from "phosphor-react";

const NextButton = ({ count, setCount }) => {
  const handleNext = () => {
    setCount(count + 1);
    if (count > 15) setCount(10);
  };

  return (
    <>
      <button
        onClick={() => handleNext()}
        className="p-4 bg-aksen rounded-full px-4 scale-75 lg:scale-100 bg-opacity-70"
      >
        <ArrowRight size={30} />
      </button>
    </>
  );
};

export default NextButton;
