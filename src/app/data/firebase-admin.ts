import { apps } from "firebase-admin";
import { applicationDefault, initializeApp } from "firebase-admin/app";

export function initAdmin() {
    if (apps.length > 0 && apps[0]) {
        return apps[0];
    }
    return initializeApp({
        credential: applicationDefault(),
        projectId: 'hobbymusik-42231',
    });
}