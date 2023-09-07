import { ReleaseProps } from "@/app/data/releases";
import Link from "next/link";

export function Release({ title, artist, description = '', year, cover, slug }: ReleaseProps) {
  const shortenedTitle = title.length > 35 ? title.substring(0, 35) + '...' : title;
  return <div className="flex flex-col items-center w-full lg:w-1/3">
    <Link href={`/releases/${slug}`}>
      <img src={cover} alt={title} className="w-48 lg:w-64 mb-2 lg:mb-4 border-2 border-black" />
    </Link>
    <div className="p-2 w-full text-center">{shortenedTitle}</div>
    <div className="text-sm p-2">{artist}</div>
    <div className="text-sm p-2 w-full text-right border-b-2">{year.getFullYear()}</div>
    <div className="text-sm p-2 mb-8 lg:mb-16">{description}</div>
  </div>;
}