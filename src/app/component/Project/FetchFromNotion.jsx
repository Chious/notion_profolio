export default async function FetchFromNotion() {
  const url = `${process.env.BASE_URL}${process.env.GET_PORT}`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
}
