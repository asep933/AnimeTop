export default async function getData() {
  const response = await fetch(
    "https://anime-facts-rest-api.herokuapp.com/api/v1"
  );

  if (!response.ok) throw new error("fetch data failed");

  return response.json();
}
