import { BandCampPlayer } from "@/app/components/bandcampplayer/bandcampplayer";
import { ReleaseNumber } from "@/app/components/releasenumber/releasenumber";
import { fetchReleaseBySlug, fetchReleases } from "@/app/data/releases";
import Link from "next/link";

export const dynamicParams = true;

export const revalidate = 180;

function getArtistLinkText(href: string): string {
  if (href.includes('instagram.com')) {
    return 'Instagram';
  }
  if (href.includes('facebook.com')) {
    return 'Facebook';
  }
  return 'Website';
}

export default async function ReleaseSlug(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  const release = await fetchReleaseBySlug(slug);
  if (!release) return <div>Release not found</div>;
  return <div className="flex flex-col lg:flex-row gap-4 w-full">
    <div className="w-full lg:w-1/3">
      <img src={release.cover} alt={release.title} className="w-full lg:w-64 mb-2 lg:mb-4 border-2 border-black" />
    </div>
    <div className="flex flex-col w-full lg:w-2/3">
      <div className="flex flex-row justify-between items-center">
        <div className="text-lg font-bold p-2">{release.title}</div>
        <ReleaseNumber releaseNumber={release.releaseNumber} />
      </div>
      
      <div className="p-2">{release.artist}</div>
      <div className="p-2">{release.year.getFullYear()}</div>
      {release.notes && <pre className="p-2 font-sans">{release.notes}</pre>}
      {release.copyright && <div className="p-2">{release.copyright}</div>}
      {release.bandcampLink && <>
        <div className="font-bold p-2 mt-8 border-t-2 border-black">Links</div>
        <div className="p-2"><Link href={release.bandcampLink} target="_blank">Bandcamp</Link></div>
        {release.artistLink && <div className="p-2"><Link href={release.artistLink} target="_blank">{ getArtistLinkText(release.artistLink) }</Link></div>}
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