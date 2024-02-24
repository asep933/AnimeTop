const NextButton = ({ count, setCount }) => {
  const handleNext = () => {
    setCount(count + 1);
    if (count > 15) setCount(10);
  };

  return (
    <>
      <button
        onClick={() => handleNext()}
        className="p-5 bg-aksen rounded-full px-4 scale-90 lg:scale-100 bg-opacity-70"
      >
        Next
      </button>
    </>
  );
};

export default NextButton;
