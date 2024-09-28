import { ArchiveRelease, Release } from "../components/releases/release";
import { ReleaseList } from "../components/releases/releaselist";
import { fetchArchiveReleases, fetchReleases } from "../data/releases";

export const revalidate = 180;

export default async function Releases() {
  const releases = await fetchReleases();
  const archiveReleases = await fetchArchiveReleases();
  return <div>
    <ReleaseList>
      {releases.map((release, index) => <Release key={`release-${index}`} {...release} />)}
    </ReleaseList>
    <h2 className="mb-12 mt-48">Archive</h2>
    <ReleaseList>
      {archiveReleases.map((release, index) => <ArchiveRelease key={`archive-${index}`} {...release} />)}
    </ReleaseList>
  </div>;
}