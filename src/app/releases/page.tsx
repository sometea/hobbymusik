import { Release } from "../components/releases/release";
import { ReleaseList } from "../components/releases/releaselist";
import { staticReleases } from "../data/releases";

export default function Releases() {
  return <div>
    <ReleaseList>
      {staticReleases.map((release, index) => <Release key={index} {...release} />)}
    </ReleaseList>
  </div>;
}