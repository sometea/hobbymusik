import { cache } from "react";
import { DocumentData, QueryDocumentSnapshot, getFirestore } from "firebase-admin/firestore";
import { initAdmin } from "./firebase-admin";

export interface ReleaseProps {
  title: string;
  artist: string;
  description?: string;
  year: Date;
  cover: string;
  slug: string;
  bandcampLink?: string;
  embedCode?: string;
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

const db = getFirestore(initAdmin());

function mapRelease(doc: QueryDocumentSnapshot<DocumentData>): ReleaseProps {
  return {
    title: doc.get('title'),
    cover: doc.get('coverUrl'),
    artist: doc.get('artist'),
    year: doc.get('date').toDate(),
    slug: doc.get('slug'),
    bandcampLink: doc.get('bandcampLink'),
    embedCode: doc.get('embedCode'),
    type: doc.get('type'),
  }
}

function mapArchiveRelease(doc: QueryDocumentSnapshot<DocumentData>): ArchiveReleaseProps {
  return {
    title: doc.get('title'),
    cover: doc.get('coverUrl'),
    artist: doc.get('artist'),
    year: doc.get('date').toDate(),
    slug: doc.get('slug'),
    downloadUrl: doc.get('downloadUrl')
  }
}

export const fetchArchiveReleases: () => Promise<ArchiveReleaseProps[]> = cache(async () => {
  const releases = await db.collection('archive').orderBy('date', 'desc').get();
  return releases.docs.map(mapArchiveRelease);
});

export const fetchReleases: () => Promise<ReleaseProps[]> = cache(async () => {
  const releases = await db.collection('releases').orderBy('date', 'desc').get();
  return releases.docs.map(mapRelease);
});

export const fetchReleaseBySlug: (slug: string) => Promise<ReleaseProps> = cache(async (slug: string) => {
  const release = await db.collection('releases').where('slug', '==', slug).get();
  if (release.docs.length === 0) throw new Error('Release not found');
  return mapRelease(release.docs[0]);
});

export const fetchArchiveBySlug: (slug: string) => Promise<ArchiveReleaseProps> = cache(async (slug: string) => {
  const release = await db.collection('archive').where('slug', '==', slug).get();
  if (release.docs.length === 0) throw new Error('Archive release not found');
  return mapArchiveRelease(release.docs[0]);
});
