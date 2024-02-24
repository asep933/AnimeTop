export default async function getById(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/anime/${id}/full`
  );

  if (!res.ok) {
    console.log(`error fetch`);
  }

  return res;
}
