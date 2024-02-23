const PrevImage = ({ count, setCount }) => {
  const handlePrev = () => {
    setCount(count - 1);
    if (count < 10) setCount(15);
  };

  return (
    <>
      <button
        onClick={() => handlePrev()}
        className="p-5 bg-aksen rounded-full px-4 scale-90 lg:scale-100"
      >
        Prev
      </button>
    </>
  );
};

export default PrevImage;
