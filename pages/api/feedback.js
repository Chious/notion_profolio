import { Client } from "@notionhq/client";
const notionSecret = process.env.EDIT_NOTION_API_SECRET;
const notionDatabaseId = process.env.EDIT_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

export default async function handler(req, res) {
  const newProperties = {
    // Set database properties here
    title: {
      title: [
        {
          text: {
            content: "Test",
          },
        },
      ],
    },
    email: { email: "test@gm.cc" },
    message: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "This is test message",
          },
        },
      ],
    },
  };

  const response = await notion.pages.create({
    parent: { database_id: notionDatabaseId },
    properties: newProperties,
  });

  if (response.status === 400) {
    throw new Error("Notion API returned a 400 error");
  }

  if (response.status === 404) {
    throw new Error("Notion parent page not found");
  }

  if (response.status === 429) {
    throw new Error("Notion API rate limit reached");
  }

  res.status(200).json(response);
}
