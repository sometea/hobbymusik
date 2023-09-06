export interface ReleaseProps {
  title: string;
  artist: string;
  description?: string;
  year: Date;
  cover: string;
}

export function Release({ title, artist, description = '', year, cover }: ReleaseProps) {
  return <div className="flex flex-col items-center w-full lg:w-1/3">
    <img src={cover} alt={title} className="w-48 lg:w-64" />
    <div className="text-xl">{title}</div>
    <div className="text-l">{artist}</div>
    <div className="text-l">{year.getFullYear()}</div>
    <div className="text-l">{description}</div>
  </div>;
}