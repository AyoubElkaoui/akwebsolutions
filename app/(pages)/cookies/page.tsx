import type { Metadata } from "next";
import { CookiesContent } from "./content";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Lees ons cookiebeleid. Hoe AK Web Solutions cookies gebruikt op onze website voor een betere gebruikerservaring.",
  alternates: {
    canonical: "https://akwebsolutions.nl/cookies",
  },
  openGraph: {
    title: "Cookie Policy | AK Web Solutions",
    description:
      "Lees ons cookiebeleid. Hoe AK Web Solutions cookies gebruikt op onze website.",
    url: "https://akwebsolutions.nl/cookies",
  },
};

export default function CookiesPage() {
  return <CookiesContent />;
}
