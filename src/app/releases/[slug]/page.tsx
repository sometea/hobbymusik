import { BandCampPlayer } from "@/app/components/bandcampplayer/bandcampplayer";
import { fetchReleaseBySlug, fetchReleases } from "@/app/data/releases";
import Link from "next/link";

export const dynamicParams = false;

export const revalidate = 60;

export default async function ReleaseSlug({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const release = await fetchReleaseBySlug(slug);
  if (!release) return <div>Release not found</div>;
  return <div className="flex flex-col lg:flex-row gap-4 w-full px-4 lg:px-0">
    <div className="w-full lg:w-1/3">
      <img src={release.cover} alt={release.title} className="w-full lg:w-64 mb-2 lg:mb-4 border-2 border-black" />
    </div>
    <div className="flex flex-col w-full lg:w-2/3">
      <div className="text-lg font-bold p-2">{release.title}</div>
      <div className="p-2">{release.artist}</div>
      <div className="p-2">{release.year.getFullYear()}</div>
      {release.description && <div className="p-2 border-t-2">{release.description}</div>}
      {release.bandcampLink && <>
        <div className="font-bold p-2 mt-8 border-t-2 border-black">Get it on</div>
        <div className="p-2"><Link href={release.bandcampLink} target="_blank">Bandcamp</Link></div>
      </>}
      <div className="font-bold p-2 mt-8 border-t-2 border-black">Listen</div>
      <BandCampPlayer embedCode={release.embedCode} />
      <div className="font-bold p-2 py-8"><Link href="/releases">Back</Link></div>
    </div>
  </div>;
}

export async function generateStaticParams() {
  const releases = await fetchReleases();
  return releases.map(release => ({ slug: release.slug }));
}