import { ArchiveList } from "../components/releases/archivelist";
import { ArchiveRelease, Release } from "../components/releases/release";
import { ReleaseList } from "../components/releases/releaselist";
import { fetchArchiveReleases, fetchReleases } from "../data/releases";

export const revalidate = 180;

export default async function Releases() {
  const releases = await fetchReleases();
  const archiveReleases = await fetchArchiveReleases();
  return <div>
    <ReleaseList>
      {releases.map((release, index) =>(release.year <= new Date() && <Release key={`release-${index}`} {...release} />))}
    </ReleaseList>
    <h2 className="px-6 lg:px-2 mt-64 font-bold border-t-black border-t-2">Archive</h2>
    <ArchiveList>
      {archiveReleases.map((release, index) => <ArchiveRelease key={`archive-${index}`} {...release} />)}
    </ArchiveList>
  </div>;
}