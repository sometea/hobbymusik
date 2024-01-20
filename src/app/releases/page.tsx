import { Release } from "../components/releases/release";
import { ReleaseList } from "../components/releases/releaselist";
import { fetchReleases } from "../data/releases";

export const revalidate = 180;

export default async function Releases() {
  const releases = await fetchReleases();
  return <div>
    <ReleaseList>
      {releases.map((release, index) => <Release key={index} {...release} />)}
    </ReleaseList>
  </div>;
}