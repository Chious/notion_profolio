import { Client } from "@notionhq/client";
const notionSecret = process.env.NOTION_API_SECRET;
const notionDatabaseId = process.env.DATABASE_ID;

const notion = new Client({ auth: notionSecret });

export default async function handler(req, res) {
  if (!notionSecret || !notionDatabaseId)
    throw new Error("Missing notion secret or DB-ID.");

  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });

  res.status(200).json({ data: query.results });
}
