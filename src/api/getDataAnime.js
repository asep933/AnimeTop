export default async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/anime`);

  if (!res.ok) {
    console.log(`error fetch`);
  }

  return res;
}
