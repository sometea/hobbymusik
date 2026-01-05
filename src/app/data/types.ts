export interface ReleaseProps {
  title: string;
  artist: string;
  description?: string;
  year: Date;
  cover: string;
  slug: string;
  bandcampLink?: string;
  artistLink?: string;
  spotifyLink?: string;
  releaseNumber?: number;
  embedCode?: string;
  copyright?: string;
  notes?: string;
  type?: 'album' | 'single' | 'ep';
}

export interface ArchiveReleaseProps {
  title: string;
  artist: string;
  year: Date;
  cover: string;
  slug: string;
  downloadUrl?: string;
}
