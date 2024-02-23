"use client";

import Link from "next/link";
import Humberger from "../humberger";
import { useState } from "react";

const Navbar = () => {
  const [status, setStatus] = useState(false);

  return (
    <div className="m-0 p-0 w-full fixed z-[999]">
      <div
        className="w-full flex flex-wrap lg:px-16 justify-between bg-aksen py-3 px-8 
      text-sentuhan items-center"
      >
        <Link
          onClick={() => setStatus(false)}
          href={"/"}
          className="text-xl italic text-slate-200"
        >
          <h1>AnimeTop</h1>
        </Link>

        <Humberger status={status} setStatus={setStatus} />

        <div className={`hidden lg:block`}>
          <div className="flex gap-3 text-sm">
            <Link className="hover:text-slate-200" href={"/popular"}>
              Popular
            </Link>
            <Link className="hover:text-slate-200" href={"/new"}>
              New
            </Link>
            <Link className="hover:text-slate-200" href={"/bestseller"}>
              Bestseller
            </Link>
          </div>
        </div>
      </div>

      {status && (
        <div className="w-full bg-aksen px-4 pb-4 lg:hidden">
          <div className="flex flex-col gap-3 text-sm text-sentuhan">
            <Link
              onClick={() => setStatus(false)}
              className="hover:text-slate-200 hover:bg-red-800"
              href={"/popular"}
            >
              Popular
            </Link>
            <Link
              onClick={() => setStatus(false)}
              className="hover:text-slate-200 hover:bg-red-800"
              href={"/new"}
            >
              New
            </Link>
            <Link
              onClick={() => setStatus(false)}
              className="hover:text-slate-200 hover:bg-red-800"
              href={"/bestseller"}
            >
              Bestseller
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
