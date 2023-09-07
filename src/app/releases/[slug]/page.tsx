import { staticReleases } from "@/app/data/releases";
import Link from "next/link";

export default function ReleaseSlug({ params }: { params: { slug: string }}) {
  const { slug } = params;
  const release = staticReleases.find(release => release.slug === slug);
  if (!release) return <div>Release not found</div>;
  return <div className="flex flex-col lg:flex-row w-full">
    <div className="w-full lg:w-1/3">
      <img src={release.cover} alt={release.title} className="w-full lg:w-64 mb-2 lg:mb-4 border-2 border-black" />
    </div>
    <div className="flex flex-col w-full lg:w-2/3">
      <div className="text-lg font-mono p-4">{release.title}</div>
      <div className="font-mono p-4">{release.artist}</div>
      <div className="font-mono p-4">{release.year.getFullYear()}</div>
      <div className="font-bold p-4 py-8"><Link href="/releases">Back</Link></div>
    </div>
  </div>;
}

export function generateStaticParams() {
  return staticReleases.map(release => ({ slug: release.slug }));
}