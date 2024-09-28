import { initializeApp } from "firebase-admin";
import { applicationDefault } from "firebase-admin/app";
import { DocumentData, QueryDocumentSnapshot, getFirestore } from "firebase-admin/firestore";
import { cache } from "react";
import { initAdmin } from "./firebase-admin";

export interface News {
  title: string;
  date: Date;
  text?: string;
}

const db = getFirestore(initAdmin());

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