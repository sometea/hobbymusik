import useSWR from "swr";
import { getCookieConsentValue } from "react-cookie-consent";

export const KEY_COOKIE = 'cookie';

export function useConsentCookie() {
  return useSWR(KEY_COOKIE, () => getCookieConsentValue());
}