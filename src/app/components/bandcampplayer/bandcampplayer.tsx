'use client';

import { useConsentCookie } from "@/app/hooks/useConsentCookie";

interface BandCampPlayerProps {
  embedCode?: string;
}

export function BandCampPlayer({ embedCode }: BandCampPlayerProps) {
  const { data } = useConsentCookie();
  return data === 'true' ? 
    <div className="p-2" dangerouslySetInnerHTML={{ __html: embedCode || "" }} /> :
    <div className="p-2">
      Leider können wir den Player nicht anzeigen, weil die Cookies nicht akzeptiert worden sind.
      Um den Player zu laden, lösche die Daten dieser Webseite aus dem Browser-Cache, lade die
      Seite neu und akzeptiere die Cookies.
    </div>;
}