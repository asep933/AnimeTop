export default async function getCharacter(anime) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/top/characters`
  );

  if (!res.ok) {
    console.log(`error fetch`);
  }

  return res;
}
