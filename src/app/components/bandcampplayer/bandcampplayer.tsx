'use client';

import { useConsentCookie } from "@/app/hooks/useConsentCookie";

interface BandCampPlayerProps {
  embedCode?: string;
}

export function BandCampPlayer({ embedCode }: BandCampPlayerProps) {
  const { data } = useConsentCookie();
  return data === 'true' && <div className="p-2" dangerouslySetInnerHTML={{ __html: embedCode || "" }} />;
}