import Link from "next/link";

const Navbar = () => {
  return (
    <div className="m-0 p-0 w-full">
      <div className="w-full flex lg:px-16 lg:justify-between justify-evenly bg-aksen p-4 text-sentuhan items-center">
        <div className="text-xl italic text-sentuhan">
          <h1>AnimeTop</h1>
        </div>

        <div className="flex gap-3 text-sm">
          <Link className="hover:text-slate-200" href={"/populer"}>
            Populer
          </Link>
          <Link className="hover:text-slate-200" href={"/terbaru"}>
            Terbaru
          </Link>
          <Link className="hover:text-slate-200" href={"/terlaris"}>
            Terlaris
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
