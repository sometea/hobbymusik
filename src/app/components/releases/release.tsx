import { ReleaseProps } from "@/app/data/releases";
import Link from "next/link";

type GeneralisedReleaseProps = ReleaseProps & { linkPrefix?: string }

export function Release({ title, artist, year, cover, slug, type, releaseNumber, linkPrefix = 'releases' }: GeneralisedReleaseProps) {
  const shortenedTitle = title.length > 32 ? title.substring(0, 32) + '...' : title;
  return <div className="flex flex-col items-center w-full lg:w-1/3 p-4 lg:p-2">
    <Link href={`/${linkPrefix}/${slug}`}>
      <img src={cover} alt={title} className="w-48 lg:w-64 mb-2 lg:mb-4 border-2 border-black" />
    </Link>
    <div className="pb-2 w-full font-bold text-center">{shortenedTitle}</div>
    <div className="text-sm font-semibold pb-2">{artist}</div>
    <div className="text-sm pt-2 w-48 lg:w-full border-t-2 border-black font-semibold flex items-start justify-between">
      <div className="border border-black">hm{ String(releaseNumber).padStart(3, '0') }</div>
      <div>
        {type && <div>{type}</div>}
        <div>{year.getFullYear()}</div>
      </div>
    </div>
  </div>;
}

export function ArchiveRelease({ title, artist, year, slug, type, linkPrefix = 'archive' }: GeneralisedReleaseProps) {
  return <Link href={`/${linkPrefix}/${slug}`} className="flex flex-row items-start justify-between gap-4 w-full p-2">
      <div className="lg:w-[24rem]">{title}</div>
      <div className="text-sm lg:w-[12rem]">{artist}</div>
      <div className="text-sm">({year.getFullYear()})</div>
    {type && <div className="text-sm mb-8 lg:mb-16 w-full text-right">{type}</div>}
    </Link>;
}
