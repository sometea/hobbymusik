"use client";

import CookieConsent from "react-cookie-consent";
import { useConsentCookie } from "../../hooks/useConsentCookie";

export function CookieBar() {
  const { mutate } = useConsentCookie();

  return <CookieConsent
    buttonText="Akzeptieren"
    declineButtonText="Ablehnen"
    onAccept={() => mutate("true")}
    onDecline={() => mutate("false")}
    contentClasses="text-sm"
    enableDeclineButton
  >
    Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren,
    Funktionen für soziale Medien anbieten zu können und die Zugriffe auf unsere Website zu analysieren.
    Außerdem geben wir Informationen zu Ihrer Verwendung unserer Website an unsere Partner für soziale Medien, Werbung und Analysen weiter.
    Unsere Partner führen diese Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt haben oder die sie im
    Rahmen Ihrer Nutzung der Dienste gesammelt haben.
  </CookieConsent>
}