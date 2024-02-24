import { useRouter } from "next/navigation";
import { useRef } from "react";
useRouter;

const SerachInput = () => {
  const router = useRouter();
  const inputRef = useRef();

  const handleKey = (event) => {
    if (event.key === "Enter")
      router.push(`/search/${inputRef.current.value.toLowerCase()}`);
    // console.log(event.key);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search anime..."
        className="w-1/2 lg:w-3/4 text-sm rounded-lg focus:outline-none text-latar"
        onKeyDown={handleKey}
        ref={inputRef}
      />
    </div>
  );
};

export default SerachInput;
