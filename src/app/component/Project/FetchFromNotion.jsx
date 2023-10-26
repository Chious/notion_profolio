const url = process.env.NEXT_PUBLIC_GET_URL;

export default async function FetchFromNotion() {
  const res = await fetch(url);
  const data = await res.json();

  return data;
}
