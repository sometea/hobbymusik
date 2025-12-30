import { strapi } from "@strapi/client";
import { cache } from "react";

const client = strapi({ baseURL: process.env.STRAPI_BASE_URL || '', auth: process.env.STRAPI_TOKEN });
const releaseClient = client.collection('hobby-releases');

export const fetchReleases = cache(async () => {
  const releases = await releaseClient.find({
    sort: ['date:desc'],
  });
  return releases;
});
