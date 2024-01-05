import { Client } from "@notionhq/client";
const notionSecret = process.env.NOTION_API_SECRET;
const notionDatabaseId = process.env.DATABASE_ID;

const notion = new Client({ auth: notionSecret });

export default async function handler(req, res) {
  if (!notionSecret || !notionDatabaseId) {
    throw new Error("Missing notion secret or DB-ID.");
  }

  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });

  //1. Get Data From Notion
  const rawData = query.results;

  //2. Filter publish Data
  const PublishData = rawData.filter((data) => {
    if (data.properties.Publish) {
      return data.properties.Publish.select.name !== "unPublish";
    }
  });
  const propertiesData = PublishData.map((data) => {
    let cover;
    if (data.cover.type === "external") {
      cover = data.cover.external.url;
    }
    if (data.cover.type === "file") {
      cover = data.cover.file.url;
    }

    return {
      cover: cover,
      properties: data.properties,
    };
  });

  //3. return Properties in the raw

  const obj = propertiesData.map((data) => ({
    cover: data.cover,
    Name: data.properties.Name.title[0].plain_text,
    LivePage: data.properties.LivePage.url,
    Code: data.properties.Code.url,
    Tags: data.properties.Tags.multi_select,
  }));

  res.status(200).json(obj);
}
