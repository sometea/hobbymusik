export interface ReleaseProps {
  title: string;
  artist: string;
  description?: string;
  year: Date;
  cover: string;
  slug: string;
  bandcampLink?: string;
  embedCode?: string;
}

export const staticReleases: ReleaseProps[] = [
  {
    title: "Wir haben keine Aussage wir wollen bloß dass die Leute eine gute Zeit haben damit sie sich am nächsten Tag wieder global agierenden Konzernen dienstbar machen können",
    artist: "Ofelia & Uzrukki",
    year: new Date(2006, 0, 1),
    cover: "/images/oucover.jpg",
    slug: "ofelia-uzrukki",
    bandcampLink: "https://firstsnowoftheyear.bandcamp.com/track/kyoto-2",
    embedCode: "<iframe style=\"border: 0; width: 350px; height: 442px\" src=\"https://bandcamp.com/EmbeddedPlayer/track=1156693567/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/\" seamless><a href=\"https://firstsnowoftheyear.bandcamp.com/track/kyoto-2\">Kyoto by First Snow of The Year</a></iframe>",
  },
  {
    title: "Ich hab die größte Vulva der Welt",
    artist: "Zorro Zensur",
    year: new Date(2006, 0, 1),
    cover: "/images/zorrocover.jpg",
    slug: "zorro-zensur",
    bandcampLink: "https://firstsnowoftheyear.bandcamp.com/track/kyoto-2",
    embedCode: "<iframe style=\"border: 0; width: 350px; height: 442px\" src=\"https://bandcamp.com/EmbeddedPlayer/track=1156693567/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/\" seamless><a href=\"https://firstsnowoftheyear.bandcamp.com/track/kyoto-2\">Kyoto by First Snow of The Year</a></iframe>",
  },
  {
    title: "Me And The Milkman",
    artist: "Me And The Milkman",
    year: new Date(2007, 0, 1),
    cover: "/images/mmcover.png",
    slug: "me-and-the-milkman",
    bandcampLink: "https://firstsnowoftheyear.bandcamp.com/track/kyoto-2",
    embedCode: "<iframe style=\"border: 0; width: 350px; height: 442px\" src=\"https://bandcamp.com/EmbeddedPlayer/track=1156693567/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/\" seamless><a href=\"https://firstsnowoftheyear.bandcamp.com/track/kyoto-2\">Kyoto by First Snow of The Year</a></iframe>",
  },
  {
    title: "EP",
    artist: "Beam Time",
    year: new Date(2022, 0, 1),
    cover: "/images/beamtimecover.jpg",
    slug: "beam-time",
    bandcampLink: "https://firstsnowoftheyear.bandcamp.com/track/kyoto-2",
    embedCode: "<iframe style=\"border: 0; width: 350px; height: 442px\" src=\"https://bandcamp.com/EmbeddedPlayer/track=1156693567/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/\" seamless><a href=\"https://firstsnowoftheyear.bandcamp.com/track/kyoto-2\">Kyoto by First Snow of The Year</a></iframe>",
  },
];