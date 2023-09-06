import { Release } from "../components/releases/release";
import { ReleaseList } from "../components/releases/releaselist";

export default function Releases() {
  return <div className="p-16">
    <ReleaseList>
      <Release title="Wir haben keine Aussage" artist="Ofelia & Uzrukki" year={new Date(2021, 0, 1)} cover="/images/oucover.jpg" />
      <Release title="Ich hab die größte Vulva der Welt" artist="Zorro Zensur" year={new Date(2021, 0, 1)} cover="/images/zorrocover.jpg" />
      <Release title="Me And The Milkman" artist="Me And The Milkman" year={new Date(2021, 0, 1)} cover="/images/mmcover.png" />
    </ReleaseList>
  </div>;
}