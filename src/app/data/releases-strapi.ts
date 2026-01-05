import { strapi, type API } from "@strapi/client";
import { cache } from "react";
import { ArchiveReleaseProps, ReleaseProps } from "./types";

const client = strapi({ baseURL: `${process.env.STRAPI_BASE_URL}/api` || '', auth: process.env.STRAPI_TOKEN });
const releaseClient = client.collection('hobby-releases');
const archiveClient = client.collection('archive-releases');

function mapRelease(release: API.Document): ReleaseProps {
  return {
    title: release.title,
    cover: `${process.env.STRAPI_PUBLIC_BASE_URL || process.env.STRAPI_BASE_URL}${release.cover.url}`,
    artist: release.artist,
    year: new Date(release.release_date),
    slug: release.slug,
    bandcampLink: release.bandcamp_link,
    artistLink: release.artist_link,
    embedCode: release.player_embed_code,
    type: release.type,
    spotifyLink: release.spotify_link,
    releaseNumber: release.label_release_number,
  };
}

function mapArchive(release: API.Document): ArchiveReleaseProps {
  return {
    title: release.title,
    cover: `${process.env.STRAPI_PUBLIC_BASE_URL || process.env.STRAPI_BASE_URL}${release.cover.url}`,
    artist: release.artist,
    year: new Date(release.release_date),
    slug: release.slug,
    downloadUrl: `${process.env.STRAPI_PUBLIC_BASE_URL || process.env.STRAPI_BASE_URL}${release.download.url}`,
  };
}

export const fetchReleases = cache(async () => {
  const releases = await releaseClient.find({
    populate: ['cover'],
  });
  return releases.data.map(mapRelease);
});

export const fetchReleaseBySlug = cache(async (slug: string) => {
  const releases = await releaseClient.find({
    filters: { slug: slug },
    populate: ['cover'],
  });
  if (releases.data.length === 0) {
    throw new Error(`Release with slug ${slug} not found`);
  }
  return mapRelease(releases.data[0]);
});

export const fetchArchiveReleases = cache(async () => {
  const releases = await archiveClient.find({
    populate: ['cover'],
  });
  return releases.data.map(mapArchive);
});

export const fetchArchiveBySlug = cache(async (slug: string) => {
  const releases = await archiveClient.find({
    filters: { slug: slug },
    populate: ['cover'],
  });
  if (releases.data.length === 0) {
    throw new Error(`Release with slug ${slug} not found`);
  }
  return mapArchive(releases.data[0]);
});