import Link from "next/link";

const Title = ({ judul, link, path }) => {
  return (
    <div className="flex justify-between pt-3 px-4 text-sentuhan text-lg">
      <h1>{judul}</h1>
      <Link className="hover:opacity-90" href={`/${path}`}>
        {link}
      </Link>
    </div>
  );
};

export default Title;
