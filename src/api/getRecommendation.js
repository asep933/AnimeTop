const getRecommendation = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/recommendations/anime`
  );

  if (!res.ok) console.log(`fetch failed`);

  return res.json();
};

export default getRecommendation;
