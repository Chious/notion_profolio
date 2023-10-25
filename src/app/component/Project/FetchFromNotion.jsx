export default async function FetchFromNotion() {
  const res = await fetch("http://localhost:3000/api/notion");
  const data = await res.json();

  return data;
}
