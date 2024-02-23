"use client";

const Humberger = ({ status, setStatus }) => {
  return (
    <>
      <button
        onClick={() => setStatus(!status)}
        className="flex flex-col gap-1 scale-110 lg:hidden z-40"
      >
        <span className={`w-5 p-[1px] bg-slate-200`}></span>
        <span className={`w-5 p-[1px] bg-slate-200`}></span>
        <span className={`w-5 p-[1px] bg-slate-200`}></span>
      </button>
    </>
  );
};

export default Humberger;
