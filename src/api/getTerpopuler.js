const getTerpopuler = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/top/anime?limit=20`
  );

  if (!res.ok) console.log(`fetch failed`);

  return res.json();
};

export default getTerpopuler;
