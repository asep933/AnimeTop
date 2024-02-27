import getCharacter from "@/api/getCharacter";
import TopCharList from "@/components/TopCharList";

const Page = async () => {
  const res = await getCharacter();
  const char = await res.json();

  return (
    <div className="pt-16 lg:pt-20">
      <h1 className="mx-4 text-xl font-medium lg:text-2xl lg:mx-8 lg:mb-4">
        Top Characters
      </h1>

      <TopCharList api={char.data} />
    </div>
  );
};

export default Page;
