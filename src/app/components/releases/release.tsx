import { ArchiveReleaseProps, ReleaseProps } from "@/app/data/releases";
import Link from "next/link";

type GeneralisedReleaseProps = ReleaseProps & { linkPrefix?: string }

export function Release({ title, artist, year, cover, slug, type, linkPrefix = 'releases' }: GeneralisedReleaseProps) {
  const shortenedTitle = title.length > 32 ? title.substring(0, 32) + '...' : title;
  return <div className="flex flex-col items-center w-full lg:w-1/3 p-2">
    <Link href={`/${linkPrefix}/${slug}`}>
      <img src={cover} alt={title} className="w-48 lg:w-64 mb-2 lg:mb-4 border-2 border-black" />
    </Link>
    <div className="pb-2 w-full text-center">{shortenedTitle}</div>
    <div className="text-sm pb-2">{artist}</div>
    <div className="text-sm pt-2 w-full text-right border-t-2">{year.getFullYear()}</div>
    {type && <div className="text-sm mb-8 lg:mb-16 w-full text-right">{type}</div>}
  </div>;
}

export function ArchiveRelease({ title, artist, year, cover, slug, type, linkPrefix = 'archive' }: GeneralisedReleaseProps) {
  const shortenedTitle = title.length > 32 ? title.substring(0, 32) + '...' : title;
  return <div className="flex flex-col items-start w-full lg:w-1/3 p-2">
    <Link href={`/${linkPrefix}/${slug}`}>
      <div className="pb-2 w-full text-center">{shortenedTitle}</div>
    </Link>
    <div className="text-sm pb-2">{artist} ({year.getFullYear()})</div>
    {type && <div className="text-sm mb-8 lg:mb-16 w-full text-right">{type}</div>}
  </div>;
}
