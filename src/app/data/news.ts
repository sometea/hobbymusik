import { DocumentData, QueryDocumentSnapshot, getFirestore } from "firebase-admin/firestore";
import { cache } from "react";

export interface News {
  title: string;
  date: Date;
  text?: string;
}

const db = getFirestore();

function mapNews(doc: QueryDocumentSnapshot<DocumentData>): News {
  return {
    title: doc.get('title'),
    text: doc.get('text'),
    date: doc.get('date').toDate(),
  }
}

export const fetchNews: () => Promise<News[]> = cache(async () => {
  const news = await db.collection('news').orderBy('date', 'desc').get();
  return news.docs.map(mapNews);
});