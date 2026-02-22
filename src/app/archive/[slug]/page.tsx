import { fetchArchiveBySlug, fetchArchiveReleases } from "../../data/releases-strapi";
import Link from "next/link";

export const dynamicParams = false;

export const revalidate = 86400;

export default async function ArchiveSlug(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  const release = await fetchArchiveBySlug(slug);
  if (!release) return <div>Archive release not found</div>;
  return <div className="flex flex-col lg:flex-row w-full">
    <div className="w-full lg:w-1/3">
      <img src={release.cover} alt={release.title} className="w-full lg:w-64 mb-2 lg:mb-4 border-2 border-black" />
    </div>
    <div className="flex flex-col w-full lg:w-2/3">
      <div className="text-lg font-bold p-2">{release.title}</div>
      <div className="p-2">{release.artist}</div>
      <div className="p-2">{release.year.getFullYear()}</div>
      {release.downloadUrl && <>
        <div className="font-bold p-2 mt-8 border-t-2">Download</div>
        <div className="p-2"><Link href={release.downloadUrl} target="_blank">Download here</Link></div>
      </>}
      <div className="font-bold p-2 py-8"><Link href="/releases">Back</Link></div>
    </div>
  </div>;
}

export async function generateStaticParams() {
  const releases = await fetchArchiveReleases();
  return releases.map(release => ({ slug: release.slug }));
}