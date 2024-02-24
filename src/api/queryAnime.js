export default async function queryAnime(anime) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/anime?q=${anime}`
  );

  if (!res.ok) {
    console.log(`error fetch`);
  }

  return res.json();
}
