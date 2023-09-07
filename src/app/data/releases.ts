export interface ReleaseProps {
  title: string;
  artist: string;
  description?: string;
  year: Date;
  cover: string;
  slug: string;
}

export const staticReleases: ReleaseProps[] = [
  { 
    title: "Wir haben keine Aussage wir wollen bloß dass die Leute eine gute Zeit haben damit sie sich am nächsten Tag wieder global agierenden Konzernen dienstbar machen können",
    artist: "Ofelia & Uzrukki", 
    year: new Date(2006, 0, 1), 
    cover: "/images/oucover.jpg", 
    slug: "ofelia-uzrukki" },
  { title: "Ich hab die größte Vulva der Welt", artist: "Zorro Zensur", year: new Date(2006, 0, 1), cover: "/images/zorrocover.jpg", slug: "zorro-zensur" },
  { title: "Me And The Milkman", artist: "Me And The Milkman", year: new Date(2007, 0, 1), cover: "/images/mmcover.png", slug: "me-and-the-milkman" },
  { title: "EP", artist: "Beam Time", year: new Date(2022, 0, 1), cover: "/images/beamtimecover.jpg", slug: "beam-time" },
];